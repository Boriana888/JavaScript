function calculator(input) {
  let people = Number(input[0]);
  let season = input[1];
  let sum = 0;

  if (people <= 5) {
    switch (season) {
      case "spring":
        sum = people * 50;
        break;
      case "summer":
        sum = people * 48.5;

        break;
      case "autumn":
        sum = people * 60;
        break;
      case "winter":
        sum = people * 86;

        break;
    }
  } else if (people > 5) {
    switch (season) {
      case "spring":
        sum = people * 48;
        break;
      case "summer":
        sum = people * 45;

        break;
      case "autumn":
        sum = people * 49.5;
        break;
      case "winter":
        sum = people * 85;

        break;
    }
    if (season === "summer") {
      sum = (sum * 0.85);
    } else if (season === "winter") {
      sum = (sum * 0.08) + sum;
    }
  }
  console.log(`${sum.toFixed(2)} leva.`);
}
calculator(["20",
"winter"])




