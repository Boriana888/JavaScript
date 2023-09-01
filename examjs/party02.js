
function party(input){
    let partyPrice = Number(input[0]);
    let loveMeassage = Number(input[1]) ;
    let roses = Number(input[2]);
    let keys = Number(input[3]);
    let caricature = Number(input[4]);
    let luck = Number(input[5]);
    let finalSum = 0;

    let sum  = (loveMeassage * 0.60) + (roses * 7.20) + ( keys * 3.60) + (caricature * 18.20) + (luck * 22);  
    let count = loveMeassage + roses + keys + caricature + luck     
    

    if(count > 25){
        finalSum = sum * 0.35  
    }

    let finalPrice = sum - finalSum
    let feeHousting = finalPrice * 0.10;

    let profit = finalPrice - feeHousting
    if(partyPrice > profit){
        let moneyNeded = partyPrice - profit
        console.log(`Not enough money! ${moneyNeded.toFixed(2)} lv needed.`);
        
    }else{
        let moneyLeft = profit - partyPrice 
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

    }

    
  




}
party
(["320",
"8",
"2",
"5",
"5",
"1"])
