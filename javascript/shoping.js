function shoping(input) {
  let bujet = Number(input[0]);
  let videoCard = Number(input[1]);
  let procecor = Number(input[2]);
  let ram = Number(input[3]);

  let sumVideoCard = videoCard * 250;
  let sumProcesor = sumVideoCard * 0.35 * procecor;
  let sumRam = sumVideoCard * 0.1 * ram;

  let totalSum = sumVideoCard + sumProcesor + sumRam;
  if (videoCard > procecor) { totalSum *= 0.85}
  
  if (totalSum<= bujet) {console.log(`You have ${(bujet - totalSum).toFixed(2)} leva left!`);
  }
  else {
    console.log(`Not enough money! You need ${(totalSum - bujet).toFixed(2)} leva more!`);
  }
  
  
}
shoping(["900",

"2",

"1",

"3"])
