# WBAPI

Typescript API для Wildberries, сгенерированное из Swagger. Без внешних зависимостей.

Установка

```bash
npm install wildberries-api
```

Пример использования:

```typescript
import { supplies } from 'wildberries-api';

const api = new supplies.Api({
  baseApiParams: {
    headers: {
      'Authorization': process.env.WB_TOKEN
    },
  },
  baseUrl: 'https://supplies-api.wildberries.ru'
});

const main = async() => {
  const result = await api.api.v1WarehousesList();
  console.log(result.data);
  process.exit();
};

main();
```