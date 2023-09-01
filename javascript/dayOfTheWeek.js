function dayOfTheWeek(input) {
  let number = Number(input[0]);
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }
}
dayOfTheWeek(["1"]);

  switch (season){
            case 'spring':
                sum = people * 50;
                break;
            case 'summer':
                sum = people * 48.50;
                
                break;
            case 'autumn':
                sum = people * 60;
                break;
            case 'winter':
                sum = people * 86
              
                break;
            

        }

    }else if (people > 5){

        switch (season){
            case 'spring':
                sum = people * 48;
                break;
            case 'summer':
                sum = people * 45;
                
                break;
            case 'autumn':
                sum = people * 49.50;
                break;
            case 'winter':
                sum = people * 85
               
                break;
            

        }

    }
    console.log(sum);