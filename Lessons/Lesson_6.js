//статьи простая и мрачная

function Lesson_6(ctx, buttonData) {
    if (buttonData === "lesson_6") {
        ctx.reply(
            `📜 *УРОК 6: ТАЙНЫ СТАТЕЙ ЗНАМЕННОГО РАСПЕВА* 🎶\n\n` +
            `Сегодня мы приоткроем завесу тайны над удивительными "статьями" - ` +
            `особыми знаками древнерусского церковного пения.\n\n` +
            `🔍 Вы узнаете:\n` +
            `- Простые и сложные статьи\n` +
            `- Мрачные статьи с различными элементами\n` +
            `- Секреты их музыкального исполнения`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [[
                        { text: "Начать погружение ➡️", callback_data: "Further_6_1" }
                    ]],
                },
            }
        );
    }

    if (buttonData === "Further_6_1") {
        return ctx.replyWithPhoto('https://i.postimg.cc/Y2JZM50T/2025-08-07-21-17-22.png', {
            caption: `📜 *СТАТЬЯ ПРОСТАЯ*\n\n` +
                     `Основа всех статейных знамён\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Чистое, непрерывное звучание\n` +
                     `📖 *История:* Самая древняя форма статьи`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Изучить следующую ➡️', callback_data: 'Further_6_2' }
                ]]
            }
        });
    }

    if (buttonData === "Further_6_2") {
        return ctx.replyWithPhoto('https://i.postimg.cc/SRWryttp/2025-08-07-21-18-21.png', {
            caption: `📜✒️ *СТАТЬЯ С ЗАПЯТОЙ*\n\n` +
                     `Украшенная версия простой статьи\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Запятая придаёт лёгкий изгиб звучанию\n` +
                     `📖 *Исполнение:* С небольшим "доводом" в конце`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'Далее ➡️', callback_data: 'Further_6_3' }
                ]]
            }
        });
    }

    if (buttonData === "Further_6_3") {
        return ctx.replyWithPhoto('https://i.postimg.cc/508vvQ5B/2025-08-07-21-20-46.png', {
            caption: `📜✝️ *СТАТЬЯ С КРЫЖЕМ*\n\n` +
                     `Статья с крестообразным элементом\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Крыж указывает на особое духовное значение\n` +
                     `📖 *Применение:* В важных местах богослужения`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Продолжить изучение ➡️", callback_data: "Further_6_4" }
                ]],
            }
        });
    }

    if (buttonData === "Further_6_4") {
        return ctx.replyWithPhoto('https://i.postimg.cc/CMHkxDxY/2025-08-07-21-23-14.png', {
            caption: `📜🌀 *СТАТЬЯ С ПОДВЁРТКОЙ И ТИХОЙ ПОМЕТОЙ*\n\n` +
                     `Усложнённая форма статьи\n` +
                     `🎶 *Длительность:* 1/4 + 4/4\n` +
                     `🎵 *Звуков:* 2\n` +
                     `⬆️ *Направление:* Плавное соединение\n` +
                     `💡 *Особенность:* "Тихая" помета означает мягкое звучание`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: 'К мрачным статьям ➡️', callback_data: 'Further_6_5' }
                ]]
            }
        });
    }

    if (buttonData === "Further_6_5") {
        return ctx.replyWithPhoto('https://i.postimg.cc/RFmhksft/2025-08-07-21-25-06.png', {
            caption: `🌑 *СТАТЬЯ МРАЧНАЯ* (основная)\n\n` +
                     `Особый вид статьи для печальных песнопений\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Создает "тёмное", глубокое звучание\n` +
                     `📖 *Применение:* Великопостные службы`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Следующая вариация ➡️", callback_data: "Further_6_6" }
                ]],
            }
        });
    }

    if (buttonData === "Further_6_6") {
        return ctx.replyWithPhoto('https://i.postimg.cc/Pf9sNL33/2025-08-07-21-31-17.png', {
            caption: `🌑 *СТАТЬЯ МРАЧНАЯ* (альтернативная)\n\n` +
                     `Другое начертание мрачной статьи\n` +
                     `🎶 *Длительность:* 4/4 (4 удара)\n` +
                     `🎵 *Звуков:* 1\n` +
                     `💡 *Особенность:* Более угловатая форма\n` +
                     `📖 *История:* Использовалась в северных традициях`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Продолжить ➡️", callback_data: "Further_6_7" }
                ]],
            }
        });
    }

    if (buttonData === "Further_6_7") {
        return ctx.replyWithPhoto('https://i.postimg.cc/WzntNGxg/2025-08-08-07-18-10.png', {
            caption: `🌑☁️ *СТАТЬЯ МРАЧНАЯ С ОБЛОЧКОМ*\n\n` +
                     `Украшенная мрачная статья\n` +
                     `🎶 *Длительность:* 1/2 + 1/4 + 1/4\n` +
                     `🎵 *Звуков:* 3 (2 одинаковых + 1 вверх)\n` +
                     `💡 *Особенность:* "Облочко" создаёт эффект облака\n` +
                     `📖 *Исполнение:* С постепенным подъёмом`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Изучить следующую ➡️", callback_data: "Further_6_8" }
                ]],
            }
        });
    }

    if (buttonData === "Further_6_8") {
        return ctx.replyWithPhoto('https://i.postimg.cc/vHR99qJC/2025-08-08-07-20-40.png', {
            caption: `🌑☕ *СТАТЬЯ МРАЧНАЯ С ПОДЧАШИЕМ*\n\n` +
                     `Мрачная статья с чашеобразным элементом\n` +
                     `🎶 *Длительность:* 1/2 + 1/4 + 1/4\n` +
                     `🎵 *Звуков:* 3 (вниз-вверх)\n` +
                     `💡 *Особенность:* Создает эффект "переливания"\n` +
                     `📖 *Применение:* Особо торжественные моменты поста`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Последняя статья урока ➡️", callback_data: "Further_6_9" }
                ]],
            }
        });
    }

    if (buttonData === "Further_6_9") {
        return ctx.replyWithPhoto('https://i.postimg.cc/jdrwCWNb/2025-08-08-07-22-29.png', {
            caption: `🌑⚡ *СТАТЬЯ МРАЧНАЯ С ПОДВЁРТКОЙ И БОРЗОЙ ПОМЕТОЙ*\n\n` +
                     `Самый сложный вариант мрачной статьи\n` +
                     `🎶 *Длительность:* 1/2 + 4/4 + 1/4\n` +
                     `🎵 *Звуков:* 3 (вверх-вниз)\n` +
                     `💡 *Особенность:* "Борзая" помета требует быстрого исполнения\n` +
                     `📖 *Мастерство:* Исполняется только опытными певчими`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [[
                    { text: "Завершить урок ➡️", callback_data: "Further_6_10" }
                ]],
            }
        });
    }

    if (buttonData === "Further_6_10") {
        return ctx.replyWithPhoto('https://i.postimg.cc/W4DF0w2Q/2025-08-08-07-36-37.png', {
            caption: `🎉 *УРОК 6 УСПЕШНО ЗАВЕРШЁН!* 🎊\n\n` +
                     `Вы освоили 9 уникальных статей знаменного распева!\n\n` +
                     `📚 *Сегодня вы изучили:*\n` +
                     `- 3 вида простых статей\n` +
                     `- 6 видов мрачных статей\n` +
                     `- Различные комбинации с дополнительными элементами\n\n` +
                     `💎 *Особые достижения:*\n` +
                     `- Поняли разницу между простыми и мрачными статьями\n` +
                     `- Узнали о значении дополнительных элементов\n\n` +
                     `📝 *Для закрепления:*\n` +
                     `1. Просмотрите сводную таблицу\n` +
                     `2. Попробуйте пропеть разные статьи\n` +
                     `3. Пройдите тест для проверки знаний`,
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📚 К урокам", callback_data: "lessons" },
                        { text: "✍️ Пройти тест", callback_data: "button_test" }
                    ],
                    [
                        { text: "🔄 Повторить урок", callback_data: "lesson_6" }
                    ]
                ],
            }
        });
    }
};

export default Lesson_6;