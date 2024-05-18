/*3.Friend checker game:
• Prompt the user to enter a name.
• Use a switch statement to check if the entered name is a known friend.
• Output a confirmation message if the name is known, otherwise output a default 
response.*/

import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    name: "friendcheckergame",
    type: "input",
    message: "Please Enter Your Name:",
  },
]);
// Switch statement to check if the entered name is known friend
switch (answers.friendcheckergame) {
  case "Sidra":
    console.log("You are my friend");
    break;
  case "Hania":
    console.log("You are my friend");
    break;
  case "Nawal":
    console.log("You are my friend");
    break;
  default:
    console.log("Unknown Person...");
}
