function summer(input) {
  let degree = Number(input[0]);
  let partOfDay = (input[1]);
  let outfit = "";
  let shoes = "";

  switch (partOfDay) {
    case "Morning":
      if (degree <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degree <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;

    case "Afternoon":
      if (degree <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degree <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      outfit = "Shirt";
      shoes = "Moccasins";
      break;
  }

  console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
summer(["16", "Morning"]);
