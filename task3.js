function task3 (input){
    let depositedSum = Number (input[0]);
    let depositedPeriod = Number (input[1]);
    let anualIncreasePercent = Number (input[2]);
    let anualIncreaseDecimal = anualIncreasePercent / 100;

    let finalSum = depositedSum + depositedPeriod * (depositedSum * anualIncreaseDecimal / 12);
    console.log(finalSum);

}
task3(["200","3","5.7"]);