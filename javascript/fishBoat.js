function fishBoat (input){
    let budjet = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let rentPrice = 0;


    switch (season) {
        case "Spring":
            rentPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            break
        case "Winter":
            rentPrice = 2600;          
            break;
    }

    if (fisherCount <= 6){
        rentPrice *= 0.90;

    }else if (fisherCount <= 11){
        rentPrice *= 0.85;
    }else{
        rentPrice *= 0.75;
    }
    if (season !== "Autumn" && fisherCount % 2 === 0){
        rentPrice *= 0.95;
    }
    if (budjet >= rentPrice){
        let moneyLeft = budjet - rentPrice;
       
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }else {
        let moneyNeeded = rentPrice - budjet;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
    

}
fishBoat(["3000","Summer","11"])