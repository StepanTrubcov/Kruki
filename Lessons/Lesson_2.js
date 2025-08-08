//Крюк и Параклит

function Lesson_2(ctx, buttonData) {
    if (buttonData === "lesson_2") {
        ctx.reply(
            `🎼 *УРОК 2: ПЕРВЫЕ ШАГИ В МИРЕ КРЮКОВ* 🪝\n\n` +
            `Сегодня мы начнём изучать основные знамёна древнерусского пения - крюки!\n\n` +
            `🔍 Но сначала важно понять, как обозначается *длительность звучания* знамени.`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [[
                        { text: "Начать изучение ➡️", callback_data: "Further_2_1" }
                    ]],
                },
            }
        );
    }

    if (buttonData === "Further_2_1") {
        ctx.reply(
            `⏱ *ДЛИТЕЛЬНОСТЬ ЗВУКА: РИТМ ДРЕВНЕРУССКОГО ПЕНИЯ* 🎵\n\n` +
            `Длительность показывает, *как долго* поётся знамя. Её можно даже прохлопать в ладоши!\n\n` +
            `📊 *Обозначения длительностей:*\n` +
            `◾ 4/4 - 4 удара (целая нота)\n` +
            `◾ 1/2 - 2 удара (половинная)\n` +
            `◾ 1/4 - 1 удар (четвертная)\n` +
            `◾ 1/8 - пол-удара (восьмая)\n\n` +
            `🎶 Попробуйте прохлопать эти ритмы!`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [[
                        { text: "Изучить первый крюк ➡️", callback_data: "Further_2_2" }
                    ]],
                },
            }
        );
    }

    if (buttonData === "Further_2_2") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YfG3z.png', {
            caption: `🪝 *ОСНОВНОЙ КРЮК* (простой)\n\n` +
                     `📝 *Описание:* Базовое знамя в крюковой нотации\n` +
                     `🎶 *Длительность:* 1/2 (2 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Основа всех последующих вариаций`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Следующий вариант ➡️', callback_data: 'Further_2_3' }
                ]]
            }
        });
    }

    if (buttonData === "Further_2_3") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YfG8O.png', {
            caption: `🪝✂️ *КРЮК С ОТСЕЧКОЙ*\n\n` +
                     `📝 *Описание:* Модификация простого крюка\n` +
                     `🎶 *Длительность:* 1/4 (1 удар)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Отсечка сокращает длительность звука`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить ➡️', callback_data: 'Further_2_4' }
                ]]
            }
        });
    }

    if (buttonData === "Further_2_4") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf9cT.png', {
            caption: `🪝⏳ *КРЮК С ЗАДЕРЖКОЙ*\n\n` +
                     `📝 *Описание:* Протяжная версия крюка\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Задержка увеличивает длительность`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Новая вариация ➡️', callback_data: 'Further_2_5' }
                ]]
            }
        });
    }

    if (buttonData === "Further_2_5") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf9e8.png', {
            caption: `🪝⚡ *КРЮК С ЛОМКОЙ*\n\n` +
                     `📝 *Описание:* Крюк с изменением направления\n` +
                     `🎶 *Длительность:* 2×1/4 (по 1 удару)\n` +
                     `🎵 *Звуков:* 2 (вверх)\n` +
                     `💡 *Особенность:* "Ломка" означает резкий переход`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Изучить следующий ➡️", callback_data: "Further_2_6" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_6") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf9iA.png', {
            caption: `🪝☕ *КРЮК С ПОДЧАШИЕМ*\n\n` +
                     `📝 *Описание:* Крюк с дополнительным элементом\n` +
                     `🎶 *Длительность:* 2×1/2 (по 2 удара)\n` +
                     `🎵 *Звуков:* 2 (вниз)\n` +
                     `💡 *Особенность:* Напоминает форму чаши`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Продолжим? ➡️", callback_data: "Further_2_7" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_7") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf9qK.png', {
            caption: `🪝🌀 *КРЮК С ПОДВЁРТКОЙ*\n\n` +
                     `📝 *Описание:* Крюк с закруглённым элементом\n` +
                     `🎶 *Длительность:* 2×1/4 (по 1 удару)\n` +
                     `🎵 *Звуков:* 2 (вниз)\n` +
                     `💡 *Особенность:* "Подвёртка" создаёт плавность`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Перейти к параклитам ➡️", callback_data: "Further_2_8" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_8") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf90P.png', {
            caption: `🕊️ *ПАРАКЛИТ* (простой)\n\n` +
                     `📝 *Описание:* Особый вид знамени\n` +
                     `🎶 *Длительность:* 1/2 (2 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Название означает "Утешитель"`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Следующая вариация ➡️", callback_data: "Further_2_9" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_9") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf91H.png', {
            caption: `🕊️✂️ *ПАРАКЛИТ С ОТСЕЧКОЙ*\n\n` +
                     `📝 *Описание:* Короткая версия параклита\n` +
                     `🎶 *Длительность:* 1/4 (1 удар)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Исполняется более отрывисто`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Продолжить ➡️", callback_data: "Further_2_10" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_10") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf92z.png', {
            caption: `🕊️⏳ *ПАРАКЛИТ С ЗАДЕРЖКОЙ*\n\n` +
                     `📝 *Описание:* Протяжная версия параклита\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Создает эффект "парения" звука`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Ещё вариации ➡️", callback_data: "Further_2_11" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_11") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf94S.png', {
            caption: `🕊️☕ *ПАРАКЛИТ С ПОДЧАШИЕМ*\n\n` +
                     `📝 *Описание:* Параклит с дополнительным элементом\n` +
                     `🎶 *Длительность:* 2×1/2 (по 2 удара)\n` +
                     `🎵 *Звуков:* 2 (вниз)\n` +
                     `💡 *Особенность:* Сочетает черты параклита и чаши`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Последний знак урока ➡️", callback_data: "Further_2_12" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_12") {
        return ctx.replyWithPhoto('https://i.yapx.ru/Yf94u.png', {
            caption: `🕊️🌀 *ПАРАКЛИТ С ПОДВЁРТКОЙ*\n\n` +
                     `📝 *Описание:* Плавная версия параклита\n` +
                     `🎶 *Длительность:* 2×1/4 (по 1 удару)\n` +
                     `🎵 *Звуков:* 2 (вниз)\n` +
                     `💡 *Особенность:* Закруглённый элемент придаёт мягкость`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Завершить урок ➡️", callback_data: "Further_2_13" }
                ]],
            }
        });
    }

    if (buttonData === "Further_2_13") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YgABc.png', {
            caption: `🎉 *УРОК 2 УСПЕШНО ЗАВЕРШЁН!* 🎊\n\n` +
                     `Вы изучили 11 важных знамён древнерусского пения!\n\n` +
                     `📚 *Сегодня вы узнали:*\n` +
                     `- 6 видов крюков\n` +
                     `- 5 видов параклитов\n` +
                     `- Принципы длительности звуков\n\n` +
                     `💡 *Рекомендации:*\n` +
                     `1. Просмотрите таблицу всех знамён\n` +
                     `2. Попробуйте пропеть примеры\n` +
                     `3. Пройдите тест для закрепления`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📚 К урокам", callback_data: "lessons" },
                        { text: "✍️ Пройти тест", callback_data: "button_test" }
                    ],
                    [
                        { text: "🔄 Повторить урок", callback_data: "lesson_2" }
                    ]
                ],
            }
        });
    }
};

export default Lesson_2;