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

export interface OfferResponse {
  /**
   * Идентификатор предложения
   * @format int64
   * @example 42
   */
  id?: number;
  /**
   * Название предложения
   * @example "Книга `Спортивное питание`"
   */
  title?: string;
  /**
   * Описание предложения
   * @example "Очень хорошая книга о спортивном питании."
   */
  description?: string;
  /**
   * Идентификатор категории товара:
   * - `1` — Видеоконтент
   * - `2` — Аудиоконтент
   * - `3` — Ключи активации
   * - `4` — Электронные книги
   * - `5` — Аудиокниги
   * - `6` — Цифровые товары
   * - `8` — Услуги
   * - `12` — Купоны и развлечения
   * - `13` — Подарочные сертификаты
   * @format int32
   * @example 4
   */
  section?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12 | 13;
  /**
   * Массив идентификаторов подкатегорий, в котором находится предложение
   * @example [10]
   */
  catalog_path?: number[];
  /**
   * Цена предложения в рублях
   * @format int64
   * @example 849
   */
  price?: number;
  /**
   * Цена с учетом скидки в рублях
   * @format int64
   * @example 799
   */
  discount_price?: number;
  /**
   * Список URL-адресов дополнительных изображений, а так же видео превью
   * @example ["vol42/352/91b751bfb753ff365afbc8dca21b7f87/video.mp4","vol42/352/91b751bfb753ff365afbc8dca21b7f87/0_1280.jpg","vol42/352/91b751bfb753ff365afbc8dca21b7f87/1_1280.png"]
   */
  gallery?: string[];
  /** Метаданные предложения */
  meta?: string;
  /** Список тегов. Теги нужны для группирования, ранжирования и облегчения поиска вашего товара. */
  tags?: Tag[] | null;
  /**
   * Обложка предложения
   * @example ["vol6/842/900bec865s329db6c0efbf0f1a61ebee/480.jpg","vol6/842/900bec865s329db6c0efbf0f1a61ebee/1280.jpg","vol6/842/900bec865s329db6c0efbf0f1a61ebee/1920.jpg"]
   */
  thumbnail?: string[];
  /** Контент предложения */
  content?: OfferContent[];
  /**
   * Дата создания, UTC +3 (Москва)
   * @example "2024-06-10T07:29:30Z"
   */
  created?: string;
  /**
   * Дата обновления, UTC +3 (Москва)
   * @example "2024-06-17T22:12:13Z"
   */
  updated?: string;
  /**
   * Дата удаления, UTC +3 (Москва). 1970-01-01T00:00:00Z — является нулевым значение.
   * @example "2024-06-19T22:12:13Z"
   */
  deleted?: string;
  /**
   * Статус вашего предложения:
   * - `0` — Добавить в черновик
   * - `1` — Опубликовать
   * @format int32
   * @example 1
   */
  status: 0 | 1;
  /**
   * Количество просмотров
   * @format int64
   * @example 47
   */
  view_count?: number;
  /**
   * Количество покупок
   * @format int64
   * @example 10
   */
  purchase_count?: number;
  /**
   * Флаг, который отвечает за ограничение контента для взрослых (блюр контента)
   * @example false
   */
  adult: boolean;
  /**
   * Возрастное ограничение. Это система, которая используется для определения, подходит ли ваше предложение для определенной возрастной группы.
   * @example "16+"
   */
  age_rating?: "0+" | "6+" | "12+" | "14+" | "16+" | "18+";
  /**
   * Рейтинг предложения
   * @format float64
   * @example 50
   */
  rating?: number;
}

