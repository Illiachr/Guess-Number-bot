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
// Функция инициализации бота
const init = (() => {
    const numSecret = getRandomInt(101), // Загадываем число
        numTries = 10;
    let userAnswerIsRight = false, // Флаг правильного ответа
        noTry = false, // Флаг "Нет попыток"
        userAnswers = [], // Массив ответов игрока
        i = 0; // Счетчик кол-ва ответов игрока

// бот
    const botGame = (() => {
// Функция проверки ответа
        const botQuestions = (() => {
            userAnswers[i] = parseInt(userAnswers[i]);

            if (userAnswers[i] === numSecret) { 
                alert ('Поздравляю! Ты угадал');
                userAnswerIsRight = true;
            } else if (userAnswers[i] > numSecret) {
                    if (i < numTries - 1) {
                        alert (` Не угадал мое число меньше, попробуй снова!
                        Осталось ${numTries-i-1} попыток
                        Твои ответы: ${userAnswers.join(' ')}`);
                        i++;
                    } else {
                        alert('К сожалению попыток больше не осталось...');
                        noTry = true;
                        }
                } else {
                    if (i < numTries - 1) {
                        alert (` Не угадал мое число больше, попробуй снова!
                        Осталось ${numTries-i-1} попыток
                        Твои ответы: ${userAnswers.join(' ')}`);
                        i++;
                    } else {
                        alert('К сожалению попыток больше не осталось...');
                        noTry = true;
                        }
                    }       
        });
// Функция варианта когда ввели не число
    const notNum = (() => {
        alert ('Нужно вводить только числа, попробуй снова!');
        userAnswers[i] = prompt ('Попробуй угадай :)) Напиши число от 1 до 100', '1');
        if (!isNumber(userAnswers[i])) { 
            notNum();
        } else { botQuestions(); }
    });
// Получаем ответ игрока    
    userAnswers[i] = prompt ('Попробуй угадай :)) Напиши число от 1 до 100', '1');
// Проверяем
    if (userAnswers[i-1] !== numSecret && userAnswers[i] !== null) {// Если не равно загаданному и нажали "Отмена"
    if (!isNumber(userAnswers[i])) { // Проверяем является ли ответ числом
        notNum(); // Если нет просим ввести ответ снова
    } else { botQuestions(); } // Если да - новая попытка

    if (!userAnswerIsRight && !noTry){ // Если игра не окончена - рекусивный вызов botGame()
        botGame();
    } else { // Предлагаем сыграть еще раз
            if (confirm ('Давай сыграем ещё?')) {
                    userAnswerIsRight = false;
                    noTry = false;
                    i = 0;
                    userAnswers = [];
                    botGame(); //Играем снова
                } else { // Если игрок нажад "Отмена"
                    alert('Хорошего дня! С нетерпением жду новых встреч!'); 
                    } 
        }
    // Если игрок нажал "Отмена"
    } else if (userAnswers[i] === null) { 
        alert ('Очень жаль, надеюсь, ты скоро вернешся :.('); 
        }
    });
    
    confirm (` Привет! Давай играть в угадайку :)
    У тебя 10 попыток чтобы угадать число от 1 до 100, готов?`) ? 
    botGame () :
    alert ('Очень жаль, надеюсь, ты скоро вернешся :.(');
    
    console.log (numSecret);
    console.log (userAnswers);
    console.dir (botGame);
});

init();