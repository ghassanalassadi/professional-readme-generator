// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'github',
    message: "What's your Github username?",
    },
    {
    type: 'input',
    name: 'email',
    message: "What's your email address?",
    },
    {
    type: 'input',
    name: 'project',
    message: "What's your project's name?",
    },
    {
    type: 'input',
    name: 'desc',
    message: "Please write a short description about your project.",
    },
    {
    type: 'list-input',
    name: 'license',
    message: 'What kind of license do you have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL v3', 'BSD', 'None']
    },
    {
    type: 'input',
    name: 'dependencies',
    message: "What command should be used to install dependencies?",
    },
    {
    type: 'input',
    name: 'tests',
    message: "What command should be used to run test?",
    },
    {
    type: 'input',
    name: 'repo',
    message: "What does the user need to know about the repo?",
    },
    {
    type: 'input',
    name: 'contributing',
    message: "What does the user need to know about contributing to the repo?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = 'README.md';
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {;
}

// Function call to initialize app
init();
