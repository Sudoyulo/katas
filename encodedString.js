const urlDecode = function(text) {
	var valuePair = {};
	var ampIndex = 0;
	var chunks = [];

	var noSpaces = [];

	for (let i = 0; i<text.length; i++){
		if (text[i] === "&"){
			chunks.push(text.substring(ampIndex,i));
			ampIndex = i+1;
		}
		if (i === text.length-1)
			chunks.push(text.substring(ampIndex,i+1));
	}//separated

	for (let i = 0; i< chunks.length; i++){
		noSpaces.push(chunks[i].replaceAll("%20"," "));	
	}//no more spaces

	chunks = []; //reset

	for (let i = 0; i<noSpaces.length; i++){
        ampIndex = 0;
		for (let j = 0; j < noSpaces[i].length ; j++){
			if (noSpaces[i][j] === "="){
                        	chunks.push(noSpaces[i].substring(ampIndex,j));
                        	ampIndex = j+1;
                	}
                	if (j === noSpaces[i].length-1){
                        	chunks.push(noSpaces[i].substring(ampIndex,j+1));
			}       	
		}
	 }//separated

	for (let i = 0; i < chunks.length; i = i+2){
		valuePair[chunks[i]] = chunks[i+1];
	}

	return valuePair;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
