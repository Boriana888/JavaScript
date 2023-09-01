import promptSync from "prompt-sync";
var prompt = promptSync();
const obj = {
  "♠1": 1,
  "♠2": 2,
  "♠3": 3,
  "♠4": 4,
  "♠5": 5,
  "♠6": 6,
  "♠7": 7,
  "♠8": 8,
  "♠9": 9,
  "♠10": 10,
  "♠J": 10,
  "♠Q": 10,
  "♠K": 10,
  "♠A": 11,
  "♥1": 1,
  "♥2": 2,
  "♥3": 3,
  "♥4": 4,
  "♥5": 5,
  "♥6": 6,
  "♥7": 7,
  "♥8": 8,
  "♥9": 9,
  "♥10": 10,
  "♥J": 10,
  "♥Q": 10,
  "♥K": 10,
  "♥A": 11,
  "♢1": 1,
  "♢2": 2,
  "♢3": 3,
  "♢4": 4,
  "♢5": 5,
  "♢6": 6,
  "♢7": 7,
  "♢8": 8,
  "♢9": 9,
  "♢10": 10,
  "♢J": 10,
  "♢Q": 10,
  "♢K": 10,
  "♢A": 11,
  "♣1": 1,
  "♣2": 2,
  "♣3": 3,
  "♣4": 4,
  "♣5": 5,
  "♣6": 6,
  "♣7": 7,
  "♣8": 8,
  "♣9": 9,
  "♣10": 10,
  "♣J": 10,
  "♣Q": 10,
  "♣K": 10,
  "♣A": 11,
};

let randomCard = getRandomSign(obj);
let randomValue = obj[randomCard];
function getRandomSign(obj) {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
}
console.log(getRandomSign(obj));
var userCard = 0;
var sum = 0;

for (var i = 1; i <= 2; i++) {
  let randomCard = getRandomSign(obj);
  sum += parseInt(randomCard);

  userCard += randomCard;

  console.log(`card: ${i}`, randomCard);
}

let k = i;

while (sum <= 21) {
  var userOne = prompt("userOne do you want to another card?");

  if (userOne === "yes") {
    const randomCard = getRandomProperty(obj);
    sum += randomCard;

    console.log(`card: ${k}`, randomCard);

    console.log(sum);
  }
  if (userOne === "no") {
    break;
  }

  k++;
}

let s = i;

while (userCard <= 21) {
  var userTwo = prompt("userTwo do you want to another card?");

  if (userTwo === "yes") {
    const randomCard = getRandomSign(obj);
    userCard += randomCard;

    console.log(`card: ${s}`, randomCard);

    console.log(userCard);
  }
  if (userTwo === "no") {
    break;
  }

  s++;
}

if ((sum > userCard && sum <= 21) || (sum <= 21 && userCard > 21)) {
  console.log("userOne win");
} else if ((sum < userCard && userCard <= 21) || (userCard <= 21 && sum > 21)) {
  console.log("userTwo win");
} else {
  console.log("Both lose");
}
