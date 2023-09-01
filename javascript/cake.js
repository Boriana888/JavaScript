function cake(input) {
  let index = 0;
  let widhtCake = Number(input[index]);
  index++;
  let lengthCake = Number(input[index]);
  index++;
  let totalPieces = widhtCake * lengthCake;
  let command = input[index];
  index++;

  while (command !== "STOP") {
    let cakePiece = Number(command);
    totalPieces -= cakePiece;

    if (totalPieces <= 0) {
      console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
      break;
    }

    command = input[index];
    index++;
  }
  if (command === "STOP") {
    console.log(`${totalPieces} pieces are left.`);
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