export interface OfferCreateRequest {
  /**
   * Название предложения.</br>Максимальная длина — **100 символов.**
   * @maxLength 100
   * @example "Книга `Спортивное питание`"
   */
  title: string;
  /**
   * Описание предложения. Это текст, который описывает ваше предложение и помогает людям понять, что именно представляет из себя продаваемый вами товар и чем он может быть полезен. Важно правильно назвать предложение и более подробно прописать его описание, чтобы пользователи узнали как можно больше информации еще до покупки.</br>Максимальная длина — **5000 символов.**
   * @maxLength 5000
   * @example "Очень хорошая книга о спортивном питании."
   */
  description: string;
  /**
   * Массив тегов. Теги нужны для группирования, ранжирования и облегчения поиска вашего товара.
   *
   * **Ограничения**:
   * - Максимальное количество тегов — **5**
   * - Максимальная длина тега — **45 символов**
   * @maxItems 5
   * @minItems 1
   * @example ["life","work","gym"]
   */
  tags: string[];
  /**
   * Идентификатор категории предложения:
   * - `1` — Видеоконтент
   * - `2` — Аудиоконтент
   * - `3` — Ключи активации
   * - `4` — Электронные книги
   * - `5` — Аудиокниги
   * - `6` — Цифровые товары
   * - `8` — Услуги
   * - `12` — Купоны и развлечения
   * - `13` — Подарочные сертификаты
   * @format int32
   * @example 4
   */
  section: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 12 | 13;
  /**
   * Массив идентификаторов подкатегорий, в котором находится предложение.</br>
   * Воспользуйтесь методом [Получить категории и их подкатегории](#operation/GetCatalog) для получения идентификатора и правильного сопоставления с категорией.
   * @minItems 1
   * @example [10]
   */
  catalog_path: number[];
  /**
   * Возрастное ограничение. Это система, которая используется для определения, подходит ли ваше предложение для определенной возрастной группы.
   * @example "16+"
   */
  age_rating: "0+" | "6+" | "12+" | "14+" | "16+" | "18+";
  /**
   * Цена предложения в рублях
   * @format int64
   * @example 849
   */
  price: number;
  /**
   * Цена с учетом скидки в рублях
   * @format int64
   * @example 799
   */
  discount_price?: number;
  /**
   * Список URL-адресов дополнительных изображений, а так же видео превью.</br>
   * **Можно передать до 8 медиа-файлов.**</br>
   * **Важно, чтобы все изображения были в формате .jpg или .png, а видео в формате .mp4**
   * @maxItems 8
   * @example ["vol42/352/91b751bfb753ff365afbc8dca21b7f87/video.mp4","vol42/352/91b751bfb753ff365afbc8dca21b7f87/0_1280.jpg","vol42/352/91b751bfb753ff365afbc8dca21b7f87/1_1280.png"]
   */
  gallery?: string[];
  /**
   * Список ключей.</br>
   * Это **обязательное поле**, если вы хотите создать предложение из категории (`section`):
   * - **Ключи активации** — `3`
   * - **Купоны и развлечения** — `12`
   * - **Подарочные сертификаты** — `13`
   *
   * **Ограничения:**
   * - Максимальное количество ключей — **1000**
   * - Максимальная длина ключа — **200 символов**
   * @maxItems 1000
   * @example ["0181-c2a38--6379-69d8ae","1983-454e4--5379-0edbbc","6860-f1f20--8421-c1e6a1"]
   */
  keys?: string[];
  /**
   * Задается статус вашего предложения:
   * - `0` — Добавить в черновик
   * - `1` — Опубликовать
   * @format int32
   * @default 0
   * @example 1
   */
  status?: 0 | 1;
  /**
   * Список контента
   * @example [{"category_id":4,"content":8942},{"category_id":4,"content":4211}]
   */
  content?: OfferCreateContent[];
  /** Метаданные предложения */
  meta?: OfferMetaRequest;
}

export interface OfferUpdateRequest {
  /**
   * Название предложения.</br>Максимальная длина — **100 символов.**
   * @maxLength 100
   * @example "Книга `Спортивное питание`"
   */
  title?: string;
  /**
   * Описание предложения. Это текст, который описывает ваше предложение и помогает людям понять, что именно представляет из себя продаваемый вами товар и чем он может быть полезен. Важно правильно назвать предложение и более подробно прописать его описание, чтобы пользователи узнали как можно больше информации еще до покупки.</br>Максимальная длина — **5000 символов.**
   * @maxLength 5000
   * @example "Очень хорошая книга о спортивном питании."
   */
  description?: string;
  /**
   * Цена предложения в рублях
   * @format int64
   * @example 849
   */
  price?: number;
  /**
   * Цена с учетом скидки в рублях
   * @format int64
   * @example 799
   */
  discount_price?: number | null;
  /**
   * Список URL-адресов дополнительных изображений, а так же видео превью.</br>
   * **Можно передать до 8 медиа-файлов.**</br>
   * **Важно, чтобы все изображения были в формате .jpg или .png, а видео в формате .mp4**
   * @maxItems 8
   * @example ["vol42/352/91b751bfb753ff365afbc8dca21b7f87/video.mp4","vol42/352/91b751bfb753ff365afbc8dca21b7f87/0_1280.jpg","vol42/352/91b751bfb753ff365afbc8dca21b7f87/1_1280.png"]
   */
  gallery?: string[] | null;
  /**
   * Возрастное ограничение. Это система, которая используется для определения, подходит ли ваше предложение для определенной возрастной группы.
   * @example "16+"
   */
  age_rating?: "0+" | "6+" | "12+" | "14+" | "16+" | "18+";
  /**
   * Массив тегов. Теги нужны для группирования, ранжирования и облегчения поиска вашего товара.
   *
   * **Ограничения**:
   * - Максимальное количество тегов — **5**
   * - Максимальная длина тега — **45 символов**
   * @maxItems 5
   * @minItems 1
   * @example ["life","work","gym"]
   */
  tags?: string[];
  /**
   * Статус вашего предложения:
   * - `0` — Добавить в черновик
   * - `1` — Опубликовать
   * - `2` — Приостановить продажу
   * - `3` — Удалить
   * @format int32
   * @example 1
   */
  status?: 0 | 1 | 2 | 3;
  /**
   * Массив идентификаторов подкатегорий, в котором находится предложение.</br>
   * Воспользуйтесь методом [Получить категории и их подкатегории](#operation/GetCatalog) для получения идентификатора и правильного сопоставления с категорией.
   * @example [10]
   */
  catalog_path?: number[];
  /** Метаданные предложения */
  meta?: OfferMetaRequest;
  /**
   * Идентификатор категории предложения:
   * - `1` — Видеоконтент
   * - `2` — Аудиоконтент
   * - `4` — Электронные книги
   * - `5` — Аудиокниги
   * - `6` — Цифровые товары
   * @format int32
   * @example 4
   */
  section?: 1 | 2 | 4 | 5 | 6;
}

