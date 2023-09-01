function task6(input) {
    let naylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let tinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);
    let additionalPaintQuantity = 0.10 * paintQuantity;
    let totalPaintQuantity = paintQuantity + additionalPaintQuantity;
    let totalNaylonQuantity = naylonQuantity + 2;
    let naylonPrice = totalNaylonQuantity * 1.50;
    let paintPrice = totalPaintQuantity * 14.50;
    let tinnerPrice = tinnerQuantity * 5;
    let totatalMaterialPrice = naylonPrice + paintPrice + tinnerPrice + 0.40;
    let workPricePerHour = 0.30 * totatalMaterialPrice;
    let totalWorkPrice = workTime * workPricePerHour;
    let totalPrice = totatalMaterialPrice + totalWorkPrice;
    console.log(totalPrice);
  
   

}
task6(["10","11","4","8"]);