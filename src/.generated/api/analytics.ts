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

/** @example {"countries":["AM","RU"]} */
export interface ExciseReportRequest {
  /** Код стран по стандарту ISO 3166-2. Чтобы получить данные по всем странам, оставьте параметр пустым */
  countries?: ("AM" | "BY" | "KG" | "KZ" | "RU" | "UZ")[];
}

export interface ExciseReportResponse {
  response?: ModelsExciseReportResponse;
}

export interface ModelsExciseReportResponse {
  data?: ModelsExciseReportResponseData;
}

export type ModelsExciseReportResponseData = {
  /**
   * Страна покупателя
   * @example "Россия"
   */
  name?: string;
  /**
   * Цена товара, с НДС
   * @example 100
   */
  price?: number;
  /**
   * Валюта
   * @example "руб"
   */
  currency_name_short?: string;
  /**
   * Код маркировки
   * @example "0102900254680370215_Re/=lSbNiGD"
   */
  excise_short?: string;
  /**
   * Баркод
   * @example 2038893425820
   */
  barcode?: string;
  /**
   * Артикул Wildberries
   * @example 169085355
   */
  nm_id?: number;
  /**
   * Тип операции, если есть:
   *
   *   * `1` — вывод из оборота
   *   * `2` — возврат в оборот
   * @example 1
   */
  operation_type_id?: number;
  /**
   * Номер фискального документа (чека полного расчёта), если есть
   * @example 12345678
   */
  fiscal_doc_number?: number;
  /**
   * Дата фискализации (дата в чеке), если есть, `ГГГГ-ММ-ДД`
   * @example "2024-01-01T00:00:00.000Z"
   */
  fiscal_dt?: string;
  /** Номер фискального накопителя, если есть */
  fiscal_drive_number?: string;
  /**
   * `Rid`
   * @example 606217433440
   */
  rid?: number;
  /**
   * `Srid`
   * @example "7513432034713632943.1.0"
   */
  srid?: string;
}[];

/** @example [{"date":"2023-10-01","logWarehouseCoef":0,"officeId":507,"warehouse":"Коледино","warehouseCoef":1.7,"giId":123456,"chrt_id":1234567,"size":"0","barcode":"","subject":"Маски одноразовые","brand":"1000 Каталог","vendorCode":"Артикул_продавца","nmId":1234567,"volume":12,"calcType":"короба: без габаритов","warehousePrice":7.65,"barcodesCount":1,"palletPlaceCode":0,"palletCount":0,"originalDate":"2023-10-01","loyaltyDiscount":10,"tariffFixDate":"2023-10-01","tariffLowerDate":"2023-11-01"}] */
export type ResponsePaidStorage = {
  /** Дата, за которую был расчёт или перерасчёт */
  date?: string;
  /** Коэффициент логистики и хранения */
  logWarehouseCoef?: number;
  /** ID склада */
  officeId?: number;
  /** Название склада */
  warehouse?: string;
  /** Коэффициент склада */
  warehouseCoef?: number;
  /** ID поставки */
  giId?: number;
  /** Идентификатор размера для этого артикула Wildberries */
  chrtId?: number;
  /** Размер (`techSize` в карточке товара) */
  size?: string;
  /** Баркод */
  barcode?: string;
  /** Предмет */
  subject?: string;
  /** Бренд */
  brand?: string;
  /** Артикул продавца */
  vendorCode?: string;
  /** Артикул Wildberries */
  nmId?: number;
  /** Объём товара */
  volume?: number;
  /** Способ расчёта */
  calcType?: string;
  /** Сумма хранения */
  warehousePrice?: number;
  /** Количество единиц товара (штук), подлежащих тарифицированию за расчётные сутки */
  barcodesCount?: number;
  /** Код паллетоместа */
  palletPlaceCode?: number;
  /** Количество паллет */
  palletCount?: number;
  /** Если был перерасчёт, это дата первоначального расчёта. Если перерасчёта не было, совпадает с `date` */
  originalDate?: string;
  /** Скидка программы лояльности, ₽ */
  loyaltyDiscount?: number;
  /** Дата фиксации тарифа */
  tariffFixDate?: string;
  /** Дата понижения тарифа */
  tariffLowerDate?: string;
}[];

export interface GetTasksResponse {
  data?: GetTasksResponseData;
}

export interface GetTasksResponseData {
  /** ID задания */
  id?: string;
  /**
   * Статус задания:
   *
   *   * `new` — новое
   *   * `processing` —  обрабатывается
   *   * `done` — отчёт готов
   *   * `purged` — отчёт удалён
   *   * `canceled` — отклонено
   */
  status?: string;
}

export interface CreateTaskResponse {
  data?: CreateTaskResponseData;
}

export interface CreateTaskResponseData {
  /** ID задания на генерацию */
  taskId?: string;
}

export interface ErrorResponse {
  errors: string[];
}

