/**
* Объект игра
*/
const game = {};

/**
 * Состояния игры
 */
game.state_game = {
	"Меньше": 1,
	"Больше": 2,
	"Равно": 3
}

/**
 * Максимальное число, которое может загадать компьютер
 */
game.max = 100;

/**
 * Секретное число
 */
game.secret_number = Math.trunc(Math.random() * game.max) + 1;


/**
 * Верхняя граница
 */
game.upper_limit = 0;


/**
 * Нижняя граница
 */
game.lower_limit = 0;


/**
 * @param {number} Проверяемое число
 * @return {number} Результат проверки
 */
game.checkNumber = (number) => {
	if(number > game.secret_number)
		return game.state_game["Меньше"]
	else if(number < game.secret_number)
		return game.state_game["Больше"]
	else
		return game.state_game["Равно"]
}

/**
 * Первый этап - вычисление верхней и нижней границ отгадываемого числа
 * @return {boolean} Результат отгадывание на данном этапе: false - не отгадал, true - отгадал.
 */
game.calculateStageOne = () => {
    let n = game.max;
    while(true){
        game.showProgress(n);
        if(game.checkNumber(n) == game.state_game["Равно"]){
            return true;
        }
        else if(game.checkNumber(Math.trunc(n / 2)) == game.state_game["Больше"]){
            game.upper_limit = n;
            game.lower_limit = Math.trunc(n / 2);
            break;
        }
        n = Math.trunc(n / 2);
    }
    return false;
}


/**
 * Второй этап - сужение диапазона границ к отгадываемому числу.
 */
game.calculateStageTwo = () => {
    while(true){
        let number = game.lower_limit + Math.trunc((game.upper_limit - game.lower_limit) / 2);
        if (number > game.secret_number)
            game.upper_limit = number
        else 
            game.lower_limit = number;
        game.showProgress(number);
        if(game.checkNumber(number) == game.state_game["Равно"])
            break;
    }
}


/**
 * Вывод прогресса отгадывания числа
 * @param {number} Число
 */
game.showProgress = (number) => {
    console.log(`Компьютер 2: Пробую число ${number}.`);
	switch(game.checkNumber(number)){
	case 1: 
		console.log(`Компьютер 1: Меньше.`);
		break;
	case 2:
		console.log(`Компьютер 1: Больше.`);
		break;
	case 3:
		console.log(`Компьютер 1: Угадал!`);
		break;
    }
}

/**
 * Запуск игры
 */
game.run = () => {
	console.log(`Компьютер 1 загадал число ${game.secret_number}.`);
    let step_one = game.calculateStageOne();
    if(!step_one){
        game.calculateStageTwo();
    }
}

game.run()
