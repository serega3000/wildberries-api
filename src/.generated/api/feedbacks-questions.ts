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

export interface Response200 {
  data?: {
    templates?: {
      /** Идентификатор шаблона */
      id?: string;
      /** Название шаблона */
      name?: string;
      /** Текст шаблона */
      text?: string;
    }[];
  };
  /** Есть ли ошибка */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string[] | null;
}

export interface PostTemplateOK {
  data?: {
    /** Идентификатор шаблона */
    id?: string;
  };
  /** Есть ли ошибка */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string[] | null;
}

export interface PatchDelRespOK {
  data?: boolean | null;
  /** Есть ли ошибка */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string[] | null;
}

export interface ResponseErrorTemplate {
  data?: object | null;
  /** Есть ли ошибка */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string[] | null;
}

export interface ResponsefeedbackErr {
  data?: object | null;
  /** Есть ли ошибка */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string[] | null;
  requestId?: string;
}

export interface ProductRating {
  /** Артикул WB */
  nmId?: number;
  /** Идентификатор карточки товара */
  imtId?: number;
  /** Сумма оценок */
  valuationsSum?: number;
  /** Количество отзывов */
  feedbacksCount?: number;
  /** Средняя оценка */
  valuation?: number;
  /** Название товара */
  productName?: string | null;
  /** Артикул продавца */
  supplierArticle?: string;
  /** Бренд товара */
  brandName?: string;
}

