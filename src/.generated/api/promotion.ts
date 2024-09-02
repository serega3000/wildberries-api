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

export interface ResponseWithReturn {
  /** Размер обновлённого бюджета */
  total?: number;
}

export interface StatInterval {
  /** Запрошенный временной диапазон. */
  interval?: {
    /**
     * Начало запрашиваемого периода
     * @format date
     */
    begin?: string;
    /**
     * Конец запрашиваемого периода
     * @format date
     */
    end?: string;
  };
  /** Блок статистики */
  stats?: StatsBlok1[];
}

export interface StatDate {
  /** Даты, за которые необходимо выдать информацию. */
  dates?: string[];
  /** Блок статистики */
  stats?: StatsBlok2[];
}

export interface Stat {
  /** Блок статистики */
  stats?: StatsBlok1[];
}

export interface StatsBlok1 {
  /** ID баннера */
  item_id?: number;
  /** Название бренда */
  item_name?: string;
  /** Название категории */
  category_name?: string;
  /** <dl> <dt>Тип медиакампании:</dt> <dd><code>1</code> - размещение по дням</dd> <dd><code>2</code> - размещение по просмотрам</dd> </dl> */
  advert_type?: number;
  /** Место на странице */
  place?: number;
  /** Количество просмотров */
  views?: number;
  /** Количество кликов */
  clicks?: number;
  /** CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании */
  cr?: number;
  /** CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
  ctr?: number;
  /**
   * Время начала размещения
   * @format date-time
   */
  date_from?: string;
  /**
   * Время завершения размещения
   * @format date-time
   */
  date_to?: string;
  /** Родительская категория предмета */
  subject_name?: string;
  /** Количество добавлений товаров в корзину */
  atbs?: number;
  /** Количество заказов */
  orders?: number;
  /** Стоимость размещения */
  price?: number;
  /** (cost per click) - цена клика по продвигаемому товару */
  cpc?: number;
  /** Статус медиакампании */
  status?: number;
  daily_stats?: DailyStats1;
  /** Стоимость размещения баннера */
  expenses?: number;
  /** Отношение количества добавлений в корзину к количеству кликов */
  cr1?: number;
  /** Отношение количества заказов к количеству добавлений в корзину */
  cr2?: number;
}

export type DailyStats1 = {
  /**
   * Дата
   * @format date-time
   */
  date?: string;
  /** Статистика по платформам */
  app_type_stats?: {
    /**
     * <dl>
     * <dt>Тип платформы:</dt>
     * <dd><code>1</code> - сайт</dd>
     * <dd><code>32</code> - Android</dd>
     * <dd><code>64</code> - IOS</dd>
     * </dl>
     */
    app_type?: number;
    stats?: Stats1;
  }[];
}[];

export type Stats1 = {
  /** Количество просмотров */
  views?: number;
  /** Количество кликов */
  clicks?: number;
  /** Количество добавлений товаров в корзину */
  atbs?: number;
  /** CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании               */
  ctr?: number;
}[];

export interface StatsBlok2 {
  /** ID баннера */
  item_id?: number;
  /** Название бренда */
  item_name?: string;
  /** Название категории */
  category_name?: string;
  /** <dl> <dt>Тип медиакампании:</dt> <dd><code>1</code> - размещение по дням</dd> <dd><code>2</code> - размещение по просмотрам</dd> </dl> */
  advert_type?: number;
  /** Место на странице */
  place?: number;
  /** Количество просмотров */
  views?: number;
  /** Количество кликов */
  clicks?: number;
  /** CR(conversion rate) — это отношение количества заказов к общему количеству посещений медиакампании */
  cr?: number;
  /** CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
  ctr?: number;
  /**
   * Время начала размещения
   * @format date-time
   */
  date_from?: string;
  /**
   * Время завершения размещения
   * @format date-time
   */
  date_to?: string;
  /** Родительская категория предмета */
  subject_name?: string;
  /** Количество добавлений товаров в корзину */
  atbs?: number;
  /** Количество заказов */
  orders?: number;
  /** Стоимость размещения */
  price?: number;
  /** (cost per click) - цена клика по продвигаемому товару */
  cpc?: number;
  /** Статус медиакампании */
  status?: number;
  daily_stats?: DailyStats2;
  /** Стоимость размещения баннера */
  expenses?: number;
  /** Отношение количества добавлений в корзину к количеству кликов */
  cr1?: number;
  /** Отношение количества заказов к количеству добавлений в корзину */
  cr2?: number;
}

export type DailyStats2 = {
  /**
   * Дата
   * @format date-time
   */
  date?: string;
  /** Статистика по платформам */
  app_type_stats?: {
    /**
     * <dl>
     * <dt>Тип платформы:</dt>
     * <dd><code>1</code> - сайт</dd>
     * <dd><code>32</code> - Android</dd>
     * <dd><code>64</code> - IOS</dd>
     * </dl>
     */
    app_type?: number;
    stats?: Stats2;
  }[];
}[];

export type Stats2 = {
  /** Количество просмотров */
  views?: number;
  /** Количество кликов */
  clicks?: number;
  /** Количество добавлений товаров в корзину */
  atbs?: number;
  /** Количество заказов */
  orders?: number;
  /** CR(conversion rate) — отношение количества заказов к общему количеству посещений медиакампании               */
  cr?: number;
  /** CTR (click-through rate) — показатель кликабельности, отношение числа кликов к количеству показов в рамках медиакампании */
  ctr?: number;
}[];

/**
 * @maxItems 100
 * @minItems 1
 */
export type RequestWithDate = {
  /** ID кампании */
  id?: number;
  /** Даты, за которые необходимо выдать информацию. */
  dates?: string[];
}[];

/**
 * @maxItems 100
 * @minItems 1
 */
export type RequestWithCampaignID = {
  /** ID кампании */
  id?: number;
}[];

/**
 * @maxItems 100
 * @minItems 1
 */
export type RequestWithInterval = {
  /** ID кампании */
  id?: number;
  /** Временной диапазон, за который необходимо выдать данные. */
  interval?: {
    /**
     * Начало запрашиваемого периода
     * @format date
     */
    begin?: string;
    /**
     * Конец запрашиваемого периода
     * @format date
     */
    end?: string;
  };
}[];

/** Статистка по дням */
export type Days = {
  /**
   * Дата, за которую представлены данные
   * @format date-time
   */
  date?: string;
  /** Количество просмотров */
  views?: number;
  /** Количество кликов */
  clicks?: number;
  /** Показатель кликабельности, отношение числа кликов к количеству показов, % */
  ctr?: number;
  /** Средняя стоимость клика, ₽. */
  cpc?: number;
  /** Затраты, ₽. */
  sum?: number;
  /** Количество добавлений товаров в корзину */
  atbs?: number;
  /** Количество заказов */
  orders?: number;
  /** CR(conversion rate) — отношение количества заказов к общему количеству посещений кампании */
  cr?: number;
  /** Количество заказанных товаров, шт. */
  shks?: number;
  /** Заказов на сумму, ₽ */
  sum_price?: number;
  /** Блок информации о платформе */
  apps?: {
    /** Количество просмотров */
    views?: number;
    /** Количество кликов */
    clicks?: number;
    /** Показатель кликабельности, отношение числа кликов к количеству показов, % */
    ctr?: number;
    /** Средняя стоимость клика, ₽. */
    cpc?: number;
    /** Затраты, ₽. */
    sum?: number;
    /** Количество добавлений товаров в корзину */
    atbs?: number;
    /** Количество заказов */
    orders?: number;
    /** CR(conversion rate) — это отношение количества заказов к общему количеству посещений кампании */
    cr?: number;
    /** Количество заказанных товаров, шт. */
    shks?: number;
    /** Заказов на сумму, ₽ */
    sum_price?: number;
    /** Блок статистики по артикулам WB */
    nm?: {
      /** Количество просмотров */
      views?: number;
      /** Количество кликов */
      clicks?: number;
      /** Показатель кликабельности, отношение числа кликов к количеству показов, % */
      ctr?: number;
      /** Средняя стоимость клика, ₽. */
      cpc?: number;
      /** Затраты, ₽. */
      sum?: number;
      /** Количество добавлений товаров в корзину */
      atbs?: number;
      /** Количество заказов */
      orders?: number;
      /** CR(conversion rate) — отношение количества заказов к общему количеству посещений кампании */
      cr?: number;
      /** Количество заказанных товаров, шт. */
      shks?: number;
      /** Заказов на сумму, ₽ */
      sum_price?: number;
      /** Название товара */
      name?: string;
      /** ID артикула WB */
      nmId?: number;
    }[];
    /** Тип платформы (`1` - сайт, `32` - Android, `64` - IOS) */
    appType?: number;
  }[];
}[];

