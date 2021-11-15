function generateBoard(wQueen, bQueen) {
  board = [[], [], [], [], [], [], [], []];

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      board[r].push(0);
    }
  }

  board[wQueen[0]][wQueen[1]] = 1;
  board[bQueen[0]][bQueen[1]] = 1;

  return board;
}

function queenThreat(generateBoard) {
  var threat = false;
  var qSpot = [-1, -1];
  let qEdge = [-1, -1];

  //find a queen
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (generatedBoard[r][c] === 1) {
        qSpot = [r, c];
        qEdge = [r, c];
        generatedBoard[r][c] = 0;
        c = 8;
        r = 8;
      }
    }
  } // found queen
  // console.log("Queen found in " + qSpot)
  //check up/down
  for (let u = 0; u < 8; u++) {
    if (generatedBoard[qSpot[0]][u] === 1) {
      //console.log("found lr queen at" + qSpot[0] + u);
      return true;
    }
  }
  //check left/right
  for (let l = 0; l < 8; l++) {
    if (generatedBoard[l][qSpot[1]] === 1) {
      //console.log("found ud queen at" + l + qSpot[1]);
      return true;
    }
  }
  //!!!!!check down diagonal
  //console.log("Checking down right");

  let anEdge = true;
  if (qEdge[0] === 0 || qEdge[1] === 0) {
    anEdge = false;
  } //already on an edge

  //check down right diagonal
  while (anEdge) {
    if (qEdge[0] !== 0 || qEdge[1] !== 0) {
      qEdge[0]--;
      qEdge[1]--;
    }
    if (qEdge[0] === 0 || qEdge[1] === 0) {
      anEdge = false;
    }
  } //　qEdge is now on an edge
  //console.log("edge before check is " + qEdge);

  for (let i = Math.max(...qEdge); i < 8; i++) {
    //console.log("checking dr" + qEdge);
    //console.log("Checking dr" + generatedBoard[qEdge[0]][qEdge[1]]);
    if (generatedBoard[qEdge[0]][qEdge[1]] === 1) {
      //console.log("Queen dr found at" + qEdge);
      return true;
    }
    qEdge[0]++;
    qEdge[1]++;
  } // checked down right diagonal
  //!!!!!!checking down left
  // console.log("checking down left");
  // console.log("original aQueen is" + qSpot);
  qEdge = qSpot;
  anEdge = true;
  if (qEdge[1] === 0) {
    anEdge = false;
  } //already on an edge
  //console.log("before edge" + qSpot);
  //check down left diagonal
  while (anEdge) {
    if (qEdge[0] !== 0) {
      qEdge[0]--;
      qEdge[1]++;
    }
    if (qEdge[0] === 0) {
      anEdge = false;
    }
  } //　qEdge is now on an edge
  //console.log("edge dl before check is " + qEdge);
  for (let i = Math.max(...qEdge); i > -1; i--) {
    // console.log("checking dl" + qEdge);
    // console.log("Checking dl" + generatedBoard[qEdge[0]][qEdge[1]]);
    if (generatedBoard[qEdge[0]][qEdge[1]] === 1) {
      //console.log("Queen dr found at" + qEdge);
      return true;
    }
    qEdge[0]++;
    qEdge[1]--;
  } // checked down right diagonal
  //console.log("edge is " + qEdge);
  return threat;
}

const util = require("util");
let whiteQueen = [5, 0];
let blackQueen = [0, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(util.inspect(generatedBoard, { compact: true }));
//console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
//console.log(generatedBoard);
console.log(util.inspect(generatedBoard, { compact: true }));
console.log(queenThreat(generatedBoard));
