function mySlice(arr, start, end){
    
	/*
	* Состояние функции в зависимости от результата проверки аргументов
    * U - undefined
    * D - defined
    */
    const state = {
        UUU: 0,
        DUU: 1,
        DDU: 2,
        DDD: 3,
    }
    
	/*
	* Результат проверки аргументов
	*/
    let mode = 0;
    if(Array.isArray(arr)){
        ++mode;
        if(typeof start === "number"){
            ++mode
            if(typeof end === "number")
                ++mode;
        }
    }
    
    
    switch(mode){
        case state.UUU:
            return undefined;
            break;
        case state.DUU:
            return arr;
            break;
        case state.DDU:
            let s = prepareStart(start);
            return (s === null) ? [] : prepareSlice(s, arr.length);
            break;
        case state.DDD:
            let s2 = prepareStart(start);
            let e = prepareEnd(start, end);
            return (s2 === null || e === null) ? [] : prepareSlice(s2, e);
            break;
    }
    
	/*
	* Подготовка slice 
	*/
    function prepareSlice (start, end){
        let slice = []
        for(let i = start; i < end; i++)
            slice.push(arr[i]);
        return slice;
    }
    
	/*
	* Проверка входного аргмента start (для состояния DDU)
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
    
	/*
	* Проверка входных аргментов start и end (для состояния DDD)
	*/
    function prepareEnd(start, end){
        if(-arr.length <= end && end < 0)
            return end + arr.length;
        else if(-arr.length > end)
            return 0;
        else if(end >= arr.length)
            return arr.length;
        else if(end <= start)
            return null;
        else 
            return end;
    }
  
}

//Вспомогательная функция для тестирования функции mySlice
function mySliceTest(){
	
	function compareArrays(array1, array2){
		if(array1.length != array2.length)
			return false
		for(let i = 0; i < array1.lenght; i++)
			if(array1[i] != array2[i])
				return false;
		return true;
	}
	
	/*
	* Нормы проверок
	*/
	const check1 = 7;
	const check2 = 7;
	const check3 = 4;

	
	/*
	* case 1 Проверка положительного индекса (7 проверок) 
	*/
	let countCheck1 = 0;
	if(compareArrays(mySlice([1,2,3,4,5], 1, 4), [1,2,3,4,5].slice(1,4))) countCheck1++;
	if(compareArrays(mySlice([1,2,3,4,5], 1, 2), [1,2,3,4,5].slice(1,2))) countCheck1++;
	if(compareArrays(mySlice([1,2,3,4,5], 1, 1), [1,2,3,4,5].slice(1,1))) countCheck1++;
	if(compareArrays(mySlice([1,2,3,4,5], 2), [1,2,3,4,5].slice(2))) countCheck1++;
	if(compareArrays(mySlice([1,2,3,4,5], 6), [1,2,3,4,5].slice(6))) countCheck1++;
	if(compareArrays(mySlice([1,2,3,4,5], 5, 2), [1,2,3,4,5].slice(5,2))) countCheck1++;
	if(compareArrays(mySlice([1,2,3,4,5], 3, 1), [1,2,3,4,5].slice(3,1))) countCheck1++;

	/*
	* case 2 Проверка отрицательного индекса (7 проверок) 
	*/
	let countCheck2 = 0;
	if(compareArrays(mySlice([1,2,3,4,5], -1, 4), [1,2,3,4,5].slice(-1,4))) countCheck2++;
	if(compareArrays(mySlice([1,2,3,4,5], -1, 2), [1,2,3,4,5].slice(-1,2))) countCheck2++;
	if(compareArrays(mySlice([1,2,3,4,5], 1, -1), [1,2,3,4,5].slice(1,-1))) countCheck2++;
	if(compareArrays(mySlice([1,2,3,4,5], -2), [1,2,3,4,5].slice(-2))) countCheck2++;
	if(compareArrays(mySlice([1,2,3,4,5], -6), [1,2,3,4,5].slice(-6))) countCheck2++;
	if(compareArrays(mySlice([1,2,3,4,5], -5, 2), [1,2,3,4,5].slice(-5,2))) countCheck2++;
	if(compareArrays(mySlice([1,2,3,4,5], 3, -1), [1,2,3,4,5].slice(3,-1))) countCheck2++;
	
	/*
	* case 3 Проверка с понижением количетва аргументов (4 проверки) 
	*/
	let countCheck3 = 0;
	if(compareArrays(mySlice([1,2,3,4,5]), [1,2,3,4,5].slice())) countCheck3++;
	if(compareArrays(mySlice([1,2,3]), [1,2,3].slice())) countCheck3++;
	if(compareArrays(mySlice([1,2,3,5]), [1,2,3,5].slice())) countCheck3++;
	if(compareArrays(mySlice([]), [].slice())) countCheck3++;

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

mySliceTest()
