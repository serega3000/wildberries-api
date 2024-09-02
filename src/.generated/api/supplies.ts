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

export interface ModelsAcceptanceCoefficient {
  /** Дата начала действия коэффициента */
  date?: string;
  /**
   * Коэффициент приёмки:
   *   - `-1` — поставка недоступна
   *   - `0` — бесплатная поставка
   *   - от `1` — множитель стоимости приёмки
   */
  coefficient?: number;
  /** ID склада. По нему можно получить [информацию о складе](./#tag/Informaciya-dlya-formirovaniya-postavok/paths/~1api~1v1~1warehouses/get) */
  warehouseID?: number;
  /** Название склада */
  warehouseName?: string;
  /**
   * Тип поставки:
   *   - `Короба`
   *   - `Монопаллеты`
   *   - `Суперсейф`
   *   - `QR-поставка с коробами`
   */
  boxTypeName?: string;
  /**
   * ID типа поставки:
   *   - `2` — Короба
   *   - `5` — Монопаллеты
   *   - `6` — Суперсейф
   * <br>Для типа поставки **QR-поставка с коробами** поле не возвращается
   */
  boxTypeID?: number;
}

/** @example {"ID":210515,"name":"Вёшки","address":"Липкинское шоссе, 2-й километр, вл1с1, посёлок Вёшки, городской округ Мытищи, Московская область","workTime":"24/7","acceptsQR":false} */
export interface ModelsWarehousesResultItems {
  /** ID склада */
  ID?: number;
  /** Название склада */
  name?: string;
  /** Адрес склада */
  address?: string;
  /** Режим работы склада */
  workTime?: string;
  /**
   * Принимает ли склад QR-поставки:
   * - `true` — да
   * - `false` — нет
   */
  acceptsQr?: boolean;
}

export interface ModelsGood {
  /**
   * Суммарное количество товаров, планируемых для поставки. Максимум 999999
   * @min 1
   * @max 999999
   */
  quantity?: number;
  /** Баркод из карточки товара */
  barcode?: string;
}

export interface ModelsErrorModel {
  /** HTTP статус-код */
  status?: number;
  /** ID ошибки */
  title?: string;
  /** Описание ошибки */
  detail?: string;
  /** ID запроса */
  requestId?: string;
  /** Сервис, вернувший ошибку */
  origin?: string;
}

export interface ModelsOptionsResultModel {
  result?: {
    /** Баркод из карточки товара */
    barcode?: string;
    /** Данные ошибки. При наличии */
    error?: {
      /** ID ошибки */
      title?: string;
      /** Описание ошибки */
      detail?: string;
    };
    /**
     * Наличие ошибки:
     *   - `true` — ошибка есть
     *   - Поля нет — ошибка отсутствует
     */
    isError?: boolean;
    /** Список складов. При наличии ошибки будет `null` */
    warehouses?:
      | {
          /** ID склада. По нему можно получить [информацию о складе](./#tag/Informaciya-dlya-formirovaniya-postavok/paths/~1api~1v1~1warehouses/get) */
          warehouseID?: number;
          /**
           * Тип упаковки **Короб**:
           *   - `true` — доступен
           *   - `false` — недоступен
           */
          canBox?: boolean;
          /**
           * Тип упаковки **Монопаллета**:
           *   - `true` — доступен
           *   - `false` — недоступен
           */
          canMonopallet?: boolean;
          /**
           * Тип упаковки **Суперсейф**:
           *   - `true` — доступен
           *   - `false` — недоступен
           */
          canSupersafe?: boolean;
        }[]
      | null;
  }[];
  /** ID запроса при наличии ошибок */
  requestId?: string;
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
 * @title API Поставок
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Возвращает коэффициенты приёмки для конкретных складов на ближайшие 14 дней. <br>Максимум 6 запросов в минуту
     *
     * @tags Информация для формирования поставок
     * @name V1AcceptanceCoefficientsList
     * @summary Коэффициенты приёмки
     * @request GET:/api/v1/acceptance/coefficients
     * @secure
     */
    v1AcceptanceCoefficientsList: (
      query?: {
        /**
         * ID складов.<br>По умолчанию возвращаются данные по всем складам
         * @example "507,117501"
         */
        warehouseIDs?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ModelsAcceptanceCoefficient[], ModelsErrorModel | void>({
        path: `/api/v1/acceptance/coefficients`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает информацию о том, какие склады и типы упаковки доступны для поставки. Список складов определяется по баркоду товара и его количеству. <br>Максимум 30 запросов в минуту
     *
     * @tags Информация для формирования поставок
     * @name V1AcceptanceOptionsCreate
     * @summary Опции приёмки
     * @request POST:/api/v1/acceptance/options
     * @secure
     */
    v1AcceptanceOptionsCreate: (data: ModelsGood[], params: RequestParams = {}) =>
      this.request<ModelsOptionsResultModel, void>({
        path: `/api/v1/acceptance/options`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список складов Wildberries. <br>Максимум 6 запросов в минуту
     *
     * @tags Информация для формирования поставок
     * @name V1WarehousesList
     * @summary Список складов
     * @request GET:/api/v1/warehouses
     * @secure
     */
    v1WarehousesList: (params: RequestParams = {}) =>
      this.request<ModelsWarehousesResultItems[], void>({
        path: `/api/v1/warehouses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
