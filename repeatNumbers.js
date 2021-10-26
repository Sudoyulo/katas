const repeatNumbers = function(data) {
	var repeated = [];
	var solution = "";
	var input = "";
	var times = 0;

	for (let i=0; i<data.length; i++){
		input = data[i][0];
		times = data[i][1];
		var iteration = "";
		for (let j = 0; j < times; j++){
			iteration += input;
		}
	repeated.push(iteration);
	}
// final to add commas
	for (let x=0; x<repeated.length; x++) {
		solution += repeated[x];
		if (x !== repeated.length-1){
			solution += ", ";
		}
	}
	return solution;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