export interface OfferPriceUpdateRequest {
  /**
   * Цена в рублях
   * @format int64
   * @example 5432
   */
  regular_price?: number;
  /**
   * Цена в рублях с учетом скидки
   * @format int64
   * @example 5000
   */
  discount_price?: number;
}

export interface KeysCountResponse {
  /**
   * Общее количество ключей
   * @format int64
   * @example 10
   */
  total: number;
  /**
   * Количество свободных ключей
   * @format int64
   * @example 5
   */
  available: number;
  /**
   * Количество зарезервированных ключей
   * @format int64
   * @example 2
   */
  reserved: number;
}

export interface OfferStatusUpdateRequest {
  /** @format int32 */
  status: 0 | 1 | 2 | 3;
}

/** Метаданные предложения */
export interface OfferMetaRequest {
  /**
   * Адреса где можно воспользоваться купонами, подарочными сертификатами
   * @maxLength 1000
   * @example "Москва, Нагатинская д. 1"
   */
  addresses?: string | null;
  /**
   * Инструкция по активации ключа
   * @maxLength 5000
   * @example "Инструкция по активации
   * 1. Зайдите на сайт ...
   * 2.Вставьте ключ в поле ..."
   */
  key_instruction?: string | null;
}

export interface OfferResponseList {
  /** Список предложений */
  items: OfferResponse[];
  /**
   * Общее количество записей, соответствующих заданным критериям выборки.
   *
   * Параметры:
   * - `take` (integer): Количество записей, которые необходимо вернуть в текущем ответе. Например, если `take` равно 10, то в ответе будет не более 10 записей.
   * - `skip` (integer): Количество записей, которые необходимо пропустить перед началом выборки. Например, если `skip` равно 20, то выборка начнется с 21-й записи.
   *
   * Поле `total` показывает полное количество записей, соответствующих условиям фильтрации, без учета параметров `take` и `skip`.
   */
  total: Total;
}

export interface KeyResponse {
  /**
   * Идентификатор ключа
   * @format int64
   * @example 42
   */
  id: number;
  /**
   * Значение ключа
   * @example "0181-c2a38--6379-69d8ae"
   */
  value: string;
  /**
   * Дата и время создания ключа
   * @example "2022-06-15T09:19:02Z"
   */
  created_at: string;
  /**
   * Дата и время покупки ключа
   * @example "2022-07-03T011:30:30Z"
   */
  buyed_at: string | null;
}

