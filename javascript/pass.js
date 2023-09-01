function passwordGuess (input){
    let pass = "s3cr3t!P@ssw0rd";
    let data = (input[0]);

    if (pass !== data) {
        console.log("Wrong password!")
    }
    else {console.log("Welcome")}

}
passwordGuess(["s3cr3t!P@ssw0rd"]);