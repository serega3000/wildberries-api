# Wildberries API client

Typescript API для Wildberries, сгенерированное из Swagger. Без внешних зависимостей.

Установка

```bash
npm install wildberries-api
```

Пример использования:

```typescript
import { Api } from 'wildberries-api';

const api = new Api(process.env.WB_TOKEN);

const main = async() => {
  const result = await api.supplies.api.v1WarehousesList();
  console.log(result.data);
  process.exit();
};

main();
```