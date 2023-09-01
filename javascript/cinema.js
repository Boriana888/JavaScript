function cinema (input){
    let name = (input[0]);
    let row = Number(input[1]);
    let cols = Number(input[2]);

    let seats = row * cols;
    let price = 0;

    if (name === "Premiere" ){
        price = seats * 12;
    }else if (name === "Normal") {
        price = seats * 7.50;
    }else {
        price = seats * 5;
    }
    console.log(`${price.toFixed(2)} leva`);


}
cinema(["Premiere","10","12"]);