function veggie (input){
    let vegetables = Number (input[0]);
    let fruits = Number(input[1]);
    let totatalVeggie = Number(input[2]);
    let totalFruits = Number(input[3]);

    let veggieSum = (vegetables * totatalVeggie) / 1.94;
    let fruitSum = (fruits * totalFruits) / 1.94;
    let sum = (veggieSum + fruitSum).toFixed(2);

    console.log(sum);


}
veggie([0.194,19.4,10,10])