/** Массив структур отзывов */
export type ResponseFeedback = {
  /** Id отзыва */
  id?: string;
  /** Имя автора отзыва */
  userName?: string;
  /**
   * Соответствие заявленного размера реальному.
   * <br>Возможные значения:
   * - ` ` - для безразмерных товаров
   * - `ок` - соответствует размеру
   * - `smaller` - маломерит
   * - `bigger` - большемерит
   */
  matchingSize?: string;
  /** Текст отзыва */
  text?: string;
  /** Оценка товара от покупателя */
  productValuation?: number;
  /**
   * Дата и время создания отзыва
   * @format date-time
   */
  createdDate?: string;
  /**
   * Статус отзыва:
   *   - `none` - не обработан (новый)
   *   - `wbRu` - обработан
   */
  state?: string;
  /** Структура ответа */
  answer?: {
    /** Текст ответа */
    text?: string;
    /**
     * Статус:
     *   - `none` - новый
     *   - `wbRu` - отображается на сайте
     *   - `reviewRequired` - ответ проходит проверку
     *   - `rejected` - ответ отклонён
     */
    state?: string;
  };
  /** Структура товара */
  productDetails?: {
    /** Артикул WB */
    nmId?: number;
    /** Идентификатор карточки товара */
    imtId?: number;
    /** Название товара */
    productName?: string;
    /** Артикул продавца */
    supplierArticle?: string | null;
    /** Имя продавца */
    supplierName?: string | null;
    /** Бренд товара */
    brandName?: string | null;
    /** Размер товара (`techSize` в КТ) */
    size?: string;
  };
  /** Массив структур фотографий */
  photoLinks?: {
    /** Адрес фотографии полного размера */
    fullSize?: string;
    /** Адрес фотографии маленького размера */
    miniSize?: string;
  }[];
  /** Структура видео */
  video?: {
    /** Ссылка на обложку видео */
    previewImage?: string;
    /** Ссылка на файл плейлиста видео (доступно по протоколу hls) */
    link?: string;
    /** Общая продолжительность видео */
    duration_sec?: number;
  };
  /** Просмотрен ли отзыв */
  wasViewed?: boolean;
  /** Доступна ли продавцу оценка отзыва (`true` - доступна, `false` - не доступна) */
  isAbleSupplierFeedbackValuation?: boolean;
  /** Оценка отзыва, оставленная продавцом */
  supplierFeedbackValuation?: number;
  /** Доступна ли продавцу оценка товара (`true` - доступна, `false` - не доступна) */
  isAbleSupplierProductValuation?: boolean;
  /** Оценка товара, оставленная продавцом */
  supplierProductValuation?: number;
  /** Доступна ли товару опция возврата (`false` - нет, `true` - да) */
  isAbleReturnProductOrders?: boolean;
  /** Дата и время, когда на запрос возврата был получен ответ со статус-кодом 200. */
  returnProductOrdersDate?: string;
  /** Список тегов покупателя */
  bables?: string[];
}[];

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
 * @title Описание API Вопросов и Отзывов
 *
 * Допускается 1 запрос в секунду на методы вопросов и отзывов в целом. При превышении лимита до 3 запросов в секунду последует блокировка на 60 секунд.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Метод позволяет получить количество неотвеченных вопросов за сегодня и за всё время.
     *
     * @tags Вопросы
     * @name V1QuestionsCountUnansweredList
     * @summary Неотвеченные вопросы
     * @request GET:/api/v1/questions/count-unanswered
     * @secure
     */
    v1QuestionsCountUnansweredList: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /**
             * Количество неотвеченных вопросов
             * @example 24
             */
            countUnanswered?: number;
            /**
             * Количество неотвеченных вопросов за сегодня
             * @example 0
             */
            countUnansweredToday?: number;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/questions/count-unanswered`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод отображает информацию о наличии у продавца непросмотренных отзывов и вопросов.
     *
     * @tags Вопросы
     * @name V1NewFeedbacksQuestionsList
     * @summary Непросмотренные отзывы и вопросы
     * @request GET:/api/v1/new-feedbacks-questions
     * @secure
     */
    v1NewFeedbacksQuestionsList: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /**
             * Есть ли непросмотренные вопросы (`true` есть, `false` нет)
             * @example true
             */
            hasNewQuestions?: boolean;
            /**
             * Есть ли непросмотренные отзывы (`true` есть, `false` нет)
             * @example false
             */
            hasNewFeedbacks?: boolean;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        void | ResponsefeedbackErr
      >({
        path: `/api/v1/new-feedbacks-questions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить товары, про которые чаще всего спрашивают.
     *
     * @tags Вопросы
     * @name V1QuestionsProductsRatingList
     * @summary Часто спрашиваемые товары
     * @request GET:/api/v1/questions/products/rating
     * @secure
     */
    v1QuestionsProductsRatingList: (
      query: {
        /**
         * Количество запрашиваемых товаров (max. 100)
         * @example 1
         */
        size: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Массив структур товаров */
            products?: {
              /**
               * Артикул WB
               * @example 21573649
               */
              nmId?: number;
              /**
               * Идентификатор карточки товара
               * @example 15384080
               */
              imtId?: number;
              /**
               * Название товара
               * @example "Чехол для телефона iPhone 11"
               */
              productName?: string;
              /**
               * Бренд товара
               * @example "Case"
               */
              brandName?: string;
              /**
               * Количество вопросов
               * @example 11
               */
              questionsCount?: string;
            }[];
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/questions/products/rating`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список вопросов по заданным параметрам с пагинацией и сортировкой.<br> За один запрос можно получить 10 000 вопросов, максимум.
     *
     * @tags Вопросы
     * @name V1QuestionsList
     * @summary Список вопросов
     * @request GET:/api/v1/questions
     * @secure
     */
    v1QuestionsList: (
      query: {
        /** Отвеченные вопросы (`true`) или неотвеченные вопросы(`false`) */
        isAnswered: boolean;
        /** Артикул WB */
        nmId?: number;
        /** Количество запрашиваемых вопросов (максимально допустимое значение для параметра - 10 000,  при этом сумма значений параметров `take` и `skip` не должна превышать 10 000) */
        take: number;
        /** Количество вопросов для пропуска (максимально допустимое значение для параметра - 10 000,  при этом сумма значений параметров `take` и `skip` не должна превышать 10 000) */
        skip: number;
        /** Сортировка вопросов по дате (`dateAsc`/`dateDesc`) */
        order?: string;
        /**
         * Дата начала периода в формате Unix timestamp
         * @example 1688465092
         */
        dateFrom?: number;
        /**
         * Дата конца периода в формате Unix timestamp
         * @example 1688465092
         */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Количество необработанных вопросов */
            countUnanswered?: number;
            /** Количество обработанных вопросов */
            countArchive?: number;
            /** Массив структур вопросов */
            questions?: {
              /** id вопроса */
              id?: string;
              /** Текст вопроса */
              text?: string;
              /**
               * Дата и время создания вопроса
               * @format date-time
               */
              createdDate?: string;
              /**
               * Статус вопроса:
               *   - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
               *   - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей
               *   - `suppliersPortalSynch` - новый вопрос
               */
              state?: string;
              /** Структура ответа */
              answer?: {
                /** Текст ответа */
                text?: string;
                /** Можно ли отредактировать ответ (`false` - нельзя, `true` - можно) */
                editable?: boolean;
                /**
                 * Дата и время создания ответа
                 * @format date-time
                 */
                createDate?: string;
              };
              /** Структура товара */
              productDetails?: {
                /** Артикул WB */
                nmId?: number;
                /** Идентификатор карточки товара */
                imtId?: number;
                /** Название товара */
                productName?: string;
                /** Артикул продавца */
                supplierArticle?: string;
                /** Имя продавца */
                supplierName?: string;
                /** Название бренда */
                brandName?: string;
              };
              /** Просмотрен ли вопрос */
              wasViewed?: boolean;
            }[];
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/questions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description В зависимости от тела запроса можно: - Просмотреть вопрос. - Отклонить вопрос. - Ответить на вопрос или отредактировать ответ. Отредактировать ответ на вопрос можно в течение 2 месяцев (60 дней), после предоставления ответа и только 1 раз.
     *
     * @tags Вопросы
     * @name V1QuestionsPartialUpdate
     * @summary Работа с вопросами
     * @request PATCH:/api/v1/questions
     * @secure
     */
    v1QuestionsPartialUpdate: (
      data:
        | {
            /**
             * Id вопроса
             * @example "n5um6IUBQOOSTxXoo0gV"
             */
            id: string;
            /**
             * Просмотрен (`true`), не просмотрен (`false`)
             * @example true
             */
            wasViewed: boolean;
          }
        | {
            /**
             * Id вопроса
             * @example "n5um6IUBQOOSTxXoo0gV"
             */
            id: string;
            answer: {
              /**
               * Текст ответа
               * @example "текст ответа"
               */
              text: string;
            };
            /**
             * Статус вопроса:
             *   - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
             *   - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей.
             */
            state: string;
          },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: object | null;
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/questions`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить XLSX файл с вопросами в кодировке BASE64.
     *
     * @tags Вопросы
     * @name V1QuestionsReportList
     * @summary Получение вопросов в формате XLSX
     * @request GET:/api/v1/questions/report
     * @secure
     */
    v1QuestionsReportList: (
      query: {
        /**
         * Обработанные вопросы (`true`) или необработанные вопросы(`false`)
         * @example false
         */
        isAnswered: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Имя файла
             * @example "report.xlsx"
             */
            fileName?: string;
            /**
             * Файл
             * @format binary
             * @example "UEsDBBQAC ... CAADMdQAAAAA="
             */
            file?: File;
            /**
             * Тип контента
             * @example "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
             */
            contentType?: string;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/questions/report`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить количество вопросов.
     *
     * @tags Вопросы
     * @name V1QuestionsCountList
     * @summary Количество вопросов
     * @request GET:/api/v1/questions/count
     * @secure
     */
    v1QuestionsCountList: (
      query?: {
        /**
         * Дата начала периода в формате Unix timestamp
         * @example 1688465092
         */
        dateFrom?: number;
        /**
         * Дата конца периода в формате Unix timestamp
         * @example 1688465092
         */
        dateTo?: number;
        /**
         * Обработанные вопросы (`true`) или необработанные вопросы (`false`).<br> Если не указать, вернутся обработанные вопросы.
         * @example false
         */
        isAnswered?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Количество вопросов
           * @example 77
           */
          data?: number;
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        void | ResponsefeedbackErr
      >({
        path: `/api/v1/questions/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить вопрос по его Id. <br>
     *
     * @tags Вопросы
     * @name V1QuestionList
     * @summary Получить вопрос по Id
     * @request GET:/api/v1/question
     * @secure
     */
    v1QuestionList: (
      query: {
        /**
         * Идентификатор вопроса
         * @example "ljAVapEBL38RyMdRln61"
         */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** id вопроса */
            id?: string;
            /** Текст вопроса */
            text?: string;
            /**
             * Дата и время создания вопроса
             * @format date-time
             */
            createdDate?: string;
            /**
             * Статус вопроса:
             *   - `none` - вопрос отклонён продавцом (такой вопрос не отображается на портале покупателей)
             *   - `wbRu` - ответ предоставлен, вопрос отображается на сайте покупателей
             *   - `suppliersPortalSynch` - новый вопрос
             */
            state?: string;
            /** Структура ответа */
            answer?: {
              /** Текст ответа */
              text?: string;
              /** Можно ли отредактировать ответ (`false` - нельзя, `true` - можно) */
              editable?: boolean;
              /**
               * Дата и время создания ответа
               * @format date-time
               */
              createDate?: string;
            };
            /** Структура товара */
            productDetails?: {
              /** Артикул WB */
              nmId?: number;
              /** Идентификатор карточки товара */
              imtId?: number;
              /** Название товара */
              productName?: string;
              /** Артикул продавца */
              supplierArticle?: string;
              /** Имя продавца */
              supplierName?: string;
              /** Название бренда */
              brandName?: string;
            };
            /** Просмотрен ли вопрос */
            wasViewed?: boolean;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        void
      >({
        path: `/api/v1/question`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить количество необработанных отзывов за сегодня, за всё время, и среднюю оценку всех отзывов.
     *
     * @tags Отзывы
     * @name V1FeedbacksCountUnansweredList
     * @summary Необработанные отзывы
     * @request GET:/api/v1/feedbacks/count-unanswered
     * @secure
     */
    v1FeedbacksCountUnansweredList: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /**
             * Количество необработанных отзывов
             * @example 1
             */
            countUnanswered?: number;
            /**
             * Количество необработанных отзывов за сегодня
             * @example 0
             */
            countUnansweredToday?: number;
            /**
             * Средняя оценка всех отзывов
             * @example "4.7"
             */
            valuation?: string;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/count-unanswered`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список родительских категорий товаров, которые есть у продавца.
     *
     * @tags Отзывы
     * @name V1ParentSubjectsList
     * @summary Родительские категории товаров
     * @request GET:/api/v1/parent-subjects
     * @secure
     */
    v1ParentSubjectsList: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /**
             * Id категории товара
             * @example 1162
             */
            subjectId?: number;
            /**
             * Название категории товара
             * @example "Строительные инструменты"
             */
            subjectName?: string;
          }[];
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/parent-subjects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить среднюю оценку товаров по родительской категории.
     *
     * @tags Отзывы
     * @name V1FeedbacksProductsRatingList
     * @summary Средняя оценка товаров по родительской категории
     * @request GET:/api/v1/feedbacks/products/rating
     * @secure
     */
    v1FeedbacksProductsRatingList: (
      query: {
        /**
         * id категории товара
         * @example 3109
         */
        subjectId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Средняя оценка товаров
             * @example "4.8"
             */
            valuation?: string;
            /**
             * Количество отзывов по запрашиваемой категории
             * @example 277
             */
            feedbacksCount?: number;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/products/rating`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список из двух товаров, с наибольшей и наименьшей средней оценкой, по родительской категории.
     *
     * @tags Отзывы
     * @name V1FeedbacksProductsRatingTopList
     * @summary Товары с наибольшей и наименьшей средней оценкой по родительской категории
     * @request GET:/api/v1/feedbacks/products/rating/top
     * @secure
     */
    v1FeedbacksProductsRatingTopList: (
      query: {
        /**
         * id категории товара
         * @example 3109
         */
        subjectId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            productMaxRating?: ProductRating;
            productMinRating?: ProductRating;
          }[];
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/products/rating/top`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список отзывов по заданным параметрам с пагинацией и сортировкой.
     *
     * @tags Отзывы
     * @name V1FeedbacksList
     * @summary Список отзывов
     * @request GET:/api/v1/feedbacks
     * @secure
     */
    v1FeedbacksList: (
      query: {
        /**
         * Обработанные отзывы (`true`) или необработанные отзывы(`false`)
         * @example false
         */
        isAnswered: boolean;
        /**
         * Артикул WB
         * @example 5870243
         */
        nmId?: number;
        /**
         * Количество отзывов (max. 5 000)
         * @example 1
         */
        take: number;
        /**
         * Количество отзывов для пропуска (max. 199990)
         * @example 0
         */
        skip: number;
        /** Сортировка отзывов по дате (dateAsc/dateDesc) */
        order?: "dateAsc" | "dateDesc";
        /**
         * Дата начала периода в формате Unix timestamp
         * @example 1688465092
         */
        dateFrom?: number;
        /**
         * Дата конца периода в формате Unix timestamp
         * @example 1688465092
         */
        dateTo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Количество необработанных отзывов */
            countUnanswered?: number;
            /** Количество обработанных отзывов */
            countArchive?: number;
            /** Массив структур отзывов */
            feedbacks?: ResponseFeedback;
          };
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description В зависимости от тела запроса можно: - Просмотреть отзыв. - Ответить на отзыв, или отредактировать ответ. - Оценить отзыв и/или товар. Отредактировать ответ на отзыв можно в течение 2 месяцев (60 дней), после предоставления ответа и только 1 раз.
     *
     * @tags Отзывы
     * @name V1FeedbacksPartialUpdate
     * @summary Работа с отзывом
     * @request PATCH:/api/v1/feedbacks
     * @secure
     */
    v1FeedbacksPartialUpdate: (
      data:
        | {
            /**
             * Id отзыва
             * @example "n5um6IUBQOOSTxXoo0gV"
             */
            id: string;
            /**
             * Просмотрен (`true`) или не просмотрен (`false`)
             * @example true
             */
            wasViewed: boolean;
          }
        | {
            /**
             * Id отзыва
             * @example "n5um6IUBQOOSTxXoo0gV"
             */
            id: string;
            /**
             * Текст ответа (max. 1000 символов)
             * @example "текст ответа"
             */
            text: string;
          }
        | {
            /** Идентификатор отзыва */
            id: string;
            /** Оценка отзыва. Можно получить методом <b>Получить список оценок</b> */
            supplierFeedbackValuation?: number;
            /** Оценка товара. Можно получить методом <b>Получить список оценок</b> */
            supplierProductValuation?: number;
          },
      params: RequestParams = {},
    ) =>
      this.request<void, ResponsefeedbackErr | void>({
        path: `/api/v1/feedbacks`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет получать список значений для оценки отзыва/товара.
     *
     * @tags Отзывы
     * @name V1SupplierValuationsList
     * @summary Получить список оценок
     * @request GET:/api/v1/supplier-valuations
     * @secure
     */
    v1SupplierValuationsList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Данные */
          data?: {
            /** Оценки для отзыва. См. Response samples */
            feedbackValuations?: {
              "1"?: string;
              "2"?: string;
              "3"?: string;
              "4"?: string;
              "5"?: string;
              "6"?: string;
              "7"?: string;
            };
            /** Оценки для товара См. Response samples */
            productValuations?: {
              "1"?: string;
              "2"?: string;
              "3"?: string;
              "4"?: string;
            };
          };
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        void
      >({
        path: `/api/v1/supplier-valuations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет запросить на возврат товар, по которому оставлен отзыв.  <br> Возврат доступен для отзывов с `"isAbleReturnProductOrders": true`
     *
     * @tags Отзывы
     * @name V1FeedbacksOrderReturnCreate
     * @summary Возврат товара по ID отзыва
     * @request POST:/api/v1/feedbacks/order/return
     * @secure
     */
    v1FeedbacksOrderReturnCreate: (
      data: {
        /** Идентификатор отзыва */
        feedbackId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: object | null;
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/order/return`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить XLSX файл с отзывами в кодировке BASE64. <br> За один запрос можно получить 5000 отзывов. <br>
     *
     * @tags Отзывы
     * @name V1FeedbacksReportList
     * @summary Получение отзывов в формате XLSX
     * @request GET:/api/v1/feedbacks/report
     * @secure
     */
    v1FeedbacksReportList: (
      query: {
        /** Необработанный(`false`) или в архиве(`true`) */
        isAnswered: true | false;
        /**
         * Параметр пагинации, указывает сколько отзывов пропустить (max. 20 000)
         * @example 1
         */
        skip?: number;
        /**
         * Дата начала периода в формате Unix timestamp <br>
         * @example 1696226971
         */
        dateFrom?: number;
        /**
         * Дата конца периода в формате Unix timestamp <br>
         * @example 1698916171
         */
        dateTo?: number;
        /**
         * Сортировка отзывов по дате (dateAsc/dateDesc) <br>
         * @example "dateDesc"
         */
        order?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Имя файла */
            fileName?: string;
            /**
             * Файл
             * @format binary
             */
            file?: File;
            /** Тип контента */
            contentType?: string;
          };
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/report`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список архивных отзывов. <br> Отзыв становится архивным, если: - На отзыв получен ответ. - Ответ на отзыв не получен в течение 30 дней. - В отзыве нет текста и фото.
     *
     * @tags Отзывы
     * @name V1FeedbacksArchiveList
     * @summary Список архивных отзывов
     * @request GET:/api/v1/feedbacks/archive
     * @secure
     */
    v1FeedbacksArchiveList: (
      query: {
        /**
         * Артикул WB
         * @example 14917842
         */
        nmId?: number;
        /**
         * Количество отзывов (max. 5 000)
         * @example 1
         */
        take: number;
        /**
         * Количество отзывов для пропуска
         * @example 0
         */
        skip: number;
        /** Сортировка отзывов по дате (dateAsc/dateDesc) */
        order?: "dateAsc" | "dateDesc";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Массив структур отзывов */
            feedbacks?: ResponseFeedback;
          };
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/archive`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить среднюю оценку товара по его артикулу WB.
     *
     * @tags Отзывы
     * @name V1FeedbacksProductsRatingNmidList
     * @summary Средняя оценка товара по артикулу WB
     * @request GET:/api/v1/feedbacks/products/rating/nmid
     * @secure
     */
    v1FeedbacksProductsRatingNmidList: (
      query: {
        /**
         * Артикул WB
         * @example 14917842
         */
        nmId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Средняя оценка товара
             * @example "4.3"
             */
            valuation?: string;
            /**
             * Количество отзывов на данный товар
             * @example 16
             */
            feedbacksCount?: number;
          };
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        ResponsefeedbackErr | void
      >({
        path: `/api/v1/feedbacks/products/rating/nmid`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить количество отзывов.
     *
     * @tags Отзывы
     * @name V1FeedbacksCountList
     * @summary Количество отзывов
     * @request GET:/api/v1/feedbacks/count
     * @secure
     */
    v1FeedbacksCountList: (
      query?: {
        /**
         * Дата начала периода в формате Unix timestamp
         * @example 1688465092
         */
        dateFrom?: number;
        /**
         * Дата конца периода в формате Unix timestamp
         * @example 1688465092
         */
        dateTo?: number;
        /**
         * Обработанные отзывы(`true`) или необработанные отзывы(`false`).<br> Если не указать, вернутся обработанные отзывы.
         * @example false
         */
        isAnswered?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Количество отзывов
           * @example 724583
           */
          data?: number;
          /**
           * Есть ли ошибка
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки
           * @example null
           */
          additionalErrors?: string[] | null;
        },
        void | ResponsefeedbackErr
      >({
        path: `/api/v1/feedbacks/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить отзыв по его Id.
     *
     * @tags Отзывы
     * @name V1FeedbackList
     * @summary Получить отзыв по Id
     * @request GET:/api/v1/feedback
     * @secure
     */
    v1FeedbackList: (
      query: {
        /**
         * Идентификатор отзыва
         * @example "G7Y9Y1kBAtKOitoBT_lV"
         */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /** Идентификатор отзыва */
            id?: number;
            /** Имя автора отзыва */
            userName?: string;
            /**
             * Соответствие заявленного размера реальному.
             * <br>Возможные значения:
             * - ` ` - для безразмерных товаров
             * - `ок` - соответствует размеру
             * - `smaller` - маломерит
             * - `bigger` - большемерит
             */
            matchingSize?: string;
            /** Текст отзыва */
            text?: string;
            /** Оценка товара */
            productValuation?: number;
            /**
             * Дата и время создания отзыва
             * @format date-time
             */
            createdDate?: string;
            /**
             * Статус отзыва:
             *   - `none` - не обработан (новый)
             *   - `wbRu` - обработан
             */
            state?: string;
            /** Структура ответа */
            answer?: {
              /** Текст ответа */
              text?: string;
              /**
               * Статус:
               *   - `none` - новый
               *   - `wbRu`- отображается на сайте
               *   - `reviewRequired` - ответ проходит проверку
               *   - `rejected` - ответ отклонён
               */
              state?: string;
            };
            /** Структура товара */
            productDetails?: {
              /** Артикул WB */
              nmId?: number;
              /** Идентификатор карточки товара */
              imtId?: number;
              /** Название товара */
              productName?: string;
              /** Артикул продавца */
              supplierArticle?: string | null;
              /** Имя продавца */
              supplierName?: string | null;
              /** Бренд товара */
              brandName?: string | null;
              /** Размер товара (`techSize` в КТ) */
              size?: string;
            };
            /** Массив структур фотографий */
            photoLinks?: {
              /** Адрес фотографии полного размера */
              fullSize?: string;
              /** Адрес фотографии маленького размера */
              miniSize?: string;
            }[];
            /** Структура видео */
            video?: {
              /** Ссылка на обложку видео */
              previewImage?: string;
              /** Ссылка на файл плейлиста видео (доступно по протоколу hls) */
              link?: string;
              /** Общая продолжительность видео */
              duration_sec?: number;
            };
            /** Просмотрен ли отзыв */
            wasViewed?: boolean;
            /** Доступна ли продавцу оценка отзыва (`true` - доступна, `false` - не доступна) */
            isAbleSupplierFeedbackValuation?: boolean;
            /** Оценка отзыва, оставленная продавцом */
            supplierFeedbackValuation?: number;
            /** Доступна ли продавцу оценка товара (`true` - доступна, `false` - не доступна) */
            isAbleSupplierProductValuation?: boolean;
            /** Оценка товара, оставленная продавцом */
            supplierProductValuation?: number;
            /** Доступна ли товару опция возврата (`false` - нет, `true` - да) */
            isAbleReturnProductOrders?: boolean;
            /** Дата и время, когда на запрос возврата был получен ответ со статус-кодом 200. */
            returnProductOrdersDate?: string;
            /** Список тегов покупателя */
            bables?: string[];
          };
          /** Есть ли ошибка */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string[] | null;
        },
        void
      >({
        path: `/api/v1/feedback`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить шаблоны ответов на отзывы/вопросы.
     *
     * @tags Шаблоны для вопросов и отзывов
     * @name V1TemplatesList
     * @summary Получить шаблоны ответов
     * @request GET:/api/v1/templates
     * @secure
     */
    v1TemplatesList: (
      query: {
        /**
         * `1` - шаблоны для отзывов<br> `2` - шаблоны для вопросов
         * @example 1
         */
        templateType: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Response200 | ResponseErrorTemplate, void>({
        path: `/api/v1/templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет создать шаблон ответа на отзыв/вопрос. <br> Всего можно создать 20 шаблонов. 10 на отзывы и 10 на вопросы.<br> Допустимы любые символы.
     *
     * @tags Шаблоны для вопросов и отзывов
     * @name V1TemplatesCreate
     * @summary Создать шаблон
     * @request POST:/api/v1/templates
     * @secure
     */
    v1TemplatesCreate: (
      data: {
        /** Название шаблона (от 1 до 100 символов) */
        name: string;
        /** Тип шаблона <br> `1` - шаблон для отзывов <br> `2` - шаблон для вопросов */
        templateType: number;
        /** Текст шаблона (от 2 до 1000 символов) */
        text: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PostTemplateOK | ResponseErrorTemplate, void>({
        path: `/api/v1/templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет отредактировать шаблон. <br> Допустимы любые символы.
     *
     * @tags Шаблоны для вопросов и отзывов
     * @name V1TemplatesPartialUpdate
     * @summary Редактировать шаблон
     * @request PATCH:/api/v1/templates
     * @secure
     */
    v1TemplatesPartialUpdate: (
      data: {
        /** Название шаблона (от 1 до 100 символов) */
        name: string;
        /** Идентификатор шаблона */
        templateID: string;
        /** Текст шаблона (от 2 до 1000 символов) */
        text: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PatchDelRespOK | ResponseErrorTemplate, void>({
        path: `/api/v1/templates`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет удалить шаблон. <br>
     *
     * @tags Шаблоны для вопросов и отзывов
     * @name V1TemplatesDelete
     * @summary Удалить шаблон
     * @request DELETE:/api/v1/templates
     * @secure
     */
    v1TemplatesDelete: (
      data: {
        /** Идентификатор шаблона (max. 1) */
        templateID: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PatchDelRespOK | ResponseErrorTemplate, void>({
        path: `/api/v1/templates`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
