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

export interface ResponseCardCreate {
  /** @example null */
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?:
    | {
        string?: string;
      }
    | string;
}

export interface RequestMoveNmsImtConn {
  /**
   * Существующий у продавца `imtID`, под которым необходимо объединить НМ
   * @example 123
   */
  targetIMT: number;
  /**
   * `nmID`, которые необходимо объединить (максимум 30)
   * @example [837459235,828572090]
   */
  nmIDs: number[];
}

export interface RequestMoveNmsImtDisconn {
  /**
   * `nmID`, которые необходимо разъединить (max 30)
   * @example [837459235,828572090]
   */
  nmIDs: number[];
}

export interface ResponseIncorrectDate {
  error?: string;
}

export interface ResponseContentError1 {
  /** @example null */
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    error?: string;
  };
}

/** @example {"data":null,"error":true,"errorText":"Текст ошибки","additionalErrors":{"MoveNmsToTrash":"Bad request"}} */
export interface ResponseBodyContentError400 {
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    MoveNmsToTrash?: string;
  };
}

/** @example {"data":null,"error":true,"errorText":"Доступ запрещен","additionalErrors":"Доступ запрещен"} */
export interface ResponseBodyContentError403 {
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string;
}

export interface ResponseContentError4 {
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    description?: string;
  };
}

export interface ResponseContentError5 {
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    tagID?: string;
  };
}

/** @example {"data":null,"error":false,"errorText":"","additionalErrors":null} */
export interface ResponseContentError6 {
  data?: object | null;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: string | null;
}

