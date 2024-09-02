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

export interface ResponseError {
  data?: object | null;
  error?: boolean;
  errorText?: string;
}

export interface TaskAlreadyExistsError {
  data?: {
    /** ID загрузки */
    id?: number;
    /** Флаг дублирования загрузки: `true` — такая загрузка уже есть */
    alreadyExists?: boolean;
  };
  /** Флаг ошибки */
  error?: boolean;
  /** Текст ошибки */
  errorText?: string;
}

export interface TaskCreated {
  data?: {
    /** ID загрузки */
    id?: number;
    /**
     * Флаг дублирования загрузки: `true` — такая загрузка уже есть
     * @example false
     */
    alreadyExists?: boolean;
  };
  /**
   * Флаг ошибки
   * @example false
   */
  error?: boolean;
  /**
   * Текст ошибки
   * @example ""
   */
  errorText?: string;
}

/**
 * Товары, цены и скидки для них. Максимум 1 000 товаров. Цена и скидка не могут быть пустыми одновременно.
 * <br><br>
 * Если новая цена со скидкой будет хотя бы в 3 раза меньше старой, она попадёт [в карантин](https://seller.wildberries.ru/discount-and-prices/quarantine) и товар будет продаваться по старой цене. Ошибка об этом будет в ответах методов [Состояния загрузок](./#tag/Sostoyaniya-zagruzok)
 * <br><br>
 * Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина [в личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine)
 */
export type Goods = Good[];

export interface Good {
  /**
   * Артикул Wildberries
   * @example 123
   */
  nmID: number;
  /**
   * Цена. Валюту можно получить с помощью метода [Получение списка товаров по артикулам](./#tag/Spiski-tovarov/paths/~1api~1v2~1list~1goods~1filter/get), поле `currencyIsoCode4217`
   * @example 999
   */
  price?: number;
  /**
   * Скидка, %
   * @example 30
   */
  discount?: number;
}

/**
 * Размеры и цены для них. Максимум 1 000 размеров
 * <br><br>
 * Для товаров с поразмерной установкой цен карантин не применяется
 */
export type SizeGoodsBody = SizeGoodReq[];

export interface SizeGoodReq {
  /**
   * Артикул Wildberries
   * @example 123
   */
  nmID: number;
  /**
   * ID размера. Можно получить с помощью метода [Получение списка товаров по артикулам](./#tag/Spiski-tovarov/paths/~1api~1v2~1list~1goods~1filter/get), поле `sizeID`. В методах контента это поле `chrtID`
   * @example 98989887
   */
  sizeID: number;
  /**
   * Цена. Валюту можно получить с помощью метода [Получение списка товаров по артикулам](./#tag/Spiski-tovarov/paths/~1api~1v2~1list~1goods~1filter/get), поле `currencyIsoCode4217`
   * @example 999
   */
  price: number;
}

/** Размеры товара */
export interface GoodsList {
  /**
   * Артикул Wildberries
   * @example 98486
   */
  nmID?: number;
  /**
   * Артикул продавца
   * @example "07326060"
   */
  vendorCode?: string;
  /** Размер */
  sizes?: {
    /**
     * ID размера. В методах контента это поле `chrtID`
     * @format int64
     * @example 3123515574
     */
    sizeID?: number;
    /**
     * Цена
     * @example 500
     */
    price?: number;
    /**
     * Цена со скидкой
     * @example 350
     */
    discountedPrice?: number;
    /**
     * Размер товара
     * @example "42"
     */
    techSizeName?: string;
  }[];
  /**
   * Валюта, по стандарту ISO 4217
   * @example "RUB"
   */
  currencyIsoCode4217?: string;
  /**
   * Скидка, %
   * @example 30
   */
  discount?: number;
  /**
   * Можно ли устанавливать цены отдельно для разных размеров: `true` — можно, `false` — нельзя. Эта возможность зависит от категории товара
   * @example true
   */
  editableSizePrice?: boolean;
}