export interface OfferContent {
  /**
   * Идентификатор контента
   * @format int64
   * @example 542342523
   */
  content: number;
  /**
   * Название контента
   * @example "Книга 'Иван Тургенев: Отцы и дети'"
   */
  title?: string;
  /**
   * Описание контента
   * @example "Очень хорошая книга."
   */
  description?: string;
  /** Список с информацией о дополнительных файлах */
  files?: {
    /**
     * Тип контента
     * @example "application/fb2"
     */
    contentType?: string;
    /**
     * Размер файла
     * @format int64
     * @example 3665547
     */
    size?: number;
    /**
     * URI адрес на файл
     * @example "vol13/689/98235be67bdefcew2a33c5f0e55b17eb/output.fb2"
     */
    uri?: string;
  }[];
  /**
   * Хранит в себе метаданные контента:
   * - `bisac` —  ISBN (Международный стандартный книжный номер)
   * - `voice` — Актер озвучивающий аудиоконтент
   * - `author` — Автор контента
   * - `rating` — Возрастное ограничение
   * - `preview` — Короткий отрезок контента для предварительного просмотра
   * - `duration` — Продолжительность контента
   * - `thumbnail` — Список обложки для контента разного разрешения
   * - `dimensions` — Список разрешений видео
   * - `duration_ms` — Продолжительность контента в миллисекундах
   * - `translator` — Автор перевода
   * - `original_name` — Оригинальное название контента
   * - `pages` — Количество страниц в контенте
   * - `encoded_videos` — Список информации (размер, разрешение) для декодированного видео
   * - `encoded_audios` — Список информации (размер, битрейт) для декодированного аудио
   */
  meta?: string;
  /**
   * URI адрес на плейлист контента.
   *
   * Если контент является аудио или видео контентом, то файл декодируется в плейлист.
   * @example "vol14/147/f2671cfb67bd8c200b9464vd6f0dd97d/output.m3u8"
   */
  playlist?: string;
  /**
   * Идентификатор категории контента:
   * - `1` — Видеоконтент
   * - `2` — Аудиоконтент
   * - `4` — Документ
   * @format int64
   * @example 4
   */
  category_id?: 1 | 2 | 4;
}

export interface GetFullCatalogResponse {
  /** Дерево с категориям и их подкатегориями */
  items: CatalogNode[];
  /** @format int64 */
  total: number;
}

export interface CatalogNode {
  /**
   * Список дочерних узлов
   * @example [{"id":1,"img":"vol0/catalog/icons/1.svg","is_section":true,"name":"VIDEO","node_order":0,"parent_id":0,"section_id":1,"total":6482,"children":[{"id":65,"img":"","is_section":false,"name":"Обучающие видео","node_order":1,"parent_id":0,"section_id":1,"total":0,"children":[]},{"id":66,"img":"","is_section":false,"name":"Спорт","node_order":2,"parent_id":0,"section_id":1,"total":0,"children":[]},{"id":67,"img":"","is_section":false,"name":"Мастер-класс","node_order":3,"parent_id":0,"section_id":1,"total":0,"children":[]}]},{"id":2,"img":"vol0/catalog/icons/2.svg","is_section":true,"name":"AUDIO","node_order":0,"parent_id":0,"section_id":2,"total":1983,"children":[{"id":73,"img":"","is_section":false,"name":"Обучение","node_order":1,"section_id":2,"total":0,"children":[]},{"id":74,"img":"","is_section":false,"name":"Медитации","node_order":2,"parent_id":0,"section_id":2,"total":0,"children":[]},{"id":75,"img":"","is_section":false,"name":"Мастер-класс","node_order":3,"parent_id":0,"section_id":2,"total":0,"children":[]}]}]
   */
  children?: CatalogNode[];
  /**
   * URI адрес на иконку категории
   * @example ""
   */
  img: string;
  /**
   * Название узла
   * @example "Каталог"
   */
  name: string;
  /**
   * Указывает на id родителя подкатегории.
   * @format int64
   */
  parent_id: number;
  /**
   * Список `id` (идентификатор узла). Путь до элемента каталога.
   * @example null
   */
  path?: number[] | null;
  /**
   * Идентификатор узла.
   *
   * Если `is_section` = `true`, то `id` является идентификатором катагории(`section`).
   *
   * Если `is_section` = `false`, то `id` является идентификатором подкатеогрии(`is_path`).
   * @format int64
   */
  id: number;
  /**
   * Признак, является ли узел категорией(`section`)
   * @example false
   */
  is_section: boolean;
  /**
   * Порядок элементов подкатегорий, которые находятся на одном уровне
   * @format int64
   */
  node_order: number;
  /**
   * Идентификатор категории (`section`). Если `is_section` = `false`, то `section_id` указывает на родительскую категорию.
   * @format int64
   */
  section_id: number;
  /**
   * Общее количество предложений в этой категории. Поле заполняется только у категорий (`section`).
   * @format int64
   */
  total: number;
}