/** Статистика по средней позиции товара на страницах поисковой выдачи и каталога (для автоматических кампаний). */
export type BoosterStats = {
  /**
   * Дата, за которую предоставлены данные.
   * @format date-time
   */
  date?: string;
  /** Артикул WB */
  nm?: number;
  /** Средняя позиция товара на страницах поисковой выдачи и каталога */
  avg_position?: number;
}[];

/** Ответ при запросе с interval */
export type ResponseWithInterval = {
  /** Запрошенный временной диапазон. */
  interval?: {
    /**
     * Начало запрашиваемого периода
     * @format date
     */
    begin?: string;
    /**
     * Конец запрашиваемого периода
     * @format date
     */
    end?: string;
  };
  /**
   * Количество просмотров. <br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  views?: number;
  /**
   * Количество кликов.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  clicks?: number;
  /**
   * Показатель кликабельности.<br>
   * Отношение числа кликов к количеству показов. Выражается в процентах.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.<br>
   */
  ctr?: number;
  /**
   * Средняя стоимость клика, ₽.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  cpc?: number;
  /**
   * Затраты, ₽.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  sum?: number;
  /**
   * Количество добавлений товаров в корзину.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  atbs?: number;
  /**
   * Количество заказов.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  orders?: number;
  /**
   * CR(conversion rate) — это отношение количества заказов к общему количеству посещений кампании.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  cr?: number;
  /**
   * Количество заказанных товаров, шт.<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  shks?: number;
  /**
   * Заказов на сумму, ₽<br>
   * За все дни запрошенного диапазона, по всем артикулам WB и платформам.
   */
  sum_price?: number;
  /** Статистка по дням */
  days?: Days;
  /** Статистика по средней позиции товара на страницах поисковой выдачи и каталога (для автоматических кампаний). */
  boosterStats?: BoosterStats;
  /** ID кампании */
  advertId?: number;
}[];

/** Ответ при запросе с dates */
export type ResponseWithDate = {
  /** Даты, за которые необходимо выдать информацию. */
  dates?: string[];
  /**
   * Количество просмотров. <br>
   * За все дни, по всем артикулам WB и платформам.
   */
  views?: number;
  /**
   * Количество кликов.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  clicks?: number;
  /**
   * Показатель кликабельности.<br>
   * Отношение числа кликов к количеству показов. Выражается в процентах.<br>
   * За все дни, по всем артикулам WB и платформам.<br>
   */
  ctr?: number;
  /**
   * Средняя стоимость клика, ₽.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  cpc?: number;
  /**
   * Затраты, ₽.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  sum?: number;
  /**
   * Количество добавлений товаров в корзину.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  atbs?: number;
  /**
   * Количество заказов.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  orders?: number;
  /**
   * CR(conversion rate) — это отношение количества заказов к общему количеству посещений кампании.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  cr?: number;
  /**
   * Количество заказанных товаров, шт.<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  shks?: number;
  /**
   * Заказов на сумму, ₽<br>
   * За все дни, по всем артикулам WB и платформам.
   */
  sum_price?: number;
  /** Статистка по дням */
  days?: Days;
  /** Статистика по средней позиции товара на страницах поисковой выдачи и каталога (для автоматических кампаний). */
  boosterStats?: BoosterStats;
  /** ID кампании */
  advertId?: number;
}[];

export interface ResponseInfoAdvert {
  /** Дата завершения кампании */
  endTime?: string;
  /**
   * Время создания кампании
   * @example "2022-03-09T10:50:21.831623+03:00"
   */
  createTime?: string;
  /**
   * Время последнего изменения кампании
   * @example "2022-12-22T18:24:19.808701+03:00"
   */
  changeTime?: string;
  /** Дата последнего запуска кампании */
  startTime?: string;
  /** Название кампании */
  name?: string;
  /** Параметры кампании */
  params?: {
    /** Название предметной группы (для кампаний в поиске и рекомендациях) */
    subjectName?: string;
    /** Флаг активности предметной группы, <code>true</code> - активна, <code>false</code> - неактивна */
    active?: boolean;
    /** Интервалы часов показа кампании */
    intervals?: {
      /** Время начала показов */
      Begin?: number;
      /** Время окончания показов */
      End?: number;
    }[];
    /** Текущая ставка */
    price?: number;
    /** Идентификатор меню, где размещается кампания (для кампаний в каталоге) */
    menuId?: number;
    /** Идентификатор предметной группы, для которой создана кампания (для кампаний в поиске и рекомендациях) */
    subjectId?: number;
    /** Идентификатор сочетания предмета и пола (для кампаний в карточке товара) */
    setId?: number;
    /** Сочетание предмета и пола (для кампаний в карточке товара) */
    setName?: string;
    /** Название меню, где размещается кампания (для кампаний в каталоге) */
    menuName?: string;
    /** Массив номенклатур кампании */
    nms?: {
      /** Числовой идентификатор номенклатуры Wildberries (<code>nmId</code>) */
      nm?: number;
      /** Состояние номенклатуры (<code>true</code> - активна или <code>false</code> - неактивна) */
      active?: boolean;
    }[];
  }[];
  /** Дневной бюджет, если не установлен, то 0 */
  dailyBudget?: number;
  /**
   * Идентификатор кампании
   * @example 1234
   */
  advertId?: number;
  /**
   * <dl>
   * <dt>Статус кампании:</dt>
   * <dd><code>-1</code> - кампания в процессе удаления </dd>
   * <dd><code>4</code> - готова к запуску </dd>
   * <dd><code>7</code> - Кампания завершена</dd>
   * <dd><code>8</code> - отказался</dd>
   * <dd><code>9</code> - идут показы</dd>
   * <dd><code>11</code> - Кампания на паузе</dd>
   * </dl>
   * Кампания в процессе удаления. Статус означает, что кампания была удалена, и через 3-10 минут она исчезнет из ответа метода.
   *
   * @example 9
   */
  status?: number;
  /**
   * <dl>
   *   <dt>Тип кампании:</dt>
   *     <dd><code>4</code> - кампания  в каталоге (<strong>устаревший тип</strong>)</dd>
   *     <dd><code>5</code> - кампания в карточке товара (<strong>устаревший тип</strong>)</dd>
   *     <dd><code>6</code> - кампания в поиске (<strong>устаревший тип</strong>)</dd>
   *     <dd><code>7</code> - кампания в рекомендациях на главной странице (<strong>устаревший тип</strong>)</dd>
   *   </dl>
   * @example 4
   */
  type?: number;
  /**
   * Модель оплаты:
   * - `cpm` — за показы
   * - `cpo` — за заказы
   */
  paymentType?: string;
  /**
   * Активность фиксированных фраз:
   *   - `false` — не активны
   *   - `true` — активны
   */
  searchPluseState?: boolean;
}

export interface ResponseInfoAdvertType8 {
  /**
   * Дата завершения кампании
   * @format date-time
   */
  endTime?: string;
  /**
   * Дата создания кампании
   * @format date-time
   */
  createTime?: string;
  /**
   * Дата последнего изменения кампании
   * @format date-time
   */
  changeTime?: string;
  /**
   * Дата последнего запуска кампании
   * @format date-time
   */
  startTime?: string;
  autoParams?: {
    /** Продвигаемый предмет */
    subject?: {
      /** ID предмета */
      id?: number;
      /** Название предмета */
      name?: string;
    };
    /** Внутренняя (системная) сущность (пол + предмет) */
    sets?: {
      /** Идентификатор set */
      id?: number;
      /** Название set */
      name?: string;
    }[];
    menus?: {
      /** ID меню */
      id?: number;
      /** Название меню */
      name?: string;
    }[];
    /** Зоны показов */
    active?: {
      /** Карточка товара (`false` - отключены, `true` - включены) */
      carousel?: boolean;
      /** Рекомендации на главной (`false` - отключены, `true` - включены) */
      recom?: boolean;
      /** Поиск/Каталог (`false` - отключены, `true` - включены) */
      booster?: boolean;
    };
    /** Ставки номенклатур (артикулов WB) */
    nmCPM?: {
      /** Артикул WB */
      nm?: number;
      /** Ставка */
      cpm?: number;
    }[];
    /** Артикулы WB */
    nms?: number[];
    /** Ставка, указанная при создании кампании.<br>  Поле актуально только для кампаний, созданных через API.   */
    cpm?: number;
  };
  /** Название кампании */
  name?: string;
  /** Не используется */
  dailyBudget?: number;
  /** Идентификатор кампании */
  advertId?: number;
  /**
   * <dl> <dt>Статус кампании:</dt> <dd><code>-1</code> - кампания
   * в процессе удаления </dd> <dd><code>4</code>
   * - готова к запуску </dd> <dd><code>7</code> - Кампания завершена</dd>
   * <dd><code>8</code> - отказался</dd> <dd><code>9</code> - идут показы</dd>
   * <dd><code>11</code> - Кампания на паузе</dd> </dl> Кампания в процессе
   * удаления. Статус означает, что кампания была удалена, и через 3-10 минут
   * она исчезнет из ответа метода.
   */
  status?: number;
  /**
   * <dl> <dt>Тип кампании:</dt> <dd><code>8</code> - автоматическая
   * кампания </dd> </dl>
   */
  type?: number;
  /**
   * Модель оплаты:
   * - `cpm` — за показы
   * - `cpo` — за заказы
   */
  paymentType?: string;
}

