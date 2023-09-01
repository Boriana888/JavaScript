import promptSync from "prompt-sync";
var prompt = promptSync();
var wordBank = [
  "dog",
  "cat",
  "lion",
  "rat",
  "goat",
  "donkey",
  "horse",
  "yak",
  "elk",
  "hamster",
  "frog",
  "turtle",
  "rhino",
  "hyena",
  "lynx",
  "dingo",
  "zebra",
  "bear",
  "ram",
  "panther",
  "wolf",
  "camel",
  "fox",
  "tiger",
  "gerbil",
  "gopher",
  "platypus",
  "badger",
  "mule",
  "jackal",
];
var randomNum = Math.floor(Math.random() * wordBank.length);
var tries = 11;
var space = [];
var itemWord = wordBank[randomNum];
var wordSplit = itemWord.split("");

for (var i = 0; i < itemWord.length; i++) {
  space.push("_");
}

while (tries > 0) {
  var userGuess = prompt("Please choose a letter between A and Z: ");

  if (wordSplit.includes(userGuess)) {
    console.log("You are right");
    var indexOfTheLetter = wordSplit.indexOf(userGuess);
    wordSplit.indexOf(userGuess);
    space[indexOfTheLetter] = userGuess;
    console.log(space);

    if (space.toString() === wordSplit.toString()) {
      console.log("Good job");
      break;
    }
  } else {
    tries -= 1;
    console.log("You are wrong, you have left", tries, "tries");
  }
}

console.log("край на играта");
console.log(itemWord);
