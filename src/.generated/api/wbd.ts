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
  public baseUrl: string = "https://devapi-digital.wildberries.ru";
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
 * @title Wildberries Цифровой
 * @baseUrl https://devapi-digital.wildberries.ru
 *
 * По вопросам работы с WBD API, обращайтесь в <a href="https://digital.wb.ru/support" target="_blank">техническую поддержку</a>.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Максимум 50 запросов в секунду Метод позволяет добавить ключи для предложения по идентификатору. <div class="description_important"> Предложение должно быть из категории (<code>section</code>): <ul> <li>Ключи активации — <code>3</code></li> <li>Купоны и развлечения — <code>12</code></li> <li>Подарочные сертификаты — <code>13</code></li> </ul> </div>
     *
     * @tags Ключи активации
     * @name LoadKeys
     * @summary Добавить ключи активации
     * @request POST:/api/v1/keys-api/keys
     * @secure
     */
    loadKeys: (data: KeysLoadRequest, params: RequestParams = {}) =>
      this.request<void, ProblemDetails401 | ProblemDetails403 | ProblemDetails404 | ProblemDetails500>({
        path: `/api/v1/keys-api/keys`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить список купленных ключей с использованием фильтрации. ### Описание параметров фильтрации: - `offer_id` — Фильтрация по идентификатору предложения. Позволяет выбрать ключи, связанные с определенным предложением. - `skip` — Смещение. Указывает, сколько записей нужно пропустить в результирующем наборе.<br/> **Например**, если `skip` равно 20, то выборка начнется с 21-й записи. - `take` — Количество записей для получения. Указывает, сколько ключей должно быть возвращено в ответе.<br/> **Например**, если `take` равно 10, то в ответе будет не более 10 записей. - `date_from` — Фильтрация по дате покупки начиная с указанной даты (включительно).<br/> Формат даты: **RFC3339**. - `date_to` — Фильтрация по дате покупки до указанной даты (не включительно).<br/> Формат даты: **RFC3339**.
     *
     * @tags Ключи активации
     * @name GetRedeemedKeys
     * @summary Получить купленные ключи
     * @request GET:/api/v1/keys-api/keys/redeemed
     * @secure
     */
    getRedeemedKeys: (
      query?: {
        /**
         * Фильтрация по идентификатору предложения. Позволяет выбрать ключи, связанные с определенным предложением.
         * @format int64
         */
        offer_id?: number;
        /**
         * Смещение. Указывает, сколько записей нужно пропустить в результирующем наборе. Используется для реализации пагинации.
         * @format int64
         * @default 0
         */
        skip?: number;
        /**
         * Количество записей для получения. Указывает, сколько ключей должно быть возвращено в ответе.
         * @format int64
         * @default 50
         */
        take?: number;
        /**
         * Фильтрация по дате покупки начиная с указанной даты (включительно).
         *
         * Формат даты: **RFC3339** (`2023-06-17T19:20:30Z`).
         */
        date_from?: string;
        /**
         * Фильтрация по дате покупки до указанной даты (не включительно).
         *
         * Формат даты: **RFC3339** (`2024-10-18T19:20:30Z`).
         */
        date_to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<KeysRedeemedResponseList, ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/keys-api/keys/redeemed`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить информацию о количестве ключей у конкретного предложения.
     *
     * @tags Ключи активации
     * @name OfferKeysCountGet
     * @summary Получить количество ключей для предложения
     * @request GET:/api/v1/offer/keys/{offer_id}
     * @secure
     */
    offerKeysCountGet: (offerId: number, params: RequestParams = {}) =>
      this.request<KeysCountResponse, ProblemDetails401 | ProblemDetails404 | ProblemDetails500>({
        path: `/api/v1/offer/keys/${offerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить список загруженных вами ключей для конкретного предложения. <div class="description_important"> Доступ к методу предоставляется через заявку в <a href="https://digital.wb.ru/support" target="_black">техническую поддержку</a>. </div>
     *
     * @tags Ключи активации
     * @name OfferKeysGet
     * @summary Получить список ключей
     * @request GET:/api/v1/offer/keys/{offer_id}/list
     * @secure
     */
    offerKeysGet: (offerId: number, params: RequestParams = {}) =>
      this.request<
        KeysResponseList,
        ProblemDetails400 | ProblemDetails401 | ProblemDetails403 | ProblemDetails404 | ProblemDetails500
      >({
        path: `/api/v1/offer/keys/${offerId}/list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 50 запросов в секунду Метод позволяет создать новое предложение.</br> #### Обязательные поля: - `title` — Название предложения - `description` — Описание предложения - `tags` — Теги предложения - `section` — Категория предложения - `catalog_path` — Подкатегория предложения. - `age_rating` — Возрастное ограничение предложения - `price` — Цена предложения #### Добавить обложку Обложка для предложения загружается **отдельно после создания предложения**.</br> Вам необходимо воспользоваться методом [Добавить или обновить обложку предложения](#operation/offersUploadThumbnail). #### Добавить дополнительные медиа-файлы 1. Загрузить медиафайлы с помощью метода [Загрузить медиа-файл для предложения](#operation/contentGallery), метод возвращает список URI адресов загруженных медиа-файлов 2. Добавить URI медиа-файлов в поле `gallery` #### Категория и подкатеогрия предложения Воспользуйтесь методом [Получить категории и их подкатегории](#operation/GetCatalog) для получения идентификатора подкатегории и правильного сопоставления с категорией. ### Предложение из категории "Услуги" `section` — `8` Доступ к публикации контента этой категории предоставляется через заявку в <a href="https://digital.wb.ru/support" target="_blank">техническую поддержку</a>. ### Предложение c уникальными ключами Предложение c уникальными ключами относятся к категориям (`section`): - **Ключи активации** — `3` - **Купоны и развлечения** — `12` - **Подарочные сертификаты** — `13` Обязательные данные: - Ключи к предложению - Инструкция по активации ключа #### Загрузка ключей Список ключей передается в поле `keys` вашего запроса при создании предложения.</br> В дальнейшем вы можете добавлять ключи с помощью метода [Добавить ключи активации](#operation/LoadKeys). #### Добавление инструкции по активации ключа Инструкцию по активации ключа необходимо добавить в поле `meta` в формате **JSON** используя следующий пример.</br> Чтобы сделать текст более привлекательным и удобочитаемым, **используйте перенос строки** `\n`. **Пример:**</br> ```json { "meta":{ "key_instruction": "Инструкция по активации\n1. Зайдите на сайт ...\n2.Вставьте ключ в поле ..." } } ``` ### Предложение с контентом Предложение с контентом относится к категориям (`section`): - **Видеоконтент** — `1` - **Аудиоконтент** — `2` - **Электронные книги** — `4` - **Аудиокниги** — `5` - **Цифровые товары** — `6` Обязательные данные: - Контент для предложения #### Добавление контента Если вы ещё не добавили контент в личный кабинет продавца, то вы можете это сделать по [инструкции](./#tag/Kontent/Kak-dobavit-novyj-kontent:). Для добавления контента вам необходимо передать в поле `content` список данных используя пример ниже.</br> **Пример:**</br> ```json "content": [ { "category_id": 1, "content": 8942 }, { "category_id": 1, "content": 4211 } ] ``` где: - `category_id` — идентификатор категории контента - `content` — идентификатор контента Эту информацию вы можете получить с помощью метод [Получить список своего контента](#operation/contentAuthorGet).
     *
     * @tags Предложения
     * @name OfferCreate
     * @summary Создать новое предложение
     * @request POST:/api/v1/offers
     * @secure
     */
    offerCreate: (data: OfferCreateRequest, params: RequestParams = {}) =>
      this.request<OfferResponse, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/offers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 10 запросов в секунду Метод позволяет добавить или обновить обложку предложения.</br> Для добавления более привлекательной карточки предложения, мы рекомендуем:</br> 1. Добавлять изображения с соотношением сторон 1:1</br> 2. Минимальный размер изображения 1200х1200 пикселей</br> 3. Фон контрастный белому</br> <div class="description_important"> Максимальный размер файла: 5 Мб.</br> Допустимые форматы: .png, .jpeg </div>
     *
     * @tags Предложения
     * @name OffersUploadThumbnail
     * @summary Добавить или обновить обложку предложения
     * @request POST:/api/v1/offers/thumb
     * @secure
     */
    offersUploadThumbnail: (data: File, params: RequestParams = {}) =>
      this.request<void, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/offers/thumb`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Максимум 50 запросов в секунду Метод позволяет редактировать информацию о предложении. #### Категория и подкатегория предложения Воспользуйтесь методом [Получить категории и их подкатегории](#operation/GetCatalog) для получения идентификатора подкатегории и правильного сопоставления с категорией.
     *
     * @tags Предложения
     * @name OfferUpdate
     * @summary Редактировать предложение
     * @request POST:/api/v1/offers/{offer_id}
     * @secure
     */
    offerUpdate: (offerId: number, data: OfferUpdateRequest, params: RequestParams = {}) =>
      this.request<
        void,
        ProblemDetails400 | ProblemDetails401 | ProblemDetails403 | ProblemDetails404 | ProblemDetails500
      >({
        path: `/api/v1/offers/${offerId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить информацию о конкретном предложении.
     *
     * @tags Предложения
     * @name OfferGet
     * @summary Получить информацию о предложении
     * @request GET:/api/v1/offers/{offer_id}
     * @secure
     */
    offerGet: (offerId: number, params: RequestParams = {}) =>
      this.request<OfferResponse, ProblemDetails400 | ProblemDetails401 | ProblemDetails404 | ProblemDetails500>({
        path: `/api/v1/offers/${offerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить список своих предложений с использованием фильтрации. ### Описание параметров фильтрации: - `search` — Поиск предложений по названию. Укажите часть или полное название предложения для поиска. - `category` — Фильтрация предложений по категории контента. Список категорий находится в [таблице](./#tag/Kontent/Kategorii-kontenta). - `status` — Фильтрация предложений по статусу. Возможные значения: - `0` — Черновик - `1` — Опубликован - `2` — Приостановлен - `sort` — Сортировка предложений по дате создания или обновления. Укажите `created` для сортировки по дате создания и `updated` для сортировки по дате обновления. - `sort_dir` — Направление сортировки. Укажите `asc` для сортировки по возрастанию или `desc` для сортировки по убыванию. - `skip` — Смещение. Позволяет **пропустить** определенное количество предложений в результирующем наборе.</br> **Например**, если `skip` равно 20, то выборка начнется с 21-й записи. - `take` — Количество предложений, которое нужно вернуть в ответе.</br> **Например**, если `take` равно 10, то в ответе будет не более 10 записей.
     *
     * @tags Предложения
     * @name OffersAuthorGet
     * @summary Получить список своих предложений
     * @request GET:/api/v1/offers/author
     * @secure
     */
    offersAuthorGet: (
      query?: {
        /** Поиск по названию предложения */
        search?: string;
        /**
         * Фильтрация по категории контента:
         * - `1` — Видеоконтент
         * - `2` — Аудиоконтент
         * - `4` — Документ
         * @format int64
         */
        category?: 1 | 2 | 4;
        /**
         * Фильтрация по статусу:
         * - `0` — Черновик
         * - `1` — Опубликован
         * - `2` — Приостановлен
         * @format int32
         */
        status?: 0 | 1 | 2;
        /** Сортировка предложений по дате создания или обновления */
        sort?: "created" | "updated";
        /**
         * Направление сортировки:
         * - `asc` — по возрастанию
         * - `desc` — по убыванию
         */
        sort_dir?: "asc" | "desc";
        /**
         * Смещение. Количество предложений, которые нужно пропустить в результирующем наборе.
         * @format int64
         * @default 0
         */
        skip?: number;
        /**
         * Количество предложений для получения
         * @format int64
         * @default 50
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<OfferResponseList, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/offers/author`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 50 запросов в секунду Метод позволяет изменить цену предложения и цену с учетом скидок. Если вы не хотите выставлять скидку, то в запросе необходимо **не передавать** параметр `discount_price` или выставить у него значение `0`.
     *
     * @tags Предложения
     * @name OfferUpdatePrice
     * @summary Обновить цену
     * @request POST:/api/v1/offer/price/{offer_id}
     * @secure
     */
    offerUpdatePrice: (offerId: number, data: OfferPriceUpdateRequest, params: RequestParams = {}) =>
      this.request<void, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/offer/price/${offerId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Максимум 50 запросов в секунду Метод позволяет обновить статус вашего предложения. Статус может быть: - `0` — Черновик - `1` — Опубликован - `2` — Приостановлен - `3` — Удалён
     *
     * @tags Предложения
     * @name OfferUpdateStatus
     * @summary Обновить статус
     * @request POST:/api/v1/offer/{offer_id}
     * @secure
     */
    offerUpdateStatus: (offerId: number, data: OfferStatusUpdateRequest, params: RequestParams = {}) =>
      this.request<void, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/offer/${offerId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить дерево(структура данных) с категориям и их подкатегориями.</br> ### Иерархия структуры данных #### В нашей структуре есть три уровня иерархии: 1. **Корневой узел** — сущность **Каталог** 2. **Внешние узлы** представляют собой категории (`section`): - `1` — Видеоконтент - `2` — Аудиоконтент - `3` — Ключи активации - `4` — Электронные книги - `5` — Аудиокниги - `6` — Цифровые товары - `8` — Услуги - `12` — Купоны и развлечения - `13` — Подарочные сертификаты 3. **Листья дерева** являются подкатегориями (`catalog_path`): - `65` — Обучающие видео - `66` — Спорт - `67` — Мастер-класс - `68` — Йога - `69` — Медитации
     *
     * @tags Предложения
     * @name GetCatalog
     * @summary Получить категории и их подкатегории
     * @request GET:/api/v1/catalog
     * @secure
     */
    getCatalog: (params: RequestParams = {}) =>
      this.request<GetFullCatalogResponse, ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/catalog`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 10 запросов в секунду Метод позволяет загрузить обложку контента. <div class="description_important"> Максимальный размер файла: 5 Мб.</br> Допустимые форматы: .png, .jpeg</br> Рекомендации: <ul> <li>Соотношение сторон 1:1</li> </ul> </div> ### Краткая инструкция по применению: 1. Убедитесь, что ваш файл соответствует указанным ограничениям и рекомендациям. 2. Вызовите этот метод. 3. При загрузке обложки вы получите список URI адресов для нового контента. 4. Воспользуйтесь методом [Инициализировать новый контент](#operation/contentUploadInit) и передайте список URI адресов в поле `meta` в формате **JSON** используя следующий пример. **Пример:**</br> ```json { "meta": { "thumbnail": [ "vol6/529/013cfs7f229183179aj53d2b3bbb839a/480.jpg", "vol6/529/013cfs7f229183179aj53d2b3bbb839a/1280.jpg", "vol6/529/013cfs7f229183179aj53d2b3bbb839a/1920.jpg" ] } } ```
     *
     * @tags Контент
     * @name ContentUploadIllustration
     * @summary Загрузить обложку контента
     * @request POST:/api/v1/content/illustration
     * @secure
     */
    contentUploadIllustration: (data: File, params: RequestParams = {}) =>
      this.request<IllustrationResponse, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/content/illustration`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 10 запросов в секунду Метод позволяет инициализировать (загрузить) информацию нового контента. Типы контента и требования к ним вы можете посмотреть в оглавлении [Работа с контентом](#tag/Kontent). ### Подготовка файла к последующей загрузки: - Вам необходимо разбить файл на части (фреймы) не более 2 Мб. - Передать размер (в байтах) каждой части и порядковый номер в поле `parts` **Пример:**</br> Файл размером 5 Мб, нужно разбить на 3 части — 2 Мб, 2 Мб и 1 Мб. ```json { "parts": [ { "index": 1, "size": 2097152 }, { "index": 2, "size": 2097152 }, { "index": 3, "size": 1048576 } ], } ``` В методе [Загрузить контент (файл)](#operation/contentUploadChunk) вам нужно будет загрузить 3 части файла с указанием их порядкового номера через `X-Wbd-Part-Index`. ### Обязательные поля в метаданных (`meta`) для загрузки контента: Общие поля: - `thumbnail` - `rating` Аудиоконтент: - `author` Документ: - `author` - `pages` ### Краткая инструкция по применению: 1. Подготовьте метаданные и информацию о вашем контенте. 2. Убедитесь, что ваш контент соответствует [требованиям](./#tag/Kontent/Trebovaniya-k-kontentu) (формат и размер файла). 3. Вызовите этот метод для инициализации нового контента. 4. В ответе вы получите `uuid` контента, необходимый для последующей загрузки самого файла. 5. Используйте метод [Загрузить файл контента](#operation/contentUploadChunk), чтобы загрузить файл.
     *
     * @tags Контент
     * @name ContentUploadInit
     * @summary Инициализировать новый контент
     * @request POST:/api/v1/content/upload/init
     * @secure
     */
    contentUploadInit: (data: UploadInitRequest, params: RequestParams = {}) =>
      this.request<UploadInitResponse, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/content/upload/init`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 10 запросов в секунду Метод позволяет загрузить контент (файл) по частям. ### Краткая инструкция по применению: 1. Разбейте файл на части размером не более 2 Мб. 2. Для каждой части файла: - Убедитесь, что заголовок `X-Content-Type` соответствует типу вашего контента (например, `video/mp4`, `audio/mpeg`, `application/pdf` и т.д.). - Установите заголовок `X-Wbd-Part-Index` в соответствии с индексом текущей части (начиная с 1). - Укажите `uuid` контента в заголовке `X-Wbd-Content-Uuid`, который вы получили при [инициализации нового контента](#operation/contentUploadInit). - Отправьте байты (часть файла) в теле запроса. 3. Повторяйте шаг 2 для всех частей файла до завершения загрузки.
     *
     * @tags Контент
     * @name ContentUploadChunk
     * @summary Загрузить контент (файл)
     * @request POST:/api/v1/content/upload/chunk
     * @secure
     */
    contentUploadChunk: (data: File, params: RequestParams = {}) =>
      this.request<UploadChunkResponse, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/content/upload/chunk`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 50 запросов в секунду Метод позволяет редактировать информацию о контенте.
     *
     * @tags Контент
     * @name ContentUpdate
     * @summary Редактировать контент
     * @request POST:/api/v1/content/author/{content_id}
     * @secure
     */
    contentUpdate: (contentId: number, data: UpdateContentRequest, params: RequestParams = {}) =>
      this.request<Content, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/content/author/${contentId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить информацию о конкретном контенте.
     *
     * @tags Контент
     * @name ContentIdGet
     * @summary Получить информацию о контенте
     * @request GET:/api/v1/content/author/{content_id}
     * @secure
     */
    contentIdGet: (contentId: number, params: RequestParams = {}) =>
      this.request<Content, ProblemDetails400 | ProblemDetails401 | ProblemDetails404 | ProblemDetails500>({
        path: `/api/v1/content/author/${contentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 100 запросов в секунду Метод позволяет получить список своего контента с использованием фильтрации. **Описание параметров фильтрации:** - `search` — Поиск контента по названию. Укажите часть или полное название контента для поиска. - `category` — Фильтрация контента по категории. Список категорий находится в [таблице](./#tag/Kontent/Kategorii-kontenta), колонка — "`catalog_id` — Идентифицировать категории". - `status` — Фильтрация контента по статусу. Возможные значения: - `0` — Создан - `1` — Загружено на сервер - `2` — Опубликован - `3` — Ошибка в обработке или публикации - `4` — Обрабатывается - `5` — Отправлено на сервер - `sort` — Сортировка контента по дате создания или обновления. Укажите `created` для сортировки по дате создания и `updated` для сортировки по дате обновления. - `sort_dir` — Направление сортировки. Укажите `asc` для сортировки по возрастанию или `desc` для сортировки по убыванию. - `skip` — Смещение. Позволяет **пропустить** определенное количество контента в результирующем наборе.</br> **Например**, если `skip` равно 20, то выборка начнется с 21-й записи. - `take` — Количество контента, которое нужно вернуть в ответе.</br> **Например**, если `take` равно 10, то в ответе будет не более 10 записей.
     *
     * @tags Контент
     * @name ContentAuthorGet
     * @summary Получить список своего контента
     * @request GET:/api/v1/content/author
     * @secure
     */
    contentAuthorGet: (
      query?: {
        /** Поиск по названию контента */
        search?: string;
        /**
         * Фильтрация по категории:
         * - `1` — Видеоконтент
         * - `2` — Аудиоконтент
         * - `4` — Документ
         * @format int64
         */
        category?: 1 | 2 | 4;
        /**
         * Фильтрация по статусу:
         * - `0` — Создан
         * - `1` — Загружено на сервер
         * - `2` — Опубликован
         * - `3` — Ошибка в обработке или публикации
         * - `4` — Обрабатывается
         * - `5` — Отправлено на сервер
         * @format int32
         */
        status?: 0 | 1 | 2 | 3 | 4 | 5;
        /** Сортировка контента по дате создания или обновления */
        sort?: "created" | "updated";
        /**
         * Направление сортировки:
         * - `asc` — по возрастанию
         * - `desc` — по убыванию
         */
        sort_dir?: "asc" | "desc";
        /**
         * Смещение. Количество предложений, которые нужно пропустить в результирующем наборе.
         * @format int64
         * @default 0
         */
        skip?: number;
        /**
         * Количество контента для получения
         * @format int64
         * @default 50
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContentList, ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/content/author`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Максимум 10 запросов в секунду Метод позволяет скачать контент по URI.</br> ### Получение URI-адреса контента: 1. Воспользуйтесь одним из методов для получения информации о контенте.</br> - [Получить информацию о контенте](#operation/contentIdGet)</br> - [Получить список своего контента](#operation/contentAuthorGet)</br> 2. В информации о контенте возьмите URI-адрес из поля `uri` или `files`.</br> ### Скачивание контента частями: Вы можете скачать файл частями с использованием заголовка `Range`. **Пример**: `Range: bytes=0-524287999` Ответ содержит заголовок `Content-Range` с информацией о скаченном файле. **Пример**: `Content-Range: bytes 0-524287999/1073741824`
     *
     * @tags Контент
     * @name ContentDownloadGet
     * @summary Скачать контент
     * @request GET:/api/v1/content/download/{uri}
     * @secure
     */
    contentDownloadGet: (uri: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails401 | ProblemDetails404 | ProblemDetails500 | ProblemDetails502>({
        path: `/api/v1/content/download/${uri}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Максимум 50 запросов в секунду Метод позволяет удалить контент по идентификатору.
     *
     * @tags Контент
     * @name ContentDelete
     * @summary Удалить контент
     * @request POST:/api/v1/content/delete
     * @secure
     */
    contentDelete: (
      data: {
        /**
         * Идентификатор контента
         * @format int64
         * @example 493292
         */
        content_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails401 | ProblemDetails404 | ProblemDetails500>({
        path: `/api/v1/content/delete`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Максимум 10 запросов в секунду Метод позволяет загружать медиафайлы на сервер. После успешной загрузки возвращает список URI-адресов, которые можно использовать для добавления дополнительных медиафайлов в предложение. Данный метод поможет вам добавить дополнительные медиафайлы при создании или обновлении предложения. - [Создать новое предложение](#operation/offerCreate) - [Редактировать предложение](#operation/offerUpdate) <div class="description_important"> Ограничения по размеру: <ul> <li>изображение: <b>5 Мб</b></li> <li>видео: <b>50 Мб</b></li> <li>общий размер всех файлов: <b>100 Мб</b></li> </ul> Допустимые форматы: <ul> <li>изображение: <b>.png, .jpeg</b></li> <li>видео: <b>.mp4</b></li> </ul> Можно передать <b>до 8 медиафайлов</b>. </div>
     *
     * @tags Контент
     * @name ContentGallery
     * @summary Загрузить медиафайлы для предложения
     * @request POST:/api/v1/content/gallery
     * @secure
     */
    contentGallery: (
      data: {
        files: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UploadGalleryResponse, ProblemDetails400 | ProblemDetails401 | ProblemDetails500>({
        path: `/api/v1/content/gallery`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
}