/** @example {"endTime":"2100-01-01T00:00:00+03:00","createTime":"2023-07-09T10:56:02.150362+03:00","changeTime":"2023-07-11T02:48:44.767712+03:00","startTime":"2023-07-10T08:02:31.949155+03:00","searchPluseState":false,"name":"Противовирусные препараты","unitedParams":[{"subject":{"id":3038,"name":"Противовирусные препараты"},"menus":[{"id":-1,"name":""}],"nms":[38995344],"searchCPM":123,"catalogCPM":321}],"dailyBudget":0,"advertId":1234567,"status":11,"type":9,"paymentType":"cpm"} */
export interface ResponseInfoAdvertType9 {
  /**
   * Дата завершения кампании
   * @format date-time
   */
  endTime?: string;
  /**
   * Дата создания кампании
   * @format date-time
   */
  createTime?: string;
  /**
   * Дата последнего изменения кампании
   * @format date-time
   */
  changeTime?: string;
  /**
   * Дата последнего запуска кампании
   * @format date-time
   */
  startTime?: string;
  /**
   * Активность фиксированных фраз:
   *   - `false` — не активны
   *   - `true` — активны
   */
  searchPluseState?: boolean;
  /** Название кампании */
  name?: string;
  unitedParams?: {
    /** Продвигаемый предмет */
    subject?: {
      /** ID предмета */
      id?: number;
      /** Название предмета */
      name?: string;
    };
    menus?: {
      /** ID меню */
      id?: number;
      /** Название меню */
      name?: string;
    }[];
    /** Артикулы WB */
    nms?: number[];
    /** Ставка в Поиске */
    searchCPM?: number;
    /** Ставка в Каталоге, при наличии */
    catalogCPM?: number;
  }[];
  /** Не используется */
  dailyBudget?: number;
  /** Идентификатор кампании */
  advertId?: number;
  /**
   * <dl> <dt>Статус кампании:</dt> <dd><code>-1</code> - кампания
   * в процессе удаления </dd> <dd><code>4</code>
   * - готова к запуску </dd> <dd><code>7</code> - Кампания завершена</dd>
   * <dd><code>8</code> - отказался</dd> <dd><code>9</code> - идут показы</dd>
   * <dd><code>11</code> - Кампания на паузе</dd> </dl> Кампания в процессе
   * удаления. Статус означает, что кампания была удалена, и через 3-10 минут
   * она исчезнет из ответа метода.
   */
  status?: number;
  /**
   * Модель оплаты:
   * - `cpm` — за показы
   * - `cpo` — за заказы
   */
  paymentType?: string;
  /**
   * <dl> <dt>Тип кампании:</dt> <dd><code>9</code> - Аукцион
   * </dd> </dl>
   */
  type?: number;
}

export interface ResponseAdvError1 {
  error?: string;
}

export interface V0KeywordsStatistic {
  /** Количество кликов */
  clicks: number;
  /** CTR (Click-Through Rate) — показатель кликабельности */
  ctr: number;
  /** Ключевая фраза */
  keyword: string;
  /** Сумма затрат по ключевой фразе */
  sum: number;
  /** Количество показов */
  views: number;
}

export interface V0KeywordsStatistics {
  /**
   * Дата
   * @format date
   */
  date: string;
  stats: V0KeywordsStatistic[];
}

export interface V0KeywordsStatisticsResponse {
  keywords: V0KeywordsStatistics[];
}

