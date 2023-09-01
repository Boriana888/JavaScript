function commission(input){
    let town = input[0];
    let sales = Number(input[1]);
    let sum = 0
    
    if (town === "Sofia"){
        if(sales >=0 && sales <= 500){
            sum = sales * 0.05;
        }else if (sales > 500 && sales <= 1000){
            sum = sales * 0.07;
        }else if (sales > 1000 && sales <= 10000){
            sum = sales * 0.08;
        }else{
            sum = sales * 0.12;
        }
    }else if (town === "Varna"){
        if(sales >=0 && sales <= 500){
            sum = sales * 0.045;
        }else if (sales > 500 && sales <= 1000){
            sum = sales * 0.075;
        }else if (sales > 1000 && sales <= 10000){
            sum = sales * 0.1;
        }else{
            sum = sales * 0.13;
        }
    }else if (town === "Plovdiv"){
        if(sales >=0 && sales <= 500){
            sum = sales * 0.055;
        }else if (sales > 500 && sales <= 1000){
            sum = sales * 0.08;
        }else if (sales > 1000 && sales <= 10000){
            sum = sales * 0.12;
        }else{
            sum = sales * 0.145;
        }

    }
    if (sum!==0){
        console.log("error");
    return}
    
    console.log(sum.toFixed(2));
    
}
commission(["Kaspichan", "-50"]);