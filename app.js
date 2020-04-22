const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



const teamMembers = [];
//Ask about the manager
inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please enter your manager's name:",
        validate(answer) {
            if (answer.trim() == "") {
                return "Please enter at least one character."
            }
            return true;
        },
    },   
    {
        type: "input",
        name: "id",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "office",
        message: "What is your manager's office number?"
    }

    
])
// //manger questions
// function createManager () {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your manager's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is your manager's id?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your manager's email?"
//         },
//         {
//             type: "input",
//             name: "office",
//             message: "What is your manager's office number?"
//         }
//     ])///Answers???
//     .then(function (answers) {
//         const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
//         teamMembers.push(manager);
//         addMember();
//     });
// }
// createManager();



// //ENGINEER QUESTIONS
// function createEngineer () {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your engineer's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is your engineer's id?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your engineer's email?"
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "What is your engineer's github?"
//         }

//     ])

// }
// //INTERN QUESTIONS
// function createIntern () {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is your intern's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is your intern's id?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is your intern's email?"
//         },
//         {
//             type: "input",
//             name: "school",
//             message: "What is your intern's school?"
//         }

//     ])
// };