export interface ErrorResponse {
  type: string;
  message: string;
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
 * @title Описание API Продвижение
 *
 * Синхронизация данных из базы данных происходит раз в 3 минуты.  <br>Изменение статуса происходит раз в 1 минуту. Внутри этого интервала будет сохранено последнее действие по изменению статуса. <br>Изменение ставки происходит раз в 30 секунд. Внутри этого интервала будет сохранено последнее действие по изменению ставки.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  adv = {
    /**
     * @description Создают автоматическую кампанию.<br> Максимум 1 запрос в 20 секунд.
     *
     * @tags Продвижение
     * @name V1SaveAdCreate
     * @summary Создать автоматическую кампанию
     * @request POST:/adv/v1/save-ad
     * @secure
     */
    v1SaveAdCreate: (
      data: {
        /**
         * <dl>
         * <dt>Тип автоматической кампании:</dt>
         * <dd><code>8</code>
         * </dl>
         * @example 8
         */
        type?: number;
        /**
         * Название кампании (max. 128 символов)
         * @example "Парашюты"
         */
        name?: string;
        /**
         * ID предмета, для которого создается кампания.<br>
         * Существующие у продавца идентификаторы можно получить методом из раздела "Контент / Просмотр" - "Список НМ", поле ответа - `subjectID`.
         * @example 270
         */
        subjectId?: number;
        /**
         * Сумма пополнения
         * @example 500
         */
        sum?: number;
        /**
         * <dl>
         * <dt>Tип списания.</dt>
         * <dd><code>0</code> - Счёт</dd>
         * <dd><code>1</code> - Баланс</dd>
         * <dd><code>3</code> - Бонусы</dd>
         * </dl>
         * @example 1
         */
        btype?: number;
        /**
         * <dl>
         * <dt>После создания кампания:</dt>
         * <dd>
         *   <dl>
         *     <dt><code>true</code> - будет на паузе.</dt>
         *     <dd>Запуск кампании будет доступен через 3 минуты после создания кампании.</dd>
         *   </dl>
         * </dd>
         * <dd><code>false</code> - будет сразу запущена</dd>
         * </dl>
         * @example true
         */
        on_pause?: boolean;
        /**
         * Массив артикулов WB. <br>
         * Максимум 100 артикулов.
         */
        nms?: number[];
        /**
         * Ставка. <br>
         * Если будет указана ставка меньше допустимого размера, то автоматически установится ставка минимально допустимого размера.
         */
        cpm?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        string,
        {
          error?: string;
        } | void
      >({
        path: `/adv/v1/save-ad`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Создаёт кампанию Аукцион. <br> Максимум 5 запросов в минуту
     *
     * @tags Продвижение
     * @name V2SeacatSaveAdCreate
     * @summary Создать кампанию Аукцион
     * @request POST:/adv/v2/seacat/save-ad
     * @secure
     */
    v2SeacatSaveAdCreate: (
      data: {
        /** Название кампании */
        campaignName?: string;
        /** Номенклатуры для кампании. Доступные номенклатуры можно получить с помощью метода [Номенклатуры для кампаний](./#tag/Slovari/paths/~1adv~1v2~1supplier~1nms/post). Максимум 50 товаров (`nm`) */
        nms?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<number, string | void>({
        path: `/adv/v2/seacat/save-ad`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет удалять кампании в статусе <b>4 - готова к запуску</b>. <br> <br> Допускается 5 запросов в секунду.<br> После удаления кампания некоторое время будет находиться в <b>-1</b> статусе.<br> Полное удаление кампании занимает от 3 до 10 минут.
     *
     * @tags Продвижение
     * @name V0DeleteList
     * @summary Удаление кампании
     * @request GET:/adv/v0/delete
     * @secure
     */
    v0DeleteList: (
      query: {
        /** ID кампании */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ResponseAdvError1 | void>({
        path: `/adv/v0/delete`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Метод позволяет переименовать кампанию. <br>Допускается 5 запросов в секунду.
     *
     * @tags Продвижение
     * @name V0RenameCreate
     * @summary Переименование кампании
     * @request POST:/adv/v0/rename
     * @secure
     */
    v0RenameCreate: (
      data: {
        /** Идентификатор кампании, у которой меняется название */
        advertId: number;
        /** Новое название (максимум 100 символов) */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v0/rename`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет получать списки кампаний, сгруппированных по типу и статусу, с информацией о дате последнего изменения кампании. <br> Допускается 5 запросов в секунду.
     *
     * @tags Продвижение
     * @name V1PromotionCountList
     * @summary Списки кампаний
     * @request GET:/adv/v1/promotion/count
     * @secure
     */
    v1PromotionCountList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Данные по кампаниям */
          adverts?:
            | {
                /** Тип кампании */
                type?: number;
                /** Статус кампании */
                status?: number;
                /** Количество кампаний */
                count?: number;
                /** Список кампаний */
                advert_list?: {
                  /** ID кампании */
                  advertId?: number;
                  /**
                   * Дата и время последнего изменения кампании
                   * @format date-time
                   */
                  changeTime?: string;
                }[];
              }[]
            | null;
          /** Общее количество кампаний всех статусов и типов */
          all?: number;
        },
        void
      >({
        path: `/adv/v1/promotion/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать информацию о кампаниях по query параметрам, либо по списку ID кампаний. <br> Допускается 5 запросов в секунду.
     *
     * @tags Продвижение
     * @name V1PromotionAdvertsCreate
     * @summary Информация о кампаниях
     * @request POST:/adv/v1/promotion/adverts
     * @secure
     */
    v1PromotionAdvertsCreate: (
      data: number[],
      query?: {
        /**
         * <dl>
         * <dt>Статус кампании:</dt>
         * <dd><code>-1</code> - кампания в процессе удаления </dd>
         * <dd><code>4</code> - готова к запуску </dd>
         * <dd><code>7</code> - кампания завершена</dd>
         * <dd><code>8</code> - отказался</dd>
         * <dd><code>9</code> - идут показы</dd>
         * <dd><code>11</code> - кампания на паузе</dd>
         * </dl>
         * Кампания в процессе удаления. Статус означает, что кампания была удалена, и через 3-10 минут она исчезнет из ответа метода.
         */
        status?: -1 | 4 | 7 | 8 | 9 | 11;
        /**
         * <dl>
         * <dt>Тип кампании:</dt>
         * <dd><code>4</code> - кампания в каталоге (<strong>устаревший тип</strong>)</dd>
         * <dd><code>5</code> - кампания в карточке товара (<strong>устаревший тип</strong>)</dd>
         * <dd><code>6</code> - кампания в поиске (<strong>устаревший тип</strong>)</dd>
         * <dd><code>7</code> - кампания в рекомендациях на главной странице (<strong>устаревший тип</strong>)</dd>
         * <dd><code>8</code> - автоматическая кампания </dd>
         * <dd><code>9</code> - Аукцион </dd>
         * </dl>
         */
        type?: 4 | 5 | 6 | 7 | 8 | 9;
        /**
         * <dl>
         * <dt>Порядок:</dt>
         * <dd><code>create</code> (по времени создания кампании)</dd>
         * <dd><code>change</code> (по времени последнего изменения кампании)</dd>
         * <dd><code>id</code> (по идентификатору кампании)</dd>
         * </dl>
         */
        order?: "create" | "change" | "id";
        /**
         * <dl>
         * <dt>Направление:</dt>
         * <dd><code>desc</code> (от большего к меньшему)</dd>
         * <dd><code>asc</code> (от меньшего к большему)</dd>
         * </dl>
         * <br>Например: <code>/adv/v1/promotion/adverts?type=6&order=change&<b>direction=asc</b></code>
         */
        direction?: "desc" | "asc";
      },
      params: RequestParams = {},
    ) =>
      this.request<(ResponseInfoAdvert | ResponseInfoAdvertType8 | ResponseInfoAdvertType9)[], string | void>({
        path: `/adv/v1/promotion/adverts`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменение ставки у кампании.<br> Измененная ставка отобразится в информации о кампании в течение трех минут.<br> Допускается 5 запросов в секунду.<br> <br> `Важно!` Если устанавливаемая ставка имеет размер меньше допустимого, то в ответ Вы получите статус-код 422 (Размер ставки не изменён).<br> Информация об изменении минимального размера ставки публикуется в разделе Новости, на портале продавцов.<br> <br> `Важно!` Принцип заполнения параметров `type`, `instrument`, `param` при изменении ставки для кампании с типом 9 (Аукцион): <br> Для `type` указывается значение 9 (всегда). <br> Для `instrument` указывается значение 6 (<strong>устаревший тип кампании</strong>). <br> Для `param` всегда указывается значение поля <b>id</b> из структуры <b>subject</b> ответа метода "Информация о кампании".
     *
     * @tags Продвижение
     * @name V0CpmCreate
     * @summary Изменение ставки у кампании
     * @request POST:/adv/v0/cpm
     * @secure
     */
    v0CpmCreate: (
      data: {
        /**
         * Идентификатор кампании, где меняется ставка
         * @example 789
         */
        advertId: number;
        /**
         * <dl>
         * <dt>кампании, где меняется ставка:</dt>
         * <dd><code>4</code> - кампания в каталоге (<strong>устаревший тип</strong>)</dd>
         * <dd><code>5</code> - кампания в карточке товара (<strong>устаревший тип</strong>)</dd>
         * <dd><code>6</code> - кампания в поиске (<strong>устаревший тип</strong>)</dd>
         * <dd><code>7</code> - кампания в рекомендациях на главной странице (<strong>устаревший тип</strong>)</dd>
         * <dd><code>8</code> - автоматическая кампания</dd>
         * <dd><code>9</code> - кампания Аукцион </dd>
         * </dl>
         */
        type: 5 | 6 | 7 | 8 | 9;
        /**
         * Новое значение ставки
         * @example 456
         */
        cpm: number;
        /**
         * Параметр, для которого будет внесено изменение. Является значением `subjectId` (для кампании в поиске и рекомендациях), `setId` (для кампании в карточке товара) или `menuId` (для кампании в каталоге).
         * <br> Для автоматической кампании указывать этот параметр не требуется.
         * @example 23
         */
        param: number;
        /**
         * тип кампании для изменения ставки в 4 - каталог (<strong>устаревший тип</strong>), 6 - поиск (<strong>устаревший тип</strong>)
         * @example 4
         */
        instrument?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v0/cpm`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод завершает медиакампанию - переводит её в статус `7`. <br>  Допускается максимум 10 запросов в минуту. <dl> <dt>Статусы, в которых для медиакампании доступно завершение:</dt> <dd><code>1</code> - черновик</dd> <dd><code>3</code> - отклонено (с возможностью вернуть на модерацию)</dd> <dd><code>4</code> - одобрено</dd> <dd><code>5</code> - запланировано</dd> <dd><code>6</code> - на показах</dd> <dd><code>8</code> - отказался</dd> <dd><code>9</code> - приостановлена продавцом</dd> <dd><code>10</code> - пауза по дневному лимиту</dd> <dd><code>11</code> - пауза по расходу бюджета</dd> </dl>
     *
     * @tags Активность медиакампании
     * @name V1AdvertStopCreate
     * @summary Завершение медиакампании
     * @request POST:/adv/v1/advert/stop
     * @secure
     */
    v1AdvertStopCreate: (
      data: {
        /** ID медиакампании */
        advert_id: number;
        /** Описание причины завершения */
        reason?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/advert/stop`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет приостанавливать медиакампании. <br> Переводит приостанавливаемую медиакампанию в статус `9`.<br> Допускается максимум 10 запросов в минуту. <br> `Важно:` приостановить медиакампанию можно не больше 10 раз в сутки. Сутки отсчитываются с полуночи по Московскому времени. <br> <dl> <dt>Статусы, в которых для медиакампании доступна приостановка:</dt> <dd><code>4</code> — одобрено</dd> <dd><code>5</code> — запланировано</dd> <dd><code>6</code> — на показах</dd> <dd><code>10</code> — пауза по дневному лимиту</dd> <dd><code>11</code> — пауза по расходу бюджета</dd> </dl>
     *
     * @tags Активность медиакампании
     * @name V1AdvertPauseCreate
     * @summary Приостановка медиакампании
     * @request POST:/adv/v1/advert/pause
     * @secure
     */
    v1AdvertPauseCreate: (
      data: {
        /** ID медиакампании */
        advert_id: number;
        /** Описание причины приостановки */
        reason?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/adv/v1/advert/pause`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет запускать приостановленные медиакампании. <br> После запуска кампания в течение 2-5 минут будет находиться в статусе `4`, после чего статус будет изменён на актуальный, в зависимости от конфигурации медиакампании. <br>  Допускается максимум 10 запросов в минуту. <dl> <dt>Статусы, в которых для медиакампании доступен запуск:</dt> <dd><code>9</code> - приостановлена продавцом</dd> <dd><code>11</code> - пауза по расходу бюджета</dd> </dl>
     *
     * @tags Активность медиакампании
     * @name V1AdvertStartCreate
     * @summary Запуск медиакампании
     * @request POST:/adv/v1/advert/start
     * @secure
     */
    v1AdvertStartCreate: (
      data: {
        /** ID медиакампании */
        advert_id: number;
        /** Описание причины запуска */
        reason?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/advert/start`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет изменять ставку баннера в структуре <b>items</b>. <br> Изменение возможно только для кампаний в одном из статусов: 4, 5, 6, 9, 10, 11. <br>  Допускается максимум 10 запросов в минуту.
     *
     * @tags Ставки медиакампании
     * @name V1ItemCpmChangeCreate
     * @summary Изменение ставки баннера
     * @request POST:/adv/v1/item/cpm/change
     * @secure
     */
    v1ItemCpmChangeCreate: (
      data: {
        /** ID медиакампании */
        advert_id: number;
        /** ID баннера */
        item_id: number;
        /**  Новая ставка */
        cpm: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/item/cpm/change`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет получить количество медиакампаний продавца
     *
     * @tags Медиа
     * @name V1CountList
     * @summary Получение медиакампаний
     * @request GET:/adv/v1/count
     * @secure
     */
    v1CountList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Общее количество медиакампаний всех статусов и типов */
          all?: number;
          adverts?: {
            /**
             * <dl>
             * <dt>Тип медиакампании:</dt>
             * <dd><code>1</code> - размещение по дням</dd>
             * <dd><code>2</code> - размещение по просмотрам</dd>
             * </dl>
             */
            type?: number;
            /**
             * <dl>
             * <dt>Статус медиакампании:</dt>
             *   <dd><code>1</code> - черновик</dd>
             *   <dd><code>2</code> - модерация
             *   <dd><code>3</code> - отклонено (с возможностью вернуть на модерацию)</dd>
             *   <dd><code>4</code> - одобрено</dd>
             *   <dd><code>5</code> - запланировано</dd>
             *   <dd><code>6</code> - на показах</dd>
             *   <dd><code>7</code> - завершено</dd>
             *   <dd><code>8</code> - отказался</dd>
             *   <dd><code>9</code> - приостановлена продавцом</dd>
             *   <dd><code>10</code> - пауза по дневному лимиту</dd>
             *   <dd><code>11</code> - пауза по расходу бюджета</dd>
             * </dl>
             */
            status?: number;
            /** Количество медиакампаний */
            count?: number;
          };
        },
        void
      >({
        path: `/adv/v1/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить список медиакампаний продавца
     *
     * @tags Медиа
     * @name V1AdvertsList
     * @summary Список медиакампаний
     * @request GET:/adv/v1/adverts
     * @secure
     */
    v1AdvertsList: (
      query?: {
        /**
         * <dl>
         * <dt>Статус медиакампании:</dt>
         *   <dd><code>1</code> - черновик</dd>
         *   <dd><code>2</code> - модерация
         *   <dd><code>3</code> - отклонено (с возможностью вернуть на модерацию)</dd>
         *   <dd><code>4</code> - одобрено</dd>
         *   <dd><code>5</code> - запланировано</dd>
         *   <dd><code>6</code> - на показах</dd>
         *   <dd><code>7</code> - завершено</dd>
         *   <dd><code>8</code> - отказался</dd>
         *   <dd><code>9</code> - приостановлена продавцом</dd>
         *   <dd><code>10</code> - пауза по дневному лимиту</dd>
         *   <dd><code>11</code> - пауза по расходу бюджета</dd>
         * </dl>
         * @example 1
         */
        status?: number;
        /**
         * <dl>
         * <dt>Тип медиакампании:</dt>
         * <dd><code>1</code> - размещение по дням</dd>
         * <dd><code>2</code> - размещение по просмотрам</dd>
         * </dl>
         * @example 1
         */
        type?: number;
        /**
         * Количество кампаний в ответе
         * @example 1
         */
        limit?: number;
        /**
         * Смещение относительно первой медиакампании
         * @example 1
         */
        offset?: number;
        /**
         * <dl>
         * <dt>Порядок вывода ответа:</dt>
         * <dd><code>create</code> - по времени создания медиакампании</dd>
         * <dd><code>id</code> - по идентификатору медиакампании</dd>
         * </dl>
         * @example "id"
         */
        order?: string;
        /**
         * <dl>
         * <dt>Порядок сортировки:</dt>
         * <dd><code>desc</code> - от большего к меньшему</dd>
         * <dd><code>asc</code> - от меньшего к большему</dd>
         * </dl>
         * @example "desc"
         */
        direction?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Идентификатор медиакампании */
          advertId?: number;
          /** Название медиакампании */
          name?: string;
          /** Название бренда */
          brand?: string;
          /**
           * <dl>
           * <dt>Тип медиакампании:</dt>
           * <dd><code>1</code> - размещение по дням</dd>
           * <dd><code>2</code> - размещение по просмотрам</dd>
           * </dl>
           */
          type?: number;
          /**
           * <dl>
           * <dt>Статус медиакампании:</dt>
           *   <dd><code>1</code> - черновик</dd>
           *   <dd><code>2</code> - модерация
           *   <dd><code>3</code> - отклонено (с возможностью вернуть на модерацию)</dd>
           *   <dd><code>4</code> - одобрено</dd>
           *   <dd><code>5</code> - запланировано</dd>
           *   <dd><code>6</code> - на показах</dd>
           *   <dd><code>7</code> - завершено</dd>
           *   <dd><code>8</code> - отказался</dd>
           *   <dd><code>9</code> - приостановлена продавцом</dd>
           *   <dd><code>10</code> - пауза по дневному лимиту</dd>
           *   <dd><code>11</code> - пауза по расходу бюджета</dd>
           * </dl>
           */
          status?: number;
          /**
           * Время создания медиакампании
           * @format date-time
           */
          createTime?: string;
          /**
           * Время завершения медиакампании (при наличии)
           * @format date-time
           */
          endTime?: string;
        }[],
        void
      >({
        path: `/adv/v1/adverts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получить информацию об одной медиакампании
     *
     * @tags Медиа
     * @name V1AdvertList
     * @summary Информация о медиакампании
     * @request GET:/adv/v1/advert
     * @secure
     */
    v1AdvertList: (
      query: {
        /**
         * Идентификатор медиакампании
         * @example 23569
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Идентификатор медиакампании */
          advertId?: number;
          /** Название медиакампании */
          name?: string;
          /** Название бренда */
          brand?: string;
          /**
           * <dl>
           * <dt>Тип медиакампании:</dt>
           * <dd><code>1</code> - размещение по дням</dd>
           * <dd><code>2</code> - размещение по просмотрам</dd>
           * </dl>
           */
          type?: number;
          /**
           * <dl>
           * <dt>Статус медиакампании:</dt>
           *   <dd><code>1</code> - черновик</dd>
           *   <dd><code>2</code> - модерация
           *   <dd><code>3</code> - отклонено (с возможностью вернуть на модерацию)</dd>
           *   <dd><code>4</code> - одобрено</dd>
           *   <dd><code>5</code> - запланировано</dd>
           *   <dd><code>6</code> - на показах</dd>
           *   <dd><code>7</code> - завершено</dd>
           *   <dd><code>8</code> - отказался</dd>
           *   <dd><code>9</code> - приостановлена продавцом</dd>
           *   <dd><code>10</code> - пауза по дневному лимиту</dd>
           *   <dd><code>11</code> - пауза по расходу бюджета</dd>
           * </dl>
           */
          status?: number;
          /**
           * Время создания медиакампании
           * @format date-time
           */
          createTime?: string;
          extended?: {
            /** Комментарий модератора (при наличии) */
            reason?: string | null;
            /** Затраты */
            expenses?: number;
            /**
             * Начало показов медиакампании
             * @format date-time
             */
            from?: string;
            /**
             * Конец показов медиакампании
             * @format date-time
             */
            to?: string;
            /**
             * Время изменения медиакампании
             * @format date-time
             */
            updated_at?: string;
            /** Стоимость размещения по дням (для типа 1) */
            price?: number;
            /** Остаток бюджета (для типа 2) */
            budget?: number;
            /** Источник списания (1 - баланс, 2 - счет) */
            operation?: number;
            /** Идентификатор контракта (для продавцов на контракте) */
            contract_id?: number;
          };
          /**
           * Информация о баннере.
           * <br>
           * Наличие в ответе тех или иных полей зависит от конфигурации медиакампании.
           */
          items?: {
            /** ID баннера */
            id?: number;
            /** Бренд */
            name?: string;
            /** Статус (такой же как у медиакампании) */
            status?: number;
            /** Позиция на странице размещения */
            place?: number;
            /** Бюджет */
            budget?: number;
            /** Дневной лимит (для баннеров по показам) */
            daily_limit?: number;
            /** Название категории размещения */
            category_name?: string;
            /** Ставка */
            cpm?: number;
            /** URL страницы, на которую попадает пользователь при клике по баннеру */
            url?: string;
            /**
             * <dl>
             * <dt>Тип продвижения:</dt>
             * <dd><code>1</code> - баннер</dd>
             * <dd><code>2</code> - всплывающее меню</dd>
             * <dd><code>3</code> - почтовая рассылка</dd>
             * <dd><code>4</code> - социальные сети</dd>
             * <dd><code>5</code> - push-уведомления в мобильном приложении</dd>
             * </dl>
             */
            advert_type?: number;
            /**
             * Дата создания баннера
             * @format date-time
             */
            created_at?: string;
            /**
             * Дата обновления баннера
             * @format date-time
             */
            updated_at?: string;
            /**
             * Дата начала работы баннера
             * @format date-time
             */
            date_from?: string;
            /**
             * Дата завершения работы баннера
             * @format date-time
             */
            date_to?: string;
            /** Подборка артикулов WB */
            nms?: number[];
            /** Текст под плашкой баннера */
            bottomText1?: string;
            /** 2-я строка с текстом под плашкой баннера */
            bottomText2?: string;
            /** Текст push-уведомления или рассылки */
            message?: string;
            /**
             * Дополнительные настройки.
             * <dl>
             * <dt>Формат почтовой рассылки:</dt>
             * <dd><code>1</code> - общий</dd>
             * <dd><code>2</code> - частичный</dd>
             * <dd><code>3</code> - уникальный</dd>
             * </dl>
             * <dl>
             * <dt>Социальная сеть:</dt>
             * <dd><code>1</code> - VKontakte</dd>
             * <dd><code>2</code> - OK (Одноклассники)</dd>
             * </dl>
             */
            additionalSettings?: number;
            /** Кол-во получателей push-уведомлений */
            receiversCount?: number;
            /** ID родительской категории товара */
            subject_id?: number;
            /** Название родительской категории товара */
            subject_name?: string;
            /** Название акции */
            action_name?: string;
            /** Часы показа */
            show_hours?: {
              /** Начало показа */
              From?: number;
              /** Конец показа */
              To?: number;
            }[];
            /** Уникальный идентификатор медиакампании для работы с ОРД */
            Erid?: string;
          }[];
        },
        void
      >({
        path: `/adv/v1/advert`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать статистику медиакампаний.
     *
     * @tags Статистика медиакампании
     * @name V1StatsCreate
     * @summary Статистика медиакампаний
     * @request POST:/adv/v1/stats
     * @secure
     */
    v1StatsCreate: (data: RequestWithDate | RequestWithInterval, params: RequestParams = {}) =>
      this.request<(StatInterval | StatDate | Stat)[], void>({
        path: `/adv/v1/stats`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет запускать кампании находящиеся в статусах <b>4 - готова к запуску</b> или <b>11 - кампания на паузе</b>. <br>Допускается 5 запросов в секунду.<br> Для запуска кампании со статусом <b>11</b> необходимо наличие у неё пополненного бюджета.<br> <dl> <dt>Чтобы запустить кампанию со статусом <b>4</b> необходимо выполнить два условия (поочередность действий значения не имеет):</dt> <dd>1. После создания кампании в кабинете ВБ. Продвижение необходимо нажать кнопку "Применить изменения".</dd> <dd>2. Установить бюджет.</dd> </dl>
     *
     * @tags Активность кампании
     * @name V0StartList
     * @summary Запуск кампании
     * @request GET:/adv/v0/start
     * @secure
     */
    v0StartList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v0/start`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Кампании в статусе <b>"9 - идут показы"</b> - можно поставить на паузу, сделав <b>GET</b> на  `/adv/v0/pause?id=***`. <br>Допускается 5 запросов в секунду.
     *
     * @tags Активность кампании
     * @name V0PauseList
     * @summary Пауза кампании
     * @request GET:/adv/v0/pause
     * @secure
     */
    v0PauseList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v0/pause`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Метод позволяет завершить кампанию, находящуюся в статусе 9 или 11 или 4.<br>Допускается 5 запросов в секунду.
     *
     * @tags Активность кампании
     * @name V0StopList
     * @summary Завершение кампании
     * @request GET:/adv/v0/stop
     * @secure
     */
    v0StopList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v0/stop`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Метод позволяет получать информацию о счёте, балансе и бонусах продавца. <br> Допускается 1 запрос в секунду.
     *
     * @tags Финансы
     * @name V1BalanceList
     * @summary Баланс
     * @request GET:/adv/v1/balance
     * @secure
     */
    v1BalanceList: (params: RequestParams = {}) =>
      this.request<
        {
          /** Счёт, рублей */
          balance?: number;
          /** Баланс, рублей */
          net?: number;
          /** Бонусы, рублей */
          bonus?: number;
        },
        string | void
      >({
        path: `/adv/v1/balance`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать информацию о бюджете кампании. <br> Допускается 4 запроса в секунду.
     *
     * @tags Финансы
     * @name V1BudgetList
     * @summary Бюджет кампании
     * @request GET:/adv/v1/budget
     * @secure
     */
    v1BudgetList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Поле не используется. Значение всегда 0. */
          cash?: number;
          /** Поле не используется. Значение всегда 0. */
          netting?: number;
          /** Бюджет кампании, ₽ */
          total?: number;
        },
        string | void
      >({
        path: `/adv/v1/budget`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет пополнять бюджет кампании. <br> Допускается 1 запрос в секунду.
     *
     * @tags Финансы
     * @name V1BudgetDepositCreate
     * @summary Пополнение бюджета кампании
     * @request POST:/adv/v1/budget/deposit
     * @secure
     */
    v1BudgetDepositCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
      },
      data: {
        /**
         * Сумма пополнения (min. 500 ₽)
         * @example 500
         */
        sum?: number;
        /**
         * <dl>
         * <dt>Тип источника пополнения:</dt>
         * <dd><code>0</code> - Счёт</dd>
         * <dd><code>1</code> - Баланс</dd>
         * <dd><code>3</code> - Бонусы</dd>
         * </dl>
         * @example 1
         */
        type?: number;
        /** Флаг возврата ответа (`true` - в ответе вернется обновлённый размер бюджета кампании, `false` или не указать параметр вообще - не вернётся.) */
        return?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ResponseWithReturn,
        {
          error?: string;
        } | void
      >({
        path: `/adv/v1/budget/deposit`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать историю затрат. <br> Допускается 1 запрос в секунду.
     *
     * @tags Финансы
     * @name V1UpdList
     * @summary Получение истории затрат
     * @request GET:/adv/v1/upd
     * @secure
     */
    v1UpdList: (
      query: {
        /**
         * Начало интервала
         * @format date
         * @example "2023-07-31"
         */
        from: string;
        /**
         * Конец интервала. <br>
         * (Минимальный интервал 1 день, максимальный 31)
         * @format date
         * @example "2023-08-02"
         */
        to: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Номер выставленного документа (при наличии) */
          updNum?: number;
          /**
           * Время списания
           * @format time-date
           */
          updTime?: string;
          /** Выставленная сумма */
          updSum?: number;
          /** Идентификатор кампании */
          advertId?: number;
          /** Название кампании */
          campName?: string;
          /** Тип кампании */
          advertType?: number;
          /** <dl> <dt>Источник списания:</dt> <dd>Баланс</dd> <dd>Бонусы</dd> <dd>Счет</dd> </dl> */
          paymentType?: string;
          /**
           * <dl>
           *   <dt>Статус кампании:</dt>
           *   <dd><code>4</code> - готова к запуску </dd>
           *   <dd><code>7</code> - завершена</dd>
           *   <dd><code>8</code> - отказался</dd>
           *   <dd><code>9</code> - активна</dd>
           *   <dd><code>11</code> - приостановлена</dd>
           * </dl>
           */
          advertStatus?: number;
        }[],
        string | void
      >({
        path: `/adv/v1/upd`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать историю пополнений счёта. <br> Допускается 1 запрос в секунду.
     *
     * @tags Финансы
     * @name V1PaymentsList
     * @summary Получение истории пополнений счета
     * @request GET:/adv/v1/payments
     * @secure
     */
    v1PaymentsList: (
      query?: {
        /**
         * Начало интервала
         * @format date
         * @example "2023-07-31"
         */
        from?: string;
        /**
         * Конец интервала. <br>
         * (Минимальный интервал 1 день, максимальный 31)
         * @format date
         * @example "2023-08-02"
         */
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Идентификатор платежа */
          id?: number;
          /**
           * Дата платежа
           * @format time-date
           */
          date?: string;
          /** Сумма платежа */
          sum?: number;
          /**
           * <dl>
           * <dt>Тип источника списания:</dt>
           * <dd><code>0</code> - Счёт</dd>
           * <dd><code>1</code> - Баланс</dd>
           * <dd><code>3</code> - Картой</dd>
           * </dl>
           */
          type?: number;
          /**
           * <dl>
           * <dt>Статус:</dt>
           * <dd><code>0</code> - ошибка</dd>
           * <dd><code>1</code> - обработано</dd>
           * </dl>
           */
          statusId?: number;
          /**
           * <dl>
           * <dt>Статус операции(при оплате картой):</dt>
           * <dd><b>success</b> - успех</dd>
           * <dd><b>fail</b> - неуспех</dd>
           * <dd><b>pending</b> - в ожидании ответа</dd>
           * <dd><b>unknown</b> - неизвестно</dd>
           * </dl>
           */
          cardStatus?: string;
        }[],
        string | void
      >({
        path: `/adv/v1/payments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает предметы, номенклатуры из которых можно добавить в кампании. Максимум 1 запрос в 12 секунд.
     *
     * @tags Словари
     * @name V1SupplierSubjectsList
     * @summary Предметы для кампаний
     * @request GET:/adv/v1/supplier/subjects
     * @secure
     */
    v1SupplierSubjectsList: (params: RequestParams = {}) =>
      this.request<
        | {
            /** ID предмета */
            id?: number;
            /** Предмет */
            name?: string;
            /** Количество Артикулов Wildberries (`nmId`) с таким предметом. */
            count?: number;
          }[]
        | null,
        void
      >({
        path: `/adv/v1/supplier/subjects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает номенклатуры, которые можно добавить в кампании. <br> Максимум 5 запросов в минуту
     *
     * @tags Словари
     * @name V2SupplierNmsCreate
     * @summary Номенклатуры для кампаний
     * @request POST:/adv/v2/supplier/nms
     * @secure
     */
    v2SupplierNmsCreate: (data: number[], params: RequestParams = {}) =>
      this.request<
        {
          /**
           * Название товара
           * @example "Плед"
           */
          title?: string;
          /**
           * Артикул Wildberries (`nmId`)
           * @example 146168367
           */
          nm?: number;
          /**
           * ID предмета
           * @example 765
           */
          subjectId?: number;
        }[],
        string | void
      >({
        path: `/adv/v2/supplier/nms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает статистику кампаний. <br> Максимум 1 запрос в минуту. <br> Данные вернутся для кампаний в статусе 7, 9 и 11. <br> <b>Важно</b>. В запросе можно передавать либо параметр `dates` либо параметр `interval`, но не оба.<br> Можно отправить запрос только с ID кампании. При этом вернутся данные за последние сутки, но не за весь период существования кампании. <br>
     *
     * @tags Статистика
     * @name V2FullstatsCreate
     * @summary Статистика кампаний
     * @request POST:/adv/v2/fullstats
     * @secure
     */
    v2FullstatsCreate: (
      data: RequestWithDate | RequestWithInterval | RequestWithCampaignID,
      params: RequestParams = {},
    ) =>
      this.request<ResponseWithDate | ResponseWithInterval, ResponseAdvError1 | void>({
        path: `/adv/v2/fullstats`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать краткую статистику по автоматической кампании. <br> Допускается 1 запрос в 6 секунд.
     *
     * @tags Статистика
     * @name V1AutoStatList
     * @summary Статистика автоматической кампании
     * @request GET:/adv/v1/auto/stat
     * @deprecated
     * @secure
     */
    v1AutoStatList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Количество просмотров */
          views?: number;
          /** Количество кликов */
          clicks?: number;
          /**
           * CTR (Click-Through Rate) — показатель кликабельности. <br>
           * Отношение числа кликов к количеству показов. Выражается в процентах.
           */
          ctr?: number;
          /** CPC(от англ. cost per click — цена за клик) — это цена клика по продвигаемому товару. */
          cpc?: number;
          /** Затраты, ₽. */
          spend?: number;
        },
        ResponseAdvError1 | void
      >({
        path: `/adv/v1/auto/stat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description <p>Возвращает кластеры ключевых фраз (наборы похожих), по которым показывались товары в кампании, и количество показов по ним. В ответ метода попадают только те фразы, по которым товары показывались хотя бы один раз.</p> <p>Информация обновляется раз в 15 минут.</p> <p>Максимум — 4 запроса секунду.</p>
     *
     * @tags Статистика
     * @name V2AutoStatWordsList
     * @summary Статистика автоматической кампании по кластерам фраз
     * @request GET:/adv/v2/auto/stat-words
     * @secure
     */
    v2AutoStatWordsList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Исключения (минус-фразы) для товаров из кампании. Это фразы, которые вы задали с помощью метода Установка/удаление минус-фраз или в личном кабинете, в настройках кампании
           * @example ["Samsung","Xiaomi"]
           */
          excluded?: string[];
          /** Кластеры ключевых фраз */
          clusters?: {
            /**
             * Кластер — набор похожих ключевых фраз
             * @example "Телефон"
             */
            cluster?: string;
            /**
             * Сколько раз товары показывались по всем фразам из кластера
             * @example 100
             */
            count?: number;
            /**
             * Ключевые фразы из кластера, по которым товары показывались хотя бы один раз
             * @example ["Телефон","Мобильный телефон"]
             */
            keywords?: string[];
          }[];
        },
        ResponseAdvError1 | void
      >({
        path: `/adv/v2/auto/stat-words`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description <p>Возвращает статистику по ключевым фразам за каждый день, когда кампания была активна.</p> <p>Информация обновляется раз в 15 минут.</p> <p>Максимум — 4 запроса секунду.</p>
     *
     * @tags Статистика
     * @name V2AutoDailyWordsList
     * @summary Детальная статистика автоматической кампании по ключевым фразам
     * @request GET:/adv/v2/auto/daily-words
     * @deprecated
     * @secure
     */
    v2AutoDailyWordsList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * Дата, когда пользователи просматривали товары из кампании
           * @example "2024-01-23T03:00:00+03:00"
           */
          date?: string;
          /** Статистика по ключевым фразам */
          stat?: {
            /**
             * Ключевая фраза
             * @example "Смартфон"
             */
            keyword?: string;
            /**
             * Количество просмотров
             * @example 100
             */
            views?: number;
            /**
             * Количество кликов
             * @example 500
             */
            clicks?: number;
            /**
             * Click-Through Rate, отношение количества кликов к количеству показов, %
             * @example 0.5
             */
            ctr?: number;
            /**
             * Затраты, ₽
             * @example 1000
             */
            sum?: number;
          }[];
        },
        ResponseAdvError1 | void
      >({
        path: `/adv/v2/auto/daily-words`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать статистику поисковой кампании по ключевым фразам.<br> Допускается максимум 4 запроса в секунду.<br> Информация обновляется примерно каждые полчаса. <br>
     *
     * @tags Статистика
     * @name V1StatWordsList
     * @summary Статистика поисковой кампании по ключевым фразам
     * @request GET:/adv/v1/stat/words
     * @secure
     */
    v1StatWordsList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Блок информации по ключевым фразам */
          words?: {
            /** Фразовое соответствие (минус фразы) */
            phrase?: string[];
            /** Точное соответствие (минус фразы) */
            strong?: string[];
            /** Минус фразы из поиска */
            excluded?: string[];
            /** Фиксированные фразы */
            pluse?: string[];
            /** Блок со статистикой по ключевым фразам */
            keywords?: {
              /** Ключевая фраза */
              keyword?: string;
              /** Количество просмотров по ключевой фразе */
              count?: number;
            }[];
            /** Фиксированные ключевые фразы (`true` - включены, `false` - выключены) */
            fixed?: boolean;
          };
          /**
           * Массив информации по статистике.<br>
           * <b>Первый элемент массива</b> с `keyword: "Всего по кампании"` содержит суммарную информацию по всем ключевым фразам.<br>
           * <b>Каждый следующий элемент массива</b> содержит информацию по отдельной ключевой фразе.<br>
           * Отображается 60 ключевых фраз с наибольшим количеством просмотров.
           */
          stat?: {
            /** Идентификатор кампании в системе Wildberries */
            advertId?: number;
            /** Ключевая фраза */
            keyword?: string;
            /** Поле перманентно отключено */
            advertName?: string;
            /** Название кампании */
            campaignName?: string;
            /**
             * Дата запуска кампании
             * @format date-time
             */
            begin?: string;
            /**
             * Дата завершения кампании
             * @format date-time
             */
            end?: string;
            /** Количество просмотров */
            views?: number;
            /** Количество кликов */
            clicks?: number;
            /** Частота (отношение количества просмотров к количеству уникальных пользователей) */
            frq?: number;
            /** Показатель кликабельности (отношение числа кликов к количеству показов. Выражается в процентах). */
            ctr?: number;
            /** Стоимость клика, ₽ */
            cpc?: number;
            /** Длительность кампании, в секундах */
            duration?: number;
            /** Затраты, ₽. */
            sum?: number;
          }[];
        },
        void
      >({
        path: `/adv/v1/stat/words`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет получать статистику по кампаниям Аукцион. <br> Допускается 2 запроса в секунду.
     *
     * @tags Статистика
     * @name V1SeacatStatList
     * @summary Статистика кампаний Аукцион
     * @request GET:/adv/v1/seacat/stat
     * @secure
     */
    v1SeacatStatList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** Суммарное количество просмотров */
          totalViews?: number;
          /** Суммарное количество кликов */
          totalClicks?: number;
          /** Суммарное количество заказов */
          totalOrders?: number;
          /** Суммарные затраты, ₽. */
          totalSum?: number;
          /** Блок статистики */
          dates?: {
            /**
             * Дата
             * @format date
             */
            date?: string;
            /** Поиск */
            search?: {
              /** Количество просмотров */
              views?: number;
              /** Количество кликов */
              clicks?: number;
              /** Количество заказов */
              orders?: number;
              /** Затраты, ₽. */
              sum?: number;
            };
            /** Каталог */
            catalog?: {
              /** Количество просмотров */
              views?: number;
              /** Количество кликов */
              clicks?: number;
              /** Количество заказов */
              orders?: number;
              /** Затраты, ₽. */
              sum?: number;
            };
          }[];
        },
        {
          error?: string;
        } | void
      >({
        path: `/adv/v1/seacat/stat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Возвращает статистику по ключевым фразам за каждый день, когда кампания была активна. <br> Можно получить данные максимум за 7 дней. <br> Информация обновляется раз в час. <br> Максимум 4 запроса секунду
     *
     * @tags Статистика
     * @name V0StatsKeywordsList
     * @summary Статистика по ключевым фразам для Автоматических кампаний и Аукциона
     * @request GET:/adv/v0/stats/keywords
     * @secure
     */
    v0StatsKeywordsList: (
      query: {
        /**
         * ID кампании
         * @example 123456789
         */
        advert_id: number;
        /**
         * Начало периода
         * @format date
         * @example "2024-08-10T00:00:00.000Z"
         */
        from: string;
        /**
         * Конец периода
         * @format date
         * @example "2024-08-12T00:00:00.000Z"
         */
        to: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V0KeywordsStatisticsResponse, ErrorResponse | void>({
        path: `/adv/v0/stats/keywords`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменяет активность предметной группы. Только для кампаний: * типа Аукцион; * со статусами Идут показы (`9`) и Кампания на паузе (`11`). Максимум 5 запросов в секунду.
     *
     * @tags Управление параметрами кампаний Аукцион
     * @name V0ActiveList
     * @summary Изменение активности предметной группы
     * @request GET:/adv/v0/active
     * @secure
     */
    v0ActiveList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234
         */
        id: number;
        /**
         * Идентификатор предметной группы, для которой меняется активность
         * @example 1234
         */
        subjectId: number;
        /**
         * Новое состояние (`true` - сделать группу активной или `false` - сделать группу неактивной)
         * @example "true"
         */
        status: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v0/active`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Изменяет активность фиксированных фраз. Только для кампаний типа Аукцион. Максимум 1 запрос в 500 миллисекунд.
     *
     * @tags Управление параметрами кампаний Аукцион
     * @name V1SearchSetPlusList
     * @summary Управление активностью фиксированных фраз
     * @request GET:/adv/v1/search/set-plus
     * @secure
     */
    v1SearchSetPlusList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
        /** Новое состояние (`false` - сделать неактивными, `true` - сделать активными) */
        fixed?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/search/set-plus`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Устанавливает и удаляет фиксированные фразы. Только для кампаний типа Аукцион. Отправка пустого массива удаляет все фиксированные фразы и отключает активность фиксированных фраз в кампании. Максимум 1 запрос в 500 миллисекунд.
     *
     * @tags Управление параметрами кампаний Аукцион
     * @name V1SearchSetPlusCreate
     * @summary Установка/удаление фиксированных фраз
     * @request POST:/adv/v1/search/set-plus
     * @secure
     */
    v1SearchSetPlusCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
      },
      data: {
        /** Список фиксированных фраз (max. 100) */
        pluse?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], string | void>({
        path: `/adv/v1/search/set-plus`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Устанавливает и удаляет минус-фразы фразового соответствия. Только для кампаний типа Аукцион.<br> Максимально допустимое количество минус-фраз в кампании - 1000 шт.<br> Отправка пустого массива удаляет все минус-фразы фразового соответствия из кампании. Максимум 2 запроса в секунду.
     *
     * @tags Управление параметрами кампаний Аукцион
     * @name V1SearchSetPhraseCreate
     * @summary Установка/удаление минус-фраз фразового соответствия
     * @request POST:/adv/v1/search/set-phrase
     * @secure
     */
    v1SearchSetPhraseCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
      },
      data: {
        /** Минус-фразы (макс. 1000 шт.) */
        phrase?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/search/set-phrase`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Устанавливает и удаляет минус-фразы точного соответствия. Только для кампаний типа Аукцион.<br> Максимально допустимое количество минус-фраз в кампании - 1000 шт. <br> Отправка пустого массива удаляет все минус-фразы точного соответствия из кампании. Максимум 2 запроса в секунду.
     *
     * @tags Управление параметрами кампаний Аукцион
     * @name V1SearchSetStrongCreate
     * @summary Установка/удаление минус-фраз точного соответствия
     * @request POST:/adv/v1/search/set-strong
     * @secure
     */
    v1SearchSetStrongCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
      },
      data: {
        /** Минус-фразы (макс. 1000 шт.) */
        strong?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/search/set-strong`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Устанавливает и удаляет минус-фразы из поиска. Только для кампаний типа Аукцион.<br> Максимально допустимое количество минус-фраз в кампании - 1000 шт. <br> Отправка пустого массива удаляет все минус-фразы из поиска из кампании. Максимум 2 запроса в секунду.
     *
     * @tags Управление параметрами кампаний Аукцион
     * @name V1SearchSetExcludedCreate
     * @summary Установка/удаление минус-фраз из поиска
     * @request POST:/adv/v1/search/set-excluded
     * @secure
     */
    v1SearchSetExcludedCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
      },
      data: {
        /** Минус-фразы (макс. 1000 шт.) */
        excluded?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/search/set-excluded`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет получать список номенклатур, доступных для добавления в кампанию. <br> Допускается 1 запрос в секунду.
     *
     * @tags Управление параметрами автоматических кампаний
     * @name V1AutoGetnmtoaddList
     * @summary Список номенклатур для автоматической кампании
     * @request GET:/adv/v1/auto/getnmtoadd
     * @secure
     */
    v1AutoGetnmtoaddList: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<number[], void>({
        path: `/adv/v1/auto/getnmtoadd`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Метод позволяет добавлять и удалять номенклатуры. <br> Допускается 1 запрос в секунду.<br> `Важно`: Добавить можно только те номенклатуры, которые вернутся в ответе метода <b>"Список номенклатур для автоматической кампании"</b>.<br> Удалить единственную номенклатуру из кампании нельзя.<br> Проверки по параметру delete не предусмотрено.<br> Если пришел ответ со статус-кодом 200, а изменений не произошло, то проверьте запрос на соответствие документации.
     *
     * @tags Управление параметрами автоматических кампаний
     * @name V1AutoUpdatenmCreate
     * @summary Изменение списка номенклатур в автоматической кампании
     * @request POST:/adv/v1/auto/updatenm
     * @secure
     */
    v1AutoUpdatenmCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      data: {
        /** Номенклатуры, которые необходимо добавить. */
        add?: number[];
        /** Номенклатуры, которые необходимо удалить. */
        delete?: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ResponseAdvError1 | void>({
        path: `/adv/v1/auto/updatenm`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет изменять активность зон показов. <br> Допускается 1 запрос в секунду.<br> Вы можете осуществлять показы товаров во всех зонах либо выборочно.
     *
     * @tags Управление параметрами автоматических кампаний
     * @name V1AutoActiveCreate
     * @summary Управление зонами показов в автоматической кампании
     * @request POST:/adv/v1/auto/active
     * @secure
     */
    v1AutoActiveCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1
         */
        id: number;
      },
      data: {
        /** Рекомендации на главной (`false` - отключены, `true` - включены) */
        recom?: boolean;
        /** Аукцион (`false` - отключены, `true` - включены) */
        booster?: boolean;
        /** Карточка товара (`false` - отключены, `true` - включены) */
        carousel?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/auto/active`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Метод позволяет устанавливать или удалять минус фразы. <br> <br> Допускается 1 запрос в 6 секунд. <br> Отправка пустого массива удаляет все минус-фразы из кампании.<br>
     *
     * @tags Управление параметрами автоматических кампаний
     * @name V1AutoSetExcludedCreate
     * @summary Установка/удаление минус-фраз для автоматической кампании
     * @request POST:/adv/v1/auto/set-excluded
     * @secure
     */
    v1AutoSetExcludedCreate: (
      query: {
        /**
         * Идентификатор кампании
         * @example 1234567
         */
        id: number;
      },
      data: {
        /** Список фраз (макс. 1000 шт.) */
        excluded?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<void, string | void>({
        path: `/adv/v1/auto/set-excluded`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
