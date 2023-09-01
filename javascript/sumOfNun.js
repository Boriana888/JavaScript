function sumOfNum (input){
    let numAsText = input[0];
    let sum = 0;

    for(let i = 0; i < numAsText.length; i++){
        let currnetNum = Number(numAsText[i]);
        sum += currnetNum
    }
    console.log(`The sum of the digits is:${sum}`);



}
sumOfNum(["1234"]);