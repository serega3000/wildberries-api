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

export interface Error {
  /** Код ошибки */
  code?: string;
  /** Описание ошибки */
  message?: string;
  /** Дополнительные данные, обогощающие ошибку */
  data?: object | null;
}

export interface CrossborderTurkeyClientInfo {
  /**
   * Имя клиента
   * @example "Иван"
   */
  firstName?: string;
  /**
   * Фамилия, Имя, Отчество
   * @example "Андреев Иван Васильевич"
   */
  fullName?: string;
  /**
   * Фамилия клиента
   * @example "Андреев"
   */
  lastName?: string;
  /**
   * Отчество клиента
   * @example "Васильевич"
   */
  middleName?: string;
  /**
   * Номер заказа
   * @example 134567
   */
  orderID?: number;
  /**
   * Телефон для связи с клиентом
   * @example 79871234567
   */
  phone?: string;
  /**
   * Не используется
   * @example 0
   */
  phoneCode?: string;
}

export interface DbsClientInfo {
  /** Имя клиента */
  firstName?: string;
  /**
   * Полное имя, используется для оформления документов. Например, документы для автомобиля.
   * @example "Иван Иван Иванович"
   */
  fullName?: string;
  /**
   * Номер заказа
   * @example 134567
   */
  orderID?: number;
  /**
   * Телефон для связи с клиентом. <br> Чтобы связаться с клиентом наберите этот номер и введите добавочный код. <br> Даный номер не является прямым номером клиента.
   * @example 79871234567
   */
  phone?: string;
  /**
   * Добавочный код
   * @example 1234567
   */
  phoneCode?: string;
}

export interface CrossborderTurkeyClientInfoResp {
  /** Информация по клиенту для кроссбордер-заказа из Турции */
  orders?: CrossborderTurkeyClientInfo[];
}

export interface DbsClientInfoResp {
  /** Информация по клиенту для dbs-заказа (доставка силами продавца) */
  orders?: DbsClientInfo[];
}

export interface OrdersRequestAPI {
  /** Список заказов */
  orders?: number[];
}

export interface Code {
  /** Код клиентской доставки */
  code?: string;
}

/** Данные о складе, для которого требуется пропуск */
export interface PassOffice {
  /**
   * Название
   * @example "Коледино"
   */
  name?: string;
  /**
   * Адрес
   * @example "г. Подольск, д. Коледино, ул. Троицкая"
   */
  address?: string;
  /**
   * ID
   * @format int64
   * @example 1
   */
  id?: number;
}

export interface Supply {
  /**
   * Идентификатор поставки
   * @example "WB-GI-1234567"
   */
  id?: string;
  /** Флаг закрытия поставки */
  done?: boolean;
  /**
   * Дата создания поставки (RFC3339)
   * @format date-time
   * @example "2022-05-04T07:56:29Z"
   */
  createdAt?: string;
  /**
   * Дата закрытия поставки (RFC3339)
   * @format date-time
   * @example "2022-05-04T07:56:29Z"
   */
  closedAt?: string;
  /**
   * Дата скана поставки (RFC3339)
   * @format date-time
   * @example "2022-05-04T07:56:29Z"
   */
  scanDt?: string;
  /**
   * Наименование поставки
   * @example "Тестовая поставка"
   */
  name?: string;
  /** <dl> <dt>Тип поставки:</dt> <dd>0 - признак отсутствует</dd> <dd>1 - обычная</dd> <dd>2 - СГТ (Содержит сверхгабаритные товары)</dd> <dd>3 - КГТ (Содержит крупногабаритные товары). Не используется на данный момент.</dd> </dl> */
  cargoType?: 0 | 1 | 2 | 3;
}

/**
 * Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных
 * @format int64
 * @example 13833711
 */
export type Next = number;

export interface Order {
  /** Детализованный адрес покупателя для доставки (если применимо). Некоторые из полей могут прийти пустыми из-за специфики адреса */
  address?: {
    /**
     * Адрес доставки.
     * @example "Челябинская область, г. Челябинск, 51-я улица Арабкира, д. 10А, кв. 42"
     */
    fullAddress?: string;
    /**
     * Область
     * @deprecated
     * @example "Челябинская область"
     */
    province?: string;
    /**
     * Район
     * @deprecated
     * @example "Челябинск"
     */
    area?: string;
    /**
     * Город
     * @deprecated
     * @example "Город"
     */
    city?: string;
    /**
     * Улица
     * @deprecated
     * @example "51-я улица Арабкира"
     */
    street?: string;
    /**
     * Номер дома
     * @deprecated
     * @example "10А"
     */
    home?: string;
    /**
     * Номер квартиры
     * @deprecated
     * @example "42"
     */
    flat?: string;
    /**
     * Подъезд
     * @deprecated
     * @example "3"
     */
    entrance?: string;
    /**
     * Координата долготы
     * @format float64
     * @example 44.519068
     */
    longitude?: number;
    /**
     * Координаты широты
     * @format float64
     * @example 40.20192
     */
    latitude?: number;
  } | null;
  /**
   * Цена приёмки в копейках. Появляется после фактической приёмки заказа
   * @format uint32
   * @example 1500
   */
  scanPrice?: number;
  /**
   * <dl>
   * <dt>Тип доставки:</dt>
   * <dd>fbs - доставка на склад Wildberries</dd>
   * <dd>dbs - доставка силами продавца</dd>
   * <dd>wbgo - доставка курьером WB</dd>
   * <dd>edbs - экспресс-доставка силами продавца</dd>
   * </dl>
   */
  deliveryType?: "dbs" | "edbs" | "fbs" | "wbgo";
  /**
   * Идентификатор поставки. Возвращается, если заказ закреплён за поставкой
   * @example "WB-GI-92937123"
   */
  supplyId?: string;
  /**
   * Идентификатор транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый orderUID
   * @example "165918930_629fbc924b984618a44354475ca58675"
   */
  orderUid?: string;
  /**
   * Артикул продавца
   * @example "one-ring-7548"
   */
  article?: string;
  /**
   * Код цвета (только для колеруемых товаров)
   * @example "RAL 3017"
   */
  colorCode?: string;
  /**
   * Идентификатор сборочного задания в системе Wildberries
   * @example "f884001e44e511edb8780242ac120002"
   */
  rid?: string;
  /**
   * Дата создания сборочного задания (RFC3339)
   * @format date-time
   * @example "2022-05-04T07:56:29Z"
   */
  createdAt?: string;
  /** Список офисов, куда следует привезти товар */
  offices?: string[] | null;
  /** Массив баркодов товара */
  skus?: string[];
  /**
   * Идентификатор сборочного задания в Маркетплейсе
   * @format int64
   * @example 13833711
   */
  id?: number;
  /**
   * Идентификатор склада продавца, на который поступило сборочное задание
   * @example 658434
   */
  warehouseId?: number;
  /**
   * Артикул WB
   * @example 12345678
   */
  nmId?: number;
  /**
   * Идентификатор размера товара в системе Wildberries
   * @example 987654321
   */
  chrtId?: number;
  /**
   * Цена в валюте продажи с учетом всех скидок, умноженная на 100. Код валюты продажи в поле currencyCode.
   * @example 1014
   */
  price?: number;
  /**
   * Цена в валюте страны продавца с учетом всех скидок, кроме суммы по WB Кошельку, умноженная на 100. Предоставляется в информационных целях.
   * @example 28322
   */
  convertedPrice?: number;
  /**
   * Код валюты продажи (ISO 4217)
   * @example 933
   */
  currencyCode?: number;
  /**
   * Код валюты страны продавца (ISO 4217)
   * @example 643
   */
  convertedCurrencyCode?: number;
  /** <dl> <dt>Тип товара:</dt> <dd>1 - обычный</dd> <dd>2 - СГТ (Сверхгабаритный товар)</dd> <dd>3 - КГТ (Крупногабаритный товар). Не используется на данный момент.</dd> </dl> */
  cargoType?: 1 | 2 | 3;
  /**
   * Признак заказа, сделанного на нулевой остаток товара. (<code>false</code> - заказ сделан на товар с ненулевым остатком, <code>true</code> - заказ сделан на товар с остатком равным нулю. Такой заказ можно отменить без штрафа за отмену)
   * @example false
   */
  isZeroOrder?: any;
}

