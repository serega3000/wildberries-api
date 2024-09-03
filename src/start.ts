import 'dotenv/config';
import { Api } from './.generated/Api';

const token = process.env.WB_TOKEN;

if(typeof token !== 'string') {
  console.error(`Переменная окружения WB_TOKEN не установлена`);
  process.exit(1);
}

const api = new Api(token);

const run = async() => {
  const result = await api.supplies.v1WarehousesList();
  console.log(result.data);
  console.log('done');
  process.exit(1);
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});

