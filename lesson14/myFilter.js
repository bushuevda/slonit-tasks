function myFilter(array, callback) {
	let arrFilter = [];
	for(val of array)
		if(callback(val))
			arrFilter.push(val)
	return arrFilter
}