export interface OrderNew {
  /** Детализованный адрес покупателя для доставки (если применимо). Некоторые из полей могут прийти пустыми из-за специфики адреса */
  address?: {
    /**
     * Адрес доставки.
     * @example "Челябинская область, г. Челябинск, 51-я улица Арабкира, д. 10А, кв. 42"
     */
    fullAddress?: string;
    /**
     * Область
     * @deprecated
     * @example ""
     */
    province?: string;
    /**
     * Район
     * @deprecated
     * @example ""
     */
    area?: string;
    /**
     * Город
     * @deprecated
     * @example ""
     */
    city?: string;
    /**
     * Улица
     * @deprecated
     * @example ""
     */
    street?: string;
    /**
     * Номер дома
     * @deprecated
     * @example ""
     */
    home?: string;
    /**
     * Номер квартиры
     * @deprecated
     * @example ""
     */
    flat?: string;
    /**
     * Подъезд
     * @deprecated
     * @example ""
     */
    entrance?: string;
    /**
     * Координата долготы
     * @format float64
     * @example 44.519068
     */
    longitude?: number;
    /**
     * Координаты широты
     * @format float64
     * @example 40.20192
     */
    latitude?: number;
  } | null;
  /**
   * Планируемая дата доставки.<br>
   * Поле отображается для схем: <br>
   * dbs — доставка силами продавца <br>
   * edbs — экспресс-доставка силами продавца <br>
   * wbgo — доставка курьером WB <br>
   * СГТ — заказы сверхгабаритных товаров (<code>cargoType: 2</code>) для схем fbs — доставка на склад Wildberries — и dbs.
   * @example "17.05.2024"
   */
  ddate?: string;
  /**
   * Время доставки "с".<br> Поле отображается только для edbs (экспресс-доставка силами продавца)
   * @example "15:00"
   */
  dTimeFrom?: string;
  /**
   * Время доставки "до".<br> Поле отображается только для edbs (экспресс-доставка силами продавца)
   * @example "16:00"
   */
  dTimeTo?: string;
  /**
   * Перечень метаданных, которые необходимо добавить в сборочное задание.  <br> На данный момент обязательным к добавлению является только UIN, при его наличии в перечне.
   * @example ["uin"]
   */
  requiredMeta?: string[];
  /**
   * <dl>
   * <dt>Тип доставки:</dt>
   * <dd>fbs - доставка на склад Wildberries</dd>
   * <dd>dbs - доставка силами продавца</dd>
   * <dd>edbs - экспресс-доставка силами продавца</dd>
   * <dd>wbgo - доставка курьером WB</dd>
   * </dl>
   */
  deliveryType?: "dbs" | "fbs" | "edbs" | "wbgo";
  /**
   * Цена приёмки в копейках. Появляется после фактической приёмки заказа. Для данного метода всегда будет возвращаться null
   * @format uint32
   * @example null
   */
  scanPrice?: number | null;
  /**
   * Идентификатор транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый orderUID
   * @example "165918930_629fbc924b984618a44354475ca58675"
   */
  orderUid?: string;
  /**
   * Артикул продавца
   * @example "one-ring-7548"
   */
  article?: string;
  /**
   * Код цвета (только для колеруемых товаров)
   * @example "RAL 3017"
   */
  colorCode?: string;
  /**
   * Идентификатор сборочного задания в системе Wildberries
   * @example "f884001e44e511edb8780242ac120002"
   */
  rid?: string;
  /**
   * Дата создания сборочного задания (RFC3339)
   * @format date-time
   * @example "2022-05-04T07:56:29Z"
   */
  createdAt?: string;
  /** Список офисов, куда следует привезти товар */
  offices?: string[] | null;
  /** Массив баркодов товара */
  skus?: string[];
  /**
   * Идентификатор сборочного задания в Маркетплейсе
   * @format int64
   * @example 13833711
   */
  id?: number;
  /**
   * Идентификатор склада продавца, на который поступило сборочное задание
   * @example 658434
   */
  warehouseId?: number;
  /**
   * Артикул WB
   * @example 123456789
   */
  nmId?: number;
  /**
   * Идентификатор размера товара в системе Wildberries
   * @example 987654321
   */
  chrtId?: number;
  /**
   * Цена в валюте продажи с учетом всех скидок, умноженная на 100. Код валюты продажи в поле currencyCode.
   * @example 1014
   */
  price?: number;
  /**
   * Цена в валюте страны продавца с учетом всех скидок, кроме суммы по WB Кошельку, умноженная на 100. Предоставляется в информационных целях.
   * @example 28322
   */
  convertedPrice?: number;
  /**
   * Код валюты продажи (ISO 4217)
   * @example 933
   */
  currencyCode?: number;
  /**
   * Код валюты страны продавца (ISO 4217)
   * @example 643
   */
  convertedCurrencyCode?: number;
  /** <dl> <dt>Тип товара:</dt> <dd>1 - обычный</dd> <dd>2 - СГТ (Сверхгабаритный товар)</dd> <dd>3 - КГТ (Крупногабаритный товар). Не используется на данный момент.</dd> </dl> */
  cargoType?: 1 | 2 | 3;
  /**
   * Признак заказа, сделанного на нулевой остаток товара. (<code>false</code> - заказ сделан на товар с ненулевым остатком, <code>true</code> - заказ сделан на товар с остатком равным нулю. Такой заказ можно отменить без штрафа за отмену)
   * @example false
   */
  isZeroOrder?: any;
}

