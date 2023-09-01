function lily(input){
    let age = Number(input[0]);
    let priceWasher = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let totalMoney = 0;
    let evenBirthdayMoney = 10;
  

    for(let i = 1; i <= age ; i ++){
        if (i % 2 === 0){
            totalMoney += evenBirthdayMoney
            totalMoney -= 1;
            evenBirthdayMoney += 10
            
        }else {
            totalMoney += pricePerToy
        }            
    }
    if (totalMoney >= priceWasher){
        let moneyLeft = totalMoney - priceWasher
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }else {
        let moneyNedeed = priceWasher - totalMoney
        console.log(`No! ${moneyNedeed.toFixed(2)} `);
    }

}
lily(["10",
"170.00",
"6"])