function typeCamel (input){
	var str = "";
	var space = false;
	
	for (let i = 0; i< input.length; i++){
		if (space === true){
			str += input.charAt(i).toUpperCase();
			space = false;
		} else if (input.charAt(i) === " ") {
			space = true;
		} else {
			str += input.charAt(i);
		}
	}
	return str;
}

function typePascal (input){
  var str = input.charAt(0).toUpperCase();
  var space = false;

  for (let i = 1; i< input.length; i++){
  	if (space === true){
    	str += input.charAt(i).toUpperCase();
    	space = false;
  	} else if (input.charAt(i) === " ") {
    	space = true;
		} else {
    	str += input.charAt(i);
  	}
  }
  return str;
}

function typeSnake (input){
  var str = "";

  for (let i = 0; i< input.length; i++){
    if (input.charAt(i) === " ") {
			str += "_";			
    } else {
      str += input.charAt(i);
    }
  }
  return str;
}

function typeKebab (input){
  var str = "";

  for (let i = 0; i< input.length; i++){
    if (input.charAt(i) === " ") {
      str += "-";
    } else {
     	str += input.charAt(i);
    }
  }
  return str;
}

function typeTitle (input){
	var str = input[0].toUpperCase();
	var space = false;

	for (let i = 1; i< input.length; i++){
		if (space === true){
			str += input.charAt(i).toUpperCase();
			space = false;
		} else if (input.charAt(i) === " ") {
			space = true;
			str += input.charAt(i);
		} else {
			str += input.charAt(i);
		}
	}
	return str;
}

function typeVowel(input){
	str = "";
	var vowels = ["a","e","i","o","u"];
	
	for (let i=0; i < input.length; i++){
		if (vowels.includes(input.charAt(i))){
			str += input.charAt(i).toUpperCase();
		} else {
			str += input.charAt(i);
		}
	}
	return str;
}

function typeConsonant(input){
	var str = "";
	var vowels = ["a","e","i","o","u"];
	
	for (let i=0; i < input.length; i++){
		if (!(vowels.includes(input.charAt(i)))){
			str += input.charAt(i).toUpperCase();
		} else {
			str += input.charAt(i);
		}
	}
	return str;
}

function typeUpper(input){
	str = "";
	for (let i=0; i < input.length; i++){
			str += input.charAt(i).toUpperCase();
	}	
	return str;
}

function typeLower(input){
	str = "";
	for (let i=0; i < input.length; i++){
			str += input.charAt(i).toLowerCase();
	}	
	return str;
}

const makeCase = function(input, cases) {

	var typeQueue = [];

	if (typeof cases === "string"){
		typeQueue.push(cases);
	} else if (typeof cases === "object"){
		for (let style of cases){
			typeQueue.push(style);
		}
	}
	
	var solution = input;
	
	for (let i = 0; i < typeQueue.length; i++){
		switch (typeQueue[i]){
			case "camel":
				solution = typeCamel(solution);
				break;
			
			case "pascal":
				solution = typePascal(solution);
				break;	

			case "snake":
				solution = typeSnake(solution);
				break;
			
			case "kebab":
				solution = typeKebab(solution);
				break;

			case "title":
				solution = typeTitle(solution);
				break;
		}
	} // end for precedence 1

	for (let j = 0; j < typeQueue.length; j++){
		switch (typeQueue[j]){
			case "vowel":
				solution = typeVowel(solution);
				break;

			case "consonant":
				solution = typeConsonant(solution);
				break;
		}
	}//end for preceidence 2
		
		for (let k = 0; k < typeQueue.length; k++){
		switch (typeQueue[k]){
			case "upper":
				solution = typeUpper(solution);
				break;

			case "lower":
				solution = typeLower(solution);
				break;
		}
	}//end for preceidence 3
	
	return solution;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

