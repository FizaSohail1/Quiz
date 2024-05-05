#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("MCQ'S"));
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: "1) TypeScript is a superset of which programming language?",
        choices: ["HTML", "JavaScript", "Python", "Java"]
    },
    {
        name: "question_2",
        type: "list",
        message: "2) Which of the following is not a valid data type in JavaScript?",
        choices: ["Boolean", "Integer", "Number", "String"]
    },
    {
        name: "question_3",
        type: "list",
        message: "3) Which method is used to add a new element to the end of an array in JavaScript?",
        choices: ["push()", "add()", "insert()", "pop()"]
    },
    {
        name: "question_4",
        type: "list",
        message: "4) In TypeScript, what keyword is used to declare a variable?",
        choices: ["var", "let", "const", "both let and const"]
    },
    {
        name: "question_5",
        type: "list",
        message: "5) Which programming language is commonly used for building interactive and dynamic web pages?",
        choices: ["HTML", "JavaScript", "CSS", "PHP"]
    }]);
let marks = 0;
switch (quiz.question_1) {
    case "JavaScript":
        ++marks;
        console.log(chalk.green("\nCorrect answer!"));
        break;
    default:
        console.log(chalk.red(`${quiz.question_1} incorrect answer`));
}
switch (quiz.question_2) {
    case "Integer":
        ++marks;
        console.log(chalk.green("Correct answer!"));
        break;
    default:
        console.log(chalk.red(`${quiz.question_2} incorrect answer`));
}
switch (quiz.question_3) {
    case "push()":
        ++marks;
        console.log(chalk.green("Correct answer!"));
        break;
    default:
        console.log(chalk.red(`${quiz.question_3} incorrect answer`));
}
switch (quiz.question_4) {
    case "both let and const":
        ++marks;
        console.log(chalk.green("Correct answer!"));
        break;
    default:
        console.log(chalk.red(`${quiz.question_4} incorrect answer`));
}
switch (quiz.question_5) {
    case "JavaScript":
        ++marks;
        console.log(chalk.green("Correct answer!"));
        break;
    default:
        console.log(chalk.red(`${quiz.question_5} incorrect answer`));
}
console.log(chalk.yellow(`\nTotal Marks: ${marks}`));
