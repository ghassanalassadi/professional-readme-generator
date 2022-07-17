const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
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
        name: 'title',
        message: "What's your project's name?",
    },
    {
        type: 'input',
        name: 'desc',
        message: "Please write a short description about your project.",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license do you have?',
        choices: ['MIT','APACHE 2.0', 'GPL v3', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should be used to install dependencies?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What command should be used to run test?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about how to use the repository?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What does the user need to know about contributing to the repo?",
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    console.log("Writing README file...");
    });
}

function init() {
    inquirer.prompt(questions).then((userInput) => {
        writeToFile('README_generated.md', generateMarkdown(userInput));
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
