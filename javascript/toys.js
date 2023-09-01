function toysShop (input){
    let holiday = Number(input[0]);
    let puzzle = Number(input[1]); 
    let doll = Number(input[2]) ;
    let bear = Number(input[3]) ;
    let minion = Number(input[4]) ;
    let trucks = Number(input[5]) ;

    let toysPrice = puzzle * 2.60+ doll* 3 + bear* 4.10 + minion* 8.20+ trucks* 2;
    let toysCount = puzzle+doll+bear+minion+trucks;

    if (toysCount >= 50){
        toysPrice = 0.75 * toysPrice
    }
    let moneyWon = toysPrice
    moneyWon = 0.90 * moneyWon

    if ( moneyWon>= holiday) {
        let moneyLeft = moneyWon - holiday;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else {
        let moneyNeeded = holiday - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);}
}
toysShop(["40.8","20","25","30","50","10"])