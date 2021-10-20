const urlEncode = function(text) {
	var noSpaces = text.trim();
	var url = "";	

	for (let ele of noSpaces){
		if (ele === " "){
			url += "%20";
		} else {
			url += ele;
		}
		
	}
	return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