export interface SupplyOrder {
  /**
   * Цена приёмки в копейках. Появляется после фактической приёмки заказа. Для данного метода всегда будет возвращаться null
   * @format uint32
   * @example null
   */
  scanPrice?: number | null;
  /**
   * Идентификатор транзакции для группировки сборочных заданий. Сборочные задания в одной корзине покупателя будут иметь одинаковый orderUID
   * @example "165918930_629fbc924b984618a44354475ca58675"
   */
  orderUid?: string;
  /**
   * Артикул продавца
   * @example "one-ring-7548"
   */
  article?: string;
  /**
   * Код цвета (только для колеруемых товаров)
   * @example "RAL 3017"
   */
  colorCode?: string;
  /**
   * Идентификатор сборочного задания в системе Wildberries
   * @example "f884001e44e511edb8780242ac120002"
   */
  rid?: string;
  /**
   * Дата создания сборочного задания (RFC3339)
   * @format date-time
   * @example "2022-05-04T07:56:29Z"
   */
  createdAt?: string;
  /** Список офисов, куда следует привезти товар */
  offices?: string[] | null;
  /** Массив баркодов товара */
  skus?: string[];
  /**
   * Идентификатор сборочного задания в Маркетплейсе
   * @format int64
   * @example 13833711
   */
  id?: number;
  /**
   * Идентификатор склада продавца, на который поступило сборочное задание
   * @example 658434
   */
  warehouseId?: number;
  /**
   * Артикул WB
   * @example 123456789
   */
  nmId?: number;
  /**
   * Идентификатор размера товара в системе Wildberries
   * @example 987654321
   */
  chrtId?: number;
  /**
   * Цена в валюте продажи с учетом всех скидок, умноженная на 100. Код валюты продажи в поле currencyCode.
   * @example 1014
   */
  price?: number;
  /**
   * Цена в валюте страны продавца с учетом всех скидок, кроме суммы по WB Кошельку, умноженная на 100. Предоставляется в информационных целях.
   * @example 28322
   */
  convertedPrice?: number;
  /**
   * Код валюты продажи (ISO 4217)
   * @example 933
   */
  currencyCode?: number;
  /**
   * Код валюты страны продавца (ISO 4217)
   * @example 643
   */
  convertedCurrencyCode?: number;
  /** <dl> <dt>Тип товара:</dt> <dd>1 - обычный</dd> <dd>2 - СГТ (Сверхгабаритный товар)</dd> <dd>3 - КГТ (Крупногабаритный товар). Не используется на данный момент.</dd> </dl> */
  cargoType?: 1 | 2 | 3;
  /**
   * Признак заказа, сделанного на нулевой остаток товара. (<code>false</code> - заказ сделан на товар с ненулевым остатком, <code>true</code> - заказ сделан на товар с остатком равным нулю. Такой заказ можно отменить без штрафа за отмену)
   * @example false
   */
  isZeroOrder?: any;
}

export interface SupplyTrbx {
  /**
   * ID короба.
   * @example "WB-TRBX-1234567"
   */
  id?: string;
  /** Массив идентификаторов заказа. */
  orders?: number[];
}

export interface TrbxStickers {
  /**
   * Закодированное значение этикетки.
   * @minLength 1
   * @example "$WBMP:1:123:1234567"
   */
  barcode?: string;
  /**
   * Полное представление этикетки в заданном формате. (кодировка base64)
   * @format byte
   * @minLength 1
   * @example "U3dhZ2dlciByb2Nrcw=="
   */
  file?: string;
}

/** Данные о складе WB */
export interface Office {
  /**
   * Адрес
   * @example "ул. Троицкая, Подольск, Московская обл."
   */
  address?: string;
  /**
   * Название
   * @example "Москва (Коледино)"
   */
  name?: string;
  /**
   * Город
   * @example "Москва"
   */
  city?: string;
  /**
   * ID
   * @format int64
   * @example 15
   */
  id?: number;
  /**
   * Долгота
   * @format float64
   * @example 55.386871
   */
  longitude?: number;
  /**
   * Широта
   * @format float64
   * @example 37.588898
   */
  latitude?: number;
  /**
   * <dl> <dt>Тип товара, который принимает склад:</dt> <dd>1 - обычный</dd> <dd>2 - СГТ (Сверхгабаритный товар)</dd> <dd>3 - КГТ (Крупногабаритный товар). Не используется на данный момент.</dd> </dl>
   * @example 1
   */
  cargoType?: 1 | 2 | 3;
  /**
   * <dl>
   * <dt>Тип доставки, который принимает склад:</dt>
   * <dd>1 - доставка на склад Wildberries</dd>
   * <dd>2 - доставка силами продавца</dd>
   * <dd>3 - доставка курьером WB</dd>
   * </dl>
   * @example 1
   */
  deliveryType?: 1 | 2 | 3;
  /** Признак того, что склад уже выбран продавцом */
  selected?: boolean;
}

/** Данные о складе продавца */
export interface Warehouse {
  /**
   * Название склада продавца
   * @example "ул. Троицкая, Подольск, Московская обл."
   */
  name?: string;
  /**
   * ID склада WB
   * @format int64
   * @example 15
   */
  officeId?: number;
  /**
   * ID склада продавца
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * <dl> <dt>Тип товара, который принимает склад:</dt> <dd>1 - обычный</dd> <dd>2 - СГТ (Сверхгабаритный товар)</dd> <dd>3 - КГТ (Крупногабаритный товар). Не используется на данный момент.</dd> </dl>
   * @example 1
   */
  cargoType?: 1 | 2 | 3;
  /**
   * <dl>
   * <dt>Тип доставки, который принимает склад:</dt>
   * <dd>1 - доставка на склад Wildberries</dd>
   * <dd>2 - доставка силами продавца</dd>
   * <dd>3 - доставка курьером WB</dd>
   * </dl>
   * @example 1
   */
  deliveryType?: 1 | 2 | 3;
}

/** Метаданные заказа */
export interface Meta {
  /**
   * IMEI
   * @example 123456789012345
   */
  imei?: string | null;
  /**
   * УИН
   * @example 1234567890123456
   */
  uin?: string | null;
  /**
   * GTIN
   * @example 1234567890123
   */
  gtin?: string | null;
  /**
   * КиЗ (Маркировка честного знака)
   * @example 1234567890123456
   */
  sgtin?: string | null;
}

