function tenis (input){
    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsWon = 0;
    let tournomentWon = 0;

    for (let i = 2; i <input.length; i++ ){
        let curResult = input[i];

        if(curResult === `W`){
            pointsWon += 2000;
            tournomentWon ++;
        }else if (curResult === `F`){
            pointsWon += 1200;

        }else {
            pointsWon += 720;

        }
    }
    let totalPoints = startingPoints + pointsWon;

    console.log(`Final points: ${totalPoints}`);
    let avgPoints = Math.floor(pointsWon / tournamentCount);
    console.log(`Average points: ${avgPoints}`);

    let tournamentWonpercent =(tournomentWon / tournamentCount) * 100;
    console.log(`${tournamentWonpercent.toFixed(2)}%`);


}
tenis(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


