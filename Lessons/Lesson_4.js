// Ключь, Челюстка, Подчашие, Скамейци и два вида Палок

function Lesson_4(ctx, buttonData) {
    if (buttonData === "lesson_4") {
        ctx.reply(
            `🎼 *УРОК 4* 🎵\n\n` +
            `✨ *Твой первый платный урок!* ✨\n\n` +
            `Сегодня ты познакомишься с удивительными знамёнами:\n` +
            `🔑 *Ключь*\n` +
            `🦷 *Челюстка*\n` +
            `🍵 *Подчашие*\n` +
            `🪑 *Скамейци*\n` +
            `〰️ *Два вида Палок*\n\n` +
            `Готов окунуться в мир древнерусской музыкальной нотации?`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [[
                        { text: "Продолжить ➡️", callback_data: "Further_4_1" }
                    ]],
                },
            }
        );
    }

    if (buttonData === "Further_4_1") {
        ctx.replyWithPhoto('https://i.postimg.cc/MpH4b1pT/2025-08-05-17-19-19.png', {
            caption: `🔑 *Ключь*\n\n` +
                `Одно из основных знамён в крюковой нотации\n` +
                `📝 *Обозначает:* 1 звук в размере 4/4\n` +
                `🎚 *Особенность:* Базовая фигура, часто встречается`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Далее ➡️', callback_data: 'Further_4_2' }
                ]]
            }
        });
    }

    if (buttonData === "Further_4_2") {
        return ctx.replyWithPhoto('https://i.postimg.cc/cHR54mXD/2025-08-05-17-20-30.png', {
            caption: `🦷 *Челюстка*\n\n` +
                `Интересное знамя, напоминающее зубы\n` +
                `📝 *Обозначает:* 1 звук в размере 4/4\n` +
                `🎚 *Особенность:* Используется в определенных распевах`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить ➡️', callback_data: 'Further_4_3' }
                ]]
            }
        });
    }

    if (buttonData === "Further_4_3") {
        return ctx.replyWithPhoto('https://i.postimg.cc/zG9yqSLH/2025-08-05-17-30-13.png', {
            caption: `〰️ *Палка воздёрнутая*\n\n` +
                `Простое, но важное знамя\n` +
                `📝 *Обозначает:* 1 звук в размере 4/4\n` +
                `🎚 *Особенность:* Базовая вертикальная черта`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Далее ➡️", callback_data: "Further_4_4" }
                ]],
            },
        });
    }

    if (buttonData === "Further_4_4") {
        return ctx.replyWithPhoto('https://i.postimg.cc/brCvWQcJ/2025-08-05-17-28-54.png', {
            caption: `〰️➕ *Палка воздёрнутая с подвёрткой*\n\n` +
                `Усложненный вариант палки\n` +
                `📝 *Обозначает:* 4 звука по 1/4 в скачковом порядке\n` +
                `🎚 *Особенность:* Добавлены дополнительные элементы`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Продолжить ➡️', callback_data: 'Further_4_5' }
                ]]
            }
        });
    }

    if (buttonData === "Further_4_5") {
        return ctx.replyWithPhoto('https://i.postimg.cc/W1dX5hY6/2025-08-05-22-49-22.png', {
            caption: `🪑 *Скамейца*\n\n` +
                `Знамя, напоминающее скамью\n` +
                `📝 *Обозначает:* 2 звука по 1/4 вверх\n` +
                `🎚 *Особенность:* Направление движения важно!`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Далее ➡️", callback_data: "Further_4_6" }
                ]],
            },
        });
    }

    if (buttonData === "Further_4_6") {
        return ctx.replyWithPhoto('https://i.postimg.cc/1ts01tBd/2025-08-05-22-50-19.png', {
            caption: `🪑🔇 *Скамейца тихая*\n\n` +
                `Модификация обычной скамейцы\n` +
                `📝 *Обозначает:* 2 звука по 1/2 вверх\n` +
                `🎚 *Особенность:* Более протяженные звуки`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Продолжить ➡️", callback_data: "Further_4_7" }
                ]],
            },
        });
    }

    if (buttonData === "Further_4_7") {
        return ctx.replyWithPhoto('https://i.postimg.cc/x19bd7Mk/2025-08-05-22-53-25.png', {
            caption: `🪑⬇️ *Скамейца с борзой пометой*\n\n` +
                `Еще одна вариация скамейцы\n` +
                `📝 *Обозначает:* 2 звука по 1/4 вниз\n` +
                `🎚 *Особенность:* Обратное направление движения`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Завершить урок", callback_data: "Further_4_8" }
                ]],
            },
        });
    }

    if (buttonData === "Further_4_8") {
        return ctx.replyWithPhoto('https://i.postimg.cc/ryY5mPyD/2025-08-06-09-15-01.png', {
            caption: `🎉 *Урок 4 завершён!* 🎊\n\n` +
                `Ты отлично поработал(а)! Вот что ты освоил(а):\n` +
                `- 6 основных знамён крюковой нотации\n` +
                `- Их значения и особенности\n\n` +
                `📚 *Что дальше?*\n` +
                `1. Повтори материал по табличке\n` +
                `2. Пройди тест для закрепления\n` +
                `3. Или переходи к следующему уроку!`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📚 К урокам", callback_data: "lessons" },
                        { text: "📝 Пройти тест", callback_data: "button_test" }
                    ]
                ],
            },
        });
    }
};

export default Lesson_4;