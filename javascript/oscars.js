
function oscars (input){
    let nameActor = input[0];
    let pointsAcademy = Number(input[1]);
    let numberOfAssessors = Number(input[2]);
    
    let points = pointsAcademy;
    let isNominated = false;

    for (let i = 3; i <input.length; i+= 2 ){
      let gradeName = input[i].length;
      let score = Number(input[i + 1]);

      points += ((gradeName * score) / 2);
      if(points>1250.50){
         isNominated = true;
         break
      }   
   }
   if (isNominated){
      console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
   }else {
      let pointNeeded = 1250.5 - points;
        console.log(`Sorry, ${nameActor} you need ${pointNeeded.toFixed(1)} more!`);
   }
    
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
