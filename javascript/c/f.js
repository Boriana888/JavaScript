function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let pieces = Number(input[2]);
    let price = 0;
     
    if(day === "Monday" && "Tuesday" && "Wednesday" && "Thursday" && "Friday"){
        switch(fruit){
            case "banana": price = pieces * 2.50; break;
            case "apple": price = pieces * 1.20; break;
            case "orange": price = pieces * 0.85; break;
            case "grapefruit": price = pieces * 1.45; break;
            case "kiwi": price = pieces * 2.70; break;
            case "pineapple": price = pieces * 5.50; break;
            case "grapes": price = pieces * 3.85; break;
            
        }
    } else if(day === "Saturday" && "Sunday"){
        switch(fruit){
            case "banana": price = pieces * 2.70; break;
            case "apple": price = pieces * 1.25; break;
            case "orange": price = pieces * 0.90; break;
            case "grapefruit": price = pieces * 1.60; break;
            case "kiwi": price = pieces * 3.00; break;
            case "pineapple": price = pieces * 5.60; break;
            case "grapes": price = pieces * 4.20; break;  
        } 
        
    } console.log(price.toFixed(2));
    }
    fruitShop(["apple", "Tuesday", "2"]);
