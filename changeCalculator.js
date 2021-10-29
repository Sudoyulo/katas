const calculateChange = function(total, cash) {
	var denominations = [2000,1000,500,200,100,25,10,5,1];
	var names = ["twentyDollar","tenDollar","fiveDollar","twoDollar","oneDollar", "quarter","dime","nickel","penny"];
	var usedCoins = [0,0,0,0,0,0,0,0,0];
	var change = cash-total;	
	var solution = {};

	for (let i = 0; i< denominations.length; i++){
		if (change > denominations[i]){
			usedCoins[i] = Math.floor(change/denominations[i]);
			change %= (denominations[i] * usedCoins[i]);
		}
	}
	
	for (let j = 0; j < denominations.length; j++){
		if (usedCoins[j] !== 0)
		solution[names[j]] = usedCoins[j];
	}

	return solution;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
