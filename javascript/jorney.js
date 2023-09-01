function jorney(input) {
  let budget = Number(input[0]);
  let seasons = input[1];

  let destination = "";
  let placeType = "";
  let price = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
  } else if (budget <= 1000) {
    destination = "Balkans";
  } else {
    destination = "Europe";
  }
  if (seasons === "summmer") {
    placeType = "Camp";
  } else {
    placeType = "Hotel";
  }
  if (destination === "Bulagaria") {
    if (seasons === "summer") {
      price = 0.3 * budget;
    }
  } else {
    price = 0.7 * budget;
  }
}
if (destination === "Balkans") {
  if (seasons === "summer") {
    price = 0.4 * budget;
  } else {
    price = 0.8 * budget;
  }
  if (destination) {
    price = 0.9 * budget;
    placeType = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${placeType} - ${price.toFixed(2)}`);
}
jorney(["50", "summer"]);
