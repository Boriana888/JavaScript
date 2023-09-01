import promptSync from "prompt-sync";
var prompt = promptSync();


var randomNum = Math.floor(Math.random() * 10)

console.log("random: ", randomNum);

var tries = 3

// where is the "var"
// започваме с false, човека не е познал още, не е започнал даже да играе
var isUserCorrect = false;


for (var i=1; i <= tries; i++){
    var userGuess = prompt ("Please choose a number between 0 and 9: ")

    if (userGuess < randomNum) {
        console.log("The number must be haigher than yours");
    }
    else if ( userGuess == randomNum) {
        console.log("You are right");

        //aко познае го правим на true
        isUserCorrect = true
        break
    }

    else if ( userGuess > randomNum) {
        console.log("The number must be lower than yours") 
    }

}


//ако isUserCorrect == false, само тогава пишем този текст

if(isUserCorrect == false ) {

    console.log("You are wrong, try again")
}