/** @example {"additionalErrors":null,"data":null,"error":true,"errorText":"Текст ошибки"} */
export interface MediaErrors {
  /** Дополнительные ошибки */
  additionalErrors?: object;
  data?: object;
  /** Флаг ошибки */
  error?: boolean;
  /** Описание ошибки */
  errorText?: string;
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
 * @title Описание API Контента
 *
 *
 * <dl>
 * <dt>Словарь сокращений:</dt>
 * <dd>КТ — карточка товара</dd>
 * <dd>НМ — номенклатура</dd>
 * </dl>
 * Ограничения по количеству запросов:
 * <dd>Допускается максимум 100 запросов в минуту на методы контента в целом.</dd>
 *
 * <br>
 * Публичное API Контента создано для синхронизации данных между серверами Wildberries и серверами продавцов.
 * <br>
 * Вы загружаете данные на свои носители, работаете с ними на своих мощностях и синхронизируетесь с нашими серверами по мере необходимости.
 * <br>
 * <code>Не допускается использование API Контента в качестве внешней базы данных. При превышении лимитов на запросы доступ к API будет ограничен.</code>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  content = {
    /**
     * @description Создание карточки товара происходит асинхронно, при отправке запроса на создание карточки ваш запрос становится в очередь на создание. **Внимание**. Карточка считается созданной, если создалась хотя бы одна номенклатура в ней. Если во время обработки запроса в очереди выявляются ошибки, то номенклатура считается ошибочной. Как создать карточку: 1. Получите список всех категорий с помощью метода `Родительские категории товаров` 2. Получите список доступных предметов (подкатегорий) с помощью метода `Список предметов (подкатегорий)` 3. Получите характеристики, которые можно задавать в этом предмете (подкатегории), с помощью метода `Характеристики предмета (подкатегории)`. Для характеристик Цвет, Страна производства, Сезон, Ставка НДС, ТНВЭД используйте значения из раздела `Конфигуратор`. 4. Отправьте запрос. Если ответ Успешно (200), но какие-то карточки не создались, проверьте ошибки с помощью метода `Список несозданных номенклатур (НМ) с ошибками`. В одном запросе можно создать максимум 100 карточек (`imtID`) и по 30 номенклатур (`nmID`) в каждой. Максимальный размер запроса 10 Мб. Габариты товаров можно указать только в **сантиметрах**.
     *
     * @tags Загрузка
     * @name V2CardsUploadCreate
     * @summary Создание карточки товара
     * @request POST:/content/v2/cards/upload
     * @secure
     */
    v2CardsUploadCreate: (
      data: {
        /** ID предмета */
        subjectID: number;
        /** Массив вариантов товара. В каждой КТ может быть не более 30 вариантов (НМ) */
        variants: {
          /** Бренд */
          brand?: string;
          /** Наименование товара */
          title?: string;
          /**
           * Описание товара. Максимальное количество символов зависит от категории товара. Стандарт — 2000, минимум — 1000, максимум — 5000.<br>
           * Подробно о правилах описания в **Правилах заполнения карточки товара** в разделе [Инструкции](https://seller.wildberries.ru/help-center/article/A-113#описание) на портале продавцов.
           */
          description?: string;
          /** Артикул продавца */
          vendorCode: string;
          /**
           * Габариты упаковки товара. Указывать в **сантиметрах** для любого товара.
           * <br>
           * Если не указать структуру dimensions в запросе, то она сгенерируется системой автоматически с нулевыми значениями длины, ширины, высоты
           */
          dimensions?: {
            /** Длина, см */
            length?: number;
            /** Ширина, см */
            width?: number;
            /** Высота, см */
            height?: number;
          };
          /**
           * Массив с размерами. <br>
           * Если для размерного товара (обувь, одежда и др.) не указать этот массив, то системой в карточке он будет сгенерирован автоматически с `techSize` = "A" и `wbSize` = "1" и баркодом.
           */
          sizes?: {
            /** Размер товара (XL, 45 и др.) */
            techSize?: string;
            /** Российский размер товара */
            wbSize?: string;
            /** Цена товара */
            price?: number;
            /** Баркод. Если не указать, сгенерируется системой автоматически. */
            skus?: string[];
          }[];
          /** Массив характеристик товара */
          characteristics?: {
            /** Идентификатор характеристики */
            id: number;
            /** Значение характеристики. Тип значения зависит от типа характеристики */
            value: any;
          }[];
        }[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseCardCreate,
        | ResponseBodyContentError400
        | void
        | {
            /** Заголовок ошибки */
            title?: string;
            /** Детали ошибки */
            detail?: string;
            /** Внутренний код ошибки */
            code?: string;
            /** Уникальный ID запроса */
            requestId?: string;
            /** ID внутреннего сервиса WB */
            origin?: string;
            /** HTTP статус-код */
            status?: number;
            /** Расшифровка HTTP статус-кода */
            statusText?: string;
          }
      >({
        path: `/content/v2/cards/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Обновляет карточку товара. Данные для обновления можно получить с помощью метода [Список номенклатур (НМ)](./#tag/Prosmotr/paths/~1content~1v2~1get~1cards~1list/post) Нельзя редактировать или удалить баркоды, но можно добавить баркод к существующему. Параметры `photos`, `video` и `tags` передавать не обязательно, их нельзя редактировать или удалять в этом методе. Если ответ Успешно (200), но какие-то карточки не изменились, проверьте ошибки с помощью метода `Список несозданных номенклатур (НМ) с ошибками`. В одном запросе можно отредактировать максимум 3000 номенклатур (`nmID`). Максимальный размер запроса 10 Мб. Габариты товаров можно указать только в **сантиметрах**.
     *
     * @tags Загрузка
     * @name V2CardsUpdateCreate
     * @summary Редактирование КТ
     * @request POST:/content/v2/cards/update
     * @secure
     */
    v2CardsUpdateCreate: (
      data: {
        /** Артикул WB */
        nmID: number;
        /** Артикул продавца */
        vendorCode: string;
        /** Бренд */
        brand?: string;
        /** Наименование товара */
        title?: string;
        /**
         * Описание товара. Максимальное количество символов зависит от категории товара. Стандарт — 2000, минимум — 1000, максимум — 5000.<br>
         * Подробно о правилах описания в **Правилах заполнения карточки товара** в разделе [Инструкции](https://seller.wildberries.ru/help-center/article/A-113#описание) на портале продавцов.
         */
        description?: string;
        /** Габариты упаковки товара. Указывать в **сантиметрах** для любого товара. */
        dimensions?: {
          /** Длина, см */
          length?: number;
          /** Ширина, см */
          width?: number;
          /** Высота, см */
          height?: number;
        };
        /** Характеристики товара */
        characteristics?: {
          /** ID характеристики */
          id?: number;
          /** Значение характеристики. Тип значения зависит от типа характеристики. */
          value?: any;
        }[];
        /** Массив размеров артикула. <br> Для безразмерного товара все равно нужно передавать данный массив без параметров (wbSize и techSize), но с баркодом.                           */
        sizes: {
          /**
           * Числовой идентификатор размера для данного артикула Wildberries
           * Обязателен к заполнению для существующих размеров.
           * Для добавляемых размеров не указывается.
           */
          chrtID?: number;
          /** Размер товара (XL, S, 45 и др.) */
          techSize?: string;
          /** Российский размер товара */
          wbSize?: string;
          /** Баркод */
          skus?: string[];
        }[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseCardCreate,
        | ResponseBodyContentError400
        | void
        | ResponseBodyContentError403
        | {
            /** Заголовок ошибки */
            title?: string;
            /** Детали ошибки */
            detail?: string;
            /** Внутренний код ошибки */
            code?: string;
            /** Уникальный ID запроса */
            requestId?: string;
            /** ID внутреннего сервиса WB */
            origin?: string;
            /** HTTP статус-код */
            status?: number;
            /** Расшифровка HTTP статус-кода */
            statusText?: string;
          }
      >({
        path: `/content/v2/cards/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет добавить к карточке товара новую номенклатуру. <br> Добавление НМ к КТ происходит асинхронно, после отправки запрос становится в очередь на обработку.<br> `Важно!` Если после успешной отправки запроса номенклатура не создалась, то необходимо проверить раздел "Список несозданных НМ с ошибками". <br> Для того чтобы убрать НМ из ошибочных, необходимо повторно сделать запрос с исправленными ошибками.<br> Максимальный размер запроса 10 Мб. Габариты товаров можно указать только в **сантиметрах**.
     *
     * @tags Загрузка
     * @name V2CardsUploadAddCreate
     * @summary Добавление НМ к КТ
     * @request POST:/content/v2/cards/upload/add
     * @secure
     */
    v2CardsUploadAddCreate: (
      data: {
        /** imtID КТ, к которой добавляется НМ */
        imtID?: number;
        /** Структура добавляемой НМ */
        cardsToAdd?: {
          /** Бренд */
          brand?: string;
          /** Артикул продавца */
          vendorCode: string;
          /** Наименование товара */
          title?: string;
          /**
           * Описание товара. Максимальное количество символов зависит от категории товара. Стандарт — 2000, минимум — 1000, максимум — 5000.<br>
           * Подробно о правилах описания в **Правилах заполнения карточки товара** в разделе [Инструкции](https://seller.wildberries.ru/help-center/article/A-113#описание) на портале продавцов.
           */
          description?: string;
          /**
           * Габариты упаковки товара. Указывать в **сантиметрах** для любого товара.
           * <br>
           * Если не указать структуру dimensions в запросе, то она сгенерируется системой автоматически с нулевыми значениями длины, ширины, высоты
           */
          dimensions?: {
            /** Длина, см */
            length?: number;
            /** Ширина, см */
            width?: number;
            /** Высота, см */
            height?: number;
          };
          /** Характеристики товара */
          characteristics?: {
            /** ID характеристики */
            id?: number;
            /** Значение характеристики. Тип значения зависит от типа характеристики */
            value?: any;
          }[];
          /**
           * Массив с размерами. <br>
           * Если для размерного товара (обувь, одежда и др.) не указать этот массив, то системой в карточке он будет сгенерирован автоматически с `techSize` = "A" и `wbSize` = "1" и баркодом.
           */
          sizes?: {
            /** Размер товара (XL, 42 и др.) */
            techSize?: string;
            /** Российский размер товара */
            wbSize?: string;
            /** Цена товара */
            price?: number;
            /** Баркод */
            skus?: string[];
          }[];
        }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseCardCreate,
        | ResponseBodyContentError400
        | void
        | {
            /** Заголовок ошибки */
            title?: string;
            /** Детали ошибки */
            detail?: string;
            /** Внутренний код ошибки */
            code?: string;
            /** Уникальный ID запроса */
            requestId?: string;
            /** ID внутреннего сервиса WB */
            origin?: string;
            /** HTTP статус-код */
            status?: number;
            /** Расшифровка HTTP статус-кода */
            statusText?: string;
          }
      >({
        path: `/content/v2/cards/upload/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет объединять номенклатуры (`nmID`) под одним `imtID` и разъединять их.<br> Для объединения НМ необходимо отправить запрос со списком НМ с заполненным параметром `targetIMT` в теле запроса. При этом все НМ объединятся под `imtID` указанном в `targetIMT`. <br> <br> Чтобы отсоединить НМ от карточки, необходимо передать эту НМ без параметра `targetIMT` в теле запроса.<br> При этом для передаваемой НМ создается новый `imtID`. <br> Если в запросе на <b>разъединение</b> передается несколько НМ, то все они автоматически <b>объединятся</b> под <b>одним</b> новым `imtID`. <br> Чтобы присвоить каждой НМ уникальный `imtID` необходимо передавать по одной НМ за запрос. Для НМ, не участвующих в запросе, никаких изменений не происходит.<br> Максимальный размер запроса 10 Мб.<br> <br> `ВАЖНО:` Объединить можно только номенклатуры с одинаковыми предметами.<br> `ВАЖНО:` В одной КТ (под одним `imtID`) не может быть больше 30 номенклатур (`nmID`).
     *
     * @tags Загрузка
     * @name V2CardsMoveNmCreate
     * @summary Объединение / Разъединение НМ
     * @request POST:/content/v2/cards/moveNm
     * @secure
     */
    v2CardsMoveNmCreate: (data: RequestMoveNmsImtConn | RequestMoveNmsImtDisconn, params: RequestParams = {}) =>
      this.request<
        ResponseCardCreate,
        (ResponseContentError1 | ResponseCardCreate | ResponseIncorrectDate) | void | ResponseCardCreate | string
      >({
        path: `/content/v2/cards/moveNm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет сгенерировать массив уникальных баркодов для создания размера НМ в КТ.
     *
     * @tags Загрузка
     * @name V2BarcodesCreate
     * @summary Генерация баркодов
     * @request POST:/content/v2/barcodes
     * @secure
     */
    v2BarcodesCreate: (
      data: {
        /**
         * Кол-во баркодов которые надо сгенерировать, максимальное доступное количество баркодов для генерации - `5 000`
         * @example 100
         */
        count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Массив сгенерированных баркодов */
          data?: string[];
          /**
           * Флаг ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        void | ResponseBodyContentError403
      >({
        path: `/content/v2/barcodes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список созданных НМ с фильтрацией по разным параметрам, пагинацией и сортировкой. <br> *Важно*. Карточки, находящиеся в корзине, в ответе метода не выдаются. <br> Получить такие карточки можно только методом "Список НМ, находящихся в корзине".<br> <br>Порядок работы с `get/cards/list`: <br> Чтобы получить полный список номенклатур, <b>если их больше 100</b>, необходимо воспользоваться пагинацией. <ol> <li>Сделать первый запрос (все указанные ниже параметры обязательны): <br> <pre style="background-color: rgb(38 50 56 / 5%); color: #e53935"> { "settings": { "cursor": { "limit": 100 }, "filter": { "withPhoto": -1 } } }</pre> </li> <li>Пройти в конец полученного списка номенклатур, скопировать из <code>cursor</code> две строки: <ul> <li><code>"updatedAt": "***"</code>,</li> <li><code>"nmID": ***</code>,</li> </ul> <li>Вставить скопированные строки в <code>cursor</code> запроса, повторить вызов метода. </li> <li>Повторять пункты <b>2</b> и <b>3</b>, пока <code>total</code> в ответе не станет меньше чем <code>limit</code> в запросе. <br>Это будет означать, что Вы получили все карточки. </ol> <br> По желанию можно добавить поиск и сортировку. См описание в <b>Request Body schema</b> <br> В <b>Request samples</b> представлен пример запроса со всеми возможными параметрами.
     *
     * @tags Просмотр
     * @name V2GetCardsListCreate
     * @summary Список номенклатур (НМ)
     * @request POST:/content/v2/get/cards/list
     * @secure
     */
    v2GetCardsListCreate: (
      data: {
        /** Настройки */
        settings?: {
          /** Параметр сортировки */
          sort?: {
            /** Сортировать по полю **updatedAt** (`false` - по убыванию, `true` - по возрастанию) */
            ascending?: boolean;
          };
          /** Параметры фильтрации */
          filter?: {
            /**
             * Фильтр по фото:
             *
             *   * `0` — только карточки без фото
             *   * `1` — только карточки с фото
             *   * `-1` — все карточки товара
             */
            withPhoto?: number;
            /** Поиск по артикулу продавца, артикулу WB, баркоду */
            textSearch?: string;
            /** Поиск по ID тегов */
            tagIDs?: number[];
            /** Фильтр по категории. `true` - только разрешённые, `false` - все. Не используется в песочнице. */
            allowedCategoriesOnly?: boolean;
            /** Поиск по id предметов */
            objectIDs?: number[];
            /** Поиск по брендам */
            brands?: string[];
            /** Поиск по идентификатору КТ */
            imtID?: number;
          };
          /** Курсор */
          cursor?: {
            /** Сколько КТ выдать в ответе. */
            limit?: number;
          };
        };
      },
      query?: {
        /**
         * Язык для перевода полей ответа `name`, `value` и `object`:  `ru` - русский, `en` - английский, `zh` - китайский.
         *
         * Не используется в песочнице.
         * @example "ru"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Список КТ */
          cards?: {
            /** Артикул WB */
            nmID?: number;
            /** Идентификатор КТ. <br> Артикулы WB из одной КТ будут иметь одинаковый imtID */
            imtID?: number;
            /**
             * Внутренний технический идентификатор товара
             * @format uuid
             */
            nmUUID?: string;
            /** Идентификатор предмета */
            subjectID?: number;
            /** Артикул продавца */
            vendorCode?: string;
            /** Название предмета */
            subjectName?: string;
            /** Бренд */
            brand?: string;
            /** Наименование товара */
            title?: string;
            /** Массив фото */
            photos?: {
              /** URL фото `900х1200` */
              big?: string;
              /** URL фото `248х328` */
              c246x328?: string;
              /** URL фото `516х688` */
              c516x688?: string;
              /** URL фото `600х600` */
              square?: string;
              /** URL фото `75х100` */
              tm?: string;
            }[];
            /** URL видео */
            video?: string;
            /** Габариты упаковки товара, см */
            dimensions?: {
              /** Длина, см */
              length?: number;
              /** Ширина, см */
              width?: number;
              /** Высота, см */
              height?: number;
              /**
               * Потенциальная некорректность габаритов товара:
               * - `true` — не выявлена. `"isValid":true` не гарантирует, что размеры указаны корректно. В отдельных случаях (например, при создании новой категории товаров) `"isValid":true` будет возвращаться при любых значениях, кроме нулевых.
               * - `false` — указанные габариты значительно отличаются от средних по категории (предмету). Рекомендуется перепроверить, правильно ли указаны размеры товара в упаковке **в сантиметрах**. Функциональность карточки товара, в том числе начисление логистики и хранения, при этом ограничена не будет. Логистика и хранение продолжают начисляться — по текущим габаритам. Также `"isValid":false` возвращается при отсутствии значений или нулевом значении любой стороны.
               */
              isValid?: boolean;
            };
            /** Характеристики */
            characteristics?: {
              /** Идентификатор характеристики */
              id?: number;
              /** Название характеристики */
              name?: string;
              /** Значение характеристики. Тип значения зависит от типа характеристики */
              value?: any;
            }[];
            /** Размеры товара */
            sizes?: {
              /** Числовой идентификатор размера для данного артикула WB */
              chrtID?: number;
              /** Размер товара (А, XXL, 57 и др.) */
              techSize?: string;
              /** Российский размер товара */
              wbSize?: string;
              /** Баркод товара */
              skus?: string[];
            }[];
            /** Теги */
            tags?: {
              /** Идентификатор тега */
              id?: number;
              /** Название тега */
              name?: string;
              /** Цвет тега. <dl> <dt>Доступные цвета:</dt> <dd><code>D1CFD7</code> - серый</dd> <dd><code>FEE0E0</code> - красный</dd> <dd><code>ECDAFF</code> - фиолетовый</dd> <dd><code>E4EAFF</code> - синий</dd> <dd><code>DEF1DD</code> - зеленый</dd> <dd><code>FFECC7</code> - желтый</dd> </dl>         */
              color?: string;
            }[];
            /** Дата создания */
            createdAt?: string;
            /** Дата изменения */
            updatedAt?: string;
          }[];
          /** Пагинатор */
          cursor?: {
            /** Дата с которой надо запрашивать следующий список КТ */
            updatedAt?: string;
            /** Номер Артикула WB с которой надо запрашивать следующий список КТ */
            nmID?: number;
            /** Кол-во возвращенных КТ */
            total?: number;
          };
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/get/cards/list`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список НМ и список ошибок которые произошли во время создания КТ. <br>`ВАЖНО`: Для того чтобы убрать НМ из ошибочных, надо повторно сделать запрос с исправленными ошибками на создание КТ.
     *
     * @tags Просмотр
     * @name V2CardsErrorListList
     * @summary Список несозданных номенклатур (НМ) с ошибками
     * @request GET:/content/v2/cards/error/list
     * @secure
     */
    v2CardsErrorListList: (
      query?: {
        /**
         *
         * Параметр выбора языка значений полей ответа (для которых предусмотрена мультиязычность).
         *
         * Не используется в песочнице.
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Категория для который создавалось КТ с данной НМ
             * @example "Блузки"
             */
            object?: string;
            /**
             * Артикул продавца
             * @example "6000000001"
             */
            vendorCode?: string;
            /**
             * Дата и время запроса на создание КТ с данным НМ
             * @example "2022-06-15T14:37:13Z"
             */
            updateAt?: string;
            /** Список ошибок из-за которых не обработался запрос на создание КТ с данным НМ */
            errors?: string[];
            /**
             * Идентификатор предмета
             * @example 41
             */
            objectID?: number;
          }[];
          /**
           * Флаг ошибки.
           * @example false
           */
          error?: boolean;
          /**
           * Описание ошибки.
           * @example ""
           */
          errorText?: string;
          /**
           * Дополнительные ошибки.
           * @example ""
           */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/cards/error/list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить отдельно бесплатные и платные лимиты продавца на создание карточек товаров. <br> Формула для получения количества карточек, которые можно создать: (`freeLimits` + `paidLimits`) - Количество созданных карточек.<br> Созданными считаются все карточки, которые можно получить методами "Список НМ" и "Список НМ, находящихся в корзине".
     *
     * @tags Просмотр
     * @name V2CardsLimitsList
     * @summary Лимиты по КТ
     * @request GET:/content/v2/cards/limits
     * @secure
     */
    v2CardsLimitsList: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /** Количество бесплатных лимитов */
            freeLimits?: number;
            /** Количество оплаченных лимитов */
            paidLimits?: number;
          };
          /** Флаг ошибки */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string | null;
        },
        void | ResponseBodyContentError403
      >({
        path: `/content/v2/cards/limits`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description С помощью данного метода можно получить список всех родительских категорий товаров.
     *
     * @tags Конфигуратор
     * @name V2ObjectParentAllList
     * @summary Родительские категории товаров
     * @request GET:/content/v2/object/parent/all
     * @secure
     */
    v2ObjectParentAllList: (
      query?: {
        /**
         * Параметр выбора языка (ru, en, zh) значений поля name. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Название категории
             * @example "Электроника"
             */
            name?: string;
            /**
             * Идентификатор родительской категории
             * @example 479
             */
            id?: number;
            /**
             * Виден на сайте
             * @example true
             */
            isVisible?: boolean;
          }[];
          /**
           * Флаг наличия ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/object/parent/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description С помощью данного метода можно получить список всех доступных предметов, родительских категорий предметов, и их идентификаторов.
     *
     * @tags Конфигуратор
     * @name V2ObjectAllList
     * @summary Список предметов (подкатегорий)
     * @request GET:/content/v2/object/all
     * @secure
     */
    v2ObjectAllList: (
      query?: {
        /**
         * Поиск по наименованию предмета (Носки), поиск работает по подстроке, искать можно на любом из поддерживаемых языков.
         * @example "Носки"
         */
        name?: string;
        /**
         * Количество подкатегорий (предметов), максимум 1 000
         * @example 1000
         */
        limit?: number;
        /**
         * Язык полей ответа (ru, en, zh). Не используется в песочнице
         * @example "en"
         */
        locale?: string;
        /**
         * Номер позиции, с которой необходимо получить ответ
         * @example 5000
         */
        offset?: number;
        /**
         * Идентификатор родительской категории предмета
         * @example 1000
         */
        parentID?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Подкатегории (предметы) */
          data?: {
            /** Идентификатор предмета */
            subjectID?: number;
            /** Идентификатор родительской категории */
            parentID?: number;
            /** Название предмета */
            subjectName?: string;
            /** Название родительской категории */
            parentName?: string;
          }[];
          /** Флаг наличия ошибки */
          error?: boolean;
          /** Текст ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string;
        },
        void
      >({
        path: `/content/v2/object/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение списка характеристик предмета по его ID.
     *
     * @tags Конфигуратор
     * @name V2ObjectCharcsDetail
     * @summary Характеристики предмета (подкатегории)
     * @request GET:/content/v2/object/charcs/{subjectId}
     * @secure
     */
    v2ObjectCharcsDetail: (
      subjectId: number,
      query?: {
        /**
         * Параметр выбора языка (ru, en, zh) значений полей `subjectName`, `name`. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Данные */
          data?: {
            /** Идентификатор характеристики */
            charcID?: number;
            /** Название предмета */
            subjectName?: string;
            /** Идентификатор предмета */
            subjectID?: number;
            /** Название характеристики */
            name?: string;
            /** true - характеристику необходимо обязательно указать в КТ. false - характеристику не обязательно указывать */
            required?: boolean;
            /** Единица измерения */
            unitName?: string;
            /** Максимальное кол-во значений, которое можно присвоить данной характеристике. Если 0, то нет ограничения. */
            maxCount?: number;
            /** Характеристика популярна у пользователей (true - да, false - нет) */
            popular?: boolean;
            /** Тип характеристики (1 и 0 - строка или массив строк; 4 - число или массив чисел) */
            charcType?: number;
          }[];
          /** Флаг наличия ошибки */
          error?: boolean;
          /** Текст ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/object/charcs/${subjectId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение значения характеристики цвет.
     *
     * @tags Конфигуратор
     * @name V2DirectoryColorsList
     * @summary Цвет
     * @request GET:/content/v2/directory/colors
     * @secure
     */
    v2DirectoryColorsList: (
      query?: {
        /**
         * Параметр выбора языка (ru, en, zh) значений полей `subjectName`, `name`. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Наименование цвета
             * @example "персиковый мелок"
             */
            name?: string;
            /**
             * Наименование родительского цвета
             * @example "оранжевый"
             */
            parentName?: string;
          }[];
          /**
           * Флаг ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/directory/colors`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение значения характеристики пол.
     *
     * @tags Конфигуратор
     * @name V2DirectoryKindsList
     * @summary Пол
     * @request GET:/content/v2/directory/kinds
     * @secure
     */
    v2DirectoryKindsList: (
      query?: {
        /**
         * Параметр выбора языка (ru, en, zh) значений полей `subjectName`, `name`. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Массив значений для хар-ки Пол */
          data?: string[];
          /**
           * Флаг ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/directory/kinds`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение значения характеристики Страна Производства.
     *
     * @tags Конфигуратор
     * @name V2DirectoryCountriesList
     * @summary Страна Производства
     * @request GET:/content/v2/directory/countries
     * @secure
     */
    v2DirectoryCountriesList: (
      query?: {
        /**
         * Параметр выбора языка (ru, en, zh) значений полей `subjectName`, `name`. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            /**
             * Значение характеристики Страны
             * @example "Афганистан"
             */
            name?: string;
            /**
             * Полное название страны
             * @example "Исламский Эмират Афганистан"
             */
            fullName?: string;
          }[];
          /**
           * Флаг ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/directory/countries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение значения характеристики Сезон.
     *
     * @tags Конфигуратор
     * @name V2DirectorySeasonsList
     * @summary Сезон
     * @request GET:/content/v2/directory/seasons
     * @secure
     */
    v2DirectorySeasonsList: (
      query?: {
        /**
         * Параметр выбора языка (ru, en, zh) значений полей `subjectName`, `name`. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Массив значений для хар-ки Сезон */
          data?: string[];
          /**
           * Флаг ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/directory/seasons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description С помощью данного метода можно получить список ТНВЭД кодов по ID предмета и фильтру по ТНВЭД коду.
     *
     * @tags Конфигуратор
     * @name V2DirectoryTnvedList
     * @summary ТНВЭД код
     * @request GET:/content/v2/directory/tnved
     * @secure
     */
    v2DirectoryTnvedList: (
      query: {
        /**
         * Идентификатор предмета
         * @example 105
         */
        subjectID: number;
        /**
         * Поиск по ТНВЭД-коду. Работает только в паре с subjectID
         * @example 6106903000
         */
        search?: number;
        /**
         * Язык (`ru`, `en`, `zh`) для значений полей `subjectName`, `name`. Не используется в песочнице
         * @example "en"
         */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Данные */
          data?: {
            /** ТНВЭД-код */
            tnved?: string;
            /**
             * - `true` - код маркировки требуется
             * - `false` - код маркировки не требуется
             */
            isKiz?: boolean;
          }[];
          /**
           * Флаг наличия ошибки
           * @example false
           */
          error?: boolean;
          /** Текст ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/directory/tnved`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description С помощью данного метода можно получить список значений для характеристики **Ставка НДС**.
     *
     * @tags Конфигуратор
     * @name V2DirectoryVatList
     * @summary Ставка НДС
     * @request GET:/content/v2/directory/vat
     * @secure
     */
    v2DirectoryVatList: (
      query: {
        /**
         * Язык значения элементов `data` (`ru`, `en`, `zh`). Не используется в песочнице
         * @example "ru"
         */
        locale: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: string[];
          /** Флаг наличия ошибки */
          error?: boolean;
          /** Текст ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: string;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/directory/vat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменяет набор медиафайлов для товара (номенклатуры). **Внимание**. Новые медиафайлы (`data`) полностью заменяют старые (`mediaFiles`). Чтобы добавить новые медиафайлы, укажите ссылки не только на них, но и на старые файлы. Требования к изображениям: * максимум изображений для одного товара (номенклатуры) — 30; * минимальное разрешение – 700 × 900 пикселей; * максимальный размер — 32 Мб; * минимальное качество — 65%; * форматы — JPG, PNG, BMP, GIF (статичные), WebP. Требования к видео: * максимум 1 видео для одного товара (номенклатуры). * максимальный размер — 50 Мб; * форматы — MOV, MP4. Если хотя бы одно изображение в запросе не соответствует требованиям, то даже при успешном ответе (200) ни одно изображение не загрузится
     *
     * @tags Медиафайлы
     * @name V3MediaSaveCreate
     * @summary Изменить медиафайлы
     * @request POST:/content/v3/media/save
     * @secure
     */
    v3MediaSaveCreate: (
      data: {
        /**
         * Артикул Wildberries
         * @example 213864079
         */
        nmId?: number;
        /** Ссылки на изображения в том порядке, в котором они будут на карточке товара */
        data?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: object;
          /** Флаг ошибки */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: object;
        },
        MediaErrors | void
      >({
        path: `/content/v3/media/save`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавляет один медиафайл для товара (номенклатуры). Требования к изображениям: * максимум изображений для одного товара (номенклатуры) — 30; * минимальное разрешение – 700 × 900 пикселей; * максимальный размер — 32 Мб; * минимальное качество — 65%; * форматы — JPG, PNG, BMP, GIF (статичные), WebP. Требования к видео: * максимум 1 видео для одного товара (номенклатуры); * максимальный размер — 50 Мб; * форматы — MOV, MP4.
     *
     * @tags Медиафайлы
     * @name V3MediaFileCreate
     * @summary Добавить медиафайлы
     * @request POST:/content/v3/media/file
     * @secure
     */
    v3MediaFileCreate: (
      data: {
        /** @format binary */
        uploadfile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: object;
          /** Флаг ошибки */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: object;
        },
        MediaErrors | void
      >({
        path: `/content/v3/media/file`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список существующих тегов продавца.
     *
     * @tags Теги
     * @name V2TagsList
     * @summary Список тегов
     * @request GET:/content/v2/tags
     * @secure
     */
    v2TagsList: (params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            /** Числовой идентификатор тега */
            id?: number;
            /** Цвет тега */
            color?: string;
            /** Имя тега */
            name?: string;
          };
          /**
           * Флаг ошибки
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
           * @example ""
           */
          additionalErrors?: string;
        },
        void | ResponseBodyContentError403
      >({
        path: `/content/v2/tags`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет создать тег.<br> Завести можно 15 тегов.<br> Максимальная длина тега 15 символов.
     *
     * @tags Теги
     * @name V2TagCreate
     * @summary Создание тега
     * @request POST:/content/v2/tag
     * @secure
     */
    v2TagCreate: (
      data: {
        /**
         * Цвет тега. <dl> <dt>Доступные цвета:</dt> <dd><code>D1CFD7</code> - серый</dd> <dd><code>FEE0E0</code> - красный</dd> <dd><code>ECDAFF</code> - фиолетовый</dd> <dd><code>E4EAFF</code> - синий</dd> <dd><code>DEF1DD</code> - зеленый</dd> <dd><code>FFECC7</code> - желтый</dd> </dl>
         * @example "D1CFD7"
         */
        color?: string;
        /**
         * Имя тега
         * @example "Sale"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseContentError6,
        | (ResponseBodyContentError400 | ResponseContentError4 | ResponseContentError6)
        | void
        | ResponseBodyContentError403
      >({
        path: `/content/v2/tag`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет изменять информацию о теге (имя и цвет).
     *
     * @tags Теги
     * @name V2TagPartialUpdate
     * @summary Изменение тега
     * @request PATCH:/content/v2/tag/{id}
     * @secure
     */
    v2TagPartialUpdate: (
      id: number,
      data: {
        /**
         * Цвет тега
         * @example "D1CFD7"
         */
        color?: string;
        /**
         * Имя тега
         * @example "Sale"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseContentError6 | ResponseContentError4,
        (ResponseBodyContentError400 | ResponseContentError4) | void | ResponseBodyContentError403
      >({
        path: `/content/v2/tag/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет удалить тег
     *
     * @tags Теги
     * @name V2TagDelete
     * @summary Удаление тега
     * @request DELETE:/content/v2/tag/{id}
     * @secure
     */
    v2TagDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        ResponseContentError6 | ResponseContentError5,
        (ResponseBodyContentError400 | ResponseContentError5) | void | ResponseBodyContentError403
      >({
        path: `/content/v2/tag/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет добавить теги к КТ и снять их с КТ.<br> При снятии тега с КТ сам тег не удаляется.<br> К карточке можно добавить 15 тегов.
     *
     * @tags Теги
     * @name V2TagNomenclatureLinkCreate
     * @summary Управление тегами в КТ
     * @request POST:/content/v2/tag/nomenclature/link
     * @secure
     */
    v2TagNomenclatureLinkCreate: (
      data: {
        /** Артикул WB */
        nmID?: number;
        /** Массив числовых идентификаторов тегов.<br>   Что бы снять теги с КТ, необходимо передать пустой массив.<br> Чтобы добавить теги к уже имеющимся в КТ, необходимо в запросе передать новые теги и теги, которые уже есть в КТ. */
        tagsIDs?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseContentError6,
        ResponseContentError4 | void | ResponseBodyContentError403 | ResponseContentError6
      >({
        path: `/content/v2/tag/nomenclature/link`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет перенести НМ в корзину. Перенос карточки в корзину не является удалением карточки.<br> <code>ВАЖНО</code>: При переносе НМ в корзину, данная НМ выходит из КТ, то есть ей присваивается новый <code>imtID</code>.<br> Карточка товара удаляется автоматически, если лежит в корзине больше 30 дней.<br> Корзина зачищается от карточек, лежащих в ней более 30 дней, каждую ночь по Московскому времени.
     *
     * @tags Корзина
     * @name V2CardsDeleteTrashCreate
     * @summary Перенос НМ в корзину
     * @request POST:/content/v2/cards/delete/trash
     * @secure
     */
    v2CardsDeleteTrashCreate: (
      data: {
        /** Артикул WB (max. 1000) */
        nmIDs?: number[];
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: object | null;
          /** Флаг ошибки */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: object;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/cards/delete/trash`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет восстановить НМ из корзины.<br> <code>ВАЖНО</code>: При восстановлении НМ из корзины она не возвращается в КТ в которой была до переноса в корзину, то есть <code>imtID</code> остается тот же, что и был у НМ в корзине.
     *
     * @tags Корзина
     * @name V2CardsRecoverCreate
     * @summary Восстановление НМ из корзины
     * @request POST:/content/v2/cards/recover
     * @secure
     */
    v2CardsRecoverCreate: (
      data: {
        /** Артикул WB (max. 1000) */
        nmIDs?: number;
      }[],
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: object | null;
          /** Флаг ошибки */
          error?: boolean;
          /** Описание ошибки */
          errorText?: string;
          /** Дополнительные ошибки */
          additionalErrors?: object;
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/cards/recover`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список НМ, находящихся в корзине.  <br> <br>Порядок работы. <br> Чтобы получить полный список номенклатур, <b>если их больше 100</b>, необходимо воспользоваться пагинацией. <ol> <li>Сделать первый запрос (все указанные ниже параметры обязательны): <br> <pre style="background-color: rgb(38 50 56 / 5%); color: #e53935"> { "settings": { "cursor": { "limit": 100 } } }</pre> </li> <li>Пройти в конец полученного списка номенклатур, скопировать из <code>cursor</code> две строки: <ul> <li><code>"trashedAt": "***"</code>,</li> <li><code>"nmID": ***</code>,</li> </ul> <li>Вставить скопированные строки в <code>cursor</code> запроса, повторить вызов метода. </li> <li>Повторять пункты <b>2</b> и <b>3</b>, пока <code>total</code> в ответе не станет меньше чем <code>limit</code> в запросе. <br>Это будет означать, что Вы получили все карточки. </ol> <br> По желанию можно добавить поиск и сортировку. См описание в <b>Request Body schema</b> <br> В <b>Request samples</b> представлен пример запроса со всеми возможными параметрами.
     *
     * @tags Корзина
     * @name V2GetCardsTrashCreate
     * @summary Список НМ, находящихся в корзине
     * @request POST:/content/v2/get/cards/trash
     * @secure
     */
    v2GetCardsTrashCreate: (
      data: {
        /** Настройки */
        settings?: {
          /** Параметр сортировки */
          sort?: {
            /** Сортировать по `trashedAt` (`false` - по убыванию, `true` - по возрастанию) */
            ascending?: boolean;
          };
          /** Курсор */
          cursor?: {
            /** Сколько КТ выдать в ответе */
            limit?: number;
          };
          /** Параметры фильтрации */
          filter?: {
            /** Поиск по артикулу продавца, артикулу WB, баркоду. */
            textSearch?: string;
          };
        };
      },
      query?: {
        /**
         * Язык полей ответа `name`, `value` и `object`: `ru`, `en`, `zh`.
         *
         * Не используется в песочнице
         */
        locale?: "ru" | "en" | "zh";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Массив карточек товаров */
          cards?: {
            /** Артикул WB */
            nmID?: number;
            /** Артикул продавца */
            vendorCode?: string;
            /** Идентификатор предмета */
            subjectID?: string;
            /** Название предмета */
            subjectName?: string;
            /** Массив фото */
            photos?: {
              /** URL фото `900х1200` */
              big?: string;
              /** URL фото `248х328` */
              c246x328?: string;
              /** URL фото `516х688` */
              c516x688?: string;
              /** URL фото `600х600` */
              square?: string;
              /** URL фото `75х100` */
              tm?: string;
            }[];
            /** URL видео */
            video?: string;
            /** Массив размеров */
            sizes?: {
              /** ID размера */
              chrtID?: number;
              /** Размер товара */
              techSize?: string;
              /** Российский размер товара */
              wbSize?: string;
              /** Массив баркодов */
              skus?: string[];
            }[];
            dimensions?: {
              /** Длина, см */
              length?: number;
              /** Ширина, см */
              width?: number;
              /** Высота, см */
              height?: number;
              /**
               * Потенциальная некорректность габаритов товара:
               *
               * - `true` — не выявлена. `"isValid":true` не гарантирует, что размеры указаны корректно. В отдельных случаях (например, при создании новой категории товаров) `"isValid":true` будет возвращаться при любых значениях, кроме нулевых.
               * - `false` — указанные габариты значительно отличаются от средних по категории (предмету). Рекомендуется перепроверить, правильно ли указаны размеры товара в упаковке **в сантиметрах**. Функциональность карточки товара, в том числе начисление логистики и хранения, при этом ограничена не будет. Логистика и хранение продолжают начисляться — по текущим габаритам. Также `"isValid":false` возвращается при отсутствии значений или нулевом значении любой стороны.
               */
              isValid?: boolean;
            };
            /** Массив характеристик, при наличии */
            characteristics?: {
              id?: number;
              name?: string;
              value?: string[];
            }[];
            createdAt?: string;
            trashedAt?: string;
          }[];
          cursor?: {
            trashedAt?: string;
            nmID?: number;
            total?: number;
          };
        },
        ResponseBodyContentError400 | void | ResponseBodyContentError403
      >({
        path: `/content/v2/get/cards/trash`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
