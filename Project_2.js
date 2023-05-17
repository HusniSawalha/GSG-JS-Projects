const readline = require("readline");

var tasks = [];

function Task(description, due, priority) {
  this.description = description;
  this.due = due;
  this.priority = priority;
  this.completed = false;
}

function addTask(description, due, priority) {
  var t = new Task(description, due, priority);
  tasks.push(t);
}

function completeTask(description) {
  tasks.filter((task) => task.description === description)[0].completed = true;
}

function deleteTask(description) {
  var index = tasks.findIndex((task) => task.description === description);
  tasks.splice(index, 1);
}

function listTasks(completed) {
  console.log(tasks.filter((task) => task.completed === completed));
}

function listAllTasks(){
  console.log(tasks);
}

function sortTasks(sort) {
  let sortedTasks = [];
  if (sort === "due date") {
    sortedTasks = tasks.sort((a, b) => new Date(a.due) - new Date(b.due));
  } else if (sort === "priority") {
    sortedTasks = tasks.sort((a, b) => a.priority - b.priority);
  }
  return sortedTasks;
}

function validateDate(dateString) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
}

function validatePriority(priority) {
  const priorityRegex = /^[1-5]$/;
  return priorityRegex.test(priority);
}


const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function start(){
r.question(
  "\n############################\nWhat do you want to do?\n############################\n\nTo list all Tasks: list\nTo add task: add\nTo complete a task: complete\nTo delete a task: delete\nTo filter by completion status: filter\nTo sort by due date or priority: sort\nTo end the app: quit\n",
  (answer) => {
    switch (answer) {
      case "add":
        r.question("Description: ", (description) => {
          r.question("Due date (YYYY-MM-DD): ", (dueDate) => {
            if (!validateDate(dueDate)) {
              console.log("Invalid format. Please use YYYY-MM-DD.");
              start();
              return;
            }
            r.question("Priority (1-5): ", (priority) => {
              if (!validatePriority(priority)) {
                console.log("Invalid priority. Please enter a number between 1 and 5.");
                start();
                return;
              }
              addTask(description, dueDate, priority);
              console.log("Task added.");
              console.log(tasks);
              start();
            });
          });
        });
        break;
      case "complete":
        r.question("Description: ", (description) => {
          completeTask(description);
          console.log("Task completed.");
          console.log(tasks);
          start();
        });
        break;
        case "list":
          listAllTasks();
          start();
          break;
      case "delete":
        r.question("Description: ", (description) => {
          deleteTask(description);
          console.log("Task deleted.");
          console.log(tasks);
          start();
        });
        break;
      case "filter":
        r.question("Status (completed: true or incomplete: false): ", (completed) => {
          listTasks(completed === "true");
          start();
        });
        break;
      case "sort":
        r.question("Criteria (due date or priority): ", (sort) => {
          const sortedTasks = sortTasks(sort);
          console.log("Sorted tasks:");
          console.log(sortedTasks);
          start();
      });
      break;
      case "quit":
        r.close();
        break;
    default:
      console.log("Invalid input.");
      start();
      break;
  }
});
}

start();

addTask("Test1","2023-05-16","3");
addTask("Test2","2022-07-17","1");
addTask("Test3","2024-06-15","5");
addTask("Test4","2020-12-13","4");
addTask("Test5","2025-01-01","2");
