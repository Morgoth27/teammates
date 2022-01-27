const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee')
const fs = require('fs');
const path  = require('path')

const pageTemplate = require('./src/page-template');

const PORT = 3001;
const employees = [];


var questions = [

    {
        name: "name",
        message: "Name:",
        type: "input",
    },
    {
        name: "ID",
        message: "ID:",
        type: "input",
    },
    {
        name: "email",
        message: "Email:",
        type: "input",
    }];

var managerQuestions = [
    {
        name: "officeNumber",
        message: "What is the manager's office number?",
        type: "input",
    }
]

var internQuestion = [
    {
        name: "school",
        message: "What is the intern's school?",
        type: "input",
    }
]

var engineerQuestion = [
    {
        name: "gitHub",
        message: "What is the engineer's GitHub?",
        type: "input",
    }
]

var nextEmployee = [
    {
        name: "role",
        message: "What type of team member would you like to add?",
        type: "list",
        choices: ["Engineer", "Intern", "None at this time"]
    }
]


function init() {
     questions = questions.concat(managerQuestions)
inquirer
    .prompt(questions)
    .then((answers) => {
        employees.push(new Manager(answers.name, answers.ID, answers.email, answers.officeNumber));
        nextAction()
});
}



function genEng() {
    questions  = questions.concat(engineerQuestion);
    inquirer
        .prompt(questions)
        .then((answers) => {
            employees.push(new Engineer(answers.name, answers.ID, answers.email, answers.gitHub));

            nextAction();
});
}


function genIntern() {
    questions  = questions.concat(internQuestion);
    inquirer
        .prompt(questions)
        .then((answers) => {
            employees.push(new Intern(answers.name, answers.ID, answers.email, answers.school));

            nextAction();
});
}

function nextAction() {
    questions = questions.filter((element, index) => index < questions.length - 1)
    inquirer.prompt(nextEmployee)
    .then((answers) => {
        switch (answers.role) {
            case 'Engineer':
                genEng();
                break;
            case 'Intern': 
                genIntern();
                break;
            default:
                buildTemplate()
        }
    })
}

function buildTemplate() {
    if(!fs.existsSync(path.resolve(__dirname, 'dist'))) {
        fs.mkdirSync(path.resolve(__dirname, 'dist'))
    }

    fs.writeFileSync(path.join(path.resolve(__dirname, 'dist'), 'team.html'),pageTemplate(employees), 'utf-8')
}

init();