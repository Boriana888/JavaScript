function calculateKilometers(input) {
  let sum = Number(input[1]);

  let total = sum;

  for (let i = 2; i < input.length; i++) {
    sum += sum * (Number(input[i]) / 100);

    total += sum;
  }

  if (total < 1000) {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        1000 - total
      )} more kilometers`
    );
  } else {
    let kilometerNeeded =  total - 1000;
    console.log(
      `You've done a great job running ${Math.ceil(
        kilometerNeeded
      )} more kilometers!`
    );
  }
}

traning(["5", "30", "10", "15", "20", "5", "12"]);