export interface Tag {
  /**
   * Идентификатор тега
   * @format int64
   * @example 1
   */
  id?: number;
  /**
   * Название тега
   * @example "бизнес"
   */
  value?: string;
  /**
   * Перевод названия тега
   * @example "biznes"
   */
  value_translit?: string;
  /**
   * Вес тега
   * @format float64
   * @example 100
   */
  weight?: number;
}

export interface OfferCreateContent {
  /**
   * Идентификатор категории контента:
   * - `1` — Видео
   * - `2` — Аудиоконтент
   * - `4` — Документ
   * @format int64
   * @example 1
   */
  category_id: number;
  /**
   * Идентификатор контента</br>
   * @format int64
   * @example 8942
   */
  content: number;
}

export interface KeysLoadRequest {
  /**
   * Список ключей.
   *
   * **Ограничения:**
   * - Максимальное количество ключей — **1000**
   * - Максимальная длина ключа — **200 символов**
   * @maxItems 1000
   * @example ["0181-c2a38--6379-69d8ae","4444-m2d2--5555-77f7ff","21fd-1234--3333-4444ff"]
   */
  keys: string[];
  /**
   * Идентификатор предложения
   * @format int64
   * @example 4251
   */
  offer_id: number;
}

export interface KeysResponseList {
  /**
   * Список ключей
   * @example [{"id":42,"value":"0181-c2a38--6379-69d8ae","created_at":"2022-06-15T09:19:02Z","buyed_at":"2022-07-03T011:30:30Z"},{"id":43,"value":"4444-m2d2--5555-77f7ff","created_at":"2022-06-15T12:19:02Z"}]
   */
  items: KeyResponse[];
  /**
   * Общее количество ключей
   * @format int64
   * @example 10
   */
  total: number;
}

export interface IllustrationResponse {
  /**
   * Список URI адресов обложки разного разрешения
   * @example ["vol4/id_48361197/fc99358aedea2a0cf68c8dcd7f2a3696/480.jpg","vol4/id_48361197/fc99358aedea2a0cf68c8dcd7f2a3696/1280.jpg","vol4/id_48361197/fc99358aedea2a0cf68c8dcd7f2a3696/1920.jpg"]
   */
  uris: string[];
  /**
   * Идентификатор пользователя
   * @format int64
   * @example 483611
   */
  userId: number;
}

export interface UploadInitRequest {
  /**
   * Название контента.</br>Максимальная длина — **100 символов.**
   * @maxLength 100
   * @example "Книга `Иван Тургенев: Отцы и дети'"
   */
  title: string;
  /**
   * Описание контента.</br>Максимальная длина — **1000 символов.**
   * @maxLength 1000
   * @example "Очень хорошая книга."
   */
  description: string;
  /**
   * Идентификатор категории контента:
   * - `1` — Видеоконтент
   * - `2` — Аудиоконтент
   * - `4` — Документ
   * @example 4
   */
  catalog_id: 1 | 2 | 4;
  /**
   * Тип файла:
   * - Видеоконтент:
   *     - `video/mp4`
   * - Аудиоконтент:
   *     - `audio/mpeg`
   * - Документ:
   *     - `application/pdf`
   *     - `application/epub+zip`
   *     - `text/plain`
   * @example "application/epub+zip"
   */
  content_type: "video/mp4" | "audio/mpeg" | "text/plain" | "application/pdf" | "application/epub+zip";
  /**
   * Для оптимальной скорости загрузки контента следует разбить файл на фреймы по 2 Мб. В массиве указываются индекс каждого фрейма и его размер.</br>
   * @example [{"index":1,"size":2097152},{"index":2,"size":2097152},{"index":3,"size":1048576}]
   */
  parts: ChunkPart[];
  /** Метаданные. Дополнительная информация о контенте. */
  meta: ContentMeta;
}

export interface UploadInitResponse {
  /**
   * Идентификатор контента
   * @format int64
   * @example 493292
   */
  content_id?: number;
  /**
   * Уникальный идентификатор. Это идентификатор необходим для загрузки самого файла в методе [Загрузка контента (файла)](#operation/contentUploadChunk)
   * @example "25f5e4c9-2cac-11ef-adbf-9cc2c45608a"
   */
  uuid?: string;
}

export interface UploadChunkResponse {
  /**
   * Количество переданных фреймов (частей контента)
   * @example 3
   */
  chunk?: number;
  /**
   * URI адреса загруженного файла
   * @example "vol19/924/e9e5d152ea3d9018bd061c62f75efbdf/content"
   */
  uri?: string;
}

