function graduate(input){
    let index = 0;
    let name = input[0];
    index++;
    let grade = Number(input[index]);
    index++;
    let i = 1;
    let badGrade = 0;
    let sumGrade = 0;
    let excludet = false;
   
    
    while( i <= 12){
        if(grade < 4.00){
            badGrade++;
            if(badGrade === 2){
                excludet = true;
                break;
            }
            grade = Number(input[index]);
            index++;
            continue;  
        }
        i++;
        sumGrade += grade
        grade = Number(input[index]);
        index ++
           

    }
    if(excludet){
        console.log(`${name} has been excluded at ${i} grade`);

    }else{
        console.log(`${name} graduated. Average grade: ${(sumGrade /12).toFixed(2)}`)
    }
    
}
graduate(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
