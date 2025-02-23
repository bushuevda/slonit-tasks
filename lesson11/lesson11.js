/*
* Функция, изменяющая первую букву строки на большую
*/
function upperFirstLetter(str){
	if(typeof str === "string")
		return str[0].toUpperCase() + str.slice(1, str.length);
}

/*
* Функция, укорачивающая строку 
*/
function shorteningString(str, limitSize){
	let indexEnd = 0;
	const symbols = [',', '.', '!', '?', ':', ';', ' '];
	for(let i = limitSize; i > 0; i--)
		if(symbols.includes(str[i])){
			indexEnd = i;
			if(symbols.includes(str[i - 1]))
				continue;
			break;
		}
	return str.slice(0, indexEnd) + "...";
}

/*
* Функция, проверяющая является ли одна строка подстрокой другой и наоборот
*/
function checkSubstring(str1, str2){
	let strSmall = str1.length > str2.length ? str2 : str1;
	let strLonger = str1.length > str2.length ? str1 : str2;

	for(let i = 0; i < strLonger.length; i++){
		let countLetter = 0;
		for(let j = 0; j < strSmall.length; j++){
			if(strSmall[j] === strLonger[i + j])
				countLetter++;
			else
				break;
		}
		if(countLetter === strSmall.length)
			return true;
	}
	return false;
}