/** Метаданные. Дополнительная информация о контенте. */
export interface ContentMeta {
  /**
   * URI адреса обложки контента
   * @example ["vol4/id_48361197/fc99358aedea2a0cf68c8dcd7f2a3696/480.jpg","vol4/id_48361197/fc99358aedea2a0cf68c8dcd7f2a3696/1280.jpg","vol4/id_48361197/fc99358aedea2a0cf68c8dcd7f2a3696/1920.jpg"]
   */
  thumbnail: string[];
  /**
   * Имя исходного файла
   * @maxLength 100
   * @example "Иван_Тургенев:_Отцы_и_дети.epub"
   */
  source_file_name?: string;
  /**
   * Возрастное ограничение
   * @example "16+"
   */
  rating?: "0+" | "6+" | "12+" | "14+" | "16+" | "18+";
  /**
   * Оригинальное название контента
   * @maxLength 100
   * @example "Иван_Тургенев:_Отцы_и_дети"
   */
  original_name?: string;
  /**
   * Актер озвучивающий аудиоконтент
   * @maxLength 100
   * @example "Кузнецов В.Б."
   */
  voice?: string;
  /**
   * [ISBN](https://en.wikipedia.org/wiki/ISBN) (Международный стандартный книжный номер)
   * - Каждый ISBN уникален
   * - Состоит из 13 символов, начиная с префикса "978" или "979"
   * @example "978-5-389-04996-3"
   */
  bisac?: string;
  /**
   * Количество страниц в книге (файле)
   * @format int32
   * @example 354
   */
  pages?: number;
  /**
   * Автор контента
   * @maxLength 100
   * @example "Иван Тургенев"
   */
  author?: string;
  /**
   * Автор перевода, также известный как переводчик, это человек, который занимается переводом текста из одного языка на другой.
   * @maxLength 100
   * @example "Hare Richard"
   */
  translator?: string;
  /**
   * Продолжительность контента
   * @example "00:05:11"
   */
  duration?: string;
}

export interface ProblemDetails400 {
  /**
   * Дубликат HTTP статус код
   * @format int32
   * @example 400
   */
  status?: number;
  /**
   * Короткое описание ошибки
   * @example "bad request"
   */
  title: string;
  /**
   * Развернутое описание ошибки
   * @example "value 'five' is invalid for parameter offer_id"
   */
  detail?: string;
  /** Служебная информация ошибки */
  code?: string;
  /**
   * Массив ошибок.
   *
   * Для передачи нескольких ошибок.
   */
  errors?: ProblemDetails400[];
  /**
   * Идентификатор запроса.
   *
   * Дубликат заголовка `X-Request-Id`.
   * @example "b709d59bd0791513350332ffe5f813c1"
   */
  requestId: string;
  /**
   * Имя сервиса
   * @example "gateway-dev"
   */
  origin?: string;
}

export interface ProblemDetails401 {
  /**
   * Дубликат HTTP статус код
   * @format int32
   * @example 401
   */
  status?: number;
  /**
   * Короткое описание ошибки
   * @example "unauthorized"
   */
  title: string;
  /**
   * Развернутое описание ошибки
   * @example "authorization required"
   */
  detail?: string;
  /** Служебная информация ошибки */
  code?: string;
  /**
   * Идентификатор запроса.
   *
   * Дубликат заголовка `X-Request-Id`.
   * @example "b709d59bd0791513350332ffe5f813c1"
   */
  requestId: string;
  /**
   * Имя сервиса
   * @example "gateway-dev"
   */
  origin?: string;
}

export interface ProblemDetails403 {
  /**
   * Дубликат HTTP статус код
   * @format int32
   * @example 403
   */
  status?: number;
  /**
   * Короткое описание ошибки
   * @example "forbidden"
   */
  title: string;
  /** Служебная информация ошибки */
  code?: string;
  /**
   * Идентификатор запроса.
   *
   * Дубликат заголовка `X-Request-Id`.
   * @example "b709d59bd0791513350332ffe5f813c1"
   */
  requestId: string;
  /**
   * Имя сервиса
   * @example "gateway-dev"
   */
  origin?: string;
}

export interface ProblemDetails404 {
  /**
   * Дубликат HTTP статус код
   * @format int32
   * @example 404
   */
  status?: number;
  /**
   * Короткое описание ошибки
   * @example "not found"
   */
  title: string;
  /**
   * Развернутое описание ошибки
   * @example "content with id 789 not found"
   */
  detail?: string;
  /** Служебная информация ошибки */
  code?: string;
  /**
   * Идентификатор запроса.
   *
   * Дубликат заголовка `X-Request-Id`.
   * @example "b709d59bd0791513350332ffe5f813c1"
   */
  requestId: string;
  /**
   * Имя сервиса
   * @example "gateway-dev"
   */
  origin?: string;
}

