function triangle (input){
    let side = Number(input[0]);
    let h = Number(input[1]);

    let area = side * h / 2;
    console.log(area.toFixed(2));
}
triangle([15,35])