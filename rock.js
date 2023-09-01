import promptSync from "prompt-sync";
var prompt = promptSync();
var rockPaperScissors = ["Rock", "Paper", "Scissors"]
var playerOne = rockPaperScissors[Math.floor(Math.random() * 3)]
var playerTwo = rockPaperScissors[Math.floor(Math.random() *3)]
var result = ""

console.log(playerOne,playerTwo)
function Winner (playerOne,playerTwo){
if(playerOne == "Scissors"){
    if(playerTwo == "Paper");} {
        result = "playereOne is the winner";}
if(playerOne == "Scissors"){ 
    if(playerTwo == "Rock");} {
        result = "playerTwo is the winner";}
if(playerOne == "Scissors"){
    if (playerTwo == "Scissors" );} {
       result = "try again" } 
if(playerOne == "Rock"){ 
    if (playerTwo == "Scissors" );} {
        result = "playerOne is the winer"}
if(playerOne == "Rock") {
    if (playerTwo == "Paper" );} {
        result = "playerTwo is the winer"}
if(playerOne == "Rock") {
    if (playerTwo == "Rock" );} {
        result = "try again"}
if(playerOne == "Paper") {
    if (playerTwo == "Paper" );} {
        result = "try again"}
if(playerOne == "Paper") {
    if (playerTwo == "Rock" );} {
        result = "playerOne is the winer"}
if(playerOne == "Paper") {
    if(playerTwo == "Scissors" );} {
        result = "playerTwo is the winer"}
        return result

    
}
console.log(Winner("paper","rock","scissors"))
console.log(Winner(playerOne,playerTwo))
//console.log(result)