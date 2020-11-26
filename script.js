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
// Загадываем число
    const numSecret = getRandomInt(101);
// Массив ответов игрока
    const userAnswers = [];
// Флаг правильно ответа TODO --> DELETE
    let userAnswerIsRight = false;
// Счетчик кол-ва ответов игрока
    let i = 0;    

// бот
    const botGame = (() => {
// Функция проверки ответа
        const botQuestions = (() => {
            userAnswers[i] = parseInt(userAnswers[i]);

            if (userAnswers[i] === numSecret) { 
                alert ('Поздравляю! Ты угадал');
                    if (confirm ('Давай сыграем ещё?')) {
                        //i = 0;
                        botGame(); //Играем снова
                    } else { // Если игрок нажад "Отмена"
                        alert('Хорошего дня! С нетерпением жду новых встреч!'); 
                        } 
            } else if (userAnswers[i] > numSecret) {
                alert (` Не угадал мое число меньше, попробуй снова!
                Твои ответы: ${userAnswers.join(' ')}`);
                i++;
                } else {
                    alert (` Не угадал мое число больше, попробуй снова!
                    Твои ответы: ${userAnswers.join(' ')}`);
                    i++;
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

    botGame(); // Рекусивный вызов botGame()
    // Если игрок нажад "Отмена"
    } else if (userAnswers[i] === null) { 
        alert ('Очень жаль, надеюсь, ты скоро вернешся :.('); 
        }
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