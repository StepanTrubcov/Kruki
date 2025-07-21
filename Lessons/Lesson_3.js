function Lesson_3(ctx, buttonData) {

    if (buttonData === "lesson_3") {
        ctx.reply('УРОК ТРЕТИЙ.\nВ этом уроке мы продолжим изучать основные крюки, такие как стопицы, запитыи и палки.' ,
            {
                reply_markup: {
                    inline_keyboard: [[{ text: "Дальше", callback_data: "Further_3_1" }]],
                },
            }
        );
    }

    if (buttonData === "Further_3_1") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.32.29.png', {
            caption: 'Название знамени: Стопица; 1 звук c длительностью 1/2',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_2' }
                    ]
                ]
            }
        });
    }

    if (buttonData === "Further_3_2") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YrXDC.png', {
            caption: 'Название знамени: Стопица с отсечкой; 1 звук c длительностью 1/4',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_3' }
                    ]
                ]
            }
        });
    }

    if (buttonData === "Further_3_3") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.35.24.png', {
            caption: 'Название знамени: Стопица с очком; 2 звука вниз по 1/4',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_4' }
                    ]
                ]
            }
        });
    }

    if (buttonData === "Further_3_4") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YrXJF.png', {
            caption: 'Название знамени: Запятая; 1 звук c длительностью 1/2',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_5' }
                    ]
                ]
            }
        });
    }

    if (buttonData === "Further_3_5") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YrXJZ.png', {
            caption: 'Название знамени: Запятая с отсечкой; 1 звук c длительностью 1/4',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_6' }
                    ]
                ]
            }
        });
    }

    if (buttonData === "Further_3_6") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.50.49.png', {
            caption: 'Название знамени: Палка; 1 звук c длительностью 1/2',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_7' }
                    ]
                ]
            }
        });
    }
    if (buttonData === "Further_3_7") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.51.24.png', {
            caption: 'Название знамени: Палка с отсечкой; 1 звук c длительностью 1/4',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_8' }
                    ]
                ]
            }
        });
    }
    if (buttonData === "Further_3_8") {
        return ctx.replyWithPhoto('https://ltdfoto.ru/images/2025/04/07/SNIMOK-EKRANA-2025-04-07-V-17.52.31.png', {
            caption: 'Название знамени: Палка с подвёрткой; 2 звук вниз по 1/4',
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Дальше', callback_data: 'Further_3_9' }
                    ]
                ]
            }
        });
    }

    
    if (buttonData === "Further_3_9") {
        return ctx.replyWithPhoto('https://i.yapx.ru/YgABc.png', {
            caption:'Третий урок окончен!!!) \nТы большой молодец!!! В этом уроке ты узнал 8 знамён) Это табличка со всеми знамёнами из этого урока. Для закрепления просмотри урок ещё раз! Также пройди тест к этому уроку, чтобы проверить как ты его запомнил!!!)',
                reply_markup: {
                    inline_keyboard: [[{ text: "Следущий урок", callback_data: "lessons" },{ text: "Пройти тест", callback_data: "button_test" }]],
                },
            }
        );
    }
};

export default Lesson_3;