export interface ProblemDetails500 {
  /**
   * Дубликат HTTP статус код
   * @format int32
   * @example 500
   */
  status?: number;
  /**
   * Короткое описание ошибки
   * @example "internal server error"
   */
  title: string;
  /** Служебная информация ошибки */
  code?: string;
  /**
   * Массив ошибок.
   *
   * Для передачи нескольких ошибок.
   */
  errors?: ProblemDetails500[];
  /**
   * Идентификатор запроса.
   *
   * Дубликат заголовка `X-Request-Id`.
   * @example "b709d59bd0791513350332ffe5f813c1"
   */
  requestId: string;
  /**
   * Имя сервиса
   * @example "gateway-dev"
   */
  origin?: string;
}

export interface ProblemDetails502 {
  /**
   * Дубликат HTTP статус код
   * @format int32
   * @example 502
   */
  status?: number;
  /**
   * Короткое описание ошибки
   * @example "bad gateway"
   */
  title: string;
  /** Служебная информация ошибки */
  code?: string;
  /**
   * Массив ошибок.
   *
   * Для передачи нескольких ошибок.
   */
  errors?: ProblemDetails502[];
  /**
   * Идентификатор запроса.
   *
   * Дубликат заголовка `X-Request-Id`.
   * @example "b709d59bd0791513350332ffe5f813c1"
   */
  requestId: string;
  /**
   * Имя сервиса
   * @example "gateway-dev"
   */
  origin?: string;
}

export interface KeyRedeemedResponse {
  /**
   * Идентификатор ключа
   * @format int64
   * @example 54321
   */
  id: number;
  /**
   * Ключ
   * @example "0181-c2a38--6379-69d8ae"
   */
  value: string;
  /**
   * Дата создания ключа
   * @example "2024-05-10T09:25:50Z"
   */
  created_at: string;
  /**
   * Дата покупки ключа
   * @example "2024-05-13T11:08:46Z"
   */
  buyed_at: string;
  /**
   * Идентификатор предложения
   * @format int64
   * @example 42124
   */
  offer_id: number;
  /**
   * Название предложения
   * @example "Игра Red Dead Redemption (Steam)"
   */
  offer_title: string;
  /**
   * Цена предложения
   * @format int64
   * @example 2490
   */
  offer_price: number;
}

export interface UpdateContentRequest {
  /**
   * Название контента.</br>Максимальная длина — **100 символов.**
   * @maxLength 100
   * @example "Книга 'Иван Тургенев: Отцы и дети'"
   */
  title?: string | null;
  /**
   * Описание контента.</br>Максимальная длина — **1000 символов.**
   * @maxLength 1000
   * @example "Очень хорошая книга."
   */
  description?: string | null;
}

export interface ChunkPart {
  /**
   * Индекс фрейма (фрагмента)
   * @format int64
   */
  index: number;
  /**
   * Размер фрейма (фрагмента) в байтах
   * @format int64
   */
  size: number;
}

