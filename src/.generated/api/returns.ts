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
 * @title Возвраты покупателями
 *
 * Работа с возвратами товаров покупателями
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Возвращает заявки покупателей на возврат товаров за текущие 14 дней.<br> Максимум 20 запросов в минуту
     *
     * @name V1ClaimsList
     * @summary Заявки покупателей на возврат
     * @request GET:/api/v1/claims
     * @secure
     */
    v1ClaimsList: (
      query: {
        /**
         * Состояние заявки:
         *   * `false` — на рассмотрении
         *   * `true` — в архиве
         * @example true
         */
        is_archive: boolean;
        /**
         * ID заявки
         * @format UUID
         * @example "fe3e9337-e9f9-423c-8930-946a8ebef80"
         */
        id?: string;
        /**
         * Количество заявок в ответе. По умолчанию `50`
         * @format uint
         * @min 1
         * @max 200
         * @example 50
         */
        limit?: number;
        /**
         * После какого элемента выдавать данные. По умолчанию `0`
         * @format uint
         * @min 0
         * @example 0
         */
        offset?: number;
        /**
         * Артикул WB
         * @example 196320101
         */
        nm_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Заявки */
          claims?: {
            /**
             * ID заявки
             * @format UUID
             */
            id?: string;
            /**
             * Источник заявки:
             *   * `1` — портал покупателей
             *   * `3` — чат
             */
            claim_type?: number;
            /**
             * Решение по возврату покупателю:
             *   * `0` — на рассмотрении
             *   * `1` — отказ
             *   * `2` — одобрено
             */
            status?: number;
            /**
             * Статус товара:
             *   * `0` — на рассмотрении
             *   * `1` — остаётся у покупателя
             *   * `2` — без возврата
             *   * `5` — без возврата
             *   * `8` — товар будет возвращён в реализацию или оформлен на возврат после проверки WB
             *   * `10` — возврат продавцу
             */
            status_ex?: number;
            /** Артикул WB */
            nm_id?: number;
            /**
             * Комментарий покупателя
             * @maxLength 1000
             */
            user_comment?: string;
            /**
             * Ответ покупателю
             * @maxLength 10000
             */
            wb_comment?: string;
            /**
             * Дата и время оформления заявки покупателем
             * @format date-time
             */
            dt?: string;
            /** Название товара */
            imt_name?: string;
            /**
             * Дата и время заказа
             * @format date-time
             */
            order_dt?: string;
            /**
             * Дата и время рассмотрения заявки. Для нерассмотренной заявки — дата и время оформления
             * @format date-time
             */
            dt_update?: string;
            /**
             * Фотографии из заявки покупателя
             * @maxItems 10
             * @minItems 0
             */
            photos?: string[];
            /**
             * Видео из заявки покупателя
             * @maxItems 1
             * @minItems 0
             */
            video_paths?: string[];
            /**
             * Варианты ответа продавца.<br> Отклонённые заявки можно пересмотреть. Если массив пуст, с заявкой работать нельзя.
             *   * `approve1` — одобрить с проверкой брака.<br>Деньги вернутся покупателю после возврата товара. Товар будет проверен на складе. При подтверждении брака/ошибки вложения товар будет отправлен продавцу. Если брак/ошибка вложения не подтвердятся, товар будет возвращён в продажу.
             *   * `approve2` — одобрить и забрать товар.<br> Деньги вернутся покупателю после возврата товара. Товар будет отправлен продавцу.
             *   * `autorefund1` — одобрить без возврата товара.<br> Товар останется у покупателя. Деньги за него будут возвращены покупателю без возврата товара.
             *   * `reject1` — отклонить с шаблоном ответа: <details><summary><strong>Брак не обнаружен</strong></summary>Здравствуйте! Заявка онлайн на проверку качества товара рассмотрена.<br>По предоставленной информации (фото, видео, комментарий) брак не подтвержден.</details>
             *   * `reject2` — отклонить с шаблоном ответа: <details><summary><strong>Добавить фото/видео</strong></summary>Добрый день! Заявка онлайн на проверку качества товара рассмотрена и отклонена по причине некорректного оформления. Обращаем Ваше внимание, что в комментариях должна быть представлена информация (описание) о наличии предполагаемого производственного брака, а фотографии (не менее двух) и (или) видео - отображать следующую информацию:<br>1. Обзорное изображение товара целиком<br>2. Крупный план вшивной бирки (или другая маркировка товара)<br>3. При наличии упаковки со штрих-кодом - фото ШК.<br>4. Предполагаемый дефект товара.<br>Просим Вас переоформить заявку с соблюдением необходимых условий.</details>
             *   * `reject3` — отклонить с шаблоном ответа: <details><summary><strong>Направить в сервисный центр</strong></summary>Здравствуйте! Мы внимательно прочитали заявку, проверили фото и видео. К сожалению, мы не нашли брак, повреждение или несоответствие описанию в вашем товаре. Обратитесь напрямую в сервисный центр — его адрес и контакты есть на сайте производителя или на гарантийном талоне. Там проведут окончательную проверку товара и выдадут вам акт. Если центр нашёл брак, то отправьте этот акт в чат на нашем сайте.</details>
             */
            actions?: string[];
            /** Фактическая цена с учетом всех скидок. Взимается с покупателя */
            price?: number;
            /** Код валюты цены */
            currency_code?: string;
          }[];
          /** Количество заявок, соответствующих параметрам запроса. Без учёта `limit` и `offset` */
          total?: number;
        },
        | {
            /**
             * ID ошибки
             * @example "Invalid query params"
             */
            title?: string;
            /**
             * Описание ошибки
             * @example "Failed to deserialize query string: missing field `is_archive`"
             */
            detail?: string;
            /**
             * ID запроса
             * @example "e0aedc10-9789-49c1-9a83-d8422b4703dc"
             */
            requestId?: string;
          }
        | void
        | string
      >({
        path: `/api/v1/claims`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Отправляет ответ на заявку покупателя на возврат.<br> Максимум 20 запросов в минуту
     *
     * @name V1ClaimPartialUpdate
     * @summary Ответ на заявку покупателя
     * @request PATCH:/api/v1/claim
     * @secure
     */
    v1ClaimPartialUpdate: (
      data: {
        /**
         * ID заявки
         * @format UUID
         * @example "fe3e9337-e9f9-423c-8930-946a8ebef80"
         */
        id?: string;
        /**
         * Действие с заявкой.<br>Используйте одно из значений массива `actions` — ответа [метода получения заявок](./#/paths/~1api~1v1~1claims/get)
         * @example "autorefund1"
         */
        action?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        any,
        | {
            /**
             * ID ошибки
             * @example "Validation error"
             */
            title?: string;
            /**
             * Описание ошибки
             * @example "Input model is not valid; Details: The Action field is required."
             */
            detail?: string;
            /**
             * ID запроса
             * @example "0HN3PI6JUGFSL:00000004"
             */
            requestId?: string;
          }
        | void
        | string
      >({
        path: `/api/v1/claim`,
        method: "PATCH",
        body: data,
        secure: true,
        ...params,
      }),
  };
}
