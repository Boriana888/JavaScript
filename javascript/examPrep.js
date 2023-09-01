function examPreparation(input) {
    let poorGradesTarget = (Number(input[0]));
 
    let problemIndex = 1;
    let currentGradeIndex = 2;
    let lastProblem = "";
    let poorResult = false;
    let problemsSum = 0;
    let gradesSum = 0;
    let poorGrades = 0;
 
    while ((input[problemIndex]) != "Enough") {
        if ((input[currentGradeIndex]) <= 4) {
            poorGrades++;
            if (poorGrades === poorGradesTarget) {
                poorResult = true;
                break;
            }            
        }
        problemsSum++;
        gradesSum += Number(input[currentGradeIndex]);
        lastProblem = (input[problemIndex]);
        problemIndex += 2;
        currentGradeIndex += 2;
    }
    if (poorResult) {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }
    else {
        let averageScore = gradesSum / problemsSum;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsSum}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

