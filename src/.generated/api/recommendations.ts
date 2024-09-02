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
 * @title Описание API Рекомендаций
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Метод позволяет добавить рекомендации к товару. <br> `ВАЖНО!` Если запрос прошел успешно (код ответа 200), а рекомендации не добавилась, то вам необходимо проверить корректность отправленных значений.  <br>На данный момент в методе не предусмотрена валидация значений параметров.  <br>Тщательно проверяйте данные перед отправкой. <br>Максимум 120 запросов в минуту <br> <br>`ВАЖНО!` Если вы получили ответ с кодом 200 и телом вида <b>CrutchSapi1356-65c49a25-7f9798142620 OK</b>, значит минимум одна из переданных номенклатур не принадлежит вам, либо не существует.
     *
     * @tags Рекомендации
     * @name V1InsCreate
     * @summary Добавление рекомендаций
     * @request POST:/api/v1/ins
     * @secure
     */
    v1InsCreate: (
      data: {
        /** Идентификатор товара (`nmId`), к которому добавляется рекомендация */
        nm: number;
        /** Список идентификаторов товаров (`nmId`), которые необходимо добавить в рекомендуемые */
        recom: number[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/api/v1/ins`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет удалить рекомендации. <br> `ВАЖНО!` Если запрос прошел успешно (код ответа 200), а рекомендации не удалились, то вам необходимо проверить корректность отправленных значений. На данный момент в методе не предусмотрена валидация значений параметров. Тщательно проверяйте данные перед отправкой.<br> Максимум 120 запросов в минуту. <br> `ВАЖНО`: Если вы получили ответ с кодом 200 и телом вида <b>CrutchSapi1356-65c49a25-7f9798142620 OK</b>, значит минимум одна из переданных номенклатур не принадлежит вам, либо не существует.
     *
     * @tags Рекомендации
     * @name V1DelCreate
     * @summary Удаление рекомендаций
     * @request POST:/api/v1/del
     * @secure
     */
    v1DelCreate: (
      data: {
        /** Идентификатор товара (`nmId`), у которого необходимо удалить рекомендацию */
        nm: number;
        /** Список идентификаторов товаров (`nmId`), которые необходимо удалить из рекомендуемых */
        recom: number[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/api/v1/del`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет добавлять, удалять рекомендации.<br> Работает по принципу перезаписи, все что указано в recom, ставится взамен того, что было ранее.<br> Чтобы удалить рекомендации необходимо передать пустой массив recom.<br> <br> Максимум 120 запросов в минуту. <br> `ВАЖНО`: Если вы получили ответ с кодом 200 и телом вида <b>CrutchSapi1356-65c49a25-7f9798142620 OK</b>, значит минимум одна из переданных номенклатур не принадлежит вам, либо не существует.
     *
     * @tags Рекомендации
     * @name V1SetCreate
     * @summary Управление рекомендациями
     * @request POST:/api/v1/set
     * @secure
     */
    v1SetCreate: (
      data: {
        /** Артикул WB (`nmId`), которому передается рекомендация */
        nm: number;
        /** Список артикулов WB (`nmId`), которые необходимо передать в рекомендуемые. */
        recom: number[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/api/v1/set`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет получить список рекомендаций по нескольким товарам. <br> Максимум 120 запросов в минуту. <br> `ВАЖНО`: Если вы получили ошибку с кодом 200 и сообщением вида <b>CrutchSapi1356-65c49a25-7f9798142620-UKfmVPyPcik6d OK</b>, значит минимум одна из переданных номенклатур не принадлежит вам, либо не существует.
     *
     * @tags Рекомендации
     * @name V1ListCreate
     * @summary Список рекомендаций
     * @request POST:/api/v1/list
     * @secure
     */
    v1ListCreate: (data: number[], params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /** Артикул WB, по которому запрошены рекомендации. */
            nm?: number;
            /** Список рекомендаций */
            list?: number[];
          }[];
        },
        void
      >({
        path: `/api/v1/list`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
