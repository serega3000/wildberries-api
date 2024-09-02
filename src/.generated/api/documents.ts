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

export interface RequestDownload {
  params?: {
    /** Формат документа */
    extension?: string;
    /** Уникальный ID документа */
    serviceName?: string;
  }[];
}

export interface GetCategories {
  data?: {
    /** Категории документов */
    categories?: {
      /**
       * ID категории документа из параметра [запроса](./#/paths/~1api~1v1~1documents~1list/get) `category`
       * @example "redeem-notification"
       */
      name?: string;
      /**
       * Название категории документа из поля [ответа](./#/paths/~1api~1v1~1documents~1list/get) `category`
       * @example "Уведомление о выкупе"
       */
      title?: string;
    }[];
  };
}

export interface GetList {
  data?: {
    /** Список документов */
    documents?: {
      /**
       * Уникальный ID документа
       * @example "redeem-notification-44841941"
       */
      serviceName?: string;
      /**
       * Название документа
       * @example "redeem-notification"
       */
      name?: string;
      /**
       * Название [категории документов](./#/paths/~1api~1v1~1documents~1categories/get) из поля ответа `title`
       * @example "Уведомление о выкупе"
       */
      category?: string;
      /** Форматы документа */
      extensions?: string[];
      /**
       * Дата и время создания документа
       * @example "2023-10-03T00:18:06.879Z"
       */
      creationTime?: string;
      /**
       * Выгружен ли документ в личном кабинете
       * @example false
       */
      viewed?: boolean;
    }[];
  };
}

export interface GetDoc {
  data?: {
    /**
     * Название документа
     * @example "Notice of redemption 44841941.zip"
     */
    fileName?: string;
    /**
     * Формат документа
     * @example "zip"
     */
    extension?: string;
    /**
     * Документ в кодировке base64
     * @example "UEsDBBQACAgIAAAAAAAAAAAAAAAAAAAAAABHAAAA0KPQstC10LTQvtC80LvQtdC90LjQtSDQviDQstGL0LrRg9C/0LUg4oSWNDQ4NDE5NDEg0L7RgiAyNS4wOS4yMDIzLnhsc3jsnQk0lP3f/0dEUiRkNwmVECI7o0WS7EklxprdkH2bKVkqISRkGSlkaxRlN2TPnmzJvu/Gzmz/Uz33fY/L8/Q8zrn/x/07565zcjrn9f1cn/V6f69v53zTVCWnYATtA+0DAX/Rg0AgM5ip5l2Yg5OwKeyu+Wl3O1vbcA3YV5FDVfPej2vXKptOK1V9LjycmPDG72uW4vcG9xdsOI1V2wj86sk6+4nHJeZ92NFgC/He3gmDlccFXSyumXYUGSKK4hLLsqu5aBTspu5lqlcGB/JNlQVn1Eumj6o8ZEWPRotEVGkH9/kf457totEKj2N2P4dSZWAIaC0ajy5J+VL5fen1YOhcGMxvvUw+XOKFOHL...LSL/tC77s0GzTi2iBuHorbMpcOaw0Hmsc/gpk7ty3/cdDYRmhkRUPAIC37P94CA8oiP/fIvpPK8n9l43YARWRgH/tI6E3ntD/nfOfPyj9jxxDwn+b8/8dZqBDQPjPNSAACJgBAAD21P9s/y8AAP//UEsHCFHrudyQEwAASxQAAFBLAQIUABQACAgIAAAAAACH4v2BaSgAAGNjAABHAAAAAAAAAAAAAAAAAAAAAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeFBLAQIUABQACAgIAAAAAADTmLxwRQcAAGAPAABLAAAAAAAAAAAAAAAAAN4oAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeC5zaWdQSwECFAAUAAgACAAAAAAAUeu53JATAABLFAAACAAAAAAAAAAAAAAAAACcMAAAbWNoZC56aXBQSwUGAAAAAAMAAwAkAQAAYkQAAAAA"
     */
    document?: string;
  };
}

