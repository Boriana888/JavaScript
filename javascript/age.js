function age (input){
    let ages = Number(input[0]);
    let gender = (input[1])

    if (ages >=16){
        if (gender === "f"){
            console.log("Ms.");
        }else{
            console.log("Mr.");
        }

}else {
    if(gender === "f"){
        console.log("Miss");
    }else{
        console.log("Master");
    }

}

}
age(["12","f"])
