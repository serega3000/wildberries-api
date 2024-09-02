/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DetailReportItem {
  /**
   * Номер отчёта
   * @example 1234567
   */
  realizationreport_id?: number;
  /**
   * Дата начала отчётного периода
   * @format date
   * @example "2022-10-17"
   */
  date_from?: string;
  /**
   * Дата конца отчётного периода
   * @format date
   * @example "2022-10-23"
   */
  date_to?: string;
  /**
   * Дата формирования отчёта
   * @format date
   * @example "2022-10-24"
   */
  create_dt?: string;
  /**
   * Валюта отчёта
   * @example "руб"
   */
  currency_name?: string;
  /**
   * Договор
   * @example null
   */
  suppliercontract_code?: object;
  /**
   * Номер строки
   * @example 1232610467
   */
  rrd_id?: number;
  /**
   * Номер поставки
   * @example 123456
   */
  gi_id?: number;
  /**
   * Предмет
   * @example "Мини-печи"
   */
  subject_name?: string;
  /**
   * Артикул WB
   * @example 1234567
   */
  nm_id?: number;
  /**
   * Бренд
   * @example "BlahBlah"
   */
  brand_name?: string;
  /**
   * Артикул продавца
   * @example "MAB123"
   */
  sa_name?: string;
  /**
   * Размер
   * @example "0"
   */
  ts_name?: string;
  /**
   * Баркод
   * @example "1231312352310"
   */
  barcode?: string;
  /**
   * Тип документа
   * @example "Продажа"
   */
  doc_type_name?: string;
  /**
   * Количество
   * @example 1
   */
  quantity?: number;
  /**
   * Цена розничная
   * @example 1249
   */
  retail_price?: number;
  /**
   * Сумма продаж (возвратов)
   * @example 367
   */
  retail_amount?: number;
  /**
   * Согласованная скидка
   * @example 68
   */
  sale_percent?: number;
  /**
   * Процент комиссии
   * @example 0.1324
   */
  commission_percent?: number;
  /**
   * Склад
   * @example "Коледино"
   */
  office_name?: string;
  /**
   * Обоснование для оплаты
   * @example "Продажа"
   */
  supplier_oper_name?: string;
  /**
   * Дата заказа. <br>Присылается с явным указанием часового пояса
   * @format date-time
   * @example "2022-10-13T00:00:00Z"
   */
  order_dt?: string;
  /**
   * Дата продажи. <br>Присылается с явным указанием часового пояса
   * @format date-time
   * @example "2022-10-20T00:00:00Z"
   */
  sale_dt?: string;
  /**
   * Дата операции. <br> Присылается с явным указанием часового пояса
   * @format date
   * @example "2022-10-20"
   */
  rr_dt?: string;
  /**
   * Штрих-код
   * @example 1239159661
   */
  shk_id?: number;
  /**
   * Цена розничная с учетом согласованной скидки
   * @example 399.68
   */
  retail_price_withdisc_rub?: number;
  /**
   * Количество доставок
   * @example 0
   */
  delivery_amount?: number;
  /**
   * Количество возвратов
   * @example 0
   */
  return_amount?: number;
  /**
   * Стоимость логистики
   * @example 0
   */
  delivery_rub?: number;
  /**
   * Тип коробов
   * @example "Монопаллета"
   */
  gi_box_type_name?: string;
  /**
   * Согласованный продуктовый дисконт
   * @example 399.68
   */
  product_discount_for_report?: number;
  /**
   * Промокод
   * @example 0
   */
  supplier_promo?: number;
  /**
   * Уникальный идентификатор заказа
   * @example 123722249253
   */
  rid?: number;
  /**
   * Скидка постоянного покупателя
   * @example 0.1581
   */
  ppvz_spp_prc?: number;
  /**
   * Размер кВВ без НДС, % базовый
   * @example 0.15
   */
  ppvz_kvw_prc_base?: number;
  /**
   * Итоговый кВВ без НДС, %
   * @example -0.0081
   */
  ppvz_kvw_prc?: number;
  /** Размер снижения кВВ из-за рейтинга */
  sup_rating_prc_up?: number;
  /** Размер снижения кВВ из-за акции */
  is_kgvp_v2?: number;
  /**
   * Вознаграждение с продаж до вычета услуг поверенного, без НДС
   * @example -3.74
   */
  ppvz_sales_commission?: number;
  /**
   * К перечислению продавцу за реализованный товар
   * @example 376.99
   */
  ppvz_for_pay?: number;
  /**
   * Возмещение за выдачу и возврат товаров на ПВЗ
   * @example 0
   */
  ppvz_reward?: number;
  /**
   * Возмещение издержек по эквайрингу. <br> Издержки WB за услуги эквайринга: вычитаются из вознаграждения WB и не влияют на доход продавца.
   * @example 14.89
   */
  acquiring_fee?: number;
  /**
   * Размер комиссии за эквайринг без НДС, %
   * @example 4.06
   */
  acquiring_percent?: number;
  /**
   * Наименование банка-эквайера
   * @example "Тинькофф"
   */
  acquiring_bank?: string;
  /**
   * Вознаграждение WB без НДС
   * @example -3.74
   */
  ppvz_vw?: number;
  /**
   * НДС с вознаграждения WB
   * @example -0.75
   */
  ppvz_vw_nds?: number;
  /**
   * Номер офиса
   * @example 105383
   */
  ppvz_office_id?: number;
  /**
   * Наименование офиса доставки
   * @example "Пункт самовывоза (ПВЗ)"
   */
  ppvz_office_name?: string;
  /**
   * Номер партнера
   * @example 186465
   */
  ppvz_supplier_id?: number;
  /**
   * Партнер
   * @example "ИП Жасмин"
   */
  ppvz_supplier_name?: string;
  /**
   * ИНН партнера
   * @example "010101010101"
   */
  ppvz_inn?: string;
  /**
   * Номер таможенной декларации
   * @example ""
   */
  declaration_number?: string;
  /**
   * Обоснование штрафов и доплат. <br>Поле будет в ответе при наличии значения
   * @example "Штраф МП. Невыполненный заказ (отмена клиентом после недовоза)"
   */
  bonus_type_name?: string;
  /**
   * Цифровое значение стикера, который клеится на товар в процессе сборки заказа по схеме "Маркетплейс"
   * @example "1964038895"
   */
  sticker_id?: string;
  /**
   * Страна продажи
   * @example "RU"
   */
  site_country?: string;
  /**
   * Штрафы
   * @example 231.35
   */
  penalty?: number;
  /**
   * Доплаты
   * @example 0
   */
  additional_payment?: number;
  /**
   * Возмещение издержек по перевозке. Поле будет в ответе при наличии значения
   * @example 1.349
   */
  rebill_logistic_cost?: number;
  /**
   * Организатор перевозки. Поле будет в ответе при наличии значения
   * @example "ИП Иванов Иван Иванович(123456789012)"
   */
  rebill_logistic_org?: string;
  /**
   * Код маркировки. <br> Поле будет в ответе при наличии значения
   * @example "0102900000376311210G2CIS?ehge)S91002A92F9Qof4FDo/31Icm14kmtuVYQzLypxm3HWkC1vQ/+pVVjm1dNAth1laFMoAGn7yEMWlTjxIe7lQnJqZ7TRZhlHQ=="
   */
  kiz?: string;
  /**
   * Стоимость хранения
   * @example 12647.29
   */
  storage_fee?: number;
  /**
   * Прочие удержания/выплаты
   * @example 6354
   */
  deduction?: number;
  /**
   * Стоимость платной приёмки
   * @example 865
   */
  acceptance?: number;
  /**
   * Уникальный идентификатор заказа.
   *
   * Примечание для использующих API Marketplace: `srid` равен `rid` в ответах методов сборочных заданий.
   * @example "0f1c3999172603062979867564654dac5b702849"
   */
  srid?: string;
  /**
   * Тип отчёта:
   *
   *   * `1` — стандартный
   *   * `2` — для уведомления о выкупе
   * @example 1
   */
  report_type?: number;
}

