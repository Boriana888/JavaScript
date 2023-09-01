function sum (input){
    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    while(sum <n){
        let curNum = Number(input[index])
        sum += curNum;
        index++;
    }
    console.log(sum);

}
sum(["100",
"10",
"20",
"30",
"40"])