/** Информация о размере */
export interface SizeGood {
  /**
   * Артикул Wildberries
   * @example 123
   */
  nmID?: number;
  /**
   * ID размера. Можно получить с помощью метода [Получение списка товаров по артикулам](./#tag/Spiski-tovarov/paths/~1api~1v2~1list~1goods~1filter/get), поле `sizeID`. В методах контента это поле `chrtID`
   * @example 98989887
   */
  sizeID?: number;
  /**
   * Артикул продавца
   * @example "34552332"
   */
  vendorCode?: string;
  /**
   * Цена
   * @example 25000
   */
  price?: number;
  /**
   * Валюта, по стандарту ISO 4217
   * @example "RUB"
   */
  currencyIsoCode4217?: string;
  /**
   * Цена со скидкой
   * @example 14250
   */
  discountedPrice?: number;
  /**
   * Скидка, %
   * @example 43
   */
  discount?: number;
  /**
   * Размер товара
   * @example "42"
   */
  techSizeName?: string;
  /**
   * Можно ли устанавливать цены отдельно для разных размеров: `true` — можно, `false` — нельзя. Эта возможность зависит от категории товара
   * @example true
   */
  editableSizePrice?: boolean;
}

export interface GoodBufferHistory {
  /**
   * Артикул Wildberries
   * @example 544833232
   */
  nmID?: number;
  /**
   * Артикул продавца
   * @example "34552332"
   */
  vendorCode?: string;
  /**
   * ID размера. В методах контента это поле `chrtID`
   * @example 54483342
   */
  sizeID?: number;
  /**
   * Размер
   * @example "XXL"
   */
  techSizeName?: string;
  /**
   * Цена
   * @example 1500
   */
  price?: number;
  /**
   * Валюта, по стандарту ISO 4217
   * @example "RUB"
   */
  currencyIsoCode4217?: string;
  /**
   * Скидка, %
   * @example 25
   */
  discount?: number;
  /** Статус товара: `1` — в обработке */
  status?: GoodStatusBuffer;
  /**
   * Текст ошибки
   * @example null
   */
  errorText?: string;
}

export interface GoodHistory {
  /**
   * Артикул Wildberries
   * @example 544833232
   */
  nmID?: number;
  /**
   * Артикул продавца
   * @example "34552332"
   */
  vendorCode?: string;
  /**
   * ID размера. В методах контента это поле `chrtID`
   * @example 54483342
   */
  sizeID?: number;
  /**
   * Размер
   * @example "42"
   */
  techSizeName?: string;
  /**
   * Цена
   * @example 1500
   */
  price?: number;
  /**
   * Валюта, по стандарту ISO 4217
   * @example "RUB"
   */
  currencyIsoCode4217?: string;
  /**
   * Скидка, %
   * @example 25
   */
  discount?: number;
  /**
   * Статус товара:
   *   * `2` — товар без ошибок, цена и/или скидка обновилась
   *   * `3` — есть ошибки, данные не обновились
   */
  status?: GoodStatus;
  /**
   * Текст ошибки
   *
   * <blockquote class="spoiler">
   *   <p class="descr">Ошибка <code>The product is in quarantine</code> возникает, если новая цена со скидкой хотя бы в 3 раза меньше старой. Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина <a href="https://seller.wildberries.ru/discount-and-prices/quarantine">в личном кабинете</a></p>
   * </blockquote>
   * @example "The product is in quarantine"
   */
  errorText?: string;
}

export interface SupplierTaskMetadata {
  /**
   * ID загрузки
   * @example 395643565
   */
  uploadID?: number;
  /**
   * Статус загрузки:
   *   * `3` — обработана, в товарах нет ошибок, цены и скидки обновились
   *   * `4` — отменена
   *   * `5` — обработана, но в товарах есть ошибки. Для товаров без ошибок цены и скидки обновились, а ошибки в остальных товарах можно получить с помощью метода [Детализация обработанной загрузки](#tag/Istoriya-zagruzok/paths/~1api~1v2~1history~1goods~1task/get)
   *   * `6` — обработана, но во всех товарах есть ошибки. Их тоже можно получить с помощью метода [Детализация обработанной загрузки](#tag/Istoriya-zagruzok/paths/~1api~1v2~1history~1goods~1task/get)
   */
  status?: TaskStatus;
  /** Дата и время, когда загрузка создана */
  uploadDate?: Date;
  /** Дата и время, когда загрузка отправляется в обработку */
  activationDate?: Date1;
  /** Всего товаров */
  overAllGoodsNumber?: number;
  /** Товаров без ошибок */
  successGoodsNumber?: number;
}