export interface Content {
  /**
   * Идентификатор контента
   * @format int64
   * @example 5321
   */
  id: number;
  /**
   * Идентификатор автора
   * @format int64
   * @example 93224
   */
  author_id: number;
  /**
   * Название контента
   * @example "Книга 'Иван Тургенев: Отцы и дети'"
   */
  title: string;
  /**
   * Описание контента
   * @example "Очень хорошая книга."
   */
  description: string;
  /**
   * Тип файла:
   * - Видеоконтент:
   *     - `video/mp4`
   * - Аудиоконтент:
   *     - `audio/mpeg`
   * - Документ:
   *     - `application/pdf`
   *     - `application/epub+zip`
   *     - `text/plain`
   *
   * @example "application/epub+zip"
   */
  content_type: "video/mp4" | "audio/mpeg" | "text/plain" | "application/pdf" | "application/epub+zip";
  /**
   * URI адрес контента
   * @example "vol19/924/e9e55159ea3d9018bd061c62f75efbdf/content"
   */
  uri: string;
  /** Список с информацией о дополнительных файлах */
  files: {
    /**
     * Тип контента
     * @example "application/fb2"
     */
    contentType?: string;
    /**
     * Размер файла
     * @format int64
     * @example 3665547
     */
    size?: number;
    /**
     * URI адрес на файл
     * @example "vol13/689/98235be67bdefcew2a33c5f0e55b17eb/output.fb2"
     */
    uri?: string;
  }[];
  /**
   * URI адрес на плейлист контента.
   *
   * Если контент является аудио или видео контентом, то файл декодируется в плейлист.
   * @example "vol14/147/f2671cfb67bd8c200b9464vd6f0dd97d/output.m3u8"
   */
  playlist: string;
  /**
   * Хранит в себе метаданные контента:
   * - `bisac` —  ISBN (Международный стандартный книжный номер)
   * - `voice` — Актер озвучивающий аудиоконтент
   * - `author` — Автор контента
   * - `rating` — Возрастное ограничение
   * - `preview` — Короткий отрезок контента для предварительного просмотра
   * - `duration` — Продолжительность контента
   * - `thumbnail` — Список обложки для контента разного разрешения
   * - `dimensions` — Список разрешений видео
   * - `duration_ms` — Продолжительность контента в миллисекундах
   * - `translator` — Автор перевода
   * - `original_name` — Оригинальное название контента
   * - `pages` — Количество страниц в контенте
   * - `encoded_videos` — Список информации (размер, разрешение) для декодированного видео
   * - `encoded_audios` — Список информации (размер, битрейт) для декодированного аудио
   */
  meta?: any;
  /**
   * Идентификатор категории контента:
   * - `1` — Видеоконтент
   * - `2` — Аудиоконтент
   * - `4` — Документ
   * @format int64
   * @example 4
   */
  category_id: 1 | 2 | 4;
  /**
   * Статус контента:
   * - `0` — Создан
   * - `1` — Загружено на сервер
   * - `2` — Опубликован
   * - `3` — Ошибка в обработке или публикации
   * - `4` — Обрабатывается
   * - `5` — Отправлено на сервер
   * @format int32
   * @example 2
   */
  status: number;
  /**
   * Дата создания, UTC +3 (Москва)
   * @example "2024-06-10T07:29:30Z"
   */
  created: string;
  /**
   * Дата обновления, UTC +3 (Москва)
   * @example "2024-06-17T22:12:13Z"
   */
  updated: string;
}

export interface ContentList {
  /** Список контента */
  items: Content[];
  /**
   * Общее количество записей, соответствующих заданным критериям выборки.
   *
   * Параметры:
   * - `take` (integer): Количество записей, которые необходимо вернуть в текущем ответе. Например, если `take` равно 10, то в ответе будет не более 10 записей.
   * - `skip` (integer): Количество записей, которые необходимо пропустить перед началом выборки. Например, если `skip` равно 20, то выборка начнется с 21-й записи.
   *
   * Поле `total` показывает полное количество записей, соответствующих условиям фильтрации, без учета параметров `take` и `skip`.
   */
  total: Total;
}

export interface UploadGalleryResponse {
  /**
   * Список URI адресов на медиафайлы
   * @example ["vol42/352/91b751bfb753ff365afbc8dca21b7f87/video.mp4","vol42/352/91b751bfb753ff365afbc8dca21b7f87/0_1280.jpg","vol42/352/91b751bfb753ff365afbc8dca21b7f87/1_1280.png"]
   */
  uris?: string[];
}

export interface KeysRedeemedResponseList {
  /** Список проданных ключей */
  items: KeyRedeemedResponse[];
  /**
   * Общее количество записей, соответствующих заданным критериям выборки.
   *
   * Параметры:
   * - `take` (integer): Количество записей, которые необходимо вернуть в текущем ответе. Например, если `take` равно 10, то в ответе будет не более 10 записей.
   * - `skip` (integer): Количество записей, которые необходимо пропустить перед началом выборки. Например, если `skip` равно 20, то выборка начнется с 21-й записи.
   *
   * Поле `total` показывает полное количество записей, соответствующих условиям фильтрации, без учета параметров `take` и `skip`.
   */
  total: Total;
}

/**
 * Общее количество записей, соответствующих заданным критериям выборки.
 *
 * Параметры:
 * - `take` (integer): Количество записей, которые необходимо вернуть в текущем ответе. Например, если `take` равно 10, то в ответе будет не более 10 записей.
 * - `skip` (integer): Количество записей, которые необходимо пропустить перед началом выборки. Например, если `skip` равно 20, то выборка начнется с 21-й записи.
 *
 * Поле `total` показывает полное количество записей, соответствующих условиям фильтрации, без учета параметров `take` и `skip`.
 * @format int64
 * @example 10
 */
export type Total = number;
