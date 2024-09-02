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

export interface ModelsTariffsBoxResponse {
  data?: ModelsWarehousesBoxRates;
}

export interface ModelsWarehousesBoxRates {
  /**
   * Дата начала следующего тарифа
   * @example "2024-02-01T00:00:00.000Z"
   */
  dtNextBox?: string;
  /**
   * Дата окончания последнего установленного тарифа
   * @example "2024-03-31T00:00:00.000Z"
   */
  dtTillMax?: string;
  /** Тарифы для коробов, сгруппированные по складам */
  warehouseList?: ModelsWarehouseBoxRates[] | null;
}

export interface ModelsWarehouseBoxRates {
  /**
   * Коэффициент, %. На него умножается стоимость доставки и хранения. Во всех тарифах этот коэффициент уже учтён
   * @example "160"
   */
  boxDeliveryAndStorageExpr?: string;
  /**
   * Доставка 1 литра, ₽
   * @example "48"
   */
  boxDeliveryBase?: string;
  /**
   * Доставка каждого дополнительного литра, ₽
   * @example "11,2"
   */
  boxDeliveryLiter?: string;
  /**
   * Хранение 1 литра, ₽
   * @example "0,1"
   */
  boxStorageBase?: string;
  /**
   * Хранение каждого дополнительного литра, ₽
   * @example "0,1"
   */
  boxStorageLiter?: string;
  /**
   * Название склада
   * @example "Коледино"
   */
  warehouseName?: string;
}

export interface ModelsTariffsPalletResponse {
  data?: ModelsWarehousesPalletRates;
}

export interface ModelsWarehousesPalletRates {
  /**
   * Дата начала следующего тарифа
   * @example "2024-02-01T00:00:00.000Z"
   */
  dtNextPallet?: string;
  /**
   * Дата окончания последнего установленного тарифа
   * @example "2024-03-31T00:00:00.000Z"
   */
  dtTillMax?: string;
  /** Тарифы для монопаллет, сгруппированные по складам */
  warehouseList?: ModelsWarehousePalletRates[] | null;
}

export interface ModelsWarehousePalletRates {
  /**
   * Коэффициент доставки, %. На него умножается стоимость доставки. Во всех тарифах этот коэффициент уже учтён
   * @example "170"
   */
  palletDeliveryExpr?: string;
  /**
   * Доставка 1 литра, ₽
   * @example "51"
   */
  palletDeliveryValueBase?: string;
  /**
   * Доставка каждого дополнительного литра, ₽
   * @example "11,9"
   */
  palletDeliveryValueLiter?: string;
  /**
   * Коэффициент хранения, %. На него умножается стоимость хранения. Во всех тарифах этот коэффициент уже учтён
   * @example "155"
   */
  palletStorageExpr?: string;
  /**
   * Хранение 1 монопаллеты, ₽
   * @example "35.65"
   */
  palletStorageValueExpr?: string;
  /**
   * Название склада
   * @example "Коледино"
   */
  warehouseName?: string;
}

export interface ModelsReturnTariffsResponse {
  data?: ModelsWarehousesReturnRates;
}

export interface ModelsWarehousesReturnRates {
  /**
   * Дата начала следующего тарифа при грузовой доставке
   * @example "2024-02-01T00:00:00.000Z"
   */
  dtNextDeliveryDumpKgt?: string;
  /**
   * Дата начала следующего тарифа для неопознанных товаров
   * @example "2024-02-01T00:00:00.000Z"
   */
  dtNextDeliveryDumpSrg?: string;
  /**
   * Дата начала следующего тарифа при обычной доставке
   * @example "2024-02-01T00:00:00.000Z"
   */
  dtNextDeliveryDumpSup?: string;
  /**
   * <p>Тарифы на возврат, сгруппированные по складам:</p> <ul>
   *   <li>стоимость возврата брака и возврата по инициативе продавца при грузовой доставке.</li>
   *   <li>стоимость возврата неопознанного складом товара.</li>
   *   <li>стоимость возврата брака, возврата по инициативе продавца и автовозвратов Маркетплейс (в пункт выдачи и обратно).</li>
   * </ul> <p>Можно получить стоимость возврата в пункт выдачи (ПВЗ) и обратной логистики — если продавец не забрал товары из пункта выдачи за 7 дней.</p>
   */
  warehouseList?: ModelsWarehouseReturnRates[] | null;
}

