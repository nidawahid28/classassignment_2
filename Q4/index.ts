/*4.Functions:
• Set up two different variables with different values.
• Call a function with these variables as arguments and output the result using console.log.
• Create a second call to the function with two more numbers as arguments*/

// set two different variables with different values

let firstNumber:number = 20;
let secondNumber:number = 10;

// Define a function that takes two arguments and return their sum

function sumOfNumbers(a:number, b:number){
    return a + b;
}
// call the function with the variables as arguments and output the result using console.log
 console.log(sumOfNumbers(firstNumber,secondNumber))

//  Create a second call to the function with two more numbers as arguments
console.log(sumOfNumbers(30,20));