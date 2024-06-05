$(document).ready(function () {
   ///////////////

   var price = {
      wb: {
         launch: {
            basic: {
               month1: {
                  price: {
                     demo: [7500, true],
                     start: [0, false],
                     pro: [0, false],
                     vip: [0, false],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', 25, false, false, false],
                           ['Публикация отзывов, шт.', 5, false, false, false],
                           ['Лайки на бренд, шт.', 25, false, false, false],
                           ['Вопросы бренду / товару, шт.', 10, false, false, false],
                           ['Добавление в корзину, шт.', 25, false, false, false],
                           ['Автоответы на отзывы, SKU', 1, false, false, false],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', 50, false, false, false],
                           ['Выкуп в ближайшее время, шт.', 10, false, false, false],
                           ['Добавление конкурентов в корзину, шт.', 15, false, false, false],
                           ['Изучение карточки 60 секунд, шт.', 5, false, false, false],
                           ['Выкупить с рекламы, шт.', 15, false, false, false],
                           ['Выкупить с сортировки, шт.', 10, false, false, false],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', true, false, false, false],
                           ['Технический менеджер', true, false, false, false],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month3: {
                  price: {
                     demo: [0, false],
                     start: [40000, true],
                     pro: [80000, true],
                     vip: [160000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 150, 300, 600],
                           ['Публикация отзывов, шт.', false, 30, 60, 120],
                           ['Лайки на бренд, шт.', false, 150, 300, 600],
                           ['Вопросы бренду / товару, шт.', false, 30, 60, 120],
                           ['Добавление в корзину, шт.', false, 150, 300, 300],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 300, 600, 1200],
                           ['Выкуп в ближайшее время, шт.', false, 30, 60, 120],
                           ['Добавление конкурентов в корзину, шт.', false, 75, 125, 200],
                           ['Изучение карточки 60 секунд, шт.', false, 30, 60, 120],
                           ['Выкупить с рекламы, шт.', false, 75, 150, 300],
                           ['Выкупить с сортировки, шт.', false, 30, 60, 120],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [80000, true],
                     pro: [155000, true],
                     vip: [310000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 300, 600, 1200],
                           ['Публикация отзывов, шт.', false, 60, 120, 240],
                           ['Лайки на бренд, шт.', false, 300, 600, 1200],
                           ['Вопросы бренду / товару, шт.', false, 60, 120, 240],
                           ['Добавление в корзину, шт.', false, 300, 600, 1200],
                           ['Автоответы на отзывы, SKU', false, 7, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 600, 1200, 2400],
                           ['Выкуп в ближайшее время, шт.', false, 60, 120, 240],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 300, 600],
                           ['Изучение карточки 60 секунд, шт.', false, 60, 120, 240],
                           ['Выкупить с рекламы, шт.', false, 150, 300, 600],
                           ['Выкупить с сортировки, шт.', false, 60, 120, 240],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [140000, true],
                     pro: [280000, true],
                     vip: [555000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 600, 1200, 2400],
                           ['Публикация отзывов, шт.', false, 120, 240, 480],
                           ['Лайки на бренд, шт.', false, 600, 1200, 2400],
                           ['Вопросы бренду / товару, шт.', false, 120, 240, 480],
                           ['Добавление в корзину, шт.', false, 600, 1200, 2400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1200, 2400, 4800],
                           ['Выкуп в ближайшее время, шт.', false, 120, 240, 480],
                           ['Добавление конкурентов в корзину, шт.', false, 300, 600, 1200],
                           ['Изучение карточки 60 секунд, шт.', false, 120, 240, 480],
                           ['Выкупить с рекламы, шт.', false, 300, 600, 1200],
                           ['Выкупить с сортировки, шт.', false, 120, 240, 480],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            },
            full: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [55000, true],
                     pro: [105000, true],
                     vip: [210000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 150, 300, 600],
                           ['Публикация отзывов, шт.', false, 30, 60, 120],
                           ['Лайки на бренд, шт.', false, 150, 300, 600],
                           ['Вопросы бренду / товару, шт.', false, 30, 60, 120],
                           ['Добавление в корзину, шт.', false, 150, 300, 300],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 300, 600, 1200],
                           ['Выкуп в ближайшее время, шт.', false, 30, 60, 120],
                           ['Добавление конкурентов в корзину, шт.', false, 75, 125, 200],
                           ['Изучение карточки 60 секунд, шт.', false, 30, 60, 120],
                           ['Выкупить с рекламы, шт.', false, 75, 150, 300],
                           ['Выкупить с сортировки, шт.', false, 30, 60, 120],
                           ['Логистика (доп оплата)', false, 150, 300, 600],
                           ['Базовая стратегия, SKU', false, 3, 5, 7],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [100000, true],
                     pro: [200000, true],
                     vip: [400000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 300, 600, 1200],
                           ['Публикация отзывов, шт.', false, 60, 120, 240],
                           ['Лайки на бренд, шт.', false, 300, 600, 1200],
                           ['Вопросы бренду / товару, шт.', false, 60, 120, 240],
                           ['Добавление в корзину, шт.', false, 300, 600, 1200],
                           ['Автоответы на отзывы, SKU', false, 7, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 600, 1200, 2400],
                           ['Выкуп в ближайшее время, шт.', false, 60, 120, 240],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 300, 600],
                           ['Изучение карточки 60 секунд, шт.', false, 60, 120, 240],
                           ['Выкупить с рекламы, шт.', false, 150, 300, 600],
                           ['Выкупить с сортировки, шт.', false, 60, 120, 240],
                           ['Логистика (доп оплата)', false, 300, 600, 1200],
                           ['Базовая стратегия, SKU', false, 5, 7, 12],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [185000, true],
                     pro: [370000, true],
                     vip: [740000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 600, 1200, 2400],
                           ['Публикация отзывов, шт.', false, 120, 240, 480],
                           ['Лайки на бренд, шт.', false, 600, 1200, 2400],
                           ['Вопросы бренду / товару, шт.', false, 120, 240, 480],
                           ['Добавление в корзину, шт.', false, 600, 1200, 2400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1200, 2400, 4800],
                           ['Выкуп в ближайшее время, шт.', false, 120, 240, 480],
                           ['Добавление конкурентов в корзину, шт.', false, 300, 600, 1200],
                           ['Изучение карточки 60 секунд, шт.', false, 120, 240, 480],
                           ['Выкупить с рекламы, шт.', false, 300, 600, 1200],
                           ['Выкупить с сортировки, шт.', false, 120, 240, 480],
                           ['Логистика (доп оплата)', false, 600, 1200, 2400],
                           ['Базовая стратегия, SKU', false, 7, 12, 25],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            }
         },
         increase: {
            basic: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [135000, true],
                     pro: [405000, true],
                     vip: [805000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 500, 1500, 3000],
                           ['Публикация отзывов, шт.', false, 100, 300, 600],
                           ['Лайки на бренд, шт.', false, 500, 1500, 3000],
                           ['Вопросы бренду / товару, шт.', false, 100, 300, 600],
                           ['Добавление в корзину, шт.', false, 250, 750, 1500],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1000, 3000, 6000],
                           ['Выкуп в ближайшее время, шт.', false, 100, 300, 600],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 450, 900],
                           ['Изучение карточки 60 секунд, шт.', false, 150, 450, 900],
                           ['Выкупить с рекламы, шт.', false, 250, 750, 1500],
                           ['Выкупить с сортировки, шт.', false, 100, 300, 600],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [385000, true],
                     pro: [770000, true],
                     vip: [1550000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 600, 1200],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [690000, true],
                     pro: [1380000, true],
                     vip: [2300000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2000],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2000],
                           ['Добавление в корзину, шт.', false, 1500, 3000, 5000],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2000],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3000],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3000],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2000],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            },
            full: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [155000, true],
                     pro: [460000, true],
                     vip: [920000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 500, 1500, 3000],
                           ['Публикация отзывов, шт.', false, 100, 300, 600],
                           ['Лайки на бренд, шт.', false, 500, 1500, 3000],
                           ['Вопросы бренду / товару, шт.', false, 100, 300, 600],
                           ['Добавление в корзину, шт.', false, 250, 750, 1500],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1000, 3000, 6000],
                           ['Выкуп в ближайшее время, шт.', false, 100, 300, 600],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 450, 900],
                           ['Изучение карточки 60 секунд, шт.', false, 150, 450, 900],
                           ['Выкупить с рекламы, шт.', false, 250, 750, 1500],
                           ['Выкупить с сортировки, шт.', false, 100, 300, 600],
                           ['Логистика (доп оплата)', false, 500, 1500, 3000],
                           ['Базовая стратегия, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [460000, true],
                     pro: [920000, true],
                     vip: [1840000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 600, 2120040],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                           ['Логистика (доп оплата)', false, 500, 1500, 6000],
                           ['Базовая стратегия, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [920000, true],
                     pro: [1840000, true],
                     vip: [3100000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2000],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2000],
                           ['Добавление в корзину, шт.', false, 1500, 3000, 5000],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2000],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3000],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3000],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2000],
                           ['Логистика (доп оплата)', false, 3000, 6000, 10000],
                           ['Базовая стратегия, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            }
         },
         support: {
            basic: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [405000, true],
                     pro: [805000, true],
                     vip: [1610000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 900, 1800],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [770000, true],
                     pro: [1540000, true],
                     vip: [2600000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2400],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2400],
                           ['Добавление в корзину, шт.', false, 1350, 2700, 5400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 100],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2400],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3600],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3600],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2400],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [1380000, true],
                     pro: [2340000, true],
                     vip: [3525000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 6000, 10000, 15000],
                           ['Публикация отзывов, шт.', false, 1200, 2400, 4800],
                           ['Лайки на бренд, шт.', false, 6000, 10000, 15000],
                           ['Вопросы бренду / товару, шт.', false, 1200, 2000, 2500],
                           ['Добавление в корзину, шт.', false, 3000, 5000, 7500],
                           ['Автоответы на отзывы, SKU', false, 50, 100, 250],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 12000, 20000, 40000],
                           ['Выкуп в ближайшее время, шт.', false, 1200, 2400, 5000],
                           ['Добавление конкурентов в корзину, шт.', false, 2000, 3000, 5000],
                           ['Изучение карточки 60 секунд, шт.', false, 1800, 3000, 5000],
                           ['Выкупить с рекламы, шт.', false, 2500, 5000, 7500],
                           ['Выкупить с сортировки, шт.', false, 1200, 2400, 4500],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            },
            full: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [520000, true],
                     pro: [1035000, true],
                     vip: [2070000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 900, 1800],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                           ['Логистика (доп оплата)', false, 500, 1500, 3000],
                           ['Базовая стратегия, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [977000, true],
                     pro: [1960000, true],
                     vip: [3280000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2400],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2400],
                           ['Добавление в корзину, шт.', false, 1350, 2700, 5400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 100],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2400],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3600],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3600],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2400],
                           ['Логистика (доп оплата)', false, 1500, 3000, 6000],
                           ['Базовая стратегия, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [1840000, true],
                     pro: [3120000, true],
                     vip: [4700000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 6000, 10000, 15000],
                           ['Публикация отзывов, шт.', false, 1200, 2400, 4800],
                           ['Лайки на бренд, шт.', false, 6000, 10000, 15000],
                           ['Вопросы бренду / товару, шт.', false, 1200, 2000, 2500],
                           ['Добавление в корзину, шт.', false, 3000, 5000, 7500],
                           ['Автоответы на отзывы, SKU', false, 50, 100, 250],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 12000, 20000, 40000],
                           ['Выкуп в ближайшее время, шт.', false, 1200, 2400, 5000],
                           ['Добавление конкурентов в корзину, шт.', false, 2000, 3000, 5000],
                           ['Изучение карточки 60 секунд, шт.', false, 1800, 3000, 5000],
                           ['Выкупить с рекламы, шт.', false, 2500, 5000, 7500],
                           ['Выкупить с сортировки, шт.', false, 1200, 2400, 4500],
                           ['Логистика (доп оплата)', false, 3000, 6000, 10000],
                           ['Базовая стратегия, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            }
         }
      },
      ozon: {
         launch: {
            basic: {
               month1: {
                  price: {
                     demo: [7500, true],
                     start: [0, false],
                     pro: [0, false],
                     vip: [0, false],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', 25, false, false, false],
                           ['Публикация отзывов, шт.', 5, false, false, false],
                           ['Лайки на бренд, шт.', 25, false, false, false],
                           ['Вопросы бренду / товару, шт.', 10, false, false, false],
                           ['Добавление в корзину, шт.', 25, false, false, false],
                           ['Автоответы на отзывы, SKU', 1, false, false, false],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', 50, false, false, false],
                           ['Выкуп в ближайшее время, шт.', 10, false, false, false],
                           ['Добавление конкурентов в корзину, шт.', 15, false, false, false],
                           ['Изучение карточки 60 секунд, шт.', 5, false, false, false],
                           ['Выкупить с рекламы, шт.', 15, false, false, false],
                           ['Выкупить с сортировки, шт.', 10, false, false, false],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', true, false, false, false],
                           ['Технический менеджер', true, false, false, false],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month3: {
                  price: {
                     demo: [0, false],
                     start: [40000, true],
                     pro: [80000, true],
                     vip: [160000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 150, 300, 600],
                           ['Публикация отзывов, шт.', false, 30, 60, 120],
                           ['Лайки на бренд, шт.', false, 150, 300, 600],
                           ['Вопросы бренду / товару, шт.', false, 30, 60, 120],
                           ['Добавление в корзину, шт.', false, 150, 300, 300],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 300, 600, 1200],
                           ['Выкуп в ближайшее время, шт.', false, 30, 60, 120],
                           ['Добавление конкурентов в корзину, шт.', false, 75, 125, 200],
                           ['Изучение карточки 60 секунд, шт.', false, 30, 60, 120],
                           ['Выкупить с рекламы, шт.', false, 75, 150, 300],
                           ['Выкупить с сортировки, шт.', false, 30, 60, 120],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [80000, true],
                     pro: [155000, true],
                     vip: [310000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 300, 600, 1200],
                           ['Публикация отзывов, шт.', false, 60, 120, 240],
                           ['Лайки на бренд, шт.', false, 300, 600, 1200],
                           ['Вопросы бренду / товару, шт.', false, 60, 120, 240],
                           ['Добавление в корзину, шт.', false, 300, 600, 1200],
                           ['Автоответы на отзывы, SKU', false, 7, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 600, 1200, 2400],
                           ['Выкуп в ближайшее время, шт.', false, 60, 120, 240],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 300, 600],
                           ['Изучение карточки 60 секунд, шт.', false, 60, 120, 240],
                           ['Выкупить с рекламы, шт.', false, 150, 300, 600],
                           ['Выкупить с сортировки, шт.', false, 60, 120, 240],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [140000, true],
                     pro: [280000, true],
                     vip: [555000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 600, 1200, 2400],
                           ['Публикация отзывов, шт.', false, 120, 240, 480],
                           ['Лайки на бренд, шт.', false, 600, 1200, 2400],
                           ['Вопросы бренду / товару, шт.', false, 120, 240, 480],
                           ['Добавление в корзину, шт.', false, 600, 1200, 2400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1200, 2400, 4800],
                           ['Выкуп в ближайшее время, шт.', false, 120, 240, 480],
                           ['Добавление конкурентов в корзину, шт.', false, 300, 600, 1200],
                           ['Изучение карточки 60 секунд, шт.', false, 120, 240, 480],
                           ['Выкупить с рекламы, шт.', false, 300, 600, 1200],
                           ['Выкупить с сортировки, шт.', false, 120, 240, 480],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            },
            full: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [55000, true],
                     pro: [105000, true],
                     vip: [210000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 150, 300, 600],
                           ['Публикация отзывов, шт.', false, 30, 60, 120],
                           ['Лайки на бренд, шт.', false, 150, 300, 600],
                           ['Вопросы бренду / товару, шт.', false, 30, 60, 120],
                           ['Добавление в корзину, шт.', false, 150, 300, 300],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 300, 600, 1200],
                           ['Выкуп в ближайшее время, шт.', false, 30, 60, 120],
                           ['Добавление конкурентов в корзину, шт.', false, 75, 125, 200],
                           ['Изучение карточки 60 секунд, шт.', false, 30, 60, 120],
                           ['Выкупить с рекламы, шт.', false, 75, 150, 300],
                           ['Выкупить с сортировки, шт.', false, 30, 60, 120],
                           ['Логистика (доп оплата)', false, 150, 300, 600],
                           ['Базовая стратегия, SKU', false, 3, 5, 7],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [100000, true],
                     pro: [200000, true],
                     vip: [400000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 300, 600, 1200],
                           ['Публикация отзывов, шт.', false, 60, 120, 240],
                           ['Лайки на бренд, шт.', false, 300, 600, 1200],
                           ['Вопросы бренду / товару, шт.', false, 60, 120, 240],
                           ['Добавление в корзину, шт.', false, 300, 600, 1200],
                           ['Автоответы на отзывы, SKU', false, 7, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 600, 1200, 2400],
                           ['Выкуп в ближайшее время, шт.', false, 60, 120, 240],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 300, 600],
                           ['Изучение карточки 60 секунд, шт.', false, 60, 120, 240],
                           ['Выкупить с рекламы, шт.', false, 150, 300, 600],
                           ['Выкупить с сортировки, шт.', false, 60, 120, 240],
                           ['Логистика (доп оплата)', false, 300, 600, 1200],
                           ['Базовая стратегия, SKU', false, 5, 7, 12],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [185000, true],
                     pro: [370000, true],
                     vip: [740000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 600, 1200, 2400],
                           ['Публикация отзывов, шт.', false, 120, 240, 480],
                           ['Лайки на бренд, шт.', false, 600, 1200, 2400],
                           ['Вопросы бренду / товару, шт.', false, 120, 240, 480],
                           ['Добавление в корзину, шт.', false, 600, 1200, 2400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1200, 2400, 4800],
                           ['Выкуп в ближайшее время, шт.', false, 120, 240, 480],
                           ['Добавление конкурентов в корзину, шт.', false, 300, 600, 1200],
                           ['Изучение карточки 60 секунд, шт.', false, 120, 240, 480],
                           ['Выкупить с рекламы, шт.', false, 300, 600, 1200],
                           ['Выкупить с сортировки, шт.', false, 120, 240, 480],
                           ['Логистика (доп оплата)', false, 600, 1200, 2400],
                           ['Базовая стратегия, SKU', false, 7, 12, 25],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            }
         },
         increase: {
            basic: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [135000, true],
                     pro: [405000, true],
                     vip: [805000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 500, 1500, 3000],
                           ['Публикация отзывов, шт.', false, 100, 300, 600],
                           ['Лайки на бренд, шт.', false, 500, 1500, 3000],
                           ['Вопросы бренду / товару, шт.', false, 100, 300, 600],
                           ['Добавление в корзину, шт.', false, 250, 750, 1500],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1000, 3000, 6000],
                           ['Выкуп в ближайшее время, шт.', false, 100, 300, 600],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 450, 900],
                           ['Изучение карточки 60 секунд, шт.', false, 150, 450, 900],
                           ['Выкупить с рекламы, шт.', false, 250, 750, 1500],
                           ['Выкупить с сортировки, шт.', false, 100, 300, 600],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [385000, true],
                     pro: [770000, true],
                     vip: [1550000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 600, 1200],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [690000, true],
                     pro: [1380000, true],
                     vip: [2300000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2000],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2000],
                           ['Добавление в корзину, шт.', false, 1500, 3000, 5000],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2000],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3000],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3000],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2000],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            },
            full: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [155000, true],
                     pro: [460000, true],
                     vip: [920000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 500, 1500, 3000],
                           ['Публикация отзывов, шт.', false, 100, 300, 600],
                           ['Лайки на бренд, шт.', false, 500, 1500, 3000],
                           ['Вопросы бренду / товару, шт.', false, 100, 300, 600],
                           ['Добавление в корзину, шт.', false, 250, 750, 1500],
                           ['Автоответы на отзывы, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 1000, 3000, 6000],
                           ['Выкуп в ближайшее время, шт.', false, 100, 300, 600],
                           ['Добавление конкурентов в корзину, шт.', false, 150, 450, 900],
                           ['Изучение карточки 60 секунд, шт.', false, 150, 450, 900],
                           ['Выкупить с рекламы, шт.', false, 250, 750, 1500],
                           ['Выкупить с сортировки, шт.', false, 100, 300, 600],
                           ['Логистика (доп оплата)', false, 500, 1500, 3000],
                           ['Базовая стратегия, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [460000, true],
                     pro: [920000, true],
                     vip: [1840000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 600, 2120040],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                           ['Логистика (доп оплата)', false, 500, 1500, 6000],
                           ['Базовая стратегия, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [920000, true],
                     pro: [1840000, true],
                     vip: [3100000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2000],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2000],
                           ['Добавление в корзину, шт.', false, 1500, 3000, 5000],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2000],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3000],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3000],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2000],
                           ['Логистика (доп оплата)', false, 3000, 6000, 10000],
                           ['Базовая стратегия, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            }
         },
         support: {
            basic: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [405000, true],
                     pro: [805000, true],
                     vip: [1610000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 900, 1800],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [770000, true],
                     pro: [1540000, true],
                     vip: [2600000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2400],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2400],
                           ['Добавление в корзину, шт.', false, 1350, 2700, 5400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 100],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2400],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3600],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3600],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2400],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [1380000, true],
                     pro: [2340000, true],
                     vip: [3525000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 6000, 10000, 15000],
                           ['Публикация отзывов, шт.', false, 1200, 2400, 4800],
                           ['Лайки на бренд, шт.', false, 6000, 10000, 15000],
                           ['Вопросы бренду / товару, шт.', false, 1200, 2000, 2500],
                           ['Добавление в корзину, шт.', false, 3000, 5000, 7500],
                           ['Автоответы на отзывы, SKU', false, 50, 100, 250],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 12000, 20000, 40000],
                           ['Выкуп в ближайшее время, шт.', false, 1200, 2400, 5000],
                           ['Добавление конкурентов в корзину, шт.', false, 2000, 3000, 5000],
                           ['Изучение карточки 60 секунд, шт.', false, 1800, 3000, 5000],
                           ['Выкупить с рекламы, шт.', false, 2500, 5000, 7500],
                           ['Выкупить с сортировки, шт.', false, 1200, 2400, 4500],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            },
            full: {
               month3: {
                  price: {
                     demo: [0, false],
                     start: [520000, true],
                     pro: [1035000, true],
                     vip: [2070000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 1500, 3000, 6000],
                           ['Публикация отзывов, шт.', false, 300, 600, 1200],
                           ['Лайки на бренд, шт.', false, 1500, 3000, 6000],
                           ['Вопросы бренду / товару, шт.', false, 300, 600, 1200],
                           ['Добавление в корзину, шт.', false, 750, 1500, 3000],
                           ['Автоответы на отзывы, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 3000, 6000, 12000],
                           ['Выкуп в ближайшее время, шт.', false, 300, 600, 1200],
                           ['Добавление конкурентов в корзину, шт.', false, 450, 900, 1800],
                           ['Изучение карточки 60 секунд, шт.', false, 450, 900, 1800],
                           ['Выкупить с рекламы, шт.', false, 750, 1500, 3000],
                           ['Выкупить с сортировки, шт.', false, 300, 600, 1200],
                           ['Логистика (доп оплата)', false, 500, 1500, 3000],
                           ['Базовая стратегия, SKU', false, 5, 7, 10],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month6: {
                  price: {
                     demo: [0, false],
                     start: [977000, true],
                     pro: [1960000, true],
                     vip: [3280000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 3000, 6000, 10000],
                           ['Публикация отзывов, шт.', false, 600, 1200, 2400],
                           ['Лайки на бренд, шт.', false, 3000, 6000, 10000],
                           ['Вопросы бренду / товару, шт.', false, 600, 1200, 2400],
                           ['Добавление в корзину, шт.', false, 1350, 2700, 5400],
                           ['Автоответы на отзывы, SKU', false, 15, 25, 100],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 6000, 12000, 20000],
                           ['Выкуп в ближайшее время, шт.', false, 600, 1200, 2400],
                           ['Добавление конкурентов в корзину, шт.', false, 900, 1800, 3600],
                           ['Изучение карточки 60 секунд, шт.', false, 900, 1800, 3600],
                           ['Выкупить с рекламы, шт.', false, 1500, 3000, 5000],
                           ['Выкупить с сортировки, шт.', false, 600, 1200, 2400],
                           ['Логистика (доп оплата)', false, 1500, 3000, 6000],
                           ['Базовая стратегия, SKU', false, 10, 15, 25],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
               month12: {
                  price: {
                     demo: [0, false],
                     start: [1840000, true],
                     pro: [3120000, true],
                     vip: [4700000, true],
                  },
                  data: [
                     {
                        name: 'Повышение рейтинга',
                        data: [
                           ['Покупка товаров, шт.', false, 6000, 10000, 15000],
                           ['Публикация отзывов, шт.', false, 1200, 2400, 4800],
                           ['Лайки на бренд, шт.', false, 6000, 10000, 15000],
                           ['Вопросы бренду / товару, шт.', false, 1200, 2000, 2500],
                           ['Добавление в корзину, шт.', false, 3000, 5000, 7500],
                           ['Автоответы на отзывы, SKU', false, 50, 100, 250],
                        ]
                     },
                     {
                        name: 'Поведенческие факторы',
                        data: [
                           ['Клики по карточке, шт.', false, 12000, 20000, 40000],
                           ['Выкуп в ближайшее время, шт.', false, 1200, 2400, 5000],
                           ['Добавление конкурентов в корзину, шт.', false, 2000, 3000, 5000],
                           ['Изучение карточки 60 секунд, шт.', false, 1800, 3000, 5000],
                           ['Выкупить с рекламы, шт.', false, 2500, 5000, 7500],
                           ['Выкупить с сортировки, шт.', false, 1200, 2400, 4500],
                           ['Логистика (доп оплата)', false, 3000, 6000, 10000],
                           ['Базовая стратегия, SKU', false, 15, 25, 50],
                        ]
                     },
                     {
                        name: 'Сопровождение',
                        data: [
                           ['Личный аккаунт менеджер', false, true, true, true],
                           ['Технический менеджер', false, true, true, true],
                        ]
                     },
                     {
                        name: 'BI-analytics',
                        data: [
                           ['Бриффинг', false, false, false, false],
                           ['Бизнес Интервью', false, false, false, false],
                           ['Семантическое ядро', false, false, false, false],
                           ['Конкурентная Аналитика', false, false, false, false],
                           ['Базовая Стратегия', false, false, false, false],
                           ['Расширенная Стратегия', false, false, false, false],
                           ['FMP (финансовая модель продукта)', false, false, false, false],
                           ['FRP (финансовый отчет по продукту)', false, false, false, false],
                           ['PHC (карточка здоровья продукта)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Рекламные кампании',
                        data: [
                           ['Артикулов', false, false, false, false],
                           ['Запуск и ведение рекламных кампаний, проведение A/B-тестов', false, false, false, false],
                           ['Анализ спроса, сбор и корректировка семантического ядра', false, false, false, false],
                           ['Бюджетирование на РК', false, false, false, false],
                           ['Менеджер', false, false, false, false],
                           ['Мониторинг позиций товаров по каждому запросу', false, false, false, false],
                           ['Работы по увеличению CR% (конверсии) карточек товаров', false, false, false, false],
                           ['Анализ и оптимизация рекламных кампаний по KPI: заказы, ДРР, показы, клики, CTR', false, false, false, false],
                           ['Повышение привлекательности карточки товара (инфографика)', false, false, false, false],
                        ]
                     },
                     {
                        name: 'Brand Awareness',
                        data: [
                           ['Интеграций блогеров по бартеру', false, false, false, false],
                           ['Публикация отзывов для поддержания привлекательности', false, false, false, false],
                           ['Охват аудитории при публикациях', false, false, false, false],
                           ['Количество товаров на бартер', false, false, false, false],
                           ['Работа с узнаваемостью бренда (посол бренда)', false, false, false, false],
                        ]
                     }
                  ]
               },
            }
         }
      },
   };
   
   function checkOut(el) {
      var out;
      if (el == true) {
         out = '<img src="assets/img/check-green.svg" alt="icon">';
      } else if (el == false) {
         out = '<img src="assets/img/not.svg" alt="icon">';
      } else {
         out = el;
      }
      return out;
   }

   function renderPriceTable(company, packet, tariff, pay) {
      $('.table *').remove();

      // var month1_btn = $('.month1_btn');
      // var checkMonthPay = price[company][packet][tariff].month1;

      // if (checkMonthPay === undefined) {
      //    console.log('undefined');
      //    $('[data-pay="month1"]').addClass('hidden');
      //    var data = price[company][packet][tariff].month3['data'];
      //    // var f = $('[data-pay="month3"]');
         
      //    $('[data-pay="month1"]').removeClass('active');
      //    $('[data-pay="month3"]').addClass('active');
      //    // console.log(f);
      // } else {
      //    console.log('good');
         
      //    $('[data-pay="month1"]').removeClass('hidden');
      //    var data = price[company][packet][tariff][pay]['data'];
      // }

      var data = price[company][packet][tariff][pay]['data'];
      var out = '';
      

      // //вывод цены
      // console.log(price[company][packet][tariff][pay]['price'].demo[0]);

      for (let i = 0; i < data.length; i++) {
         var name = data[i].name;
         var sub_data = data[i].data;

         var out_row = '';

         for (let k = 0; k < sub_data.length; k++) {
            out_row += `
               <div class="row">
                  <div class="table__name d-name">${checkOut(sub_data[k][0])}</div>
                  <div class="table__col d-col" data-col="demo">${checkOut(sub_data[k][1])}</div>
                  <div class="table__col d-col" data-col="start">${checkOut(sub_data[k][2])}</div>
                  <div class="table__col d-col" data-col="pro">${checkOut(sub_data[k][3])}</div>
                  <div class="table__col d-col" data-col="vip">${checkOut(sub_data[k][4])}</div>
               </div>
            `;
         };

         out += 
         `<div class="table__item">
            <div class="table__title">${name}</div>
            <div class="table__inner">${out_row}</div>
         </div>`;
      }
      
      $('.table').append(out);

      var price_info = price[company][packet][tariff][pay]['price'];

      $(`[data-packet-name="demo"] .packet__price`).text((price_info.demo[0]).toLocaleString('ru') + '₽');
      $(`[data-packet-name="start"] .packet__price`).text((price_info.start[0]).toLocaleString('ru') + '₽');
      $(`[data-packet-name="pro"] .packet__price`).text((price_info.pro[0]).toLocaleString('ru') + '₽');
      $(`[data-packet-name="vip"] .packet__price`).text((price_info.vip[0]).toLocaleString('ru') + '₽');

      if (price_info.demo[1] === false) {
         $(`[data-packet-name="demo"] .packet__btn`).addClass('disabled');
      } else {
         $(`[data-packet-name="demo"] .packet__btn`).removeClass('disabled');
      }

      if (price_info.start[1] === false) {
         $(`[data-packet-name="start"] .packet__btn`).addClass('disabled');
      } else {
         $(`[data-packet-name="start"] .packet__btn`).removeClass('disabled');
      }

      if (price_info.pro[1] === false) {
         $(`[data-packet-name="pro"] .packet__btn`).addClass('disabled');
      } else {
         $(`[data-packet-name="pro"] .packet__btn`).removeClass('disabled');
      }

      if (price_info.vip[1] === false) {
         $(`[data-packet-name="vip"] .packet__btn`).addClass('disabled');
      } else {
         $(`[data-packet-name="vip"] .packet__btn`).removeClass('disabled');
      }

      if ($(window).width() < 769) {
         changeSelect();
      };
   };

   $('body').on('click', '.tarrifs__btn, .tarrifs-company__btn', function () {
      $(this).closest('.tarrifs-company').find('.tarrifs-company__btn').removeClass('active');
      $(this).closest('.tarrifs__change').find('.tarrifs__btn').removeClass('active');
      $(this).addClass('active');

      checkBtnData();
   });

   checkBtnData();
   function checkBtnData() {
      if ($(window).width() < 769) {
         var company = $('.company-select').val();
      } else {
         var company = $('[data-company].active').attr('data-company');
      }

      var packet = $('[data-packet].active').attr('data-packet');
      var tariff = $('[data-tariff].active').attr('data-tariff');
      var pay = $('[data-pay].active').attr('data-pay');

      renderPriceTable(company, packet, tariff, pay);
   };

   $('body').on('click', '.table__title', function () {
      $(this).toggleClass('hide');
      $(this).closest('.table__item').find('.table__inner').slideToggle();
   });

   $('.company-select').change(function () {
      checkBtnData();
   });

   $('[name="tarrif-select-left"]').change(function () {
      var val = $(this).val();
      $(`[name="tarrif-select-right"] option`).attr("disabled", false);
      $(`[name="tarrif-select-right"] option[value="${val}"]`).attr("disabled", true);
      changeSelect();
   });

   $('[name="tarrif-select-right"]').change(function () {
      var val = $(this).val();
      $(`[name="tarrif-select-left"] option`).attr("disabled", false);
      $(`[name="tarrif-select-left"] option[value="${val}"]`).attr("disabled", true);

      changeSelect();
   });


   if ($(window).width() < 769) {
      changeSelect();
   };

   function changeSelect() {
      var val1 = $('[name="tarrif-select-left"]').val();
      var val2 = $('[name="tarrif-select-right"]').val();

      $('.table__col').removeClass('show');
      $(`[data-col="${val1}"]`).addClass('show').css('order', 1);
      $(`[data-col="${val2}"]`).addClass('show').css('order', 2);


      $('.packet__item').removeClass('show');
      $(`[data-packet-name="${val1}"]`).addClass('show').css('order', 1);
      $(`[data-packet-name="${val2}"]`).addClass('show').css('order', 2);

      $('.tarif-select').niceSelect('update');
   };


   $('.tarif-select').niceSelect();
   $('.company-select').niceSelect();





   /////////////////////////////////////


   // market-monstr.io
});