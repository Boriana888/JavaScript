function projectNine (input) {
    let a = Number (input[0]);
    let b = a * 7.61;
    let c = b * 0.18;
    let sum = b-c;
    console.log(`The final price is: ${sum} lv. 
The discount is: ${c} lv.`);
}

projectNine(["550"])   

//let d = Number (input[1]);
    //let e = d * 7.61;
   // let f = 0.18 * e;
   // let sumTwo = e - f;
  //  console.log(`The final price is: ${sumTwo} lv. 
//The discount is: ${f}`)