export interface ResponseError {
  /** @example null */
  data?: object[];
  /**
   * Флаг ошибки
   * @example true
   */
  error?: boolean;
  /**
   * Описание ошибки
   * @example "Текст ошибки"
   */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

/**
 * Слишком много запросов
 * @example {"title":"too many requests","detail":"limited by c122a060-a7fb-4bb4-abb0-32fd4e18d489","code":"07e4668e-ac2242c5c8c5-[UK-4dx7JUdskGZ]","requestId":"9d3c02cc698f8b041c661a7c28bed293","origin":"s2s-api-auth-stat","status":429,"statusText":"Too Many Requests"}
 */
export interface Response429 {
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

export interface Response429Daily {
  /** @example null */
  data?: object[];
  /**
   * Флаг ошибки
   * @example true
   */
  error?: boolean;
  /**
   * Описание ошибки
   * @example "Превышен лимит отчётов в сутки. Максимальное количество отчётов - 20"
   */
  errorText?: string;
  /**
   * Дополнительные ошибки
   * @example null
   */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface NmReportDetailRequest {
  /** Название бренда */
  brandNames?: string[];
  /** Идентификатор предмета */
  objectIDs?: number[];
  /** Идентификатор тега */
  tagIDs?: number[];
  /** Артикул WB */
  nmIDs?: number[];
  /**
   * Временная зона.<br> Если не указано, то по умолчанию используется Europe/Moscow.
   * @example "Europe/Moscow"
   */
  timezone?: string;
  /** Период */
  period: {
    /**
     * Начало периода
     * @format time-date
     * @example "2023-06-01T20:05:32.000Z"
     */
    begin?: string;
    /**
     * Конец периода
     * @format time-date
     * @example "2024-03-01T20:05:32.000Z"
     */
    end?: string;
  };
  /**
   * Параметры сортировки.
   * Если не указано, то по умолчанию используется значение "openCard" и сортировка по убыванию.
   * <dl>
   * <dt>Все виды сортировки <code>field</code>:</dt>
   * <dd><code>openCard </code> — по открытию карточки (переход на страницу товара)</dd>
   * <dd><code>addToCart </code> — по добавлениям в корзину</dd>
   * <dd><code>orders </code> — по кол-ву заказов</dd>
   * <dd><code>avgRubPrice </code> — по средней цене в рублях</dd>
   * <dd><code>ordersSumRub </code> — по сумме заказов в рублях</dd>
   * <dd><code>stockMpQty </code> — по кол-ву остатков маркетплейса шт.</dd>
   * <dd><code>stockWbQty </code> — по кол-ву остатков на складе шт.</dd>
   * <dd><code>cancelSumRub </code> — сумме возвратов в рублях</dd>
   * <dd><code>cancelCount </code> — по кол-ву возвратов</dd>
   * <dd><code>buyoutCount </code> — по кол-ву выкупов</dd>
   * <dd><code>buyoutSumRub </code> — по сумме выкупов</dd>
   * </dl>
   */
  orderBy?: {
    /**
     * Вид сортировки
     * @example "ordersSumRub"
     */
    field?: string;
    /**
     * `asc` — по возрастанию, `desc` — по убыванию
     * @example "asc"
     */
    mode?: string;
  };
  /**
   * Страница
   * @format int32
   * @example 1
   */
  page: number;
}

export interface NmReportGroupedRequest {
  /** Идентификатор предмета */
  objectIDs?: number[];
  /** Название бренда */
  brandNames?: string[];
  /** Идентификатор тега */
  tagIDs?: number[];
  /**
   * Временная зона.<br> Если не указано, то по умолчанию используется Europe/Moscow.
   * @example "Europe/Moscow"
   */
  timezone?: string;
  /** Период */
  period: {
    /**
     * Начало периода
     * @example "2023-10-04T20:05:32.000Z"
     */
    begin?: string;
    /**
     * Конец периода
     * @example "2024-03-01T20:05:32.000Z"
     */
    end?: string;
  };
  /**
   * Параметры сортировки.
   * Если не указано, то по умолчанию используется значение "openCard" и сортировка по убыванию.
   * <dl>
   * <dt>Все виды сортировки <code>field</code>:</dt>
   * <dd><code>openCard </code> — по открытию карточки (переход на страницу товара)</dd>
   * <dd><code>addToCart </code> — по добавлениям в корзину</dd>
   * <dd><code>orders </code> — по кол-ву заказов</dd>
   * <dd><code>avgRubPrice </code> — по средней цене в рублях</dd>
   * <dd><code>ordersSumRub </code> — по сумме заказов в рублях</dd>
   * <dd><code>stockMpQty </code> — по кол-ву остатков маркетплейса шт.</dd>
   * <dd><code>stockWbQty </code> — по кол-ву остатков на складе шт.</dd>
   * </dl>
   */
  orderBy?: {
    /**
     * Вид сортировки
     * @example "ordersSumRub"
     */
    field?: string;
    /**
     * `asc` — по возрастанию, `desc` — по убыванию
     * @example "asc"
     */
    mode?: string;
  };
  /**
   * Страница
   * @format int32
   * @example 1
   */
  page: number;
}

export interface NmReportDetailHistoryRequest {
  /** Артикул Wildberries (максимум 20) */
  nmIDs: number[];
  /** Период */
  period: {
    /**
     * Начало периода
     * @format date
     * @example "2023-06-20T00:00:00.000Z"
     */
    begin?: string;
    /**
     * Конец периода
     * @format date
     * @example "2023-06-22T00:00:00.000Z"
     */
    end?: string;
  };
  /**
   * Временная зона.<br> Если не указано, то по умолчанию используется Europe/Moscow.
   * @example "Europe/Moscow"
   */
  timezone?: string;
  /**
   * Тип агрегации. Если не указано, то по умолчанию используется агрегация по дням. <br> Доступные уровни агрегации `day`, `week`
   * @example "day"
   */
  aggregationLevel?: string;
}

export interface NmReportGroupedHistoryRequest {
  /** Идентификатор предмета */
  objectIDs?: number[];
  /** Название бренда */
  brandNames?: string[];
  /** Идентификатор тега */
  tagIDs?: number[];
  /** Период */
  period: {
    /**
     * Начало периода
     * @format date
     * @example "2023-06-21T00:00:00.000Z"
     */
    begin?: string;
    /**
     * Конец периода
     * @format date
     * @example "2023-06-23T00:00:00.000Z"
     */
    end?: string;
  };
  /**
   * Временная зона.<br> Если не указано, то по умолчанию используется Europe/Moscow.
   * @example "Europe/Moscow"
   */
  timezone?: string;
  /**
   * Тип агрегации. Если не указано, то по умолчанию используется агрегация по дням. <br> Доступные уровни агрегации `day`, `week`
   * @example "day"
   */
  aggregationLevel?: string;
}

export interface NmReportDetailResponse {
  data?: {
    /**
     * Страница
     * @format int32
     * @example 1
     */
    page?: number;
    /** Есть ли следующая страница (false - нет, true - есть) */
    isNextPage?: boolean;
    cards?: {
      /**
       * Артикул WB
       * @format int32
       * @example 1234567
       */
      nmID?: number;
      /**
       * Артикул продавца
       * @example "supplierVendor"
       */
      vendorCode?: string;
      /**
       * Название бренд
       * @example "Some"
       */
      brandName?: string;
      /** Теги */
      tags?: {
        /**
         * Идентификатор тега
         * @format int32
         * @example 123
         */
        id?: number;
        /**
         * Название тега
         * @example "Sale"
         */
        name?: string;
      }[];
      /** Предмет */
      object?: {
        /**
         * Идентификатор предмета
         * @format int32
         * @example 447
         */
        id?: number;
        /**
         * Название предмета
         * @example "Кондиционеры для волос"
         */
        name?: string;
      };
      /** Статистика */
      statistics?: {
        /** Запрашиваемый период */
        selectedPeriod?: {
          /**
           * Начало периода
           * @example "2023-06-01T20:05:32.000Z"
           */
          begin?: string;
          /**
           * Конец периода
           * @example "2024-03-01T20:05:32.000Z"
           */
          end?: string;
          /**
           * Количество переходов в карточку товара
           * @format int32
           * @example 0
           */
          openCardCount?: number;
          /**
           * Положили в корзину, штук
           * @format int32
           * @example 0
           */
          addToCartCount?: number;
          /**
           * Заказали товаров, шт
           * @format int32
           * @example 0
           */
          ordersCount?: number;
          /**
           * Заказали на сумму, руб.
           * @format int32
           * @example 0
           */
          ordersSumRub?: number;
          /**
           * Выкупили товаров, шт.
           * @format int32
           * @example 0
           */
          buyoutsCount?: number;
          /**
           * Выкупили на сумму, руб.
           * @format int32
           * @example 0
           */
          buyoutsSumRub?: number;
          /**
           * Отменили товаров, шт.
           * @format int32
           * @example 0
           */
          cancelCount?: number;
          /**
           * Отменили на сумму, руб.
           * @format int32
           * @example 0
           */
          cancelSumRub?: number;
          /**
           * Средняя цена, руб.
           * @format int32
           * @example 0
           */
          avgPriceRub?: number;
          /**
           * Среднее количество заказов в день, шт.
           * @format int32
           * @example 0
           */
          avgOrdersCountPerDay?: number;
          /** Конверсии */
          conversions?: {
            /**
             * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
             * @format int32
             * @example 0
             */
            addToCartPercent?: number;
            /**
             * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
             * @format int32
             * @example 0
             */
            cartToOrderPercent?: number;
            /**
             * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
             * @format int32
             * @example 0
             */
            buyoutsPercent?: number;
          };
        };
        /** Статистика за предыдущие 30 дней */
        previousPeriod?: {
          /**
           * Начало периода
           * @example "2023-05-07T20:05:31.000Z"
           */
          begin?: string;
          /**
           * Конец периода
           * @example "2023-06-01T20:05:31.000Z"
           */
          end?: string;
          /**
           * Количество переходов в карточку товара
           * @format int32
           * @example 0
           */
          openCardCount?: number;
          /**
           * Положили в корзину, штук
           * @format int32
           * @example 0
           */
          addToCartCount?: number;
          /**
           * Заказали товаров, штук
           * @format int32
           * @example 1
           */
          ordersCount?: number;
          /**
           * Заказали на сумму, руб.
           * @format int32
           * @example 1262
           */
          ordersSumRub?: number;
          /**
           * Выкупили товаров, шт.
           * @format int32
           * @example 1
           */
          buyoutsCount?: number;
          /**
           * Выкупили на сумму, руб.
           * @format int32
           * @example 1262
           */
          buyoutsSumRub?: number;
          /**
           * Отменили товаров, штук
           * @format int32
           * @example 0
           */
          cancelCount?: number;
          /**
           * Отменили на сумму, руб.
           * @format int32
           * @example 0
           */
          cancelSumRub?: number;
          /**
           * Средняя цена, руб.
           * @format int32
           * @example 1262
           */
          avgPriceRub?: number;
          /**
           * Среднее количество заказов в день, шт.
           * @example 0.04
           */
          avgOrdersCountPerDay?: number;
          /** Конверсии */
          conversions?: {
            /**
             * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
             * @format int32
             * @example 0
             */
            addToCartPercent?: number;
            /**
             * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
             * @format int32
             * @example 0
             */
            cartToOrderPercent?: number;
            /**
             * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
             * @format int32
             * @example 100
             */
            buyoutsPercent?: number;
          };
        };
        /** Сравнение двух периодов, в процентах */
        periodComparison?: {
          /**
           * Динамика переходов в карточку товара
           * @format int32
           * @example 0
           */
          openCardDynamics?: number;
          /**
           * Динамика добавлений в корзину
           * @format int32
           * @example 0
           */
          addToCartDynamics?: number;
          /**
           * Динамика количества заказов
           * @format int32
           * @example -100
           */
          ordersCountDynamics?: number;
          /**
           * Динамика суммы заказов, рублей
           * @format int32
           * @example -100
           */
          ordersSumRubDynamics?: number;
          /**
           * Динамика выкупов, штук
           * @format int32
           * @example -100
           */
          buyoutsCountDynamics?: number;
          /**
           * Динамика суммы выкупов, рублей
           * @format int32
           * @example -100
           */
          buyoutsSumRubDynamics?: number;
          /**
           * Динамика отмен товаров, штук
           * @format int32
           * @example 0
           */
          cancelCountDynamics?: number;
          /**
           * Динамика сумм отмен товаров, рублей
           * @format int32
           * @example 0
           */
          cancelSumRubDynamics?: number;
          /**
           * Динамика среднего количества заказов в день
           * @format int32
           * @example 0
           */
          avgOrdersCountPerDayDynamics?: number;
          /**
           * Динамика средней цены на товары. Учитываются скидки для акций и WB скидка.
           * @format int32
           * @example -100
           */
          avgPriceRubDynamics?: number;
          /** Конверсии */
          conversions?: {
            /**
             * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
             * @format int32
             * @example 0
             */
            addToCartPercent?: number;
            /**
             * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
             * @format int32
             * @example 0
             */
            cartToOrderPercent?: number;
            /**
             * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
             * @format int32
             * @example -100
             */
            buyoutsPercent?: number;
          };
        };
      };
      /** Остатки */
      stocks?: {
        /**
         * Остатки МП, шт. (Общее количество остатков на складе продавца)
         * @format int32
         * @example 0
         */
        stocksMp?: number;
        /**
         * Остатки на складах Wildberries (Общее количество остатков на складах Wildberries)
         * @format int32
         * @example 0
         */
        stocksWb?: number;
      };
    }[];
  };
  /** Флаг ошибки */
  error?: boolean;
  /**
   * Описание ошибки
   * @example ""
   */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface NmReportGroupedResponse {
  data?: {
    /**
     * Страница
     * @format int32
     * @example 1
     */
    page?: number;
    /** Есть ли следующая страница (false - нет, true - есть) */
    isNextPage?: boolean;
    groups?: {
      /**
       * Название бренда
       * @example "Some"
       */
      brandName?: string;
      tags?: {
        /**
         * Идентификатор тега
         * @format int32
         * @example 123
         */
        id?: number;
        /**
         * Название тега
         * @example "Sale"
         */
        name?: string;
      }[];
      /** Предмет */
      object?: {
        /**
         * Идентификатор предмета
         * @format int32
         * @example 1668
         */
        id?: number;
        /**
         * Название предмета
         * @example "Воски для волос"
         */
        name?: string;
      };
      statistics?: {
        /** Запрашиваемый период */
        selectedPeriod?: {
          /**
           * Начало периода
           * @example "2023-10-04T20:05:32.000Z"
           */
          begin?: string;
          /**
           * Конец периода
           * @example "2024-03-01T20:05:32.000Z"
           */
          end?: string;
          /**
           * Количество переходов в КТ
           * @format int32
           * @example 0
           */
          openCardCount?: number;
          /**
           * Положили в корзину, штук
           * @format int32
           * @example 0
           */
          addToCartCount?: number;
          /**
           * Заказали товаров, штук
           * @format int32
           * @example 0
           */
          ordersCount?: number;
          /**
           * Заказали на сумму, руб.
           * @format int32
           * @example 0
           */
          ordersSumRub?: number;
          /**
           * Выкупили товаров, штук
           * @format int32
           * @example 0
           */
          buyoutsCount?: number;
          /**
           * Выкупили на сумму, руб.
           * @format int32
           * @example 0
           */
          buyoutsSumRub?: number;
          /**
           * Отменили товаров, штук
           * @format int32
           * @example 0
           */
          cancelCount?: number;
          /**
           * Отменили на сумму, руб
           * @format int32
           * @example 0
           */
          cancelSumRub?: number;
          /**
           * Средняя цена, руб.
           * @format int32
           * @example 0
           */
          avgPriceRub?: number;
          /**
           * Среднее количество заказов в день, шт.
           * @format int32
           * @example 0
           */
          avgOrdersCountPerDay?: number;
          /** Конверсии */
          conversions?: {
            /**
             * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
             * @format int32
             * @example 0
             */
            addToCartPercent?: number;
            /**
             * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
             * @format int32
             * @example 0
             */
            cartToOrderPercent?: number;
            /**
             * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
             * @format int32
             * @example 0
             */
            buyoutsPercent?: number;
          };
        };
        /** Статистика за предыдущие 30 дней */
        previousPeriod?: {
          /**
           * Начало периода
           * @example "2023-11-04T20:05:31.000Z"
           */
          begin?: string;
          /**
           * Конец периода
           * @example "2024-03-01T20:05:31.000Z"
           */
          end?: string;
          /**
           * Количество переходов в КТ
           * @format int32
           * @example 466
           */
          openCardCount?: number;
          /**
           * Положили в корзину, штук
           * @format int32
           * @example 72
           */
          addToCartCount?: number;
          /**
           * Заказали товаров, штук
           * @format int32
           * @example 84
           */
          ordersCount?: number;
          /**
           * Заказали на сумму, руб.
           * @example 127060.42
           */
          ordersSumRub?: number;
          /**
           * Выкупили товаров, штук
           * @format int32
           * @example 69
           */
          buyoutsCount?: number;
          /**
           * Выкупили на сумму, руб.
           * @example 104898.42
           */
          buyoutsSumRub?: number;
          /**
           * Отменили товаров, штук
           * @format int32
           * @example 13
           */
          cancelCount?: number;
          /**
           * Отменили на сумму, руб
           * @format int32
           * @example 0
           */
          cancelSumRub?: number;
          /**
           * Средняя цена, руб.
           * @example 1562.65
           */
          avgPriceRub?: number;
          /**
           * Среднее количество заказов в день, шт.
           * @example 0.72
           */
          avgOrdersCountPerDay?: number;
          /** Конверсии */
          conversions?: {
            /**
             * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
             * @example 15.5
             */
            addToCartPercent?: number;
            /**
             * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
             * @example 116.7
             */
            cartToOrderPercent?: number;
            /**
             * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
             * @example 84.1
             */
            buyoutsPercent?: number;
          };
        };
        /** Сравнение двух периодов, в процентах */
        periodComparison?: {
          /**
           * Динамика переходов в карточку товара
           * @format int32
           * @example -100
           */
          openCardDynamics?: number;
          /**
           * Динамика добавлений в корзину
           * @format int32
           * @example -100
           */
          addToCartDynamics?: number;
          /**
           * Динамика количества заказов
           * @format int32
           * @example -100
           */
          ordersCountDynamics?: number;
          /**
           * Динамика суммы заказов, рублей
           * @format int32
           * @example -100
           */
          ordersSumRubDynamics?: number;
          /**
           * Динамика выкупов, штук
           * @format int32
           * @example -100
           */
          buyoutsCountDynamics?: number;
          /**
           * Динамика суммы выкупов, рублей
           * @format int32
           * @example -100
           */
          buyoutsSumRubDynamics?: number;
          /**
           * Динамика отмен товаров, штук
           * @format int32
           * @example 0
           */
          cancelCountDynamics?: number;
          /**
           * Динамика сумм отмен товаров, рублей
           * @format int32
           * @example 0
           */
          cancelSumRubDynamics?: number;
          /**
           * Динамика среднего количества заказов в день
           * @format int32
           * @example 0
           */
          avgOrdersCountPerDayDynamics?: number;
          /**
           * Динамика средней цены на товары. Учитываются скидки для акций и WB скидка.
           * @format int32
           * @example -100
           */
          avgPriceRubDynamics?: number;
          /** Конверсии */
          conversions?: {
            /**
             * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
             * @format int32
             * @example -100
             */
            addToCartPercent?: number;
            /**
             * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
             * @format int32
             * @example -100
             */
            cartToOrderPercent?: number;
            /**
             * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
             * @format int32
             * @example -100
             */
            buyoutsPercent?: number;
          };
        };
      };
    }[];
  };
  /** Флаг ошибки */
  error?: boolean;
  /**
   * Описание ошибки
   * @example ""
   */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface NmReportDetailHistoryResponse {
  data?: {
    /**
     * Артикул WB
     * @format int32
     * @example 1234567
     */
    nmID?: number;
    /**
     * Наименование КТ
     * @example "Наименование КТ"
     */
    imtName?: string;
    /**
     * Артикул продавца
     * @example "supplierVendor"
     */
    vendorCode?: string;
    history?: {
      /**
       * Дата
       * @format date
       * @example "2023-06-20T00:00:00.000Z"
       */
      dt?: string;
      /**
       * Количество переходов в карточку товара
       * @format int32
       * @example 26
       */
      openCardCount?: number;
      /**
       * Положили в корзину, штук
       * @format int32
       * @example 1
       */
      addToCartCount?: number;
      /**
       * Заказали товаров, шт
       * @format int32
       * @example 0
       */
      ordersCount?: number;
      /**
       * Заказали на сумму, руб.
       * @format int32
       * @example 0
       */
      ordersSumRub?: number;
      /**
       * Выкупили товаров, шт.
       * @format int32
       * @example 0
       */
      buyoutsCount?: number;
      /**
       * Выкупили на сумму, руб.
       * @format int32
       * @example 0
       */
      buyoutsSumRub?: number;
      /**
       * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
       * @format int32
       * @example 0
       */
      buyoutPercent?: number;
      /**
       * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
       * @example 3.8
       */
      addToCartConversion?: number;
      /**
       * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
       * @format int32
       * @example 0
       */
      cartToOrderConversion?: number;
    }[];
  }[];
  /** Флаг ошибки */
  error?: boolean;
  /**
   * Описание ошибки
   * @example ""
   */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface NmReportGroupedHistoryResponse {
  data?: {
    /** Предмет */
    object?: {
      /**
       * Идентификатор предмета
       * @format int32
       * @example 358
       */
      id?: number;
      /**
       * Название предмета
       * @example "Шампуни"
       */
      name?: string;
    };
    /**
     * Название бренда
     * @example "Some"
     */
    brandName?: string;
    /** Тег */
    tag?: {
      /**
       * Идентификатор тега
       * @format int32
       * @example 123
       */
      id?: number;
      /**
       * Название тега
       * @example "Sale"
       */
      name?: string;
    };
    history?: {
      /**
       * @format date
       * @example "2023-06-21T00:00:00.000Z"
       */
      dt?: string;
      /**
       * Количество переходов в карточку товара
       * @format int32
       * @example 0
       */
      openCardCount?: number;
      /**
       * Положили в корзину, штук
       * @format int32
       * @example 0
       */
      addToCartCount?: number;
      /**
       * Заказали товаров, шт
       * @format int32
       * @example 0
       */
      ordersCount?: number;
      /**
       * Заказали на сумму, руб.
       * @format int32
       * @example 0
       */
      ordersSumRub?: number;
      /**
       * Выкупили товаров, шт.
       * @format int32
       * @example 0
       */
      buyoutsCount?: number;
      /**
       * Выкупили на сумму, руб.
       * @format int32
       * @example 0
       */
      buyoutsSumRub?: number;
      /**
       * Процент выкупа, % (Какой процент посетителей, заказавших товар, его выкупили. Без учёта товаров, которые еще доставляются покупателю.)
       * @format int32
       * @example 0
       */
      buyoutPercent?: number;
      /**
       * Конверсия в корзину, % (Какой процент посетителей, открывших карточку товара, добавили товар в корзину)
       * @format int32
       * @example 0
       */
      addToCartConversion?: number;
      /**
       * Конверсия в заказ, % (Какой процент посетителей, добавивших товар в корзину, сделали заказ)
       * @format int32
       * @example 0
       */
      cartToOrderConversion?: number;
    }[];
  }[];
  /** Флаг ошибки */
  error?: boolean;
  /**
   * Описание ошибки
   * @example ""
   */
  errorText?: string;
  /** Дополнительные ошибки */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface BySelectedNmIDReq {
  /**
   * Идентификатор отчёта в UUID-формате. Генерируется продавцом самостоятельно
   * @format uuid
   */
  id: string;
  /** Тип отчёта — `DETAIL_HISTORY_REPORT` */
  reportType: string;
  /** Название отчёта (если не указано, сформируется автоматически) */
  userReportName?: string;
  /** Параметры отчёта */
  params?: {
    /**
     * `nmID `, по которым составить отчёт. Оставьте пустым, чтобы получить отчёт по всем товарам
     * @maxItems 1000
     * @minItems 0
     */
    nmIDs?: number[];
    /** Идентификаторы предметов */
    subjectIDs?: number[];
    /** Бренды */
    brandNames?: string[];
    /** Идентификаторы тегов */
    tagIDs?: number[];
    /**
     * Начало периода
     * @format date
     */
    startDate: string;
    /**
     * Конец периода
     * @format date
     */
    endDate: string;
    /** Временная зона, по умолчанию Europe/Moscow */
    timezone?: string;
    /**
     * Как сгруппировать данные (по умолчанию по дням):
     *
     *   * `day` — по дням
     *   * `week` — по неделям
     *   * `month` — по месяцам
     */
    aggregationLevel?: "day" | "week" | "month";
    /** Скрыть удалённые номенклатуры */
    skipDeletedNm?: boolean;
  };
}

export interface GroupedByObjectsBrandsAndTagsReq {
  /**
   * Идентификатор отчёта в UUID-формате. Генерируется продавцом самостоятельно
   * @format uuid
   */
  id: string;
  /** Тип отчёта — `GROUPED_HISTORY_REPORT` */
  reportType: string;
  /** Название отчёта (если не указано, сформируется автоматически) */
  userReportName?: string;
  /** Параметры отчёта */
  params?: {
    /** Идентификаторы предметов */
    subjectIDs?: number[];
    /** Бренды */
    brandNames?: string[];
    /** Идентификаторы тегов */
    tagIDs?: number[];
    /**
     * Начало периода
     * @format date
     */
    startDate: string;
    /**
     * Конец периода
     * @format date
     */
    endDate: string;
    /** Временная зона, по умолчанию Europe/Moscow */
    timezone?: string;
    /**
     * Как сгруппировать данные (по умолчанию по дням):
     *
     *   * `day` — по дням
     *   * `week` — по неделям
     *   * `month` — по месяцам
     */
    aggregationLevel?: string;
    /** Скрыть удалённые `nmID` */
    skipDeletedNm?: boolean;
  };
}

export interface NmReportRetryReportRequest {
  /**
   * ID отчёта
   * @format uuid
   * @example "06eea887-9d9f-491f-b16a-bb1766fcb8d2"
   */
  downloadId?: string;
}

export interface NmReportCreateReportResponse {
  /**
   * Уведомление, что началась генерация отчёта
   * @example "Началось формирование файла/отчета"
   */
  data?: string;
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
   * @example null
   */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface NmReportGetReportsResponse {
  data?: {
    /**
     * Идентификатор отчёта
     * @format uuid
     * @example "06eae887-9d9f-491f-b16a-bb1766fcb8d2"
     */
    id?: string;
    /**
     * Дата и время завершения генерации
     * @format date-time
     * @example "2023-06-26T20:05:32.000Z"
     */
    createdAt?: string;
    /**
     * Статус отчёта:
     *
     * * `WAITING` — в очереди на обработку
     * * `PROCESSING` — генерируется
     * * `SUCCESS —` готов
     * * `RETRY` — ожидает повторной обработки
     * * `FAILED` — не получилось сгенерировать, сгенерируйте повторно
     * @example "SUCCESS"
     */
    status?: string;
    /**
     * Название отчёта
     * @example "Card report"
     */
    name?: string;
    /**
     * Размер отчёта, Б
     * @example 123
     */
    size?: number;
    /**
     * Начало периода
     * @format date
     * @example "2023-06-21T00:00:00.000Z"
     */
    startDate?: string;
    /**
     * Конец периода
     * @format date
     * @example "2023-06-23T00:00:00.000Z"
     */
    endDate?: string;
  }[];
  /**
   * Флаг ошибки
   * @example false
   */
  error?: boolean;
  /** Текст ошибки */
  errorText?: string;
  /** @example null */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

export interface NmReportRetryReportResponse {
  /**
   * Уведомление, что началась повторная генерация отчёта
   * @example "Началось переформирование файла/отчета"
   */
  data?: string;
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
   * @example null
   */
  additionalErrors?: {
    /** Структура, где допущена ошибка */
    field?: string;
    /** Описание */
    description?: string;
  }[];
}

/** Прочие ошибки */
export interface ErrorInternalResponse {
  error?: boolean;
  /** @example "Internal server error" */
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
 * @title Описание API Аналитика
 *
 * Сервис предоставляет публичный API для получения аналитических данных.
 * С помощью этих методов вы можете получать аналитические отчёты. [Часть методов](./#tag/Voronka-prodazh-(Dzhem)) доступна только с [подпиской на расширенную аналитику Джем](https://seller.wildberries.ru/dynamic-product-categories/jam).
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Получение статистики КТ за выбранный период, по nmID/предметам/брендам/тегам.<br> Поля `brandNames`,`objectIDs`, `tagIDs`, `nmIDs` могут быть пустыми, тогда в ответе идут все карточки продавца.<br>  При выборе нескольких полей в ответ приходят данные по карточкам, у которых есть все выбранные поля. Работает с пагинацией.<br> Можно получить отчёт максимум за последний год (365 дней).<br> Также в данных, где предоставляется информация по предыдущему периоду: * В `previousPeriod`  данные за такой же период, что и в `selectedPeriod`. * Если дата начала  `previousPeriod` раньше, чем год назад от текущей даты, она будет приведена  к виду: `previousPeriod.start = текущая дата - 365 дней.` <br> <b>Максимум 3 запроса в минуту.</b>
     *
     * @tags Воронка продаж
     * @name V2NmReportDetailCreate
     * @summary Получение статистики КТ за выбранный период, по nmID/предметам/брендам/тегам
     * @request POST:/api/v2/nm-report/detail
     * @secure
     */
    v2NmReportDetailCreate: (data: NmReportDetailRequest, params: RequestParams = {}) =>
      this.request<NmReportDetailResponse, ResponseError | void>({
        path: `/api/v2/nm-report/detail`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение статистики КТ за период, сгруппированный по предметам, брендам и тегам.<br> Поля `brandNames`, `objectIDs`, `tagIDs` могут быть пустыми, тогда группировка происходит по всем карточкам продавца.<br> Можно получить отчёт максимум за последний год (365 дней). <br> Также в данных, где предоставляется информация по предыдущему периоду: * В `previousPeriod`  данные за такой же период, что и в `selectedPeriod`. * Если дата начала  `previousPeriod` раньше, чем год назад от текущей даты, она будет приведена  к виду: `previousPeriod.start = текущая дата - 365 дней.` <br> <b>Максимум 3 запроса в минуту.</b>
     *
     * @tags Воронка продаж
     * @name V2NmReportGroupedCreate
     * @summary Получение статистики КТ за период, сгруппированный по предметам, брендам и тегам
     * @request POST:/api/v2/nm-report/grouped
     * @secure
     */
    v2NmReportGroupedCreate: (data: NmReportGroupedRequest, params: RequestParams = {}) =>
      this.request<NmReportGroupedResponse, ResponseError | void>({
        path: `/api/v2/nm-report/grouped`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение статистики КТ по дням по выбранным `nmID`. Можно получить отчёт максимум за последнюю неделю. Чтобы получать отчёты за период до года, подпишитесь на [расширенную аналитику Джем](https://seller.wildberries.ru/dynamic-product-categories/jam). <br> <b>Максимум 3 запроса в минуту.</b>
     *
     * @tags Воронка продаж
     * @name V2NmReportDetailHistoryCreate
     * @summary Получение статистики КТ по дням по выбранным nmID
     * @request POST:/api/v2/nm-report/detail/history
     * @secure
     */
    v2NmReportDetailHistoryCreate: (data: NmReportDetailHistoryRequest, params: RequestParams = {}) =>
      this.request<NmReportDetailHistoryResponse, ResponseError | void>({
        path: `/api/v2/nm-report/detail/history`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение статистики КТ по дням за период, сгруппированный по предметам, брендам и тегам.<br> Поля `brandNames`, `objectIDs`, `tagIDs` могут быть пустыми, тогда группировка происходит по всем карточкам продавца.<br> В запросе произведение количества предметов, брендов, тегов не должно быть больше 16. Можно получить отчёт максимум за последнюю неделю. Чтобы получать отчёты за период до года, подпишитесь на [расширенную аналитику Джем](https://seller.wildberries.ru/dynamic-product-categories/jam). <br> <b>Максимум 3 запроса в минуту.</b>
     *
     * @tags Воронка продаж
     * @name V2NmReportGroupedHistoryCreate
     * @summary Получение статистики КТ по дням за период, сгруппированный по предметам, брендам и тегам
     * @request POST:/api/v2/nm-report/grouped/history
     * @secure
     */
    v2NmReportGroupedHistoryCreate: (data: NmReportGroupedHistoryRequest, params: RequestParams = {}) =>
      this.request<NmReportGroupedHistoryResponse, ResponseError | void>({
        path: `/api/v2/nm-report/grouped/history`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Вы можете создать отчёт с группировкой: * по артикулам Wildberries (`nmID`); * по категориям, брендам и тегам. В каждом из этих отчётов можно сгруппировать данные по дням, неделям или месяцам. Максимум 3 запроса в минуту, при этом в сутки можно сгенерировать максимум 20 отчётов (считаются только успешные генерации).
     *
     * @tags Воронка продаж (Джем)
     * @name V2NmReportDownloadsCreate
     * @summary Создать отчёт
     * @request POST:/api/v2/nm-report/downloads
     * @secure
     */
    v2NmReportDownloadsCreate: (
      data: BySelectedNmIDReq | GroupedByObjectsBrandsAndTagsReq,
      params: RequestParams = {},
    ) =>
      this.request<NmReportCreateReportResponse, ResponseError | void>({
        path: `/api/v2/nm-report/downloads`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 3 запроса в минуту
     *
     * @tags Воронка продаж (Джем)
     * @name V2NmReportDownloadsList
     * @summary Получить список отчётов
     * @request GET:/api/v2/nm-report/downloads
     * @secure
     */
    v2NmReportDownloadsList: (
      query?: {
        /** ID отчёта */
        "filter[downloadIds]"?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<NmReportGetReportsResponse, ResponseError | void>({
        path: `/api/v2/nm-report/downloads`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 3 запроса в минуту
     *
     * @tags Воронка продаж (Джем)
     * @name V2NmReportDownloadsRetryCreate
     * @summary Сгенерировать отчёт повторно
     * @request POST:/api/v2/nm-report/downloads/retry
     * @secure
     */
    v2NmReportDownloadsRetryCreate: (data: NmReportRetryReportRequest, params: RequestParams = {}) =>
      this.request<NmReportRetryReportResponse, ResponseError | void>({
        path: `/api/v2/nm-report/downloads/retry`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Можно получить отчёт, который сгенерирован в последние 48 часов.<br>Отчет будет загружен внутри архива ZIP в формате CSV.<br> Максимум 3 запроса в минуту.
     *
     * @tags Воронка продаж (Джем)
     * @name V2NmReportDownloadsFileDetail
     * @summary Получить отчёт
     * @request GET:/api/v2/nm-report/downloads/file/{downloadId}
     * @secure
     */
    v2NmReportDownloadsFileDetail: (downloadId: string, params: RequestParams = {}) =>
      this.request<File, ResponseError | void | (Response429 | Response429Daily)>({
        path: `/api/v2/nm-report/downloads/file/${downloadId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Создаёт задание на генерацию отчёта. Параметры `groupBy` и `filter` можно задать в любой комбинации — аналогично [версии](https://seller.wildberries.ru/analytics-reports/warehouse-remains) в личном кабинете. Максимум 1 запрос в минуту
     *
     * @tags Отчёт по остаткам на складах
     * @name V1WarehouseRemainsList
     * @summary Создать отчёт
     * @request GET:/api/v1/warehouse_remains
     * @secure
     */
    v1WarehouseRemainsList: (
      query?: {
        /**
         * Язык полей ответа `subjectName` и `warehouseName`:
         *   - `ru` — русский
         *   - `en` — английский
         *   - `zh` — китайский. Значения `warehouseName` на английском
         * @default "ru"
         * @example "ru"
         */
        locale?: string;
        /**
         * Разбивка по брендам
         * @default "false"
         * @example true
         */
        groupByBrand?: boolean;
        /**
         * Разбивка по предметам
         * @default "false"
         * @example true
         */
        groupBySubject?: boolean;
        /**
         * Разбивка по артикулам продавца
         * @default "false"
         * @example true
         */
        groupBySa?: boolean;
        /**
         * Разбивка по артикулам WB. Если `groupByNm=true`, в ответе будет поле `volume`
         * @default "false"
         * @example true
         */
        groupByNm?: boolean;
        /**
         * Разбивка по баркодам
         * @default "false"
         * @example true
         */
        groupByBarcode?: boolean;
        /**
         * Разбивка по размерам
         * @default "false"
         * @example true
         */
        groupBySize?: boolean;
        /**
         * Фильтр по фото:
         *   - `-1` — без фото
         *   - `0` — не применять фильтр
         *   - `1` — с фото
         * @default "0"
         * @example 1
         */
        filterPics?: number;
        /**
         * Фильтр по объёму:
         *   - `-1` — без габаритов
         *   - `0` — не применять фильтр
         *   - `3` — свыше трёх литров
         * @default "0"
         * @example 3
         */
        filterVolume?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CreateTaskResponse,
        {
          /** Заголовок ошибки */
          title?: string;
          /** HTTP статус-код */
          status?: number;
          /** Детали ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/warehouse_remains`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает статус задания на генерацию. Максимум 1 запрос в 5 секунд
     *
     * @tags Отчёт по остаткам на складах
     * @name V1WarehouseRemainsTasksStatusDetail
     * @summary Проверить статус
     * @request GET:/api/v1/warehouse_remains/tasks/{task_id}/status
     * @secure
     */
    v1WarehouseRemainsTasksStatusDetail: (taskId: string, params: RequestParams = {}) =>
      this.request<
        GetTasksResponse,
        {
          /** Заголовок ошибки */
          title?: string;
          /** HTTP статус-код */
          status?: number;
          /** Детали ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/warehouse_remains/tasks/${taskId}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает отчёт по ID задания. Максимум 1 запрос в минуту
     *
     * @tags Отчёт по остаткам на складах
     * @name V1WarehouseRemainsTasksDownloadDetail
     * @summary Получить отчёт
     * @request GET:/api/v1/warehouse_remains/tasks/{task_id}/download
     * @secure
     */
    v1WarehouseRemainsTasksDownloadDetail: (taskId: string, params: RequestParams = {}) =>
      this.request<
        {
          /**
           * Бренд
           * @example "Wonderful"
           */
          brand?: string;
          /**
           * Название предмета
           * @example "Фотоальбомы"
           */
          subjectName?: string;
          /**
           * Артикул продавца
           * @example "41058/прозрачный"
           */
          vendorCode?: string;
          /**
           * Артикул WB
           * @example 183804172
           */
          nmId?: number;
          /**
           * Баркод
           * @example "2037031652319"
           */
          barcode?: string;
          /**
           * Размер
           * @example "0"
           */
          techSize?: string;
          /**
           * Объём, л
           * @example 1.33
           */
          volume?: number;
          /**
           * В пути к клиенту
           * @example 31
           */
          inWayToClient?: number;
          /**
           * В пути от клиента
           * @example 24
           */
          inWayFromClient?: number;
          /**
           * Итоговые остатки по всем складам (сумма `quantity`)
           * @example 134
           */
          quantityWarehousesFull?: number;
          /** Склады. Склад будет в ответе только при ненулевом остатке */
          warehouses?: {
            /**
             * Название склада
             * @example "Невинномысск"
             */
            warehouseName?: string;
            /**
             * Количество, доступное для продажи: сколько можно добавить в корзину
             * @example 134
             */
            quantity?: number;
          }[];
        }[],
        {
          /** Заголовок ошибки */
          title?: string;
          /** HTTP статус-код */
          status?: number;
          /** Детали ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/warehouse_remains/tasks/${taskId}/download`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает операции по маркируемым товарам. Максимум 10 запросов за 5 часов.
     *
     * @tags Товары с обязательной маркировкой
     * @name V1AnalyticsExciseReportCreate
     * @summary Отчёт по товарам с обязательной маркировкой
     * @request POST:/api/v1/analytics/excise-report
     * @secure
     */
    v1AnalyticsExciseReportCreate: (
      query: {
        /**
         * Начало отчётного периода в формате RFC3339. Можно передать дату  или дату со временем. Примеры:
         *
         *   * `2023-12-01`
         *   * `2023-12-01T23:59:59`
         *   * `2023-12-01T00:00:00.12345`
         *   * `2023-12-01T00:00:00`
         */
        dateFrom: string;
        /**
         * Конец отчётного периода в формате RFC3339. Можно передать дату  или дату со временем. Примеры:
         *
         *   * `2023-12-01`
         *   * `2023-12-01T23:59:59`
         *   * `2023-12-01T00:00:00.12345`
         *   * `2023-12-01T00:00:00`
         */
        dateTo: string;
      },
      data?: ExciseReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<ExciseReportResponse, string | void>({
        path: `/api/v1/analytics/excise-report`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Создаёт задание на генерацию отчёта. Можно получить отчёт максимум за 8 дней. Максимум 1 запрос в минуту
     *
     * @tags Платное хранение
     * @name V1PaidStorageList
     * @summary Создать отчёт
     * @request GET:/api/v1/paid_storage
     * @secure
     */
    v1PaidStorageList: (
      query: {
        /**
         * Начало отчётного периода в формате RFC3339. Можно передать дату или дату со временем. Примеры:
         *
         *   * `2019-06-20`
         *   * `2019-06-20T23:59:59`
         *   * `2019-06-20T00:00:00.12345`
         *   * `2017-03-25T00:00:00`
         * </ul>
         * @example "2022-01-01"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода в формате RFC3339. Можно передать дату или дату со временем. Примеры:
         *
         *   * `2019-06-20`
         *   * `2019-06-20T23:59:59`
         *   * `2019-06-20T00:00:00.12345`
         *   * `2017-03-25T00:00:00`
         * @example "2022-01-09"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreateTaskResponse, ErrorResponse | void>({
        path: `/api/v1/paid_storage`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает статус задания на генерацию. Максимум 1 запрос в 5 секунд
     *
     * @tags Платное хранение
     * @name V1PaidStorageTasksStatusDetail
     * @summary Проверить статус
     * @request GET:/api/v1/paid_storage/tasks/{task_id}/status
     * @secure
     */
    v1PaidStorageTasksStatusDetail: (taskId: string, params: RequestParams = {}) =>
      this.request<GetTasksResponse, string | void>({
        path: `/api/v1/paid_storage/tasks/${taskId}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает отчёт по ID задания. Максимум 1 запрос в минуту
     *
     * @tags Платное хранение
     * @name V1PaidStorageTasksDownloadDetail
     * @summary Получить отчёт
     * @request GET:/api/v1/paid_storage/tasks/{task_id}/download
     * @secure
     */
    v1PaidStorageTasksDownloadDetail: (taskId: string, params: RequestParams = {}) =>
      this.request<ResponsePaidStorage, string | void>({
        path: `/api/v1/paid_storage/tasks/${taskId}/download`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает даты и стоимость приёмки. Можно получить отчёт максимум за 31 день. Максимум 1 запрос в минуту
     *
     * @tags Платная приёмка
     * @name V1AnalyticsAcceptanceReportList
     * @summary Получить отчёт
     * @request GET:/api/v1/analytics/acceptance-report
     * @secure
     */
    v1AnalyticsAcceptanceReportList: (
      query: {
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-15T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          report?: {
            /**
             * Количество товаров, шт.
             * @example 40
             */
            count?: number;
            /**
             * Дата создания поставки
             * @format date
             * @example "2023-08-23T00:00:00.000Z"
             */
            giCreateDate?: string;
            /**
             * Номер поставки
             * @example 11834106
             */
            incomeId?: number;
            /**
             * Артикул Wildberries
             * @example 123456789
             */
            nmID?: number;
            /**
             * Дата приёмки
             * @format date
             * @example "2023-04-10T00:00:00.000Z"
             */
            shkСreateDate?: string;
            /**
             * Предмет (подкатегория)
             * @example "Добавки пищевые"
             */
            subjectName?: string;
            /**
             * Суммарная стоимость приёмки, ₽
             * @deprecated
             * @example 200
             */
            sum?: number;
            /**
             * Суммарная стоимость приёмки, ₽ с копейками
             * @example 200.5
             */
            total?: number;
          }[];
        },
        | {
            errors?: string[];
          }
        | void
        | ErrorInternalResponse
      >({
        path: `/api/v1/analytics/acceptance-report`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает отчёт по удержаниям за самовыкупы. Отчёт формируется каждую неделю по средам, до 7:00 по московскому времени, и содержит данные за одну неделю. Также можно получить отчёт за всё время с августа 2023. <br/><br/> Удержание за самовыкуп — это 30% от стоимости товаров. Минимальная сумма всех удержаний — 100 000 ₽, если за неделю в ПВЗ привезли больше ваших товаров, чем на 100 000 ₽. <br/><br/> Максимум 10 запросов за 100 минут.
     *
     * @tags Отчёты по удержаниям
     * @name V1AnalyticsAntifraudDetailsList
     * @summary Самовыкупы
     * @request GET:/api/v1/analytics/antifraud-details
     * @secure
     */
    v1AnalyticsAntifraudDetailsList: (
      query?: {
        /**
         * Дата, которая входит в отчётный период, `ГГГГ-ММ-ДД`.
         * <br/>
         * Чтобы получить данные за всё время с августа 2023,  не указывайте этот параметр
         * @example "2023-12-01T00:00:00.000Z"
         */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          details?: {
            /**
             * Артикул Wildberries
             * @example 123456789
             */
            nmID?: number;
            /**
             * Сумма заказа
             * @example 3540
             */
            sum?: number;
            /**
             * Валюта заказа
             * @example "RUB"
             */
            currency?: string;
            /**
             * Начало отчётного периода
             * @example "2023-08-23T00:00:00.000Z"
             */
            dateFrom?: string;
            /**
             * Конец отчётного периода
             * @example "2023-08-29T00:00:00.000Z"
             */
            dateTo?: string;
          }[];
        },
        ErrorResponse | void
      >({
        path: `/api/v1/analytics/antifraud-details`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает отчёт об удержаниях за отправку не тех товаров, пустых коробок или коробок без товара, но с посторонними предметами. В таких случаях удерживается 100% от стоимости заказа. Можно получить отчёт максимум за 31 день, доступны данные с июня 2023. Максимум 1 запрос в минуту.
     *
     * @tags Отчёты по удержаниям
     * @name V1AnalyticsIncorrectAttachmentsList
     * @summary Подмена товара
     * @request GET:/api/v1/analytics/incorrect-attachments
     * @secure
     */
    v1AnalyticsIncorrectAttachmentsList: (
      query: {
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-15T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          report?: {
            /**
             * Цена, ₽
             * @example 24514.5
             */
            amount?: number;
            /**
             * Дата
             * @example "2023-12-15T00:00:00.000Z"
             */
            date?: string;
            /**
             * Причина удержания
             * @example "Подмена. Вместо большой железной дороги поступила маленькая коробка."
             */
            lostReason?: string;
            /**
             * Артикул Wildberries
             * @example 123456789
             */
            nmID?: number;
            /**
             * Фото
             * @example "https://mstatic.wbstatic.net/writeoff_to_the_seller/12345678911-2023-06-21T12:13:37.768Z-1.png"
             */
            photoUrl?: string;
            /**
             * Штрихкод
             * @example 14555724540
             */
            shkID?: number;
          }[];
        },
        {
          errors?: string[];
        } | void
      >({
        path: `/api/v1/analytics/incorrect-attachments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает коэффициенты логистики и хранения. Они рассчитываются на неделю (с понедельника по воскресенье). Можно получить данные с 31.10.2022. **Максимум 1 запрос в минуту.** **Как это работает** В начале каждой недели для продавца рассчитывается новый коэффициент логистики и хранения. Затем стоимость логистики и хранения умножается на коэффициент этой недели. **Как считается коэффициент** На основе расхождения фактических и заявленных габаритов упаковки товара: 1. Измеряем товары.<br/>Работники склада измеряют по одному товару каждого наименования, с учётом упаковки (кроме товаров меньше 2 л). Для расчёта используются измерения за 30 дней до начала текущей недели. 2. Считаем коэффициент для товара.</br>Результаты измерений сравниваются с габаритами из карточки товара. В зависимости от разницы каждому наименованию присваивается коэффициент по товару. 3. Считаем коэффициент логистики и хранения.</br>Коэффициент логистики и хранения — это средний коэффициент по товарам.<br> Коэффициент логистики и хранения равен 1, если * По товарам продавца сделано меньше 10 уникальных измерений. * Средняя разница в габаритах не больше 10%. Для продавцов с коэффициентом 1 стоимость логистики и хранения не увеличится.
     *
     * @tags Отчёты по удержаниям
     * @name V1AnalyticsStorageCoefficientList
     * @summary Коэффициент логистики и хранения
     * @request GET:/api/v1/analytics/storage-coefficient
     * @secure
     */
    v1AnalyticsStorageCoefficientList: (
      query?: {
        /**
         * Дата, которая входит в отчётный период, `ГГГГ-ММ-ДД`
         * @example "2023-12-01T00:00:00.000Z"
         */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          report?: {
            /**
             * Фактическая высота, см
             * @example 6
             */
            actualHeight?: number;
            /**
             * Фактическая длина, см
             * @example 39
             */
            actualLength?: number;
            /**
             * Фактический объём, л
             * @example 7.02
             */
            actualVolume?: number;
            /**
             * Фактическая ширина, см
             * @example 30
             */
            actualWidth?: number;
            /**
             * Дата измерения в формате RFC 3339. Для расчёта используются измерения за 30 дней, до начала отчётной недели
             * @example "2023-04-11T12:21:19.000Z"
             */
            date?: string;
            /**
             * Разница в габаритах, %
             * @example 101.74
             */
            dimensionDifference?: number;
            /**
             * Высота из карточки, см
             * @example 10
             */
            height?: number;
            /**
             * Длина из карточки, см
             * @example 30
             */
            length?: number;
            /**
             * Коэффициент логистики и хранения для товара
             * @example 1
             */
            logWarehouseCoef?: number;
            /**
             * Артикул Wildberries
             * @example 123456789
             */
            nmID?: number;
            /**
             * Фото измерений
             * @example ["https://photos.wbstatic.net/handheld-goods-measurements-photo/123456789_73984211-e6c3-44e2-66af-0d44d2620308.jpg","https://photos.wbstatic.net/handheld-goods-measurements-photo/123456789_8ee5ff5e-c6bb-426c-7d12-c2dd228c0f62.jpg"]
             */
            photoUrls?: string;
            /**
             * Наименование товара
             * @example "Сухой корм для крупных собак ассорти мясное, 10 кг"
             */
            title?: string;
            /**
             * Объём из карточки, л
             * @example 6.9
             */
            volume?: number;
            /**
             * Ширина из карточки, см
             * @example 23
             */
            width?: number;
          }[];
        },
        | {
            errors?: string[];
          }
        | void
        | ErrorInternalResponse
      >({
        path: `/api/v1/analytics/storage-coefficient`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает отчёт о штрафах за отсутствие обязательной маркировки товаров. <br>В отчёте представлены фотографии товаров, на которых маркировка отсутствует либо не считывается. <br>Можно получить данные максимум за 31 день, начиная с марта 2024. <br>Максимум 10 запросов за 10 минут
     *
     * @tags Отчёты по удержаниям
     * @name V1AnalyticsGoodsLabelingList
     * @summary Маркировка товара
     * @request GET:/api/v1/analytics/goods-labeling
     * @secure
     */
    v1AnalyticsGoodsLabelingList: (
      query: {
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @format date
         * @example "2024-04-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @format date
         * @example "2024-04-30T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          report?: {
            /** Сумма штрафа, руб */
            amount?: number;
            /**
             * Дата
             * @format date-time
             */
            date?: string;
            /** Номер поставки */
            incomeId?: number;
            /** Артикул WB */
            nmID?: number;
            /** URL фото товара */
            photoUrls?: string[];
            /** Штрихкод товара в Wildberries */
            shkID?: number;
            /** Баркод из карточки товара */
            sku?: string;
          }[];
        },
        {
          errors?: string[];
        } | void
      >({
        path: `/api/v1/analytics/goods-labeling`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает отчёт об удержаниях за смену характеристик товара. Если товары после приёмки не соответствуют заявленным цветам и размерам, и на складе их перемаркировали с правильными характеристиками, по таким товарам назначается штраф. <br>Можно получить отчёт максимум за 31 день, доступны данные с 28 декабря 2021. <br>Максимум 10 запросов за 10 минут
     *
     * @tags Отчёты по удержаниям
     * @name V1AnalyticsCharacteristicsChangeList
     * @summary Смена характеристик
     * @request GET:/api/v1/analytics/characteristics-change
     * @secure
     */
    v1AnalyticsCharacteristicsChangeList: (
      query: {
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @format date
         * @example "2024-04-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @format date
         * @example "2024-04-30T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          report?: {
            /** Сумма штрафа в копейках */
            amount?: number;
            /**
             * Дата изменения характеристик товара на складе
             * @format date
             */
            date?: string;
            /** Новый баркод в карточке товара */
            newBarcode?: string;
            /** Новый цвет */
            newColor?: string;
            /** Новый артикул продавца */
            newSa?: string;
            /** Новый штрихкод товара в Wildberries */
            newShkID?: number;
            /** Новый размер */
            newSize?: string;
            /** Артикул WB */
            nmID?: number;
            /** Старый баркод из карточки товара */
            oldBarcode?: string;
            /** Старый цвет */
            oldColor?: string;
            /** Старый артикул продавца */
            oldSa?: string;
            /** Старый штрихкод товара в Wildberries */
            oldShkID?: number;
            /** Старый размер */
            oldSize?: string;
          }[];
        },
        {
          /** ID ошибки */
          title?: string;
          /** Описание ошибки */
          detail?: string;
          /** ID запроса */
          requestId?: string;
          /** Сервис, вернувший ошибку */
          origin?: string;
        } | void
      >({
        path: `/api/v1/analytics/characteristics-change`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает данные продаж, сгруппированные по регионам стран. Можно получить отчёт максимум за 31 день. Максимум 1 запрос в 10 секунд
     *
     * @tags Продажи по регионам
     * @name V1AnalyticsRegionSaleList
     * @summary Получить отчёт
     * @request GET:/api/v1/analytics/region-sale
     * @secure
     */
    v1AnalyticsRegionSaleList: (
      query: {
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-15T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          report?: {
            /**
             * Населённый пункт
             * @example "деревня Суханово"
             */
            cityName?: string;
            /**
             * Страна
             * @example "Россия"
             */
            countryName?: string;
            /**
             * Федеральный округ
             * @example "Центральный федеральный округ"
             */
            foName?: string;
            /**
             * Артикул WB
             * @example 177974431
             */
            nmID?: number;
            /**
             * Регион
             * @example "Московская область"
             */
            regionName?: string;
            /**
             * Артикул продавца
             * @example "112233445566778899"
             */
            sa?: string;
            /**
             * К перечислению за товар, ₽
             * @format float
             * @example 592.11
             */
            saleInvoiceCostPrice?: number;
            /**
             * Доля, %
             * @format float
             * @example 43.0547333297454
             */
            saleInvoiceCostPricePerc?: number;
            /**
             * Выкупили, шт.
             * @example 4
             */
            saleItemInvoiceQty?: number;
          }[];
        },
        {
          /** Заголовок ошибки */
          title?: string;
          /** Детали ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/analytics/region-sale`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает список брендов продавца. Можно получить только бренды, которые: - продавались за последние 90 дней - есть на складе WB Максимум 1 запрос в минуту
     *
     * @tags Доля бренда в продажах
     * @name V1AnalyticsBrandShareBrandsList
     * @summary Бренды продавца
     * @request GET:/api/v1/analytics/brand-share/brands
     * @secure
     */
    v1AnalyticsBrandShareBrandsList: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * Список брендов
           * @example ["1000 | Каталог","1000 Каталог","AndBerries","H&M","Mirtex","PlayToday","Test1","WOW","[\"Colambetta\"]","dubs","test","Бест Трикотаж","Тест"]
           */
          data?: string[];
        },
        void
      >({
        path: `/api/v1/analytics/brand-share/brands`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает родительские категории бренда. Можно получить данные с 1 ноября 2022 года, максимум за 365 дней. <br><br> Максимум 1 запрос в 5 секунд
     *
     * @tags Доля бренда в продажах
     * @name V1AnalyticsBrandShareParentSubjectsList
     * @summary Родительские категории бренда
     * @request GET:/api/v1/analytics/brand-share/parent-subjects
     * @secure
     */
    v1AnalyticsBrandShareParentSubjectsList: (
      query: {
        /**
         * Язык поля ответа `parentName`:
         *   - `ru` — русский
         *   - `en` — английский
         *   - `zh` — китайский
         * @default "ru"
         * @example "ru"
         */
        locale?: string;
        /**
         * Бренд
         * @example "H%26M"
         */
        brand: string;
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-15T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Категории бренда */
          data?: {
            /** ID родительской категории */
            parentId?: number;
            /** Название родительской категории */
            parentName?: string;
          }[];
        },
        {
          /** Заголовок ошибки */
          title?: string;
          /** Детали ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/analytics/brand-share/parent-subjects`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Возвращает отчёт по доле бренда в продажах. Можно получить данные с 1 ноября 2022 года, максимум за 365 дней. <br><br> Максимум 1 запрос в 5 секунд
     *
     * @tags Доля бренда в продажах
     * @name V1AnalyticsBrandShareList
     * @summary Получить отчёт
     * @request GET:/api/v1/analytics/brand-share
     * @secure
     */
    v1AnalyticsBrandShareList: (
      query: {
        /**
         * ID родительской категории
         * @example 1
         */
        parentId: number;
        /**
         * Бренд
         * @example "H%26M"
         */
        brand: string;
        /**
         * Начало отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-01T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * Конец отчётного периода, `ГГГГ-ММ-ДД`
         * @example "2023-12-15T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Отчёт */
          report?: {
            /**
             * Дата
             * @format ГГГГ-ММ-ДД
             */
            applyDate?: string;
            /** Рейтинг бренда в родительской категории */
            brandRating?: number;
            /**
             * Доля от продаж в родительской категории — цена, %
             * @format float
             */
            pricePercent?: number;
            /**
             * Доля от продаж в родительской категории — количество, %
             * @format float
             */
            qtyPercent?: number;
          }[];
        },
        {
          /** Заголовок ошибки */
          title?: string;
          /** Детали ошибки */
          detail?: string;
          /** Уникальный ID запроса */
          requestId?: string;
          /** ID внутреннего сервиса WB */
          origin?: string;
        } | void
      >({
        path: `/api/v1/analytics/brand-share`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