/** Данные о пропуске продавца */
export interface Pass {
  /**
   * Имя водителя
   * @example "Александр"
   */
  firstName?: string;
  /**
   * Дата окончания действия пропуска
   * @example "2022-07-31T17:53:13.000Z"
   */
  dateEnd?: string;
  /**
   * Фамилия водителя
   * @example "Петров"
   */
  lastName?: string;
  /**
   * Марка машины
   * @example "Lamborghini"
   */
  carModel?: string;
  /**
   * Номер машины
   * @example "A456BC123"
   */
  carNumber?: string;
  /**
   * Название склада
   * @example "Коледино"
   */
  officeName?: string;
  /**
   * Адрес склада
   * @example "г. Подольск, д. Коледино, ул. Троицкая"
   */
  officeAddress?: string;
  /**
   * ID склада
   * @format int64
   * @example 15
   */
  officeId?: number;
  /**
   * ID пропуска
   * @format int64
   * @example 1
   */
  id?: number;
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
 * @title Описание API Marketplace
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Возвращает список всех новых сборочных заданий у продавца на данный момент.
     *
     * @tags Сборочные задания
     * @name V3OrdersNewList
     * @summary Получить список новых сборочных заданий
     * @request GET:/api/v3/orders/new
     * @secure
     */
    v3OrdersNewList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Список новых сборочных заданий */
          orders?: OrderNew[];
        },
        void | Error
      >({
        path: `/api/v3/orders/new`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает информацию по сборочным заданиям без их актуального статуса. <br>Можно выгрузить данные за конкретный период, максимум 30 календарных дней
     *
     * @tags Сборочные задания
     * @name V3OrdersList
     * @summary Получить информацию по сборочным заданиям
     * @request GET:/api/v3/orders
     * @secure
     */
    v3OrdersList: (
      query: {
        /**
         * Параметр пагинации. Устанавливает предельное количество возвращаемых данных.
         * @min 1
         * @max 1000
         */
        limit: number;
        /**
         * Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен 0 в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе.
         * @format int64
         */
        next: number;
        /** Дата начала периода в формате Unix timestamp. По умолчанию — дата за 30 дней до запроса */
        dateFrom?: number;
        /** Дата конца периода в формате Unix timestamp */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных */
          next?: Next;
          orders?: Order[];
        },
        Error | void
      >({
        path: `/api/v3/orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает статусы сборочных заданий по переданному списку идентификаторов сборочных заданий. **supplierStatus** - статус сборочного задания, триггером изменения которого является сам продавец.<br> Возможны следующие значения данного поля: | Статус   | Описание            | Как перевести сборочное задание в данный статус | | -------  | ---------           | --------------------------------------| | new      | Новое сборочное задание | | confirm  | На сборке            | При добавлении сборочного задания к поставке **PATCH** * /api/v3/supplies/{supplyId}/orders/{orderId}* | complete | В доставке           | При переводе в доставку соответствующей поставки **PATCH** * /api/v3/supplies/{supplyId}/deliver* | cancel   | Отменено продавцом   | **PATCH** * /api/v3/orders/{orderId}/cancel* **wbStatus** - статус сборочного задания в системе Wildberries.<br> Возможны следующие значения данного поля: - **waiting** - сборочное задание в работе - **sorted** - сборочное задание отсортировано - **sold** - сборочное задание получено покупателем - **canceled** - отмена сборочного задания - **canceled_by_client** - покупатель отменил заказ - **declined_by_client** - покупатель отменил заказ в первый чаc <br> Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку - **defect** - отмена сборочного задания по причине брака - **ready_for_pickup** - сборочное задание прибыло на ПВЗ
     *
     * @tags Сборочные задания
     * @name V3OrdersStatusCreate
     * @summary Получить статусы сборочных заданий
     * @request POST:/api/v3/orders/status
     * @secure
     */
    v3OrdersStatusCreate: (
      data: {
        /**
         * Список идентификаторов сборочных заданий
         * @maxItems 1000
         * @minItems 1
         */
        orders: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          orders?: {
            /**
             * Идентификатор сборочного задания
             * @format int64
             * @example 5632423
             */
            id?: number;
            /**
             * Статус сборочного задания продавца (устанавливается продавцом)
             * @example "new"
             */
            supplierStatus?: "new" | "confirm" | "complete" | "cancel";
            /** Статус сборочного задания в системе Wildberries */
            wbStatus?: "waiting" | "sorted" | "sold" | "canceled" | "canceled_by_client";
          }[];
        },
        Error | void
      >({
        path: `/api/v3/orders/status`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает все сборочные задания, требующие повторной отгрузки
     *
     * @tags Сборочные задания
     * @name V3SuppliesOrdersReshipmentList
     * @summary Получить все сборочные задания на повторную отгрузку
     * @request GET:/api/v3/supplies/orders/reshipment
     * @secure
     */
    v3SuppliesOrdersReshipmentList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Список заказов */
          orders?: {
            /** Идентификатор поставки */
            supplyID?: any;
            /** Идентификатор сборочного задания */
            orderID?: any;
          }[];
        },
        Error | void
      >({
        path: `/api/v3/supplies/orders/reshipment`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Переводит сборочное задание в статус **cancel** ("Отменено продавцом").
     *
     * @tags Сборочные задания
     * @name V3OrdersCancelPartialUpdate
     * @summary Отменить сборочное задание
     * @request PATCH:/api/v3/orders/{orderId}/cancel
     * @secure
     */
    v3OrdersCancelPartialUpdate: (orderId: number, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${orderId}/cancel`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * @description Метод позволяет закрепить за сборочным заданием КиЗ (маркировку Честного знака). <br>  Закрепление КиЗ за сборочным заданием возможно только в случае, если это поле возвращается в ответе метода **Получить метаданные сборочного задания**, а сборочное задание находится в статусе `confirm`. <br> <br> Получить загруженные КиЗ можно методом <b>Получить метаданные сборочного задания</b> <br> С правилами работы с КиЗ можно ознакомиться тут: https://честныйзнак.рф <br> <br>
     *
     * @tags Сборочные задания
     * @name V3OrdersMetaSgtinUpdate
     * @summary Закрепить за сборочным заданием КиЗ (маркировку Честного знака)
     * @request PUT:/api/v3/orders/{orderId}/meta/sgtin
     * @secure
     */
    v3OrdersMetaSgtinUpdate: (
      orderId: number,
      data: {
        /**
         * Массив КиЗов. Допускается от 16 до 135 символов для кода одной маркировки.
         * @maxItems 24
         * @minItems 1
         */
        sgtins?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${orderId}/meta/sgtin`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Возвращает список этикеток по переданному массиву сборочных заданий. Можно запросить этикетку в формате svg, zplv (вертикальный), zplh (горизонтальный), png. **Ограничения при работе с методом**: - Нельзя запросить больше 100 этикеток за раз (не более 100 идентификаторов сборочных заданий в запросе). - Метод возвращает этикетки только для сборочных заданий, находящихся на сборке (в статусе **confirm**). - Доступные размеры: <dd>580x400 пикселей, при параметрах width = 58, height = 40</dd> <dd>400x300 пикселей, при параметрах width = 40, height = 30</dd>
     *
     * @tags Сборочные задания
     * @name V3OrdersStickersCreate
     * @summary Получить этикетки для сборочных заданий
     * @request POST:/api/v3/orders/stickers
     * @secure
     */
    v3OrdersStickersCreate: (
      query: {
        /** Тип этикетки */
        type: "svg" | "zplv" | "zplh" | "png";
        /** Ширина этикетки */
        width: 58 | 40;
        /** Высота этикетки */
        height: 40 | 30;
      },
      data: {
        /**
         * Массив идентификаторов сборочных заданий
         * @maxItems 100
         * @minItems 1
         */
        orders?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          stickers?: {
            /**
             * Идентификатор сборочного задания
             * @format int64
             * @example 5346346
             */
            orderId?: number;
            /**
             * Первая часть идентификатора этикетки (для печати подписи)
             * @example 231648
             */
            partA?: number;
            /**
             * Вторая часть идентификатора этикетки
             * @example 9753
             */
            partB?: number;
            /**
             * Закодированное значение этикетки
             * @example "!uKEtQZVx"
             */
            barcode?: string;
            /**
             * Полное представление этикетки в заданном формате. (кодировка base64)
             * @format byte
             * @example "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjwhLS0gR2VuZXJhdGVkIGJ5IFNWR28gLS0+Cjxzdmcgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzE4IiB5PSIyMCIgd2lkdGg9IjYiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzI2IiB5PSIyMCIgd2lkdGg9IjIiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMzMwIiB5PSIyMCIgd2lkdGg9IjQiIGhlaWdodD0iMTcwIiBzdHlsZT0iZmlsbDpibGFjayIgLz4KPHJlY3QgeD0iMjAiIHk9IjIwMCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI5MCIgc3R5bGU9ImZpbGw6YmxhY2siIC8+Cjx0ZXh0IHg9IjMwIiB5PSIyNDAiIHN0eWxlPSJmaWxsOndoaXRlO2ZvbnQtc2l6ZTozMHB0O3RleHQtYW5jaG9yOnN0YXJ0IiA+MjMxNjQ4PC90ZXh0Pgo8dGV4dCB4PSIzNTAiIHk9IjI3MCIgc3R5bGU9ImZpbGw6d2hpdGU7Zm9udC1zaXplOjUwcHQ7dGV4dC1hbmNob3I6ZW5kIiA+OTc1MzwvdGV4dD4KPC9zdmc+Cg=="
             */
            file?: string;
          }[];
        },
        Error | void
      >({
        path: `/api/v3/orders/stickers`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает метаданные заказа. <br> Возможные метаданные: <br> **imei** <br> **uin** <br> **gtin** <br> **sgtin**   <br> В ответе метода возвращаются метаданные, доступные для сборочного задания. Если ответ вернулся с пустой структурой **meta**, значит у сборочного задания нет метаданных, и добавление их не доступно.
     *
     * @tags Сборочные задания
     * @name V3OrdersMetaDetail
     * @summary Получить метаданные сборочного задания
     * @request GET:/api/v3/orders/{orderId}/meta
     * @secure
     */
    v3OrdersMetaDetail: (orderId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** Метаданные заказа */
          meta?: Meta;
        },
        void | Error
      >({
        path: `/api/v3/orders/${orderId}/meta`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаляет значение метаданных заказа для переданного ключа.  <br> Возможные метаданные: <br> **imei** <br> **uin** <br> **gtin** <br> **sgtin**  <br> Передается только одно значение.
     *
     * @tags Сборочные задания
     * @name V3OrdersMetaDelete
     * @summary Удалить метаданные сборочного задания
     * @request DELETE:/api/v3/orders/{orderId}/meta
     * @secure
     */
    v3OrdersMetaDelete: (
      orderId: number,
      query?: {
        /** Название метаданных для удаления (**imei**, **uin**, **gtin**, **sgtin**). Передается только одно значение. */
        key?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${orderId}/meta`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Обновляет УИН сборочного задания. У одного сборочного задания может быть только один УИН. Добавлять маркировку можно только для заказов в статусе `confirm` и доставка которых осуществляется силами Wildberries.
     *
     * @tags Сборочные задания
     * @name V3OrdersMetaUinUpdate
     * @summary Закрепить за сборочным заданием УИН (уникальный идентификационный номер)
     * @request PUT:/api/v3/orders/{orderId}/meta/uin
     * @secure
     */
    v3OrdersMetaUinUpdate: (
      orderId: number,
      data: {
        /**
         * УИН
         * @minLength 16
         * @maxLength 16
         * @example "1234567890123456"
         */
        uin: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${orderId}/meta/uin`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Обновляет IMEI сборочного задания. У одного сборочного задания может быть только один IMEI. Добавлять маркировку можно только для заказов в статусе `confirm` и доставка которых осуществляется силами Wildberries.
     *
     * @tags Сборочные задания
     * @name V3OrdersMetaImeiUpdate
     * @summary Закрепить за сборочным заданием IMEI
     * @request PUT:/api/v3/orders/{orderId}/meta/imei
     * @secure
     */
    v3OrdersMetaImeiUpdate: (
      orderId: number,
      data: {
        /**
         * IMEI
         * @minLength 15
         * @maxLength 15
         * @example "123456789012345"
         */
        imei: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${orderId}/meta/imei`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Обновляет GTIN (уникальный идентификатор товара в Беларуси) сборочного задания. У одного сборочного задания может быть только один GTIN. Добавлять маркировку можно только для заказов в статусе `confirm` и доставка которых осуществляется силами Wildberries.
     *
     * @tags Сборочные задания
     * @name V3OrdersMetaGtinUpdate
     * @summary Закрепить за сборочным заданием GTIN
     * @request PUT:/api/v3/orders/{orderId}/meta/gtin
     * @secure
     */
    v3OrdersMetaGtinUpdate: (
      orderId: number,
      data: {
        /**
         * GTIN
         * @minLength 13
         * @maxLength 13
         * @example "1234567890123"
         */
        gtin: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${orderId}/meta/gtin`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Возвращает список ссылок на этикетки для сборочных заданий, которые требуются при кроссбордере. **Ограничения при работе с методом**: - Нельзя запросить больше 100 этикеток за раз (не более 100 идентификаторов сборочных заданий в запросе). - Метод возвращает этикетки только для сборочных заданий, находящихся в доставке (в статусе **complete**).
     *
     * @tags Сборочные задания
     * @name V3FilesOrdersExternalStickersCreate
     * @summary Получить список ссылок на этикетки для сборочных заданий, которые требуются при кроссбордере
     * @request POST:/api/v3/files/orders/external-stickers
     * @secure
     */
    v3FilesOrdersExternalStickersCreate: (
      data: {
        /**
         * Массив идентификаторов сборочных заданий
         * @maxItems 100
         * @minItems 1
         */
        orders?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          stickers?: {
            /**
             * Идентификатор сборочного задания
             * @format int64
             * @example 5346346
             */
            orderID?: number;
            /**
             * Ссылка, по которой можно получить этикетку для сборочного задания
             * @example "http://.../some-sticker"
             */
            url?: string;
            /**
             * Трек-номер в этикетке для отслеживания сборочного задания
             * @example "WB0000000001"
             */
            parcelID?: string;
          }[];
        },
        Error | void
      >({
        path: `/api/v3/files/orders/external-stickers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает историю статусов для сборочных заданий кроссбордера
     *
     * @tags Сборочные задания
     * @name V3OrdersStatusHistoryCreate
     * @summary История статусов для сборочных заданий кроссбордера
     * @request POST:/api/v3/orders/status/history
     * @secure
     */
    v3OrdersStatusHistoryCreate: (
      data: {
        /**
         * ID сборочных заданий
         * @maxItems 100
         * @minItems 1
         * @example [123456789,987654321]
         */
        orders?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Сборочные задания */
          orders?: {
            /** Планируемая дата доставки, [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) */
            deliveryDate?: string;
            /** Статусы */
            statuses?: {
              /**
               * Дата присвоения статуса
               * @example null
               */
              date?: string;
              /**
               * Статус-код сборочного задания/заказа:
               *   - `accepted_by_carrier` — Товар принят перевозчиком
               *   - `assembling` — Отправлен на сборку
               *   - `assembled` — Собран на складе
               *   - `sorted` — Отсортирован
               *   - `replaced_at_warehouse` — Замена на складе
               *   - `prepared_for_shipment` — Подготовлен к отгрузке
               *   - `in_search` — На поиске
               *   - `arrived_at_dct` — Поступил в распределительный центр-транзит
               *   - `arrived_at_sct` — Поступил в сортировочный центр-транзит
               *   - `arrived_at_dc` — Поступил в распределительный центр
               *   - `arrived_at_sc` — Поступил в сортировочный центр
               *   - `prepared_for_shipment_at_sc` — Подготовлен к отгрузке в сортировочном центре
               *   - `shipped_at_sc` — Отгружено сортировочным центром
               *   - `shipped_at_dct` — Отгружен распределительным центром — транзит
               *   - `shipped_at_dc` — Отгружен распределительным центром
               *   - `delivered_at_sc` — Доставлен СЦ/РЦ
               *   - `on_way_to_sc` — В пути в сортировочный центр
               *   - `on_way_to_dc` — В пути в распределительный центр
               *   - `on_way_to_pp` — В пути на пункт выдачи
               *   - `arrived_at_pp` — Прибыл на пункт выдачи
               *   - `accepted_at_pp` — Приёмка в пункте выдачи
               *   - `ready_for_pick_up` — Готов к выдаче
               *   - `arrived_at_pp` — Поступил на ПВЗ
               *   - `received_by_client` — Получен клиентом
               *   - `delivered_at_parcel_locker` — Доставлен в постамат
               *   - `canceled_by_client` — Покупатель отменил заказ
               *   - `cancel_after_expiration` — Отмена по сроку хранения
               *   - `at_courier` — Передан курьеру
               *   - `moved_to_return_box` — Перемещен в возвратную коробку
               *   - `accepted_for_return` — Принят к возврату на ПВЗ
               *   - `created` — Оформлен
               *   - `canceled_by_seller` — Отменен продавцом
               *   - `dispatched_by_seller` — Отгружено по данным продавца
               *   - `delivered` — Заказ выдан
               *   - `on_way` — В пути
               *   - `arrived_at_wb_wh` — Поступил на склад WB
               *   - `dispatched_from_wh` — Отправлен со склада
               *   - `customs_clearance` — Таможенное оформление
               *   - `customs_clearance_completed` — Выпущен таможней
               *   - `departed_from_origin_country` — Отправлен из страны продавца
               *   - `arrived_in_destination_country` — Прибытие в страну назначения
               *   - `on_way_to_wb_sc` — Отправлен до СЦ WB
               *   - `accepted_at_wb_sc` — Принят СЦ WB
               *   - `canceled` — Отмена
               *   - `failed_to_reach_client` — Не дозвонились до клиента
               * @example "SORTED"
               */
              code?: string;
            }[];
            /**
             * ID сборочного задания
             * @example 123456789
             */
            orderID?: number;
          }[];
        },
        void | Error
      >({
        path: `/api/v3/orders/status/history`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать информацию о клиенте по ID заказа. <br>Только для <b>dbs</b> (доставка силами продавца) и кроссбордера из **Турции**
     *
     * @tags Сборочные задания
     * @name V3OrdersClientCreate
     * @summary Информация по клиенту
     * @request POST:/api/v3/orders/client
     * @secure
     */
    v3OrdersClientCreate: (data: OrdersRequestAPI, params: RequestParams = {}) =>
      this.request<DbsClientInfoResp | CrossborderTurkeyClientInfoResp, Error | void>({
        path: `/api/v3/orders/client`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description **Ограничения работы с поставками**: - Только для сборочных заданий по схеме "Везу на склад WB" - При добавлении в поставку все передаваемые сборочные задания в статусе **new** ("Новое") будут автоматически переведены в статус **confirm** ("На сборке"). - Обратите внимание, что если вы переведёте сборочное задание в статус **cancel** ("Отмена продавцом"), то сборочное задание автоматически удалится из поставки, если было прикреплено к ней. - Поставку можно собрать только из сборочных заданий (заказов) одного габаритного типа (cargoType). Новая поставка не обладает габаритным признаком. При добавлении первого заказа в поставку она приобретает габаритный признак этого заказа.
     *
     * @tags Поставки
     * @name V3SuppliesCreate
     * @summary Создать новую поставку
     * @request POST:/api/v3/supplies
     * @secure
     */
    v3SuppliesCreate: (
      data: {
        /**
         * Наименование поставки
         * @minLength 1
         * @maxLength 128
         * @example "Тестовая поставка"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Идентификатор поставки
           * @example "WB-GI-1234567"
           */
          id?: string;
        },
        Error | void
      >({
        path: `/api/v3/supplies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список поставок.
     *
     * @tags Поставки
     * @name V3SuppliesList
     * @summary Получить список поставок
     * @request GET:/api/v3/supplies
     * @secure
     */
    v3SuppliesList: (
      query: {
        /**
         * Параметр пагинации. Устанавливает предельное количество возвращаемых данных.
         * @min 1
         * @max 1000
         */
        limit: number;
        /**
         * Параметр пагинации. Устанавливает значение, с которого надо получить следующий пакет данных. Для получения полного списка данных должен быть равен 0 в первом запросе. Для следующих запросов необходимо брать значения из одноимённого поля в ответе.
         * @format int64
         */
        next: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Параметр пагинации. Содержит значение, которое необходимо указать в запросе для получения следующего пакета данных */
          next?: Next;
          /** Список поставок */
          supplies?: Supply[];
        },
        Error | void
      >({
        path: `/api/v3/supplies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет к поставке сборочное задание и переводит его в статус **confirm** ("На сборке").  <br> Также может перемещать сборочное задание между активными поставками, либо из закрытой в активную при условии, что сборочное задание требует повторной отгрузки. <br> <br> `Важно!` <br> В пустую поставку можно добавить сборочное задание любого габаритного типа. <br> После добавления первого задания поставка приобретает габаритный тип этого задания, см. значение поля `cargoType` в ответе метода <b>"Получить информацию о поставке"</b>. <br> После этого добавить в поставку можно только те задания, габаритный тип которых соответствует таковому у поставки.
     *
     * @tags Поставки
     * @name V3SuppliesOrdersPartialUpdate
     * @summary Добавить к поставке сборочное задание
     * @request PATCH:/api/v3/supplies/{supplyId}/orders/{orderId}
     * @secure
     */
    v3SuppliesOrdersPartialUpdate: (supplyId: string, orderId: number, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/supplies/${supplyId}/orders/${orderId}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию о поставке.
     *
     * @tags Поставки
     * @name V3SuppliesDetail
     * @summary Получить информацию о поставке
     * @request GET:/api/v3/supplies/{supplyId}
     * @secure
     */
    v3SuppliesDetail: (supplyId: string, params: RequestParams = {}) =>
      this.request<Supply, Error | void>({
        path: `/api/v3/supplies/${supplyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаляет поставку, если она активна и за ней не закреплено ни одно сборочное задание.
     *
     * @tags Поставки
     * @name V3SuppliesDelete
     * @summary Удалить поставку
     * @request DELETE:/api/v3/supplies/{supplyId}
     * @secure
     */
    v3SuppliesDelete: (supplyId: string, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/supplies/${supplyId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает сборочные задания, закреплённые за поставкой.
     *
     * @tags Поставки
     * @name V3SuppliesOrdersDetail
     * @summary Получить сборочные задания в поставке
     * @request GET:/api/v3/supplies/{supplyId}/orders
     * @secure
     */
    v3SuppliesOrdersDetail: (supplyId: string, params: RequestParams = {}) =>
      this.request<
        {
          orders?: SupplyOrder[];
        },
        Error | void
      >({
        path: `/api/v3/supplies/${supplyId}/orders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Закрывает поставку и переводит все сборочные задания в ней в статус **complete** ("В доставке"). После закрытия поставки новые сборочные задания к ней добавить будет невозможно. Если поставка не была передана в доставку, то при сканировании её штрихкода или приёмке первого товара поставка автоматически закроется. Передать поставку в доставку можно только при наличии в ней хотя бы одного сборочного задания и отсутствии пустых коробов.
     *
     * @tags Поставки
     * @name V3SuppliesDeliverPartialUpdate
     * @summary Передать поставку в доставку
     * @request PATCH:/api/v3/supplies/{supplyId}/deliver
     * @secure
     */
    v3SuppliesDeliverPartialUpdate: (supplyId: string, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/supplies/${supplyId}/deliver`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает QR в svg, zplv (вертикальный), zplh (горизонтальный), png. <br> Можно получить, только если поставка передана в доставку. <dt>Доступные размеры:</dt> <dd>580x400 пикселей
     *
     * @tags Поставки
     * @name V3SuppliesBarcodeDetail
     * @summary Получить QR поставки
     * @request GET:/api/v3/supplies/{supplyId}/barcode
     * @secure
     */
    v3SuppliesBarcodeDetail: (
      supplyId: string,
      query: {
        /** Тип этикетки */
        type: "svg" | "zplv" | "zplh" | "png";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Закодированное значение этикетки (идентификатор поставки)
           * @example "WB-GI-12345678"
           */
          barcode?: string;
          /**
           * Полное представление этикетки в заданном формате. (кодировка base64)
           * @format byte
           * @example "U3dhZ2dlciByb2Nrcw=="
           */
          file?: string;
        },
        Error | void
      >({
        path: `/api/v3/supplies/${supplyId}/barcode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список коробов и идентификаторы заказов, входящих в них.
     *
     * @tags Поставки
     * @name V3SuppliesTrbxDetail
     * @summary Получить список коробов поставки
     * @request GET:/api/v3/supplies/{supplyId}/trbx
     * @secure
     */
    v3SuppliesTrbxDetail: (supplyId: string, params: RequestParams = {}) =>
      this.request<
        {
          trbxes?: SupplyTrbx[];
        },
        Error | void
      >({
        path: `/api/v3/supplies/${supplyId}/trbx`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет требуемое количество коробов в поставку. Можно добавить, только пока поставка на сборке.
     *
     * @tags Поставки
     * @name V3SuppliesTrbxCreate
     * @summary Добавить короба к поставке
     * @request POST:/api/v3/supplies/{supplyId}/trbx
     * @secure
     */
    v3SuppliesTrbxCreate: (
      supplyId: string,
      data: {
        /**
         * Количество коробов, которые необходимо добавить к поставке.
         * @min 1
         * @max 1000
         * @example 4
         */
        amount: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Список ID коробов, которые были созданы.
           * @minItems 1
           */
          trbxIds?: string[];
        },
        Error | void
      >({
        path: `/api/v3/supplies/${supplyId}/trbx`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Убирает заказы из перечисленных коробов поставки и удаляет короба. Можно удалить, только пока поставка на сборке.
     *
     * @tags Поставки
     * @name V3SuppliesTrbxDelete
     * @summary Удалить короба из поставки
     * @request DELETE:/api/v3/supplies/{supplyId}/trbx
     * @secure
     */
    v3SuppliesTrbxDelete: (
      supplyId: string,
      data: {
        /** Список ID коробов, которые необходимо удалить. */
        trbxIds: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/supplies/${supplyId}/trbx`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Добавляет заказы в короб для выбранной поставки. Можно добавить, только пока поставка на сборке.
     *
     * @tags Поставки
     * @name V3SuppliesTrbxPartialUpdate
     * @summary Добавить заказы к коробу
     * @request PATCH:/api/v3/supplies/{supplyId}/trbx/{trbxId}
     * @secure
     */
    v3SuppliesTrbxPartialUpdate: (
      supplyId: string,
      trbxId: string,
      data: {
        /** Список заказов, которые необходимо добавить в короб. */
        orderIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/supplies/${supplyId}/trbx/${trbxId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Удаляет заказ из короба выбранной поставки. Можно удалить, только пока поставка на сборке.
     *
     * @tags Поставки
     * @name V3SuppliesTrbxOrdersDelete
     * @summary Удалить заказ из короба
     * @request DELETE:/api/v3/supplies/{supplyId}/trbx/{trbxId}/orders/{orderId}
     * @secure
     */
    v3SuppliesTrbxOrdersDelete: (supplyId: string, trbxId: string, orderId: number, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/supplies/${supplyId}/trbx/${trbxId}/orders/${orderId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает стикеры QR в svg, zplv (вертикальный), zplh (горизонтальный), png.<br> Можно получить, только если в коробе есть заказы. <dt>Размер стикеров: 580x400 пикселей</dt>
     *
     * @tags Поставки
     * @name V3SuppliesTrbxStickersCreate
     * @summary Получить стикеры коробов поставки
     * @request POST:/api/v3/supplies/{supplyId}/trbx/stickers
     * @secure
     */
    v3SuppliesTrbxStickersCreate: (
      supplyId: string,
      query: {
        /** Тип этикетки */
        type: "svg" | "zplv" | "zplh" | "png";
      },
      data: {
        /** Список ID коробов, по которым необходимо вернуть стикеры. */
        trbxIds: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @minItems 1 */
          stickers?: TrbxStickers[];
        },
        Error | void
      >({
        path: `/api/v3/supplies/${supplyId}/trbx/stickers`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновляет остатки товаров. <br> `Важно!` Имена параметров запроса не валидируются. При отправке некорректных имен Вы получите успешный ответ(204), но остатки не обновятся.<br> Тщательнее проверяйте данные перед отправкой.
     *
     * @tags Остатки
     * @name V3StocksUpdate
     * @summary Обновить остатки товаров
     * @request PUT:/api/v3/stocks/{warehouseId}
     * @secure
     */
    v3StocksUpdate: (
      warehouseId: number,
      data: {
        /**
         * Массив баркодов товаров и их остатков
         * @maxItems 1000
         * @minItems 1
         */
        stocks: {
          /**
           * Баркод
           * @example "BarcodeTest123"
           */
          sku?: string;
          /**
           * Остаток
           * @max 100000
           * @example 10
           */
          amount?: number;
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void | Error[]>({
        path: `/api/v3/stocks/${warehouseId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Удаляет остатки товаров. **Внимание! Действие необратимо**. Удаленный остаток будет необходимо загрузить повторно для возобновления продаж.
     *
     * @tags Остатки
     * @name V3StocksDelete
     * @summary Удалить остатки товаров
     * @request DELETE:/api/v3/stocks/{warehouseId}
     * @secure
     */
    v3StocksDelete: (
      warehouseId: number,
      data: {
        /**
         * Массив баркодов
         * @maxItems 1000
         * @minItems 1
         */
        skus?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/stocks/${warehouseId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Возвращает остатки товаров.
     *
     * @tags Остатки
     * @name V3StocksCreate
     * @summary Получить остатки товаров
     * @request POST:/api/v3/stocks/{warehouseId}
     * @secure
     */
    v3StocksCreate: (
      warehouseId: number,
      data: {
        /**
         * Массив баркодов
         * @maxItems 1000
         * @minItems 1
         */
        skus?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          stocks?: {
            /**
             * Баркод
             * @example "BarcodeTest123"
             */
            sku?: string;
            /**
             * Остаток
             * @example 10
             */
            amount?: number;
          }[];
        },
        Error | void
      >({
        path: `/api/v3/stocks/${warehouseId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех складов WB для привязки к складам продавца.
     *
     * @tags Склады
     * @name V3OfficesList
     * @summary Получить список складов WB
     * @request GET:/api/v3/offices
     * @secure
     */
    v3OfficesList: (params: RequestParams = {}) =>
      this.request<Office[], void | Error>({
        path: `/api/v3/offices`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех складов продавца.
     *
     * @tags Склады
     * @name V3WarehousesList
     * @summary Получить список складов продавца
     * @request GET:/api/v3/warehouses
     * @secure
     */
    v3WarehousesList: (params: RequestParams = {}) =>
      this.request<Warehouse[], void | Error>({
        path: `/api/v3/warehouses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Создает склад продавца. Нельзя привязывать склад WB, который уже используется.
     *
     * @tags Склады
     * @name V3WarehousesCreate
     * @summary Создать склад продавца
     * @request POST:/api/v3/warehouses
     * @secure
     */
    v3WarehousesCreate: (
      data: {
        /**
         * Имя склада продавца
         * @minLength 1
         * @maxLength 200
         * @example "Склад Коледино"
         */
        name: string;
        /**
         * ID склада WB
         * @min 1
         * @example 15
         */
        officeId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * ID склада продавца
           * @example 2
           */
          id?: number;
        },
        Error | void
      >({
        path: `/api/v3/warehouses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновляет склад продавца. Изменение выбранного склада WB допустимо раз в сутки. Нельзя привязывать склад WB, который уже используется.
     *
     * @tags Склады
     * @name V3WarehousesUpdate
     * @summary Обновить склад
     * @request PUT:/api/v3/warehouses/{warehouseId}
     * @secure
     */
    v3WarehousesUpdate: (
      warehouseId: number,
      data: {
        /**
         * Имя склада продавца
         * @minLength 1
         * @maxLength 200
         * @example "Склад Коледино"
         */
        name: string;
        /**
         * Идентификатор склада WB
         * @min 1
         * @example 15
         */
        officeId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/warehouses/${warehouseId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Удаляет склад продавца.
     *
     * @tags Склады
     * @name V3WarehousesDelete
     * @summary Удалить склад продавца
     * @request DELETE:/api/v3/warehouses/{warehouseId}
     * @secure
     */
    v3WarehousesDelete: (warehouseId: number, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/api/v3/warehouses/${warehouseId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает список складов для привязки к пропуску продавца. <br> Обратите внимание: данные, которые возвращает метод, могут меняться. Рекомендуем периодически синхронизировать список.
     *
     * @tags Пропуска
     * @name V3PassesOfficesList
     * @summary Получить список складов, для которых требуется пропуск
     * @request GET:/api/v3/passes/offices
     * @secure
     */
    v3PassesOfficesList: (params: RequestParams = {}) =>
      this.request<PassOffice[], void | Error>({
        path: `/api/v3/passes/offices`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список всех пропусков продавца.
     *
     * @tags Пропуска
     * @name V3PassesList
     * @summary Получить список пропусков
     * @request GET:/api/v3/passes
     * @secure
     */
    v3PassesList: (params: RequestParams = {}) =>
      this.request<Pass[], void | Error>({
        path: `/api/v3/passes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Создает пропуск продавца. <br> Пропуск действует 48 часов со времени создания. Метод ограничен одним вызовом в 10 минут.
     *
     * @tags Пропуска
     * @name V3PassesCreate
     * @summary Создать пропуск
     * @request POST:/api/v3/passes
     * @secure
     */
    v3PassesCreate: (
      data: {
        /**
         * Имя водителя
         * @minLength 1
         * @example "Александр"
         */
        firstName: string;
        /**
         * Фамилия водителя
         * @minLength 1
         * @example "Петров"
         */
        lastName: string;
        /**
         * Марка машины
         * @minLength 1
         * @maxLength 100
         * @example "Lamborghini"
         */
        carModel: string;
        /**
         * Номер машины
         * @minLength 6
         * @maxLength 9
         * @example "A456BC123"
         */
        carNumber: string;
        /**
         * ID склада
         * @format int64
         * @min 1
         * @example 15
         */
        officeId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * ID пропуска продавца
           * @example 2
           */
          id?: number;
        },
        Error | void
      >({
        path: `/api/v3/passes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновляет данные пропуска продавца.
     *
     * @tags Пропуска
     * @name V3PassesUpdate
     * @summary Обновить пропуск
     * @request PUT:/api/v3/passes/{passId}
     * @secure
     */
    v3PassesUpdate: (
      passId: number,
      data: {
        /**
         * Имя водителя
         * @minLength 1
         * @example "Александр"
         */
        firstName: string;
        /**
         * Фамилия водителя
         * @minLength 6
         * @example "Петров"
         */
        lastName: string;
        /**
         * Марка машины
         * @minLength 1
         * @maxLength 100
         * @example "Lamborghini"
         */
        carModel: string;
        /**
         * Номер машины
         * @minLength 6
         * @maxLength 9
         * @example "A456BC123"
         */
        carNumber: string;
        /**
         * ID склада
         * @format int64
         * @min 1
         * @example 15
         */
        officeId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/api/v3/passes/${passId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Удаляет пропуск продавца.
     *
     * @tags Пропуска
     * @name V3PassesDelete
     * @summary Удалить пропуск
     * @request DELETE:/api/v3/passes/{passId}
     * @secure
     */
    v3PassesDelete: (passId: number, params: RequestParams = {}) =>
      this.request<void, void | Error>({
        path: `/api/v3/passes/${passId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Переводит сборочное задание в статус **confirm** ("На сборке").
     *
     * @tags Доставка силами продавца (DBS)
     * @name V3OrdersConfirmPartialUpdate
     * @summary Перевести на сборку
     * @request PATCH:/api/v3/orders/{order}/confirm
     * @secure
     */
    v3OrdersConfirmPartialUpdate: (order: number, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${order}/confirm`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * @description Переводит сборочное задание в статус **deliver** ("В доставке").
     *
     * @tags Доставка силами продавца (DBS)
     * @name V3OrdersDeliverPartialUpdate
     * @summary Перевести в доставку
     * @request PATCH:/api/v3/orders/{order}/deliver
     * @secure
     */
    v3OrdersDeliverPartialUpdate: (order: number, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${order}/deliver`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * @description Переводит сборочное задание в статус **receive** ("Получено клиентом").
     *
     * @tags Доставка силами продавца (DBS)
     * @name V3OrdersReceivePartialUpdate
     * @summary Сообщить, что сборочное задание принято клиентом
     * @request PATCH:/api/v3/orders/{order}/receive
     * @secure
     */
    v3OrdersReceivePartialUpdate: (order: number, data: Code, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${order}/receive`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Перевести в статус **reject** ("Отказ при получении").
     *
     * @tags Доставка силами продавца (DBS)
     * @name V3OrdersRejectPartialUpdate
     * @summary Сообщить, что клиент отказался от сборочного задания
     * @request PATCH:/api/v3/orders/{order}/reject
     * @secure
     */
    v3OrdersRejectPartialUpdate: (order: number, data: Code, params: RequestParams = {}) =>
      this.request<void, Error | void>({
        path: `/api/v3/orders/${order}/reject`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
