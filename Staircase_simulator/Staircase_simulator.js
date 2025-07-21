import {Audio} from '../Function/Funtion.js'

function Staircase_simulator(ctx, buttonData) {

    if (buttonData === "staircase_simulator") {
        ctx.replyWithPhoto('https://sun1-22.userapi.com/s/v1/if1/a15ffZf07ZimednrWyzsG568wAQc_mh5zfW-sLbeHl2xp6V0l4s1yuoXH-2nWL2MROj4LW4I.jpg?size=702x944&quality=96&crop=33,33,702,944&ava=1', {
            caption: 'Это тренажёр лестницы! \nСнизу выбери нужное аудио для тренировки. Прослушай его и повтори!!!',
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "Лестница", callback_data: "Ladder" },
                  { text: "Высокая лестница", callback_data: "High_Staircase" }
                ],
                [
                  { text: "Ут Ми Соль", callback_data: "Ut" },
                  { text: "Ре Фа Ля", callback_data: "Re" }
                ], [
                  { text: "Назад", callback_data: "start" },
                ],
              ],
            },
        });
    }

    let audio = {
      Ladder:'audio/Ladder.ogg',
      High_Staircase:'audio/1.ogg',
      Ut:'audio/1.ogg',
      Re:'audio/1.ogg'
    }

    if(buttonData === 'Ladder'){
      Audio(ctx,audio.Ladder)
    } else if(buttonData === 'High_Staircase'){
      Audio(ctx,audio.High_Staircase)
    } else if(buttonData === 'Ut'){
      Audio(ctx,audio.Ut)
    } else if(buttonData === 'Re'){
      Audio(ctx,audio.Re)
    }

}

export default Staircase_simulator;