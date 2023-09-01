function kingKong(input) {
  let bujet = Number(input[0]);
  let statists = Number(input[1]);
  let statistOtfitPrice = Number(input[2]);
  

  let decor = bujet * 0.1;
  let totalCostClothes = statists * statistOtfitPrice;
  

  if (statists> 150) {
    totalCostClothes *= 0.9;
  }
let totalMovieCosts = totalCostClothes + decor

 
  if (totalMovieCosts > bujet) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(totalMovieCosts - bujet).toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(bujet-totalMovieCosts).toFixed(2)} leva left.`);
  }
  
}
kingKong(["9587.88",

"222",

"55.68"])