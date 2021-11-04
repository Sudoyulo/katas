const squareCode = function(message) {
  var noSpaces = message.split(' ').join('');
  var squareLen = Math.ceil(Math.sqrt(noSpaces.length));
  var solution = "";
  cubeMsg = [];

  for (let i = 0; i<squareLen; i++){
    cubeMsg[i] = "";
  }

  for (let i = 0; i<noSpaces.length; i++){
    cubeMsg[i % squareLen] += (noSpaces[i]);
  }
  
  for (let i=0; i<cubeMsg.length; i++){
    solution += cubeMsg[i] + " ";
  }

  return solution;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
