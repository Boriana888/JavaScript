function task9 (input){
    let lenght = Number (input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;

    let totalVolumeInCm = lenght* width * hight;
    let totalVolumeInL = totalVolumeInCm / 1000;
    let volumeTaken = percentTaken * totalVolumeInL;
    let volumeLeft = totalVolumeInL - volumeTaken;
    console.log(volumeLeft);

}
task9(["85","75","47","17"])