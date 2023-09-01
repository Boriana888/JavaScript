function primeNonPrimeSums(input) {
    // get input
    let i = 0;
    let command = input[i];
    // prepare logic
    let primeSum = 0,
        nonePrimeSum = 0;
    // start while
    while (command !== "stop") {
        let num = Number(command);
        if (num <= 0) {
            if (num < 0) console.log("Number is negative.");
            i++;
            command = input[i];
            continue;
        }
        let isPrime = true;
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
                nonePrimeSum += num;
                break;
            }
        }
        if (isPrime) primeSum += num;
        i++;
        command = input[i];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonePrimeSum}`);
}
primeNonPrimeSums(["30",
"83",
"33",
"-1",
"20",
"stop"])