export interface IncomesItem {
  /** Номер поставки */
  incomeId?: number;
  /**
   * Номер УПД
   * @maxLength 40
   */
  number?: string;
  /**
   * Дата поступления. Если часовой пояс не указан, то берется Московское время UTC+3.
   * @format date
   */
  date?: string;
  /**
   * Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе. Если часовой пояс не указан, то берется Московское время UTC+3.
   * @format date-time
   */
  lastChangeDate?: string;
  /**
   * Артикул продавца
   * @maxLength 75
   */
  supplierArticle?: string;
  /**
   * Размер товара (пример S, M, L, XL, 42, 42-43)
   * @maxLength 30
   */
  techSize?: string;
  /**
   * Бар-код
   * @maxLength 30
   */
  barcode?: string;
  /** Количество */
  quantity?: number;
  /** Цена из УПД */
  totalPrice?: number;
  /**
   * Дата принятия (закрытия) в WB. Если часовой пояс не указан, то берется Московское время UTC+3
   * @format date
   */
  dateClose?: string;
  /**
   * Название склада
   * @maxLength 50
   */
  warehouseName?: string;
  /** Артикул WB */
  nmId?: number;
  /**
   * Текущий статус поставки
   * @maxLength 50
   */
  status?: "Принято";
}

export interface StocksItem {
  /**
   * Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе. Если часовой пояс не указан, то берется Московское время (UTC+3)
   * @format date-time
   */
  lastChangeDate?: string;
  /**
   * Название склада
   * @maxLength 50
   */
  warehouseName?: string;
  /**
   * Артикул продавца
   * @maxLength 75
   */
  supplierArticle?: string;
  /** Артикул WB */
  nmId?: number;
  /**
   * Баркод
   * @maxLength 30
   */
  barcode?: string;
  /** Количество, доступное для продажи (сколько можно добавить в корзину) */
  quantity?: number;
  /** В пути к клиенту */
  inWayToClient?: number;
  /** В пути от клиента */
  inWayFromClient?: number;
  /** Полное (непроданное) количество, которое числится за складом (= `quantity` + в пути) */
  quantityFull?: number;
  /**
   * Категория
   * @maxLength 50
   */
  category?: string;
  /**
   * Предмет
   * @maxLength 50
   */
  subject?: string;
  /**
   * Бренд
   * @maxLength 50
   */
  brand?: string;
  /**
   * Размер
   * @maxLength 30
   */
  techSize?: string;
  /** Цена */
  Price?: number;
  /** Скидка */
  Discount?: number;
  /** Договор поставки (внутренние технологические данные) */
  isSupply?: boolean;
  /** Договор реализации (внутренние технологические данные) */
  isRealization?: boolean;
  /**
   * Код контракта (внутренние технологические данные)
   * @maxLength 50
   */
  SCCode?: string;
}