export interface GetDocs {
  data?: {
    /**
     * Название документа
     * @example "documents.zip"
     */
    fileName?: string;
    /**
     * Формат документа
     * @example "zip"
     */
    extension?: string;
    /**
     * Документ в кодировке base64
     * @example "UEsDBBQACAgIAAAAAAAAAAAAAAAAAAAAAABHAAAA0KPQstC10LTQvtC80LvQtdC90LjQtSDQviDQstGL0LrRg9C/0LUg4oSWNDQ4NDE5NDEg0L7RgiAyNS4wOS4yMDIzLnhsc3jsnQk0lP3f/0dEUiRkNwmVECI7o0WS7EklxprdkH2bKVkqISRkGSlkaxRlN2TPnmzJvu/Gzmz/Uz33fY/L8/Q8zrn/x/07565zcjrn9f1cn/V6f69v53zTVCWnYATtA+0DAX/Rg0AgM5ip5l2Yg5OwKeyu+Wl3O1vbcA3YV5FDVfPej2vXKptOK1V9LjycmPDG72uW4vcG9xdsOI1V2wj86sk6+4nHJeZ92NFgC/He3gmDlccFXSyumXYUGSKK4hLLsqu5aBTspu5lqlcGB/JNlQVn1Eumj6o8ZEWPRotEVGkH9/kf457totEKj2N2P4dSZWAIaC0ajy5J+VL5fen1YOhcGMxvvUw+XOKFOHL...LSL/tC77s0GzTi2iBuHorbMpcOaw0Hmsc/gpk7ty3/cdDYRmhkRUPAIC37P94CA8oiP/fIvpPK8n9l43YARWRgH/tI6E3ntD/nfOfPyj9jxxDwn+b8/8dZqBDQPjPNSAACJgBAAD21P9s/y8AAP//UEsHCFHrudyQEwAASxQAAFBLAQIUABQACAgIAAAAAACH4v2BaSgAAGNjAABHAAAAAAAAAAAAAAAAAAAAAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeFBLAQIUABQACAgIAAAAAADTmLxwRQcAAGAPAABLAAAAAAAAAAAAAAAAAN4oAADQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+INCy0YvQutGD0L/QtSDihJY0NDg0MTk0MSDQvtGCIDI1LjA5LjIwMjMueGxzeC5zaWdQSwECFAAUAAgACAAAAAAAUeu53JATAABLFAAACAAAAAAAAAAAAAAAAACcMAAAbWNoZC56aXBQSwUGAAAAAAMAAwAkAQAAYkQAAAAA"
     */
    document?: string;
  };
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
 * @title API документов
 *
 * С помощью этих методов можно получать [документы](https://seller.wildberries.ru/supplementary-agreements) продавца
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Возвращает категории документов. <br> Максимум 1 запрос в 10 секунд
     *
     * @name V1DocumentsCategoriesList
     * @summary Категории документов
     * @request GET:/api/v1/documents/categories
     * @secure
     */
    v1DocumentsCategoriesList: (
      query?: {
        /**
         * Язык поля `title`:
         *   - `ru` — русский
         *   - `en` — английский
         *   - `zh` — китайский
         * @default "en"
         * @example "ru"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetCategories, void>({
        path: `/api/v1/documents/categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список документов продавца. <br> Максимум 1 запрос в 10 секунд
     *
     * @name V1DocumentsListList
     * @summary Список документов
     * @request GET:/api/v1/documents/list
     * @secure
     */
    v1DocumentsListList: (
      query?: {
        /**
         * Язык поля `category`:
         *   - `ru` — русский
         *   - `en` — английский
         *   - `zh` — китайский
         * @default "en"
         * @example "ru"
         */
        locale?: string;
        /**
         * Начало периода. Только вместе с `endTime`
         * @format ГГГГ-MM-ДД
         * @example "2024-07-09T00:00:00.000Z"
         */
        beginTime?: number;
        /**
         * Конец периода. Только вместе с `beginTime`
         * @format ГГГГ-MM-ДД
         * @example "2024-07-15T00:00:00.000Z"
         */
        endTime?: number;
        /**
         * Сортировка:
         *   - `date` — по дате создания документа
         *   - `category` — по категории (только при `locale=ru`)
         *
         * Только вместе с `order`
         * @default "date"
         * @example "category"
         */
        sort?: "date" | "category";
        /**
         * Порядок данных:
         *   - `desc` — от поздней даты к ранней, от первой до последней буквы алфавита по названиям категорий
         *   - `asc` — от ранней даты к поздней, от последней до первой буквы алфавита по названиям категорий
         *
         * Только вместе с `sort`
         * @default "desc"
         * @example "asc"
         */
        order?: "desc" | "asc";
        /**
         * ID [категории документов](./#/paths/~1api~1v1~1documents~1categories/get) из поля `name`
         * @example "redeem-notification"
         */
        category?: string;
        /**
         * Уникальный ID документа
         * @example "redeem-notification-44841941"
         */
        serviceName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetList,
        {
          /** Заголовок ошибки */
          title?: string;
          /** HTTP статус-код */
          status?: number;
          /** Детализация ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/documents/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает один документ. <br> Максимум 1 запрос в 10 секунд
     *
     * @name V1DocumentsDownloadList
     * @summary Получить документ
     * @request GET:/api/v1/documents/download
     * @secure
     */
    v1DocumentsDownloadList: (
      query: {
        /**
         * Уникальный ID документа
         * @example "redeem-notification-44841941"
         */
        serviceName: string;
        /**
         * Формат документа
         * @example "zip"
         */
        extension: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetDoc,
        {
          /** Заголовок ошибки */
          title?: string;
          /** HTTP статус-код */
          status?: number;
          /** Детализация ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/documents/download`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает больше одного документа. Можно получить неограниченное количество документов. <br> Максимум 1 запрос в 5 минут
     *
     * @name V1DocumentsDownloadAllCreate
     * @summary Получить документы
     * @request POST:/api/v1/documents/download/all
     * @secure
     */
    v1DocumentsDownloadAllCreate: (data: RequestDownload, params: RequestParams = {}) =>
      this.request<
        GetDocs,
        {
          /** Заголовок ошибки */
          title?: string;
          /** HTTP статус-код */
          status?: number;
          /** Детализация ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/documents/download/all`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
