function isEvenorOdd(num) {

    if(num % 2 == 0){
      console.log(num ("is a Even number"))
    }
    else{
      console.log(num("is a Odd number"))
    }
  }
  
  isEvenorOdd(5)
  isEvenorOdd(2) 


function isValidNumber(num) {

    if(isNaN(num)){
        console.log(num("is not a number"))
    }
    else{
          console.log(num("is a valid number"))
    }
  }
  
  isValidNumber(11)
  isValidNumber("Bo") 

function findLargest(num1, num2) {

    if(num1 > num2){
      console.log(num1("is the largest number"))
    }
    else if (num2 > num1){
      console.log(num2("the largest number"))
    }
    else{
      console.log(num1 === num2)
    }
  }
  
  findLargest(21,45) 

function findLargest(num1, num2, num3) {

    if(num1 > num2 && num1 > num3){
      console.log(num1("is the largest number"))
    }
    else if (num2 > num3){
      console.log(num2 ("is the largest number"))
    }
    else{
      console.log(num3 ("is the largest number"))
    }
  }
  
  findLargest(20,44,11) 

function findTriangleType(side1, side2, side3) {

    if((side1 == side2) && (side1 == side3)){
      console.log("Equilateral triangle")
    }
    else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
      console.log("Isosceles triangle")
    }
    else{
      console.log("Scalene triangle")
    } }

function findTriangleType(side1, side2, side3) {

    if((side1 == side2) && (side1 == side3)){
          console.log("Equilateral triangle")
        }
     else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
          console.log("Isosceles triangle")
        }
    else{
          console.log("Scalene triangle")
        }
      }

      findTriangleType(5,5,15)