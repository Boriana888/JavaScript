function vacation(input) {
  let index = 0;
  let command = input[index];
  index++;
  
  while (command !== "End") {
    let destination = command;
    let budjet = input[index];
    index++;
    let save = 0;
    while (save < budjet) {
      let money = Number(input[index]);
      index++;
      save += money;
    }
    console.log(`Going to ${destination}!`);
    command = input[index];
    index++;
    
  }
}
vacation([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
