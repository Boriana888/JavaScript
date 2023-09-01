
function cat(input){
    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarb = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWatter = Number(input[4]);

    let totalFat = (percentFat * totalCalories / 100) / 9;
    let totalProtein = (percentProtein * totalCalories / 100) / 4;
    let totalCarb = (percentCarb * totalCalories / 100) / 4;

    let weight = totalFat + totalProtein + totalCarb;
    
    let caloriePerGram = totalCalories / weight;
    let totalWater = 100 - percentWatter

    let totalCaloriesPerGram = totalWater * caloriePerGram / 100;



    console.log(totalCaloriesPerGram.toFixed(4));


}
cat(["40",
"40",
"20",
"3000",
"40"])

