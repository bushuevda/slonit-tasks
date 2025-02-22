
function myIndexOf(arr, item, from = 0){
	
	/*
	* Подготовка начального индекса прохода по массиву
	*/
	function prepareStart(start){
        if(-arr.length <= start && start < 0)
            return start + arr.length;
        else if(-arr.length > start)
            return 0;
        else if(start >= arr.length)
            return null;
        else 
            return start;
    }

	if(Array.isArray(arr)){
		let index = -1;
		
		for(let i = prepareStart(from); i < arr.length; i++){
			if(typeof i === typeof null || Number.isNaN(item))
				break;
			if(arr[i] === item)
				return i;
		}
		return index;
	}
}

/*
*Вспомогательная функция для тестирования функции myIndexOf
*/
function myIndexOfTest(){
		/*
	* Нормы проверок
	*/
	const check1 = 6;
	const check2 = 6;
	const check3 = 6;
	
	let countCheck1 = 0;
	/*
	* case 1 Проверка положительного индекса (6 проверок) 
	*/
	if(myIndexOf([1,2,3,4], 2, 2) === [1,2,3,4].indexOf(2, 2)) countCheck1++;
	if(myIndexOf([1,2,3,4], 5, 0) === [1,2,3,4].indexOf(5, 0)) countCheck1++;
	if(myIndexOf([1,2,3,4], "word", 0) === [1,2,3,4].indexOf("word", 0)) countCheck1++;
	if(myIndexOf([1,2,"word",4], "word", 0) === [1,2,"word",4].indexOf("word", 0)) countCheck1++;
	if(myIndexOf([1,2,3,4], 2, 10) === [1,2,3,4].indexOf(2, 10)) countCheck1++;
	if(myIndexOf([1,2,3,4], NaN, 2) === [1,2,3,4].indexOf(NaN, 2)) countCheck1++;

	let countCheck2 = 0;
	/*
	* case 2 Проверка отрицательного индекса (6 проверок) 
	*/
	if(myIndexOf([1,2,3,4], 2, -2) === [1,2,3,4].indexOf(2, -2)) countCheck2++;
	if(myIndexOf([1,2,3,4], 5, -5) === [1,2,3,4].indexOf(5, -5)) countCheck2++;
	if(myIndexOf([1,2,3,4], "word", -10) === [1,2,3,4].indexOf("word", -10)) countCheck2++;
	if(myIndexOf([1,2,"word",4], "word", -3) === [1,2,"word",4].indexOf("word", -3)) countCheck2++;
	if(myIndexOf([1,2,3,4], 2, -4) === [1,2,3,4].indexOf(2, -4)) countCheck2++;
	if(myIndexOf([1,2,3,4], NaN, -3) === [1,2,3,4].indexOf(NaN, -3)) countCheck2++;

	let countCheck3 = 0;
	/*
	* case 3 Проверка с понижением количетва аргументов (6 проверок) 
	*/
	if(myIndexOf([1,2,3,4], 2) === [1,2,3,4].indexOf(2)) countCheck3++;
	if(myIndexOf([1,2,3,4], 5) === [1,2,3,4].indexOf(5)) countCheck3++;
	if(myIndexOf([1,2,3,4], "word") === [1,2,3,4].indexOf("word")) countCheck3++;
	if(myIndexOf([1,2,"word",4], "word") === [1,2,"word",4].indexOf("word")) countCheck3++;
	if(myIndexOf([1,2,"word",4], NaN) === [1,2,"word",4].indexOf(NaN)) countCheck3++;
	if(myIndexOf([1,2,"word",4]) === [1,2,"word",4].indexOf()) countCheck3++;

	
	if(countCheck1 == check1)
		console.log("Check 1 прошла успешно!")
	else
		console.log("Check 1 прошла с ошибкой!")
	if(countCheck2 == check2)
		console.log("Check 2 прошла успешно!")
	else
		console.log("Check 2 прошла с ошибкой!")
	if(countCheck3 == check3)
		console.log("Check 3 прошла успешно!")
	else
		console.log("Check 3 прошла с ошибкой!")
}

myIndexOfTest();

