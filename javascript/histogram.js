function histogram (input){
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
     
    for( let i= 1; i <=n; i++){
        let curNum = Number(input[i]);

        if (curNum <200){
            p1++;
        }else if (curNum <= 399){
            p2++;
        }else if (curNum <= 599){
            p3++;
        }else if (curNum <= 799){
            p4++;
        }else {
            p5++;
        }

    }
    let per1 = (p1 /n) * 100
    let per2 = (p2 /n) * 100
    let per3 = (p3 /n) * 100
    let per4 = (p4 /n) * 100
    let per5 = (p5 /n) * 100
    
    console.log(`${per1.toFixed(2)}%`);
    console.log(`${per2.toFixed(2)}%`);
    console.log(`${per3.toFixed(2)}%`);
    console.log(`${per4.toFixed(2)}%`);
    console.log(`${per5.toFixed(2)}%`);
    
    
    

}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

