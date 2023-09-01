import promptSync from "prompt-sync";
var prompt = promptSync();
var daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
var monthStart = parseInt( prompt ("Please enter the start month: ",))
var monthEnd = parseInt( prompt ("Please enter the end month: ",))
var dayStart = parseInt( prompt ("Please enter start day: ", ))
var dayEnd = parseInt( prompt ("Please enter end day: ",))
var sum = 0

if(monthStart == monthEnd ){(sum += dayEnd - dayStart);}
    else{sum += daysInMonths[monthStart-1] - dayStart

for(var i= monthStart; i < monthEnd -1; i++){
    sum += daysInMonths[i];}

    sum += dayEnd

}


console.log("sum")
//console.log(typeof monthStart)

