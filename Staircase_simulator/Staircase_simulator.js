function Staircase_simulator(ctx, buttonData) {

    if (buttonData === "staircase_simulator") {
        ctx.replyWithAudio({
            source: 'audio/audio.ogg'
        });
        ctx.replyWithPhoto('https://sun1-22.userapi.com/s/v1/if1/a15ffZf07ZimednrWyzsG568wAQc_mh5zfW-sLbeHl2xp6V0l4s1yuoXH-2nWL2MROj4LW4I.jpg?size=702x944&quality=96&crop=33,33,702,944&ava=1', {
            caption: 'Вот ваша картинка!',
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "Дальше", callback_data: "lesson_1" }
                ],
              ],
            },
        });
    }
}

export default Staircase_simulator;