export interface ModelsWarehouseReturnRates {
  /**
   * <p><b>Стоимость возврата при грузовой доставке, доставка на ПВЗ (базовая цена за 1 л), ₽</b></p> <p>Применяется для крупногабаритных товаров, когда:<p> <ul>
   *   <li>продавец хочет вывезти товары со склада Wildberries;</li>
   *   <li>на складе обнаружили бракованные товары;</li>
   *   <li>покупатель возвращает товар, но его нельзя вернуть в продажу.</li>
   * </ul>
   * @example "1 039"
   */
  deliveryDumpKgtOfficeBase?: string;
  /**
   * <p><b>Стоимость возврата при грузовой доставке, доставка на ПВЗ (доп. литр), ₽</b></p> <p>Стоимость за каждый дополнительный литр.</p>
   * @example "9,1"
   */
  deliveryDumpKgtOfficeLiter?: string;
  /**
   * <p><b>Стоимость возврата при грузовой доставке, обратная логистика невостребованного возврата, ₽</b><p> <p>Грузовая доставка невостребованного возврата обратно на склад Wildberries. За единицу товара.</p>
   * @example "1 050"
   */
  deliveryDumpKgtReturnExpr?: string;
  /**
   * <p><b>Стоимость возврата неопознанного складом товара за каждую единицу, доставка на ПВЗ, ₽</b></p> <p>Применяется для товаров, которые не смогли принять на складе.</p>
   * @example "170"
   */
  deliveryDumpSrgOfficeExpr?: string;
  /**
   * <p><b>Стоимость возврата неопознанного складом товара за каждую единицу, обратная логистика невостребованного возврата, ₽</b></p> <p>Доставка невостребованного возврата обратно на склад Wildberries.</p>
   * @example "170"
   */
  deliveryDumpSrgReturnExpr?: string;
  /**
   * **Стоимость возврата, доставка курьером (базовая цена за 1 л), ₽**
   *
   * Применяется, когда:
   *   - продавец хочет вывезти товары со склада Wildberries
   *   - на складе обнаружили бракованные товары
   *   - покупатель возвращает товар, но его нельзя вернуть в продажу
   *   - подключён автовозврат товаров, продаваемых по схеме Маркетплейс
   * @example "229"
   */
  deliveryDumpSupCourierBase?: string;
  /**
   * **Стоимость возврата, доставка курьером (доп. л), ₽**
   * <p>Стоимость за каждый дополнительный литр.</p>
   * @example "9,1"
   */
  deliveryDumpSupCourierLiter?: string;
  /**
   * **Стоимость возврата, доставка на ПВЗ (базовая цена за 1 л), ₽**
   *
   * Применяется, когда:
   *   - продавец хочет вывезти товары со склада Wildberries
   *   - на складе обнаружили бракованные товары
   *   - покупатель возвращает товар, но его нельзя вернуть в продажу
   *   - подключён автовозврат товаров, продаваемых по схеме Маркетплейс
   * @example "129"
   */
  deliveryDumpSupOfficeBase?: string;
  /**
   * <p><b>Стоимость возврата, доставка на ПВЗ (доп. литр), ₽</b></p> <p>Стоимость за каждый дополнительный литр</p>
   * @example "9,1"
   */
  deliveryDumpSupOfficeLiter?: string;
  /**
   * <b>Стоимость возврата, обратная логистика невостребованного возврата, за единицу товара, ₽</b><br>
   * Доставка невостребованного возврата обратно на склад Wildberries.
   *
   * Применяется, когда:
   *   - продавец хочет вывезти товары со склада Wildberries
   *   - на складе обнаружили бракованные товары
   *   - покупатель возвращает товар, но его нельзя вернуть в продажу
   *   - подключён автовозврат товаров, продаваемых по схеме Маркетплейс
   * @example "250"
   */
  deliveryDumpSupReturnExpr?: string;
  /**
   * Название склада
   * @example "Электросталь"
   */
  warehouseName?: string;
}

export interface TariffsBoxResponse {
  response?: ModelsTariffsBoxResponse;
}

export interface TariffsPalletResponse {
  response?: ModelsTariffsPalletResponse;
}

export interface ReturnTariffsResponse {
  response?: ModelsReturnTariffsResponse;
}

export interface Commission {
  /** Список комиссий */
  report?: {
    /** Комиссия по модели `Склад продавца — везу на склад WB`, % */
    kgvpMarketplace?: number;
    /** Комиссия по моделям `Склад продавца — везу самостоятельно до клиента` и `Склад продавца — Курьером WB`, % */
    kgvpSupplier?: number;
    /** Комиссия по модели `Склад продавца — везу самостоятельно до клиента экспресс`, % */
    kgvpSupplierExpress?: number;
    /** Комиссия по модели `Склад WB`, % */
    paidStorageKgvp?: number;
    /** ID родительской категории */
    parentID?: number;
    /** Название родительской категории */
    parentName?: string;
    /** ID предмета */
    subjectID?: number;
    /** Название предмета */
    subjectName?: string;
  }[];
}

