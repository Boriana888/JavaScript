//Първи ред – брой на хората
//. Втори ред – такса вход.
//Трети ред – цена един за шезлонг.
//Четвърти ред – цена за един чадър

function pool(input){
    let people = Number(input[0]);
    let taxEnter = Number(input[1]);
    let lounger = Number(input[2]);
    let umbrella = Number(input[3]);
    let sumEnter = (people * taxEnter);
    let colleagues = Math.ceil(people * 0.75);
    let totalLounger = colleagues * lounger;
    let totalUmbrella = (people * 0.50);
    let sumUmbrella = totalUmbrella * umbrella;
    let totalPrice =(sumEnter + totalLounger + sumUmbrella)
   
    console.log(totalPrice);
}
pool([21,5.50,4.40, 6.20]);