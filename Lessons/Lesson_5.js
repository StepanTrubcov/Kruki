//Дербица, Переводки, Голубчики, Чашки

function Lesson_5(ctx, buttonData) {
    if (buttonData === "lesson_5") {
        ctx.reply(
            `🎵 *УРОК 5* | Знаменное пение\n\n` +
            `✨ *Сегодня вас ждёт знакомство с удивительными знамёнами:*\n\n` +
            `🪶 *Дербица* - стремительное движение\n` +
            `🔄 *Переводки* - различные варианты\n` +
            `🕊️ *Голубчики* - лёгкие и воздушные\n` +
            `☕ *Чашки* - глубокие и наполненные\n\n` +
            `Готовы погрузиться в мир древнерусской музыкальной нотации?`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [[
                        { text: "Начать изучение ➡️", callback_data: "Further_5_1" }
                    ]],
                },
            }
        );
    }

    if (buttonData === "Further_5_1") {
        return ctx.replyWithPhoto('https://i.postimg.cc/WzF1Dt9H/2025-08-06-08-23-02.png', {
            caption: `🪶 *Дербица*\n\n` +
                     `Восходящее движение звуков\n` +
                     `🎶 *Ритмика:* 4 звука по 1/4\n` +
                     `⬆️ *Направление:* Все звуки вверх\n` +
                     `💡 *Особенность:* Создает эффект устремлённости`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить ➡️', callback_data: 'Further_5_2' }
                ]]
            }
        });
    }

    if (buttonData === "Further_5_2") {
        return ctx.replyWithPhoto('https://i.postimg.cc/GtVJY8b8/2025-08-06-08-35-24.png', {
            caption: `🔄 *Переводка с борзой пометой*\n\n` +
                     `Быстрое движение звуков\n` +
                     `🎶 *Ритмика:* 2 звука по 1/4\n` +
                     `⬆️ *Направление:* Восходящее\n` +
                     `⚡ *Особенность:* "Борзая" означает быстрое исполнение`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Далее ➡️', callback_data: 'Further_5_3' }
                ]]
            }
        });
    }

    if (buttonData === "Further_5_3") {
        return ctx.replyWithPhoto('https://i.postimg.cc/JhrYc2fb/2025-08-06-08-25-26.png', {
            caption: `🔄 *Переводка с пометою ломка*\n\n` +
                     `Особая разновидность переводки\n` +
                     `🎶 *Ритмика:* 2 звука по 1/4\n` +
                     `⬆️ *Направление:* Восходящее\n` +
                     `✂️ *Особенность:* "Ломка" указывает на резкую смену направления`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Изучить следующий знак ➡️", callback_data: "Further_5_4" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_4") {
        return ctx.replyWithPhoto('https://i.postimg.cc/50ZmG7RK/2025-08-06-08-28-04.png', {
            caption: `🔄☕ *Переводка с подчашием и пометою ломка*\n\n` +
                     `Комбинированный знак\n` +
                     `🎶 *Ритмика:* 3 звука (1/4 + 1/4 + 1/4)\n` +
                     `⬆️⬇️ *Направление:* Вверх-вверх-вниз\n` +
                     `🧩 *Особенность:* Сочетает элементы переводки и подчашия`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить изучение ➡️', callback_data: 'Further_5_5' }
                ]]
            }
        });
    }

    if (buttonData === "Further_5_5") {
        return ctx.replyWithPhoto('https://i.postimg.cc/Wzqsp3Sb/2025-08-06-08-42-48.png', {
            caption: `🔄 *Переводка с пометою ударка*\n\n` +
                     `Ниcходящее движение\n` +
                     `🎶 *Ритмика:* 3 звука по 1/4\n` +
                     `⬇️ *Направление:* Все звуки вниз\n` +
                     `🥁 *Особенность:* "Ударка" указывает на акцентированное исполнение`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Следующий знак ➡️", callback_data: "Further_5_6" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_6") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YfGW7.png', {
            caption: `🔄 *Ещё один вариант переводки*\n\n` +
                     `Альтернативное начертание\n` +
                     `🎶 *Ритмика:* 3 звука по 1/4\n` +
                     `⬇️ *Направление:* Нисходящее\n` +
                     `📜 *Особенность:* Вариация с другим графическим изображением`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Перейти к голубчикам ➡️", callback_data: "Further_5_7" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_7") {
        return ctx.replyWithPhoto('https://i.postimg.cc/Kjsj8wnx/2025-08-06-08-50-08.png', {
            caption: `🕊️ *Голубчик борзый*\n\n` +
                     `Лёгкое и быстрое движение\n` +
                     `🎶 *Ритмика:* 2 звука по 1/4\n` +
                     `⬆️ *Направление:* Восходящее\n` +
                     `💨 *Особенность:* "Борзый" означает быстрое, стремительное исполнение`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Изучить следующий вариант ➡️", callback_data: "Further_5_8" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_8") {
        return ctx.replyWithPhoto('https://i.postimg.cc/cJZx00Vf/2025-08-06-08-50-40.png', {
            caption: `🕊️ *Голубчик тихий*\n\n` +
                     `Мягкое и плавное движение\n` +
                     `🎶 *Ритмика:* 2 звука по 1/2\n` +
                     `⬆️ *Направление:* Восходящее\n` +
                     `🔇 *Особенность:* "Тихий" означает более протяжное исполнение`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Перейти к чашкам ➡️", callback_data: "Further_5_9" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_9") {
        return ctx.replyWithPhoto('https://i.postimg.cc/GmRthFDB/2025-08-06-08-51-37.png', {
            caption: `☕ *Чашка*\n\n` +
                     `Напоминает форму чаши\n` +
                     `🎶 *Ритмика:* 2 звука по 1/4\n` +
                     `⬇️ *Направление:* Нисходящее\n` +
                     `🍵 *Особенность:* Создает эффект "переливания" звуков`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Изучить вариацию ➡️", callback_data: "Further_5_10" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_10") {
        return ctx.replyWithPhoto('https://i.postimg.cc/GmRthFDB/2025-08-06-08-51-37.png', {
            caption: `☕ *Чашка с пометою ломка*\n\n` +
                     `Модификация обычной чашки\n` +
                     `🎶 *Ритмика:* 2 звука по 1/4\n` +
                     `⬆️ *Направление:* Восходящее\n` +
                     `⚡ *Особенность:* "Ломка" придаёт резкость звучанию`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Последний знак урока ➡️", callback_data: "Further_5_11" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_11") {
        return ctx.replyWithPhoto('https://i.postimg.cc/jdc0PP9n/2025-08-06-08-55-10.png', {
            caption: `☕ *Чашка "полная"*\n\n` +
                     `Наиболее насыщенный вариант\n` +
                     `🎶 *Ритмика:* 1 звук 1/2 + 2 звука 1/4\n` +
                     `⬇️ *Направление:* Все звуки вниз\n` +
                     `🌊 *Особенность:* Создает эффект "переполненной" мелодии`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Завершить урок", callback_data: "Further_5_12" }
                ]],
            },
        });
    }

    if (buttonData === "Further_5_12") {
        return ctx.replyWithPhoto('https://i.postimg.cc/ryY5mPyD/2025-08-06-09-15-01.png', {
            caption: `🎉 *Урок 5 успешно завершён!* 🎊\n\n` +
                     `Вы освоили 8 важных знамён:\n` +
                     `- 3 вида переводок\n` +
                     `- 2 вида голубчиков\n` +
                     `- 3 вида чашек\n\n` +
                     `📚 *Рекомендации для закрепления:*\n` +
                     `1. Просмотрите таблицу всех знамён\n` +
                     `2. Попробуйте пропеть примеры\n` +
                     `3. Пройдите тест для проверки знаний\n\n` +
                     `Вы делаете большие успехи в изучении крюковой нотации!`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📚 К списку уроков", callback_data: "lessons" },
                        { text: "✍️ Пройти тест", callback_data: "button_test" }
                    ],
                    [
                        { text: "🔄 Повторить урок", callback_data: "lesson_5" }
                    ]
                ],
            },
        });
    }
};

export default Lesson_5;