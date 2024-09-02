const path = require('path');
const fs = require('fs');
const { generateApi, generateTemplates  } = require('swagger-typescript-api');

const run = async () => {
  const httpResult = await fetch('https://openapi.wildberries.ru/homepage/homepage.json');
  const contents = await httpResult.json();
  /**
   * @var {Array<{name: string, url: string}>}
   */
  const allSwaggerItems = [];
  for(const chapter of contents.chapters) {
    for(const topic of chapter.topics) {
      if(topic.id !== 'swagger/api') continue;
      allSwaggerItems.push({
        name: chapter.id,
        url: `https://openapi.wildberries.ru/${chapter.id}/swagger/api/ru/swagger.yaml`
      })
    }
  }
  const indexImports = [];
  const indexExports = [];
  for(const swItem of allSwaggerItems) {
    indexImports.push(`import * as ${makeCase(swItem.name)} from './${swItem.name}';`);
    indexExports.push(makeCase(swItem.name));
    console.log(`Generating for ${swItem.name}`);
    const itemHttpResult = await fetch(swItem.url);
    let itemContents = await itemHttpResult.text();
    itemContents = itemContents.replace(/\*\//g,'* /');
    let lastIndex = 0;
    while(true) {
      const regex = /\/v[0-9]\/.*\n[ ]+servers:/g;
      const regex2 = /[ ]+(get|post|put|delete|patch):/g;
      regex.lastIndex = lastIndex;
      let res = regex.exec(itemContents);
      if(!res) break;
      const indexServers = res.index;
      if(indexServers === -1) break;
      regex2.lastIndex = indexServers;
      const res2 = regex2.exec(itemContents);
      if(!res2) break;
      const indexApi = res2.index;
      const indexNewLine = itemContents.indexOf('\n', indexServers);
      itemContents = itemContents.slice(0, indexNewLine + 1).concat(itemContents.slice(indexApi));
      lastIndex = indexApi;
    }
    fs.writeFileSync('/tmp/swagger.yaml', itemContents);
    await generateApi({
      name: `${swItem.name}.ts`,
      // set to `false` to prevent the tool from writing to disk
      output: path.resolve(process.cwd(), `./src/.generated/api`),
      input: "/tmp/swagger.yaml",
      hooks: {
        onCreateRoute: (route) => {
          if(route.routeName.original === 'serversContent') return false;
          if(route.routeName.original === 'serversApi') return false;
        },
      },
      generateClient: true,
      silent: true,
      extractingOptions: {
        requestBodySuffix: ['asd'],
        requestParamsSuffix: ['hello, world'],
      }
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
  }
  const indexPath = path.resolve(process.cwd(), `./src/.generated/api/index.ts`);
  indexImports.push(`export{ ${indexExports.join(', ')}}`);
  fs.writeFileSync(indexPath, indexImports.join('\n'));
  console.log('Done');
  process.exit(0);
};

/**
 * 
 * @param {string} str 
 */
const makeCase = (str) => {
  const arr = str.split('-');
  for(let i = 1; i < arr.length; i++) {
    arr[i] = `${arr[i].slice(0, 1).toLocaleUpperCase()}${arr[i].slice(1)}`;
  }
  return arr.join('');
}

run();