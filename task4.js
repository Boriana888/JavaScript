function task4 (input){
    let pages = Number (input[0]);
    let perHour = Number (input[1]);
    let days = Number (input[2]);
    let bookRead = pages / perHour;
    let daysRead = bookRead / days;
    console.log(daysRead)
}
task4(["212 ","20 ","2 "])