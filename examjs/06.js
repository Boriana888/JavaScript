function checkNum(n) {
  let moduleThree = Number(n[0]) % 3 === 0;

  let endsFive = n[0][n[0].length - 1] === "5";

  for (let a = 1; a < 9; a++) {
    for (let b = 9; b > a; b--) {
      for (let c = 0; c < 9; c++) {
        for (let d = 9; d > c; d--) {
          //   console.log(a, b, c, d);
          if (Math.floor(a * b * c * d === a + b + c + d && endsFive)) {
            console.log(`${a}${b}${c}${d}`);
            return;
          } else if (Math.floor(a * b * c * d) / Math.floor(a + b + c + d) === 3 && moduleThree) {
            console.log(`${d}${c}${b}${a}`);
            return;
          }
        }
      }
    }
  }

  console.log("Nothing found");
}
  checkNum(["123"])