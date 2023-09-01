import promptSync from "prompt-sync";
var prompt = promptSync();
var daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
var month = prompt ("Please enter month: ", )
var day = prompt ("Please enter day: ", )
var sum = 0

if(month > 12  || day > daysInMonths[month-1]){
  console.log("Please enter valid date or month")}
  else{
    if(day > 25 && month == 12) { sum = 365 - (day - 25)}
  
  else{
    for(var i=month; i <= 11; i++){
  sum += daysInMonths[i];
  sum+= 25}  

var daysOfTheFirstMonth = daysInMonths[month-1] - day
sum+= daysOfTheFirstMonth} 

console.log("Days left to christmas: ", sum) }


