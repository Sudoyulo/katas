const sumLargestNumbers = function(data) {
	var a = 0;
	var b = 0;
	for (let i=0; i<data.length; i++){
		if (data[i] > a){
			b = a;
			a = data[i];
		}
	}
	return a+b;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