export interface OrdersItem {
  /**
   * Дата и время заказа. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=1. Если часовой пояс не указан, то берется Московское время (UTC+3).
   * @format date-time
   */
  date?: string;
  /**
   * Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=0 или не указан. Если часовой пояс не указан, то берется Московское время (UTC+3).
   * @format date-time
   */
  lastChangeDate?: string;
  /**
   * Склад отгрузки
   * @maxLength 50
   */
  warehouseName?: string;
  /**
   * Страна
   * @maxLength 200
   */
  countryName?: string;
  /**
   * Округ
   * @maxLength 200
   */
  oblastOkrugName?: string;
  /**
   * Регион
   * @maxLength 200
   */
  regionName?: string;
  /**
   * Артикул продавца
   * @maxLength 75
   */
  supplierArticle?: string;
  /** Артикул WB */
  nmId?: number;
  /**
   * Баркод
   * @maxLength 30
   */
  barcode?: string;
  /**
   * Категория
   * @maxLength 50
   */
  category?: string;
  /**
   * Предмет
   * @maxLength 50
   */
  subject?: string;
  /**
   * Бренд
   * @maxLength 50
   */
  brand?: string;
  /**
   * Размер товара
   * @maxLength 30
   */
  techSize?: string;
  /** Номер поставки */
  incomeID?: number;
  /** Договор поставки */
  isSupply?: boolean;
  /** Договор реализации */
  isRealization?: boolean;
  /** Цена без скидок */
  totalPrice?: number;
  /** Скидка продавца */
  discountPercent?: number;
  /** Скидка WB */
  spp?: number;
  /** Цена с учетом всех скидок, кроме суммы по WB Кошельку */
  finishedPrice?: number;
  /** Цена со скидкой продавца (= `totalPrice` * (1 - `discountPercent`/100)) */
  priceWithDisc?: number;
  /** Отмена заказа. true - заказ отменен */
  isCancel?: boolean;
  /**
   * Дата и время отмены заказа. Если заказ не был отменен, то "0001-01-01T00:00:00".Если часовой пояс не указан, то берется Московское время UTC+3.
   * @format date-time
   */
  cancelDate?: string;
  /**
   * Тип заказа:
   * - `Клиентский` — заказ, поступивший от покупателя
   * - `Возврат Брака` — возврат товара продавцу
   * - `Принудительный возврат` — возврат товара продавцу
   * - `Возврат обезлички` — возврат товара продавцу
   * - `Возврат Неверного Вложения` — возврат товара продавцу
   * - `Возврат Продавца` — возврат товара продавцу
   * - `Возврат из Отзыва` — возврат товара продавцу
   * - `АвтоВозврат МП` — возврат товара продавцу
   * - `Недокомплект (Вина продавца)` — возврат товара продавцу
   * - `Возврат КГТ` — возврат товара продавцу
   */
  orderType?: string;
  /** Идентификатор стикера */
  sticker?: string;
  /**
   * Номер заказа
   * @maxLength 50
   */
  gNumber?: string;
  /** Уникальный идентификатор заказа.<br> Примечание для использующих API Маркетплейс: `srid` равен `rid` в ответах методов сборочных заданий. */
  srid?: string;
}

