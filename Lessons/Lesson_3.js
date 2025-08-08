//стопицы, запитыи и палки

function Lesson_3(ctx, buttonData) {
    if (buttonData === "lesson_3") {
        ctx.reply(
            `🎼 *УРОК 3: ПРОДОЛЖАЕМ ИЗУЧАТЬ ОСНОВНЫЕ ЗНАМЁНА* 🪶\n\n` +
            `Сегодня мы познакомимся с новыми удивительными знамёнами:\n\n` +
            `⏸️ *Стопицы* - знаки остановки и паузы\n` +
            `✒️ *Запятые* - плавные переходы\n` +
            `〰️ *Палки* - базовые элементы нотации\n\n` +
            `Готовы расширить свои знания в крюковом пении?`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [[
                        { text: "Начать изучение ➡️", callback_data: "Further_3_1" }
                    ]],
                },
            }
        );
    }

    if (buttonData === "Further_3_1") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.32.29.png', {
            caption: `⏸️ *СТОПИЦА* (основная)\n\n` +
                     `📝 *Описание:* Знак остановки или паузы\n` +
                     `🎶 *Длительность:* 1/2 (2 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Создает эффект "задержки" в пении`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Следующая вариация ➡️', callback_data: 'Further_3_2' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_2") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YrXDC.png', {
            caption: `⏸️✂️ *СТОПИЦА С ОТСЕЧКОЙ*\n\n` +
                     `📝 *Описание:* Короткая пауза\n` +
                     `🎶 *Длительность:* 1/4 (1 удар)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Используется для ритмического разнообразия`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить ➡️', callback_data: 'Further_3_3' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_3") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.35.24.png', {
            caption: `⏸️👁️ *СТОПИЦА С ОЧКОМ*\n\n` +
                     `📝 *Описание:* Стопица с дополнительным элементом\n` +
                     `🎶 *Длительность:* 2×1/4 (по 1 удару)\n` +
                     `🎵 *Звуков:* 2 (вниз)\n` +
                     `💡 *Особенность:* "Очко" указывает на изменение направления`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Перейти к запятым ➡️', callback_data: 'Further_3_4' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_4") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YrXJF.png', {
            caption: `✒️ *ЗАПЯТАЯ* (основная)\n\n` +
                     `📝 *Описание:* Плавный переходный знак\n` +
                     `🎶 *Длительность:* 1/2 (2 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Напоминает форму письменной запятой`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Следующий вариант ➡️', callback_data: 'Further_3_5' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_5") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YrXJZ.png', {
            caption: `✒️✂️ *ЗАПЯТАЯ С ОТСЕЧКОЙ*\n\n` +
                     `📝 *Описание:* Короткая версия запятой\n` +
                     `🎶 *Длительность:* 1/4 (1 удар)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Создает более отрывистое звучание`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить ➡️', callback_data: 'Further_3_6' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_6") {
        return ctx.replyWithPhoto('https://i.postimg.cc/hjYYJ6c0/2025-08-05-16-52-37.png', {
            caption: `✒️⛪ *ЗАПЯТАЯ С КРЫЖЕМ*\n\n` +
                     `📝 *Описание:* Запятая с крестообразным элементом\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* "Крыж" указывает на особое духовное значение`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Перейти к палкам ➡️', callback_data: 'Further_3_7' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_7") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.50.49.png', {
            caption: `〰️ *ПАЛКА* (основная)\n\n` +
                     `📝 *Описание:* Простейший вертикальный знак\n` +
                     `🎶 *Длительность:* 1/2 (2 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* База для многих сложных знамён`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Следующая вариация ➡️', callback_data: 'Further_3_8' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_8") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.51.24.png', {
            caption: `〰️✂️ *ПАЛКА С ОТСЕЧКОЙ*\n\n` +
                     `📝 *Описание:* Короткая версия палки\n` +
                     `🎶 *Длительность:* 1/4 (1 удар)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Используется для ритмического рисунка`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Последний знак урока ➡️', callback_data: 'Further_3_9' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_9") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.52.31.png', {
            caption: `〰️🌀 *ПАЛКА С ПОДВЁРТКОЙ*\n\n` +
                     `📝 *Описание:* Палка с закруглённым элементом\n` +
                     `🎶 *Длительность:* 2×1/4 (по 1 удару)\n` +
                     `🎵 *Звуков:* 2 (вниз)\n` +
                     `💡 *Особенность:* Создает плавное нисходящее движение`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Завершить урок ➡️', callback_data: 'Further_3_10' }
                ]]
            }
        });
    }

    if (buttonData === "Further_3_10") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YgABc.png', {
            caption: `🎉 *УРОК 3 УСПЕШНО ЗАВЕРШЁН!* 🎊\n\n` +
                     `Вы освоили 9 новых знамён древнерусского пения!\n\n` +
                     `📚 *Сегодня вы изучили:*\n` +
                     `- 3 вида стопиц\n` +
                     `- 3 вида запятых\n` +
                     `- 3 вида палок\n\n` +
                     `💡 *Рекомендации для закрепления:*\n` +
                     `1. Просмотрите сводную таблицу знамён\n` +
                     `2. Попробуйте пропеть примеры с разными длительностями\n` +
                     `3. Пройдите тест для проверки знаний\n\n` +
                     `Вы делаете прекрасные успехи в изучении крюковой нотации!`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📚 К урокам", callback_data: "lessons" },
                        { text: "✍️ Пройти тест", callback_data: "button_test" }
                    ],
                    [
                        { text: "🔄 Повторить урок", callback_data: "lesson_3" }
                    ]
                ],
            }
        });
    }
};

export default Lesson_3;