// const menu = `TASK MANAGER
// What would you like to do:
// "NEW" - Add A New Task
// "TASKS" - Display All Tasks
// "REMOVE" - Remove A Task
// "CLOSE" - Close The Task Manager
// `;

// const tasks = [`Charge MacBook`, `Master JavaScript`];

// let showTasks = "";

// let newTask;

// let num;

// let removed;

// let userInput = prompt(menu);

// while (userInput.toUpperCase() !== "CLOSE") {
//   if (userInput.toUpperCase() === "TASKS") {
//     for (task of tasks) {
//       showTasks = showTasks + `${task}\n`
//     }
//     alert(showTasks);
//     showTasks = "";
//   } else if (userInput.toUpperCase() === "NEW") {
//     newTask = prompt(`Please enter the new task:`);
//     while (true) {
//       if (newTask === "") {
//         newTask = prompt(`Please enter the new task:`);
//       } else {
//         break;
//       }
//     }
//     alert(`"${newTask}" has been added!`);
//     tasks.push(newTask);
//   } else if (userInput.toUpperCase() === "REMOVE") {
//     while (true) {
//       for (i = 0; i < tasks.length; i++) {
//         showTasks = showTasks + `${i + 1}: ${tasks[i]}\n`;
//       }
//       num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
//       if (num >= 0 && num < tasks.length) {
//         removed = tasks.splice(num, 1);
//         alert(`"${removed[0]}" has been removed`);
//         showTasks = "";
//         break;
//       } else {
//         alert(`Not a valid entry`);
//         showTasks = "";
//       }
//     }
//   }
//   userInput = prompt(menu);
// }
// alert(`Thank you for using Task Manager!`);

// =====================

// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);


// Loops and continues to display the menu until the user ends/closes the Task Manager (AKA Until the user enters CLOSE)
while (userInput !== `CLOSE`){
  // OTHER OPTIONS
  if (userInput === "TASKS"){
    alert(`Charge MacBook\nMaster JavaScript`);}
    // alert(`This is the TASKS feature`);}
  if (userInput === "NEW"){
      alert(`This is the NEW feature`);
    }
  if (userInput === "REMOVE"){
      alert(`This is the REMOVE feature`);
  }
  
  
    // Displays the menu again
  userInput = prompt(menu);
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`);