export interface SalesItem {
  /**
   * Дата и время продажи. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=1. Если часовой пояс не указан, то берется Московское время (UTC+3).
   * @format date-time
   */
  date?: string;
  /**
   * Дата и время обновления информации в сервисе. Это поле соответствует параметру `dateFrom` в запросе, если параметр `flag`=0 или не указан. Если часовой пояс не указан, то берется Московское время (UTC+3).
   * @format date-time
   */
  lastChangeDate?: string;
  /**
   * Склад отгрузки
   * @maxLength 50
   */
  warehouseName?: string;
  /**
   * Страна
   * @maxLength 200
   */
  countryName?: string;
  /**
   * Округ
   * @maxLength 200
   */
  oblastOkrugName?: string;
  /**
   * Регион
   * @maxLength 200
   */
  regionName?: string;
  /**
   * Артикул продавца
   * @maxLength 75
   */
  supplierArticle?: string;
  /** Артикул WB */
  nmId?: number;
  /**
   * Баркод
   * @maxLength 30
   */
  barcode?: string;
  /**
   * Категория
   * @maxLength 50
   */
  category?: string;
  /**
   * Предмет
   * @maxLength 50
   */
  subject?: string;
  /**
   * Бренд
   * @maxLength 50
   */
  brand?: string;
  /**
   * Размер товара
   * @maxLength 30
   */
  techSize?: string;
  /** Номер поставки */
  incomeID?: number;
  /** Договор поставки */
  isSupply?: boolean;
  /** Договор реализации */
  isRealization?: boolean;
  /** Цена без скидок */
  totalPrice?: number;
  /** Скидка продавца */
  discountPercent?: number;
  /** Скидка WB */
  spp?: number;
  /** Оплачено с WB Кошелька */
  paymentSaleAmount?: number;
  /** К перечислению продавцу */
  forPay?: number;
  /** Фактическая цена с учетом всех скидок (к взиманию с покупателя) */
  finishedPrice?: number;
  /** Цена со скидкой продавца, от которой считается сумма к перечислению продавцу `forPay` (= `totalPrice` * (1 - `discountPercent`/100)) */
  priceWithDisc?: number;
  /**
   * Уникальный идентификатор продажи/возврата <ul>  <li> `S**********` — продажа  <li> `R**********` — возврат (на склад WB)  </ul>
   * @maxLength 15
   */
  saleID?: string;
  /**
   * Тип заказа:
   * - `Клиентский` — заказ, поступивший от покупателя
   * - `Возврат Брака` — возврат товара продавцу
   * - `Принудительный возврат` — возврат товара продавцу
   * - `Возврат обезлички` — возврат товара продавцу
   * - `Возврат Неверного Вложения` — возврат товара продавцу
   * - `Возврат Продавца` — возврат товара продавцу
   * - `Возврат из Отзыва` — возврат товара продавцу
   * - `АвтоВозврат МП` — возврат товара продавцу
   * - `Недокомплект (Вина продавца)` — возврат товара продавцу
   * - `Возврат КГТ` — возврат товара продавцу
   */
  orderType?: string;
  /** Идентификатор стикера */
  sticker?: string;
  /**
   * Номер заказа
   * @maxLength 50
   */
  gNumber?: string;
  /** Уникальный идентификатор заказа.<br> Примечание для использующих API Маркетплейс: `srid` равен `rid` в ответах методов сборочных заданий. */
  srid?: string;
}

