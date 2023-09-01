function moving (input){
    let index =0;
    let width = Number(input[index])
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++

    let housingVolime = width * hight * length;
    let command = input[index];
    index++;

    while(command !== "Done"){
        let boxesCount = Number(command);
        housingVolime -= boxesCount;

        if(housingVolime <= 0){
            console.log(`No more free space! You need ${Math.abs(housingVolime)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if( command === 'Done'){
        console.log(`${housingVolime} Cubic meters left.`);
    }
}
moving(["10",

"1",

"2",

"4",

"6",

"Done"]);