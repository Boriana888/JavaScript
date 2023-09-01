function walking(input) {
 
    let totalStepsCount = 10000;
    let dailyStepCounter = 0;
    let index = 0;
    let comand = input[index];
    index++;
    let lastDay = Number(input[input.length-1]);
 
    while (comand !== 'Going home') {
        let stepsPerDay = Number(comand);
        
        comand = input[index];
        index++;
        
        dailyStepCounter += stepsPerDay;
 
        if (dailyStepCounter >= totalStepsCount) {
            console.log('Goal reached! Good job!');
            console.log(`${dailyStepCounter - totalStepsCount} steps over the goal!`);
            break;
        }
 
    }
    
    if (comand === 'Going home') {
            if (dailyStepCounter + lastDay > totalStepsCount) {
                console.log('Goal reached! Good job!');
                console.log(`${(dailyStepCounter + lastDay - totalStepsCount)} steps over the goal!`);
                
            }else{
            console.log(`${totalStepsCount - (dailyStepCounter + lastDay)} more steps to reach goal.`)
            }
        }
 
}
