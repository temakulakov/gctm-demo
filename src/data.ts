import { INavElemenet } from "types/INavElements";
export const navElemenet: INavElemenet[] = [
    {
        title: "Посетителям",
        description: "Краткая и общая информация ( фото музея, адрес и часы работы, билеты, о музее, как добраться ) + разводная с разделами",
        subtitle: [
            {
                title: "Здания и часы работы",
                description: "Все здания на одной странице, есть разделение на \"Бахрушинский квартал\" и \"Филиалы\""
            },
            {
                title: "Билеты и льготы",
                description: "- Правила покупки билетов" +
                    " - Правила и условия посещения",
            },
            {
                title: "Карты лояльности (Не в MVP)",
                description: "Описательная страница с вариантами карта лояльности и условиями покупки, контактами отдела продаж",
            },
            {
                title: "Кафе и рестораны",
                description: "Описательная страница с информацией о ресторанах/кафе/буфете, внизу шахматка с фото, названием ресторана и его контактами."
            },
            {
                title: "Экскурсии",
                description: "- описательная страница с информацией, как заказать экскурсию и контактами отдела продаж" +
                    "- подборка из мероприятий, на которые доступны экскурсии"
            },
            {
                title: "Добро День",
                description: "Описательная страница о благотворительном проекте музея, краткое описание проекта, лого партнеров (если есть), контакты, форма обратной связи. "
            },
            {
                title: "Доступный музей (Не в MVP)",
                description: "Описательная страница с информацией на сколько музей приспособлен к инклюзии"
            }
        ]
    },
    {
        title: "Выставки и события",
        description: "Разводная страница с разделами.",
        subtitle: [
            {
                title: "Выставки",
                description: "Страница со всеми Выставками, внутри разделение на: 1.текущие, 2. будущее, 3. международные 4. архив"
            },
            {
                title: "Постоянные экспозиции",
                description: "Страница с постоянными экспозициями (как у Третьяковки)"
            },
            {
                title: "События",
                description: "Страница со всеми Событиями, внутри разделение на разные события, на первом этапе: 1.текущие, 2. будущее, 3. архив"
            },
            {
                title: "Экскурсии",
                description: "Описательная страница с информацией, как заказать экскурсию и контактами отдела продаж" +
                    " - подборка из мероприятий, на которые доступны экскурсии"
            },
            {
                title: "Онлайн выставки",
                description: "Разводная страница с переходом на лендинги с онлайн выставками",
            },
            {
                title: "Новости",
                description: "Страница со всеми новостями музея" +
                    "- вкладка \"СМИ о нас\", где даются лого изданий и их статьи о музее"
            }
        ]
    },
    {
        title: "Узнавайте сами",
        description: "Разводная страница с разделами.",
        subtitle: [
            {
                title: "Лекторий \"Бахрушинская академия\"",
                description: "Страница со всеми лекционными программами и возможностью купить абонемент (как у Третьяковки)"
            },
            {
                title: "Издания",
                description: "Описательная страница об издательской деятельности, форма обратной связи и контакты издательского отдела, внизу список изданий Музея с фотографиями. - при клике на каждое издание переход на описательную страницу издания с информацией, переходом для покупки в интернет-магазин или возможностью скачать для чтения."
            },
            {
                title: "Коллекции онлайн",
                description: "Сайт сателлит - Колекции онлайн"
            },
            {
                title: "Научная библиотека",
                description: "описательная страница о научной библиотеке, форма обратной связи и контакты библиотеки" +
                    "- поставить пометку \"ПРО\""
            },
            {
                title: "Бахрушинские чтения",
                description: "- описательная страница  с общей информацией о конференции с фото/видео материалами, контакты организаторов, форма обратной связи с кнопкой \"принять участие\", программа будущей конференции, возможность перейти к архиву конференций, кнопкой перейти к онлайн трансляции (если такая будет)" +
                    "- отдельная страница по каждой конференции из архива с описанием, программой, фото/видео отчетом." +
                    "- поставить пометку \"ПРО\""
            },
            {
                title: "Конференции и форумы",
                description: "разводная страница с общей информацией о разделе и разделением вглубь на \"конференции и форумы\" с возможностью перехода на каждый подраздел" +
                    "- подраздел \"конференции\" страница с перечнем всех конференций и возможностью перехода на страницу каждой отдельной конференции" +
                    "- подраздел \"форумы\" страница с перечнем всех форумов и возможностью перехода на страницу каждой отдельного форума" +
                    "- поставить пометку \"ПРО\""
            }
        ]
    },
    {
        title: "Бахрушинский детям",
        description: "Разводная страница с разделами.",
        subtitle: [
            {
                title: "Детский центр",
                description: "Описательная страница с информацией о детском центре, его возможностях и программах, контакты, карта с указанием где находится."
            },
            {
                title: "Мастер-классы",
                description: "Страница со всеми текущими мастер-классами (как в разделе события)"
            },
            {
                title: "Экскурсии",
                description: "Страница со всеми текущими экскурсиями (как в разделе события)"
            },
            {
                title: "Игротека (Не в MVP)",
                description: "Разводная страница с разными квизами/тестами для детей на театральную тематику, переход на страницу каждого отдельного квиза."
            }
        ]
    },
    {
        title: "Театральная лаболатория",
        description: "Описательную страницу, где рассказывается о театральной лаборатории, сотрудничестве с вузами, есть форма обратной связи и контакты театральной лаборатории, карта яндекс с указанием, где находится."
    },
    {
        title: "Бахрушинский онлайн",
        description: "Разводная страница с разделами.",
        subtitle: [
            {
                title: "ГОРОД | ТЕАТР",
                description: "Описательная страница о городе|театре, его философии. В центре 3D карта, которую отрисовывала навигация с номерами зданий (при навидении на объект открывается всплывашка с краткой информацией, при клике на объект переход на страницу того или иного здания), также есть список всех зданий с разделение на \"Бахрушинский квартал\" и \"Филиалы\" "
            },
            {
                title: "Виртуальные туры (Не в MVP)",
                description: "Разводная страница со всеми созданными турами, при клике на тур, переход на страницу тура в биганто.",
            },
            {
                title: "Лекции онлайн",
                description: "- разводная страница с двумя направлениями: \"Онлайн-трансляции\" и \"Видео-лекции\"" +
                    "- страница \"Онлайн-трансляции\" - описательная страница, где дается вся информация об онлайн лекциях в живом режиме через вебинарную комнату (тех.подробности, наименование платформы и инструкция по ее использованию, контакты, возможность выбрать мероприятие и купить билет/оставить заявку на мероприятие)" +
                    "-  страница  \"Видео-лекции\" разводная страница с разными лекционными циклами в записи, при клике на цикл переход на новую страницу (открывается страница со списком лекций в цикле и возможность просмотра)"
            },
            {
                title: "Сериал \"Бахрушин\"",
                description: "Страница с выложенными сериями, возможность просмотра и быстрого переключения между ними"
            },
            {
                title: "Telegram",
                description: "telegram"
            },
            {
                title: "ВКонтакте",
                description: "ВКонтакте"
            },
            {
                title: "Одноклассники",
                description: "Одноклассники"
            },
            {
                title: "Rutube",
                description: "Rutube"
            },
            {
                title: "Youtube",
                description: "Youtube"
            }
        ]
    },
    {
        title: "Про театр",
        description: "Разводная страница с разделами.",
        subtitle: [
            {
                title: "Ассоциация театральных музеев России",
                description: "- разводная страница с описанием деятельности ассоциации, приветственным словом директора, целями и задачами ассоциации, контактами, документами, кнопкой \"Вступить\" в Ассоциацию." +
                    "- ниже меню с разделами:",
                subTitle: [
                    {
                        title: "Театральные музеи и Архивы",
                        description: "Переход на сайт-сателлит",
                    },
                    {
                        title: "Театральный словарь",
                        description: "Cтраница театрально словаря, как в Википедия. Из алфавита можно выбрать букву, выбрать слово или через поисковую строку сразу найти нужное слово. Для каждого слова своя страничка с текстовым описанием и фотографией",
                    },
                    {
                        title: "Экспозиции и Выставки в музеях театров",
                        description: "Информации нет"
                    },
                    {
                        title: "Семинары, мастер-классы, круглые столы",
                        description: "Информации нет"
                    },
                    {
                        title: "Школа музейного дела",
                        description: "Информации нет"
                    },
                    {
                        title: "Стажировки",
                        description: "Информации нет"
                    },
                ]
            },
            {
                title: "Русские Драматурги (Не в MVP)",
                description: "Переход на сайт-сателлит русские драматурги"
            },
            {
                title: "ИА \"ПРОтеатр\"",
                description: "Переход на сайт-сателлит медиа"
            }
        ]
    },
    {
        title: "Поддержать музей",
        description: "Разводная страница с разделами.",
        subtitle: [
            {
                title: "Сделать пожертвование",
                description: "Техническая страница с возможностью сделать пожертвование"
            },
            {
                title: "Стать волонтером",
                description: "описательная страница о том, как можно стать волонтером, контакты, форма обратной связи, ответы на вопросы."
            },
            {
                title: "Попечительский совет (Не в MVP)",
                description: "Описание деятельности попечительского совета, состав попечительского совета"
            },
            {
                title: "Фонд развития Бахрушинского музея",
                description: "- перелинковка на отдельный сайт-сателлит с 3мя разделами: Проекты, О фонде, Контакты."
            },
            {
                title: "Корпоративные программы (Не в MVP)",
                description: "Описательная страница с возможными программ для компаний, контактами отдела по работе с партнерами."
            },
            {
                title: "Сотрудничество",
                description: "Описательная страница \"Купить изображение\"- описательная страница \"Организация мероприятий\" (на площадке музея или сторонних площадках) - описательная страница \"Багетная мастерская\" с формой обратной связи."
            }
        ]
    }
]