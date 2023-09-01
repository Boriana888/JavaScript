function train(input){
    let index = 0;
    let gradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let totalGradeSum = 0;
    let presentationCount =0;
    
    
    while(command !== "Finish"){
        let presentationName = command;
        let gradeSum = 0;

        for(let curGradeCount = 1; curGradeCount <= gradesCount; curGradeCount++){
            let curGrade = Number(input[index]);
            index++;
            gradeSum += curGrade

        }
        let avarageGrade = gradeSum / gradesCount
        console.log(`${presentationName} - ${avarageGrade.toFixed(2)}.`);
        totalGradeSum += avarageGrade
        presentationCount++;
        
        command= input[index];
        
        index++;
    }

    let grade = totalGradeSum / presentationCount
    console.log(`Student's final assessment is ${grade.toFixed(2)}.` );



}
train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);




