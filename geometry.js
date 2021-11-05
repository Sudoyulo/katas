function turnLeft(moves,location) {
  if (moves.indexOf(location) === 3){
    return moves[0];
  } else {
    return moves[moves.indexOf(location)+1];
  }
}
function turnRight(moves,location) {
  if (moves.indexOf(location) === 0){
    return moves[3];
  } else {
    return moves[moves.indexOf(location)-1];
  }
}
function movement (towards,steps,current) {
  let position = current;
  if (towards === "up"){
    position[0] = current[0] + steps;
  } else if (towards === "down"){
    position[0] = current[0] - steps;
  } else if (towards === "left"){
    position[1] = current[1] - steps;
  } else if (towards === "right"){
    position[1] = current[1] + steps;
  }
  return position;
}

const blocksAway = function(directions) {
  let choices = ["up","left","down","right"];
  let faceing = "up";
  let placement = [0,0];

  let taxi = {
    east: 0,
    north: 0
  }

  for (let i=0; i< directions.length; i += 2){
    switch (directions[i]){
      case "left":
        faceing = turnLeft(choices,faceing);
        //console.log("faceing = " + faceing + "steps = " + directions[i+1] + "placemtn" + placement)
        placement = movement(faceing,directions[i+1],placement);
        break;
      
      case "right":
        faceing = turnRight(choices,faceing);
        //console.log("faceing = " + faceing + "steps = " + directions[i+1] + "placemtn" + placement)
        placement = movement(faceing,directions[i+1],placement);
        break;
    }
  }

  taxi.east = Math.abs(placement[1]);
  taxi.north = Math.abs(placement[0]);
  return taxi;
};  

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

