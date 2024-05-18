"use strict";
/*4.Anonymous functions:
• Assign a function expression to a variable, with one parameter that outputs the provided
argument to the console.
• Pass an argument into the function.
• Create the same function as a normal function declaration*/
Object.defineProperty(exports, "__esModule", { value: true });
// Assign a function expression to a variable
let x = function (x) {
    console.log(x);
};
// pass an argument into the function.
x("this is an anonymus function");
// create same function as normal function
function x1(x1) {
    console.log(x1);
}
;
x1("this is a normal function");
