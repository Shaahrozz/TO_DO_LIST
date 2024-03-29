#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let pos;
let n = 1;
while (n > 0) {
    console.log("\n TO DO LIST APP");
    let opt = await inquirer.prompt([{
            name: "a",
            type: "list",
            message: "Select an Option:",
            choices: ['Add Task', 'Delete Task', 'Show List', 'Exit']
        }]);
    if (opt.a === "Show List") {
        console.log("\nTO DO LIST:");
        console.log(tasks.join("\n"));
    }
    if (opt.a === 'Add Task') {
        let task = await inquirer.prompt([{
                name: "a",
                type: "string",
                message: "\n Enter New Task:"
            }]);
        tasks.push(task.a);
        console.log("Sucessfully added to the List");
    }
    if (opt.a === 'Delete Task') {
        let del = await inquirer.prompt([{
                name: "a",
                type: "list",
                message: '\n Select any Task to Delete',
                choices: [...tasks]
            }]);
        pos = tasks.indexOf(del.a);
        delete tasks[pos];
        console.log("Sucessfully Deleted from the List");
    }
    if (opt.a === 'Exit') {
        break;
    }
}
