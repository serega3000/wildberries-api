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

export interface Chat {
  /** ID чата */
  chatID?: string;
  /** Подпись чата. Требуется при [отправке сообщения](./#/paths/~1api~1v1~1seller~1message/post) */
  replySign?: string;
  /** ID покупателя */
  clientID?: string;
  /** Имя покупателя */
  clientName?: string;
}

export interface ChatsResponse {
  result?: Chat[];
  /** Ошибки, если есть */
  errors?: any;
}

export interface Error {
  error?: string;
}

export interface Event {
  /** ID чата */
  chatID?: string;
  /** ID события */
  eventID?: string;
  /**
   * Тип события:
   * - `message` — сообщение
   * - `refund` — возврат
   */
  eventType?: EventType;
  /**
   * Признак нового чата:
   * - `false` — чат не новый
   * - `true` — чат новый
   */
  isNewChat?: boolean;
  /** Данные сообщения */
  message?: {
    /** Вложения */
    attachments?: EventAttachments;
    /** Текст сообщения */
    text?: string;
  };
  /** Возврат товара */
  refund?: Refund;
  /**
   * Источник отправки сообщения:
   * - `seller-portal` — портал продавцов
   * - `seller-public-api` — API Чата с покупателями
   * - `rusite` — портал покупателей
   */
  source?: string;
  /** Время появления события на сервере. Формат Unix timestamp */
  addTimestamp?: number;
  /** Время появления события на сервере в UTC */
  addTime?: string;
  /** Подпись чата. Доступна только при `"isNewChat": true`. Требуется при [отправке сообщения](./#/paths/~1api~1v1~1seller~1message/post) */
  replySign?: string;
  /**
   * Отправитель:
   * - `client` — покупатель
   * - `seller` — продавец
   * - `wb` — Wildberries
   */
  sender?: Sender;
  /** ID покупателя */
  clientID?: string;
  /** Имя покупателя */
  clientName?: string;
}

/** Вложения */
export interface EventAttachments {
  /** Информация о заказе */
  goodCard?: GoodCard;
  /** Файлы */
  files?: File[];
  /** Изображения */
  images?: Image[];
}

/**
 * Тип события:
 * - `message` — сообщение
 * - `refund` — возврат
 */
export enum EventType {
  Message = "message",
  Refund = "refund",
}

export interface File {
  /** Тип файла */
  contentType?: string;
  /** Дата загрузки файла */
  date?: string;
  /** Название файла */
  name?: string;
  /** URL для получения файла */
  url?: string;
  /** Размер файла в байтах */
  size?: number;
}

/** Информация о заказе */
export interface GoodCard {
  /** Дата заказа */
  date?: string;
  /**
   * Запрошен ли возврат товара:
   * - `false` — не запрошен
   * - `true` — запрошен
   */
  needRefund?: boolean;
  /** Артикул WB */
  nmID?: number;
  /** Стоимость заказа */
  price?: number;
  /** Валюта */
  priceCurrency?: string;
  /** Уникальный ID заказа в WB */
  rid?: string;
  /** Размер товара */
  size?: string;
  /**
   * Статус товара:
   * - `0` — Товар активный
   * - `1` — Товар оформлен
   * - `2` — Товар собирается
   * - `3` — Товар в пути
   * - `4` — Товар ожидает в ПВЗ
   * - `5` — Товар у курьера
   * - `10` — Товар в архиве
   * - `11` — Товар выкуплен
   * - `12` — Товар отменён
   * - `13` — Оформлен возврат
   * - `14` — Товар отменён (нет на складе)
   */
  statusID?: number;
}

/** Изображение */
export interface Image {
  /** Дата загрузки изображения */
  date?: string;
  /** URL для получения изображения */
  url?: string;
}

export interface MessageResponse {
  /** Ошибки загрузки файлов, если есть */
  errors?: string[];
  result?: {
    /** Время загрузки */
    addTime?: number;
    /** ID чата */
    chatID?: string;
  };
}

/** Возврат товара */
export interface Refund {
  /**
   * Действие продавца по возврату:
   * - `sellerRequestRefund` — продавец запросил возврат товара
   * - `sellerRejectRefund` — продавец отклонил возврат товара
   * - `sellerAcceptFullRefund` — продавец одобрил возврат товара
   * - `sellerAcceptRefundInOffice` — продавец одобрил возврат товара на ПВЗ
   */
  actionType?: RefundActionType;
  /** Стоимость заказа */
  price?: number;
  /** Валюта */
  priceCurrency?: string;
  /** Уникальный ID заказа в WB */
  rid?: string;
}