export interface CommissionChina {
  /** Список комиссий */
  report?: {
    /** Комиссия для продавцов из Китая, % */
    kgvpChina?: number;
    /** ID родительской категории */
    parentID?: number;
    /** Название родительской категории */
    parentName?: string;
    /** ID предмета */
    subjectID?: number;
    /** Название предмета */
    subjectName?: string;
  }[];
}

export interface CommissionTurkey {
  /** Список комиссий */
  report?: {
    /** Комиссия для продавцов из Турции, % */
    kgvpTurkey?: number;
    /** ID родительской категории */
    parentID?: number;
    /** Название родительской категории */
    parentName?: string;
    /** ID предмета */
    subjectID?: number;
    /** Название предмета */
    subjectName?: string;
  }[];
}

export interface CommissionUzbekistan {
  /** Список комиссий */
  report?: {
    /** Комиссия для продавцов из Узбекистана, % */
    kgvpUzbekistan?: number;
    /** ID родительской категории */
    parentID?: number;
    /** Название родительской категории */
    parentName?: string;
    /** ID предмета */
    subjectID?: number;
    /** Название предмета */
    subjectName?: string;
  }[];
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
 * @title Тарифы
 *
 * <p>Комиссии и тарифы на услуги можно получить с любым токеном, у которого не выбрана опция Тестовый контур.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description <p>Комиссия WB по родительским категориям товаров согласно модели продаж.</p> <p>Максимум — 1 запрос в минуту.</p>
     *
     * @tags Комиссии
     * @name V1TariffsCommissionList
     * @summary Комиссия по категориям товаров
     * @request GET:/api/v1/tariffs/commission
     * @secure
     */
    v1TariffsCommissionList: (
      query?: {
        /**
         * Язык полей ответа `parentName` и `subjectName`:
         *   - `ru` — русский
         *   - `en` — английский
         *   - `zh` — китайский
         * @example "ru"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Commission | CommissionChina | CommissionTurkey | CommissionUzbekistan, void>({
        path: `/api/v1/tariffs/commission`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description <p>Для товаров, которые поставляются на склад в коробах (коробках), возвращает стоимость:</p> <ul> <li>доставки со склада или пункта приёма до покупателя;</li> <li>доставки от покупателя до пункта приёма;</li> <li>хранения на складе Wildberries.</li> </ul> <p>Максимум — 60 запросов в минуту.</p>
     *
     * @tags Коэффициенты складов
     * @name V1TariffsBoxList
     * @summary Тарифы для коробов
     * @request GET:/api/v1/tariffs/box
     * @secure
     */
    v1TariffsBoxList: (
      query: {
        /** Дата в формате ГГГГ-ММ-ДД */
        date: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TariffsBoxResponse, void>({
        path: `/api/v1/tariffs/box`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description <p>Для товаров, которые поставляются на склад Wildberries на монопаллетах, возвращает стоимость:</p> <ul> <li>доставки со склада до покупателя;</li> <li>доставки от покупателя до склада;</li> <li>хранения на складе Wildberries.</li> </ul> <p>Максимум — 60 запросов в минуту.</p>
     *
     * @tags Коэффициенты складов
     * @name V1TariffsPalletList
     * @summary Тарифы для монопаллет
     * @request GET:/api/v1/tariffs/pallet
     * @secure
     */
    v1TariffsPalletList: (
      query: {
        /** Дата в формате ГГГГ-ММ-ДД */
        date: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TariffsPalletResponse, void>({
        path: `/api/v1/tariffs/pallet`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает [тарифы](https://seller.wildberries.ru/dynamic-product-categories/return-cost): - на перевозку товаров со склада Wildberries или из пункта приёма до продавца - на обратную перевозку возвратов, которые не забрал продавец Максимум — 60 запросов в минуту
     *
     * @tags Стоимость возврата продавцу
     * @name V1TariffsReturnList
     * @summary Тарифы на возврат
     * @request GET:/api/v1/tariffs/return
     * @secure
     */
    v1TariffsReturnList: (
      query: {
        /** Дата в формате ГГГГ-ММ-ДД */
        date: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ReturnTariffsResponse, void>({
        path: `/api/v1/tariffs/return`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
