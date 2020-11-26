// Игровой бот.
// "Загадывание случайного числа от 1 до 100"
'use strict';
// Проверка числа
const isNumber = ((x) => {
    return !isNaN(parseFloat(x)) && isFinite(parseFloat(x));
});
// Генератор целых чисел
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const init = (() => {
    const numSecret = getRandomInt(101);
    const userAnswers = [];
    let i = 0;    

    const botGame = (() => {
    const botQuestions = (() => {
        userAnswers[i] = parseInt(userAnswers[i]);
        userAnswers[i] === numSecret ? alert ('Поздравляю! Ты угадал!') : 
        userAnswers[i] > numSecret ? alert (` Не угадал мое число меньше, попробуй снова!
        Твои ответы: ${userAnswers.join(' ')}`) :
        alert (` Не угадал мое число больше, попробуй снова!
        Твои ответы: ${userAnswers.join(' ')}`);
        i++;
    });

    const notNum = (() => {
        alert ('Нужно вводить только числа, попробуй снова!');
        userAnswers[i] = prompt ('Попробуй угадай :)) Напиши число от 1 до 100', '1');
        if (!isNumber(userAnswers[i])) { 
            notNum(userAnswers[i]);
        } else { botQuestions(); }
    });
    
    userAnswers[i] = prompt ('Попробуй угадай :)) Напиши число от 1 до 100', '1');

    if (userAnswers[i] !== null) {
        if (!isNumber(userAnswers[i])) { 
            notNum(userAnswers[i]);
        } else { botQuestions(); }

        botGame ();
    } else return alert (`Твои ответы: ${userAnswers.join(' ')}`);    
    });

    confirm (` Привет! Давай играть в угадайку :) 
    Я загадываю число от 1 до 100, а ты угадываешь, готов?`) ? 
    botGame () :
    alert ('Очень жаль, надеюсь, ты скоро вернешся :.(');
    
    console.log (numSecret);
    console.log (userAnswers);
    console.dir (botGame);
});

init();
console.dir (init);