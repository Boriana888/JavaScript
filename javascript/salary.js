function salary (input){
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    

    for (let i = 2; i <input.length; i++ ){
        let curTab = input[i];

        if(curTab === "Facebook"){
            salary -= 150;
        }else if (curTab ==="Instagram" ){
            salary -= 100;
        }else if (curTab ==="Reddit" ){
            salary -= 50;
        }
        
    }
    
    if (salary <= 0){
        console.log(`You have lost your salary.`);return;
    }else{
        let moneyLeft =Math.round(salary)
        console.log(moneyLeft);
    }

}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