export interface ResponseErrorStatistics {
  errors?: string[];
}

export interface Response429 {
  code?: number;
  message?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Описание API Статистики
 *
 * С помощью этих методов можно получить отчёты.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Поставки. Максимум 1 запрос в минуту
     *
     * @tags Статистика
     * @name V1SupplierIncomesList
     * @summary Поставки
     * @request GET:/api/v1/supplier/incomes
     * @secure
     */
    v1SupplierIncomesList: (
      query: {
        /**
         * Дата и время последнего изменения по поставке. <br> Дата в формате RFC3339. Можно передать дату или дату со временем.  Время можно указывать с точностью до секунд или миллисекунд. <br> Время передаётся в часовом поясе Мск (UTC+3). <br>Примеры: <ul> <li> `2019-06-20` <li> `2019-06-20T23:59:59` <li> `2019-06-20T00:00:00.12345` <li> `2017-03-25T00:00:00` </ul>
         * @format RFC3339
         */
        dateFrom: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<IncomesItem[], void>({
        path: `/api/v1/supplier/incomes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Остатки товаров на складах WB. Данные обновляются раз в 30 минут. <br> Сервис статистики не хранит историю остатков товаров, поэтому получить данные о них можно только в режиме "на текущий момент".<br> Максимум 1 запрос в минуту
     *
     * @tags Статистика
     * @name V1SupplierStocksList
     * @summary Склад
     * @request GET:/api/v1/supplier/stocks
     * @secure
     */
    v1SupplierStocksList: (
      query: {
        /**
         * Дата и время последнего изменения по товару. <br> Для получения полного остатка следует указывать максимально раннее значение. <br> Например, `2019-06-20` <br> Дата в формате RFC3339. Можно передать дату или дату со временем.  Время можно указывать с точностью до секунд или миллисекунд. <br> Время передаётся в часовом поясе Мск (UTC+3). <br>Примеры: <ul> <li> `2019-06-20` <li> `2019-06-20T23:59:59` <li> `2019-06-20T00:00:00.12345` <li> `2017-03-25T00:00:00` </ul>
         * @format RFC3339
         */
        dateFrom: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<StocksItem[], void>({
        path: `/api/v1/supplier/stocks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Заказы. <br> Гарантируется хранение данных не более 90 дней от даты заказа. <br> Данные обновляются раз в 30 минут. <br> Для идентификации заказа следует использовать поле `srid`. <br> 1 строка = 1 заказ = 1 единица товара. <br> Максимум 1 запрос в минуту
     *
     * @tags Статистика
     * @name V1SupplierOrdersList
     * @summary Заказы
     * @request GET:/api/v1/supplier/orders
     * @secure
     */
    v1SupplierOrdersList: (
      query: {
        /**
         * Дата и время последнего изменения по заказу. <br> Дата в формате RFC3339. Можно передать дату или дату со временем.  Время можно указывать с точностью до секунд или миллисекунд. <br> Время передаётся в часовом поясе Мск (UTC+3). <br>Примеры: <ul> <li> `2019-06-20` <li> `2019-06-20T23:59:59` <li> `2019-06-20T00:00:00.12345` <li> `2017-03-25T00:00:00` </ul>
         * @format RFC3339
         */
        dateFrom: string;
        /**
         * Если параметр `flag=0` (или не указан в строке запроса), при вызове API возвращаются данные,  у которых значение поля `lastChangeDate` (дата время обновления информации в сервисе) больше или равно переданному  значению параметра `dateFrom`.  При этом количество возвращенных строк данных варьируется в интервале от 0 до примерно 100 000. <br> Если параметр `flag=1`, то будет выгружена информация обо всех заказах или продажах с датой,  равной переданному параметру `dateFrom` (в данном случае время в дате значения не имеет).  При этом количество возвращенных строк данных будет равно количеству всех заказов или продаж,  сделанных в указанную дату, переданную в параметре `dateFrom`.
         * @default 0
         */
        flag?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrdersItem[], ResponseErrorStatistics | void>({
        path: `/api/v1/supplier/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Продажи и возвраты. <br> Гарантируется хранение данных не более 90 дней от даты продажи. <br> Данные обновляются раз в 30 минут. <br> Для идентификации заказа следует использовать поле `srid`. <br> 1 строка = 1 продажа/возврат = 1 единица товара.  <br> Максимум 1 запрос в минуту
     *
     * @tags Статистика
     * @name V1SupplierSalesList
     * @summary Продажи
     * @request GET:/api/v1/supplier/sales
     * @secure
     */
    v1SupplierSalesList: (
      query: {
        /**
         * Дата и время последнего изменения по продаже/возврату. <br> Дата в формате RFC3339. Можно передать дату или дату со временем.  Время можно указывать с точностью до секунд или миллисекунд. <br> Время передаётся в часовом поясе Мск (UTC+3). <br>Примеры: <ul> <li> `2019-06-20` <li> `2019-06-20T23:59:59` <li> `2019-06-20T00:00:00.12345` <li> `2017-03-25T00:00:00` </ul>
         * @format RFC3339
         */
        dateFrom: string;
        /**
         * Если параметр `flag=0` (или не указан в строке запроса), при вызове API возвращаются данные,  у которых значение поля `lastChangeDate` (дата время обновления информации в сервисе) больше или равно переданному  значению параметра `dateFrom`.  При этом количество возвращенных строк данных варьируется в интервале от 0 до примерно 100 000. <br> Если параметр `flag=1`, то будет выгружена информация обо всех заказах или продажах с датой,  равной переданному параметру `dateFrom` (в данном случае время в дате значения не имеет).  При этом количество возвращенных строк данных будет равно количеству всех заказов или продаж,  сделанных в указанную дату, переданную в параметре `dateFrom`.
         * @default 0
         */
        flag?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SalesItem[], ResponseErrorStatistics | void>({
        path: `/api/v1/supplier/sales`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Детализация к еженедельному отчёту реализации. Доступны данные, начиная с 29 января 2024 года. Максимум 1 запрос в минуту. Если нет данных за указанный период, метод вернет `[]`. <a href="../../excel_save/ru/index.html">Инструкция: Сохранение статистики в Excel</a>
     *
     * @tags Статистика
     * @name V5SupplierReportDetailByPeriodList
     * @summary Отчет о продажах по реализации
     * @request GET:/api/v5/supplier/reportDetailByPeriod
     * @secure
     */
    v5SupplierReportDetailByPeriodList: (
      query: {
        /**
         * Начальная дата отчета.<br> Дата в формате RFC3339. Можно передать дату или дату со временем.  Время можно указывать с точностью до секунд или миллисекунд. <br> Время передаётся в часовом поясе Мск (UTC+3). <br>Примеры: <ul> <li> `2019-06-20` <li> `2019-06-20T23:59:59` <li> `2019-06-20T00:00:00.12345` <li> `2017-03-25T00:00:00` </ul>
         * @format RFC3339
         */
        dateFrom: string;
        /**
         * Максимальное количество строк отчета, возвращаемых методом. Не может быть более 100000.
         * @default 100000
         */
        limit?: number;
        /**
         * Конечная дата отчета
         * @format date
         */
        dateTo: string;
        /**
         * Уникальный идентификатор строки отчета. Необходим для получения отчета частями.
         * <br>
         * Загрузку отчета нужно начинать с `rrdid = 0` и при последующих вызовах API передавать в запросе значение `rrd_id` из последней строки, полученной в результате предыдущего вызова.
         * <br>
         * Таким образом для загрузки одного отчета может понадобиться вызывать API до тех пор, пока количество возвращаемых строк не станет равным нулю.
         */
        rrdid?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DetailReportItem[], void>({
        path: `/api/v5/supplier/reportDetailByPeriod`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
