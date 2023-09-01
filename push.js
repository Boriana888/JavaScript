var RockPaperScissors = ["Rock", "Paper", "Scissors"]

console.log(random)

var players = []

for (var  i=0; i<= 100; i++){
    var randomNumber = Math.floor(Math.random() * 3)
    var random = RockPaperScissors[randomNumber]

    players.push(random)
}

console.log(players)