export interface SupplierTaskMetadataBuffer {
  /**
   * ID загрузки
   * @example 395643565
   */
  uploadID?: number;
  /** Статус загрузки: `1` — в обработке */
  status?: TaskStatusBuffer;
  /** Дата и время, когда загрузка создана */
  uploadDate?: Date;
  /** Дата и время, когда загрузка отправляется в обработку */
  activationDate?: Date1;
  /**
   * Всего товаров
   * @example 100
   */
  overAllGoodsNumber?: number;
  /**
   * Товаров без ошибок (0, потому что загрузка в обработке)
   * @example 0
   */
  successGoodsNumber?: number;
}

/**
 * Дата и время, когда загрузка создана
 * @format date
 * @pattern YYYY-MM-DDTHH:MM:SSZ
 * @example "2022-08-21T22:00:13+02:00"
 */
export type Date = string;

/**
 * Дата и время, когда загрузка отправляется в обработку
 * @format date
 * @pattern YYYY-MM-DDTHH:MM:SSZ
 * @example "2022-08-21T22:00:13+02:00"
 */
export type Date1 = string;

/**
 * Статус загрузки:
 *   * `3` — обработана, в товарах нет ошибок, цены и скидки обновились
 *   * `4` — отменена
 *   * `5` — обработана, но в товарах есть ошибки. Для товаров без ошибок цены и скидки обновились, а ошибки в остальных товарах можно получить с помощью метода [Детализация обработанной загрузки](#tag/Istoriya-zagruzok/paths/~1api~1v2~1history~1goods~1task/get)
 *   * `6` — обработана, но во всех товарах есть ошибки. Их тоже можно получить с помощью метода [Детализация обработанной загрузки](#tag/Istoriya-zagruzok/paths/~1api~1v2~1history~1goods~1task/get)
 * @example 3
 */
export type TaskStatus = number;

/**
 * Статус загрузки: `1` — в обработке
 * @example 1
 */
export type TaskStatusBuffer = number;

/**
 * Статус товара:
 *   * `2` — товар без ошибок, цена и/или скидка обновилась
 *   * `3` — есть ошибки, данные не обновились
 * @example 1
 */
export type GoodStatus = number;

/**
 * Статус товара: `1` — в обработке
 * @example 1
 */
export type GoodStatusBuffer = number;

