function fish(input) {
  let skumriq = Number(input[0]);
  let caca = Number(input[1]);
  let palamudKg = Number(input[2]);
  let safrid = Number(input[3]);
  let midi = Number(input[4]) * 7.5;

  let palamudPrice = skumriq + skumriq * 0.6;
  let sumPalamud = palamudKg * palamudPrice;

  let safridPrice = caca + caca * 0.8;
  let safridSum = safridPrice * safrid;

  let total = midi + sumPalamud + safridSum;

  console.log(total.toFixed(2));
}
fish([7.79, 5.35, 9.3, 0, 0]);
