const camelCase = function(input) {
	var nextIsUpper = false;
	solution = "";

	for (let i=0; i<input.length; i++){
		if (nextIsUpper === true){
			solution += input.charAt(i).toUpperCase();
			nextIsUpper = false;
		} else if (input.charAt(i) === " "){
                        nextIsUpper = true;
                } else {
			solution += input.charAt(i);	
		}
	}
	return solution;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