export interface QuarantineGoods {
  /**
   * Артикул WB
   * @example 206025152
   */
  nmID?: number;
  /**
   * Не используется
   * @example null
   */
  sizeID?: number;
  /**
   * Не используется
   * @example ""
   */
  techSizeName?: string;
  /**
   * Валюта по стандарту ISO 4217
   * @example "RUB"
   */
  currencyIsoCode4217?: string;
  /**
   * Новая цена продавца до скидки
   * @format float
   * @example 134
   */
  newPrice?: number;
  /**
   * Текущая цена продавца до скидки
   * @format float
   * @example 4000
   */
  oldPrice?: number;
  /**
   * Новая скидка продавца, %
   * @example 25
   */
  newDiscount?: number;
  /**
   * Текущая скидка продавца, %
   * @example 25
   */
  oldDiscount?: number;
  /**
   * Разница: `newPrice` * (1 - `newDiscount` / 100) - `oldPrice` * (1 - `oldDiscount` / 100)
   * @format float
   * @example -2899.5
   */
  priceDiff?: number;
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
 * @title API цен и скидок
 *
 * С помощью этих методов можно устанавливать цены и скидки. Максимум — 10 запросов за 6 секунд суммарно для всех методов раздела **Цены и скидки**.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Устанавливает цены и скидки для товаров
     *
     * @tags Установка цен и скидок
     * @name V2UploadTaskCreate
     * @summary Установить цены и скидки
     * @request POST:/api/v2/upload/task
     * @secure
     */
    v2UploadTaskCreate: (
      data: {
        /**
         * Товары, цены и скидки для них. Максимум 1 000 товаров. Цена и скидка не могут быть пустыми одновременно.
         * <br><br>
         * Если новая цена со скидкой будет хотя бы в 3 раза меньше старой, она попадёт [в карантин](https://seller.wildberries.ru/discount-and-prices/quarantine) и товар будет продаваться по старой цене. Ошибка об этом будет в ответах методов [Состояния загрузок](./#tag/Sostoyaniya-zagruzok)
         * <br><br>
         * Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина [в личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine)
         */
        data?: Goods;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaskCreated, ResponseError | void>({
        path: `/api/v2/upload/task`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Устанавливает цены отдельно для размеров. Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для таких товаров в ответе метода [Получить товары по артикулам](./#tag/Spiski-tovarov/paths/~1api~1v2~1list~1goods~1filter/get) `editableSizePrice: true`.
     *
     * @tags Установка цен и скидок
     * @name V2UploadTaskSizeCreate
     * @summary Установить цены для размеров
     * @request POST:/api/v2/upload/task/size
     * @secure
     */
    v2UploadTaskSizeCreate: (
      data: {
        /**
         * Размеры и цены для них. Максимум 1 000 размеров
         * <br><br>
         * Для товаров с поразмерной установкой цен карантин не применяется
         */
        data?: SizeGoodsBody;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaskCreated, ResponseError | void>({
        path: `/api/v2/upload/task/size`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию про обработанную загрузку
     *
     * @tags Состояния загрузок
     * @name V2HistoryTasksList
     * @summary Состояние обработанной загрузки
     * @request GET:/api/v2/history/tasks
     * @secure
     */
    v2HistoryTasksList: (
      query: {
        /**
         * ID загрузки
         * @example 146567
         */
        uploadID: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: SupplierTaskMetadata;
          /**
           * Флаг ошибки
           * @example false
           */
          error?: boolean;
          /**
           * Текст ошибки
           *
           * <blockquote class="spoiler">
           *   <p class="descr">Ошибка <code>The product is in quarantine</code> возникает, если новая цена со скидкой хотя бы в 3 раза меньше старой. Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина <a href="https://seller.wildberries.ru/discount-and-prices/quarantine">в личном кабинете</a></p>
           * </blockquote>
           * @example "The product is in quarantine"
           */
          errorText?: string;
        },
        | {
            /**
             * Текст ошибки
             * @example "Invalid query params"
             */
            errorText?: string;
          }
        | void
        | {
            /**
             * Текст ошибки
             * @example "Unknown error"
             */
            errorText?: string;
          }
        | {
            /**
             * Текст ошибки
             * @example "Internal server error"
             */
            errorText?: string;
          }
      >({
        path: `/api/v2/history/tasks`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию о товарах в обработанной загрузке, в том числе, об ошибках в них
     *
     * @tags Состояния загрузок
     * @name V2HistoryGoodsTaskList
     * @summary Детализация обработанной загрузки
     * @request GET:/api/v2/history/goods/task
     * @secure
     */
    v2HistoryGoodsTaskList: (
      query: {
        /**
         * Сколько элементов вывести на одной странице (пагинация). Максимум 1 000 элементов
         * @format uint
         * @example 10
         */
        limit: number;
        /**
         * После какого элемента выдавать данные
         * @format uint
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * ID загрузки
         * @example 146567
         */
        uploadID: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * ID загрузки
             * @example 3235236546
             */
            uploadID?: number;
            /** Информация о товарах в загрузке */
            historyGoods?: GoodHistory[];
          };
        },
        | {
            /**
             * Текст ошибки
             * @example "Invalid query params"
             */
            errorText?: string;
          }
        | void
        | {
            /**
             * Текст ошибки
             * @example "Unknown error"
             */
            errorText?: string;
          }
        | {
            /**
             * Текст ошибки
             * @example "Internal server error"
             */
            errorText?: string;
          }
      >({
        path: `/api/v2/history/goods/task`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию про загрузку в обработке
     *
     * @tags Состояния загрузок
     * @name V2BufferTasksList
     * @summary Состояние необработанной загрузки
     * @request GET:/api/v2/buffer/tasks
     * @secure
     */
    v2BufferTasksList: (
      query: {
        /**
         * ID загрузки
         * @example 146567
         */
        uploadID: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: SupplierTaskMetadataBuffer;
          /**
           * Флаг ошибки
           * @example false
           */
          error?: boolean;
          /**
           * Текст ошибки
           * @example ""
           */
          errorText?: string;
        },
        | {
            /**
             * Текст ошибки
             * @example "Invalid query params"
             */
            errorText?: string;
          }
        | void
        | {
            /**
             * Текст ошибки
             * @example "Unknown error"
             */
            errorText?: string;
          }
        | {
            /**
             * Текст ошибки
             * @example "Internal server error"
             */
            errorText?: string;
          }
      >({
        path: `/api/v2/buffer/tasks`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию о товарах из загрузки в обработке, в том числе, об ошибках в них
     *
     * @tags Состояния загрузок
     * @name V2BufferGoodsTaskList
     * @summary Детализация необработанной загрузки
     * @request GET:/api/v2/buffer/goods/task
     * @secure
     */
    v2BufferGoodsTaskList: (
      query: {
        /**
         * Сколько элементов вывести на одной странице (пагинация). Максимум 1 000 элементов
         * @format uint
         * @example 10
         */
        limit: number;
        /**
         * После какого элемента выдавать данные
         * @format uint
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * ID загрузки
         * @example 146567
         */
        uploadID: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * ID загрузки
             * @example 3235236546
             */
            uploadID?: number;
            /** Информация о товарах в загрузке */
            bufferGoods?: GoodBufferHistory[];
          };
          /**
           * Флаг ошибки
           * @example false
           */
          error?: boolean;
          /**
           * Текст ошибки
           * @example ""
           */
          errorText?: string;
        },
        | {
            /**
             * Текст ошибки
             * @example "Invalid query params"
             */
            errorText?: string;
          }
        | void
        | {
            /**
             * Текст ошибки
             * @example "Unknown error"
             */
            errorText?: string;
          }
        | {
            /**
             * Текст ошибки
             * @example "Internal server error"
             */
            errorText?: string;
          }
      >({
        path: `/api/v2/buffer/goods/task`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию о товаре по его артикулу. Чтобы получить информацию обо всех товарах, оставьте артикул пустым
     *
     * @tags Списки товаров
     * @name V2ListGoodsFilterList
     * @summary Получить товары
     * @request GET:/api/v2/list/goods/filter
     * @secure
     */
    v2ListGoodsFilterList: (
      query: {
        /**
         * Сколько элементов вывести на одной странице (пагинация). Максимум 1 000 элементов
         * @format uint
         * @example 10
         */
        limit: number;
        /**
         * После какого элемента выдавать данные
         * @format uint
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * Артикул Wildberries, по которому искать товар
         * @example 44589768676
         */
        filterNmID?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Информация о товарах */
            listGoods?: GoodsList[];
          };
        },
        ResponseError | void
      >({
        path: `/api/v2/list/goods/filter`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию о всех размерах одного товара. Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для таких товаров в ответе метода [Получить товары по артикулам](./#tag/Spiski-tovarov/paths/~1api~1v2~1list~1goods~1filter/get) `editableSizePrice: true`.
     *
     * @tags Списки товаров
     * @name V2ListGoodsSizeNmList
     * @summary Получить размеры товара
     * @request GET:/api/v2/list/goods/size/nm
     * @secure
     */
    v2ListGoodsSizeNmList: (
      query: {
        /**
         * Сколько элементов вывести на одной странице (пагинация). Максимум 1 000 элементов
         * @format uint
         * @example 10
         */
        limit: number;
        /**
         * После какого элемента выдавать данные
         * @format uint
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * Артикул Wildberries
         * @example 1
         */
        nmID: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Размеры товара */
            listGoods?: SizeGood[];
          };
          /**
           * Флаг ошибки
           * @example false
           */
          error?: boolean;
          /** Текст ошибки */
          errorText?: string;
        },
        ResponseError | void
      >({
        path: `/api/v2/list/goods/size/nm`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает информацию о товарах в карантине. <br><br> Если новая цена товара со скидкой будет минимум в 3 раза меньше старой, товар попадёт [в карантин](https://seller.wildberries.ru/discount-and-prices/quarantine) и будет продаваться по старой цене. Ошибка об этом будет в ответах методов [состояний загрузок](./#tag/Sostoyaniya-zagruzok). <br><br> Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина [в личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine). <br><br> Для товаров с [поразмерной установкой цен](https://openapi.wb.ru/prices/api/ru/#tag/Ustanovka-cen-i-skidok/paths/~1api~1v2~1upload~1task~1size/post) карантин не применяется
     *
     * @tags Карантин
     * @name V2QuarantineGoodsList
     * @summary Получить товары в карантине
     * @request GET:/api/v2/quarantine/goods
     * @secure
     */
    v2QuarantineGoodsList: (
      query: {
        /**
         * Сколько элементов вывести на одной странице (пагинация). Максимум 1 000 элементов
         * @format uint
         * @example 10
         */
        limit: number;
        /**
         * После какого элемента выдавать данные
         * @format uint
         * @min 0
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Информация о товарах в карантине */
            quarantineGoods?: QuarantineGoods[];
          };
          /**
           * Флаг ошибки
           * @example false
           */
          error?: boolean;
          /**
           * Текст ошибки
           * @example ""
           */
          errorText?: string;
        },
        ResponseError | void
      >({
        path: `/api/v2/quarantine/goods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
