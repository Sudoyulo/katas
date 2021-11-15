const multiplicationTable = function (maxValue) {
  var solution = "";

  for (i = 1; i <= maxValue; i++) {
    var iteration = "";
    for (j = 1; j <= maxValue; j++) {
      iteration += i * j;
      iteration += " ";
    }
    iteration += "\n";
    solution += iteration;
  }
  return solution;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
