/*3.Calculator project using function:
• Set up two variables containing number values.
• Set up a variable to hold an operator (+ or -).
• Create a function that takes two numbers and an operator as parameters, performs the 
corresponding operation, and returns the result.
• Call the function with the variables and operator, and output the result using console.log.
• Update the operator value and call the function again with the updated arguments.*/

//  Set up two variables containing number values.

let number1:number = 40;
let number2:number = 10;

// Set up a variable to hold an operator (+ or -)
let operator = '+';
// Create a function that takes two numbers and an operator as parameters

function functionForOperation(a:number,b:number,operator:any){
  if(operator === '+'){
    return a + b;
  }  else if (operator === '-'){
    return a - b;
  }else{
    return 'Invalid Operator';
  }
}
// Call the function with the variables and operator, and output the result using console.log.

console.log(functionForOperation(number1, number2,operator ));

// Update the operator value and call the function again with the updated arguments

operator = '-';

console.log(functionForOperation(number1,number2,operator));
