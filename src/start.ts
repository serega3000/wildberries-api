import 'dotenv/config';
import { supplies } from './.generated/api';

const token = process.env.WB_TOKEN;

if(typeof token !== 'string') {
  console.error(`Переменная окружения WB_TOKEN не установлена`);
  process.exit(1);
}

const api = new supplies.Api({
  baseApiParams: {
    headers: {
      'Authorization': token
    },
  },
  baseUrl: 'https://supplies-api.wildberries.ru'
});

const run = async() => {
  const result = await api.api.v1WarehousesList();
  console.log(result.data);
  console.log('done');
  process.exit(1);
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});

