const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



const employeeArray = [];

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
        name: "managerId",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?"
    }

    
]).then(function (answers) {
    var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    employeeArray.push(manager)
    addEmployee();
});





//ASK ABOUT THE ENGINEER
function createEngineer() {
    inquirer.prompt([
        {
        type: "input",
        name: "engineerName",
        message: "Enter the enginer's name:"
        },
        {
            type: "input",
            name: 'engineerId',
            message: "Please enter the engineer's id: "
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's github?"
        }
    ]).then(function (answers) {
        var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employeeArray.push(engineer);
        addEmployee();
    });
}

//ASK ABOUT THE INTERN
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your intern's school?"
        }

    ]).then(function (answers) {
        var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employeeArray.push(intern);
        addEmployee();
    });
}

function addEmployee(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Do you want to enter another team member?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(function(answers){
        switch (answers.memberChoice){ 
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                fs.writeFile('./team.html' , render(employeeArray), function(err){
                    if (err) throw err
                })
        }
    })
}