/**
 * Действие продавца по возврату:
 * - `sellerRequestRefund` — продавец запросил возврат товара
 * - `sellerRejectRefund` — продавец отклонил возврат товара
 * - `sellerAcceptFullRefund` — продавец одобрил возврат товара
 * - `sellerAcceptRefundInOffice` — продавец одобрил возврат товара на ПВЗ
 */
export enum RefundActionType {
  SellerRequestRefund = "sellerRequestRefund",
  SellerRejectRefund = "sellerRejectRefund",
  SellerAcceptFullRefund = "sellerAcceptFullRefund",
  SellerAcceptRefundInOffice = "sellerAcceptRefundInOffice",
}

/**
 * Отправитель:
 * - `client` — покупатель
 * - `seller` — продавец
 * - `wb` — Wildberries
 */
export enum Sender {
  Client = "client",
  Seller = "seller",
  Wb = "wb",
}

export interface EventsResponse {
  result?: EventsResult;
  /** Ошибки, если есть */
  errors?: any;
}

export interface EventsResult {
  /**
   * Пагинатор. Значение поля необходимо указать в запросе для получения следующего пакета данных.
   * @format Unix timestamp
   */
  next?: number;
  /**
   * Время новейшего события в ответе
   * @format RFC 3339
   */
  newestEventTime?: string;
  /**
   * Время старейшего события в ответе
   * @format RFC 3339
   */
  oldestEventTime?: string;
  /** Количество событий */
  totalEvents?: number;
  events?: Event[];
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
 * @title Чат с покупателями
 *
 * Чат позволяет продавцам и покупателям общаться напрямую. <br>Покупатели могут обращаться с вопросами по товарам или претензиями. Рекомендуем отвечать на сообщения в чате в течение 10 дней. <br>Чат всегда начинает покупатель. В одном чате можно общаться только с одним покупателем.  <blockquote class="spoiler">
 *     <p class="descr">Обработка заявок на возврат товара доступна только в <a class="link" target="_blank" href="https://seller.wildberries.ru/chat-with-clients">веб-версии чатов с покупателями</a>.</p>
 *   </blockquote>
 *   <br>
 * <p>Работа с чатами: <br>1. <a href="./#/paths/~1api~1v1~1seller~1chats/get">Получите список чатов</a>. Сохраните ID чатов в своей базе данных — это позволит обновлять информацию о чатах при получении событий. <br>2. <a href="./#/paths/~1api~1v1~1seller~1events/get">Получите события чатов</a>: сообщения и возвраты. У новых чатов значение поля <code>isNewChat</code> будет <code>true</code>. <br>3. <a href="./#/paths/~1api~1v1~1seller~1message/post">Отправляйте сообщения в чат</a>.</p>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Возвращает список всех чатов продавца. Максимум 10 запросов за 10 секунд
     *
     * @name V1SellerChatsList
     * @summary Список чатов
     * @request GET:/api/v1/seller/chats
     * @secure
     */
    v1SellerChatsList: (params: RequestParams = {}) =>
      this.request<ChatsResponse, Error | void>({
        path: `/api/v1/seller/chats`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает список событий всех чатов. Чтобы получить все события: <br>1. Сделайте первый запрос без параметра `next`. <br>2. Повторяйте запрос со значением параметра `next` из ответа на предыдущий запрос, пока `totalEvents` не станет равным `0`. Это будет означать, что вы получили все события. <br>Чтобы получать только новые события, укажите параметр `next` со значением поля `addTimestamp` из последнего полученного события. <br> Максимум 10 запросов за 10 секунд
     *
     * @name V1SellerEventsList
     * @summary События чатов
     * @request GET:/api/v1/seller/events
     * @secure
     */
    v1SellerEventsList: (
      query?: {
        /** Пагинатор. С какого момента получить следующий пакет данных.<br>Формат Unix timestamp **с миллисекундами** */
        next?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventsResponse, Error | void>({
        path: `/api/v1/seller/events`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Отправляет сообщения покупателю. Максимум 10 запросов за 10 секунд
     *
     * @name V1SellerMessageCreate
     * @summary Отправить сообщение
     * @request POST:/api/v1/seller/message
     * @secure
     */
    v1SellerMessageCreate: (
      data: {
        /**
         * Подпись чата. Можно получить из [информации по чату](./#/paths/~1api~1v1~1seller~1chats/get) или [данных события](./#/paths/~1api~1v1~1seller~1events/get), если в событии есть поле `"isNewChat": true`.
         * @maxLength 255
         */
        replySign: string;
        /**
         * Текст сообщения. Максимум 1000 символов.
         * @maxLength 1000
         */
        message?: string;
        /** Файлы, формат JPEG, PDF или PNG, максимальный размер — 5 Мб каждый. Максимальный суммарный размер файлов — 30 Мб. */
        file?: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<MessageResponse, Error | void>({
        path: `/api/v1/seller/message`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
}
