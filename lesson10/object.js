
function sumPropertyObject(obj){
	let sum = 0;
	for(key in obj){
		if(typeof obj[key] == "number")
			sum += obj[key];
	}
	return sum;
}

function namesPropertyObject(obj){
	let arrProperty = [];
	for(key in obj){
		arrProperty.push(String(key));
	}
	for(let i = 0; i < arrProperty.length; i++){
		for(let j = i + 1; j < arrProperty.length - 1; j++){
			if(arrProperty[i] > arrProperty[j]){
				let temp = arrProperty[i];
				arrProperty[i] = arrProperty[j];
				arrProperty[j] = temp;
			}
		}
	}
	return arrProperty;
}


let user = {
  name: "John",
  age: 30,
  isAdmin: 50,
  sAdmin: 50
};


console.log(sumPropertyObject(user))
console.log(namesPropertyObject(user))
