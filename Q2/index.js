// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value.
import inquirer from "inquirer";
const userNumber = await inquirer.prompt([
    {
        message: "Enter a Number",
        type: "Number",
        name: "numberGame",
    },
]);
// Generate a dynamic number value between 1 to 10
const dynamicNumber = Math.floor(Math.random() * 10) + 1;
// compare the entered number with the dynamic number value
if (userNumber.numberGame > dynamicNumber) {
    console.log("Your number is greater than the dynamic number value.");
}
else if (userNumber.numberGame < dynamicNumber) {
    console.log("Your number is less than the dynamic number value.");
}
else {
    console.log("Your number is equal to the dynamic number value.");
}
