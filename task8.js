function task8 (input){
    let anualTrainingFee = Number(input[0]);

    let priceDiffFeeSneakers = 0.4 * anualTrainingFee;
    let sneakersPrice = anualTrainingFee - priceDiffFeeSneakers;

    let priceDiffFeeSneakersOtfit = 0.2 * sneakersPrice;
    let outfitPrice = sneakersPrice - priceDiffFeeSneakersOtfit;

    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;

    let totalPrice = anualTrainingFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(totalPrice);

}
task8(["365"])