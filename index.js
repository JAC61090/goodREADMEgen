// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the Title of this project",
        name: "title",
        response: ""
    },
    {   
        type: "input",
        message: "What is the name of the user?",
        name: "userName",
        response: ""
    },
    {  
        type: "input",
        message: "Please provide a description of the project",
        name: "description",
        response: ""
    },
    {   
        type: "input",
        message: "What is the installation process?",
        name: "installation",
        response: ""
    },
    {   
        type: "input",
        message: "How will this project be used?",
        name: "usage",
        response: ""
    },
    {   
        type: "checkbox",
        message: "Choose your license",
        name: "licenses",
        choices: ["Apache", "MIT", "donKEY"]
    },
    {   
        type: "input",
        message: "Who were the contributors to this project?",
        name: "contribution",
        response: ""
    },
    {   
        type: "input",
        message: "What is the test process for this project?",
        name: "test",
        response: ""
    },
    {   
        type: "input",
        message: "What is the users Github email address?",
        name: "email",
        response: ""
        
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// fs.writeFile('README.md', generateMarkdown, (err) => //pass in correct string, must invoke
//   err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {   
        console.log("Making ReadMe");
        fs.writeFile('README.md', generateMarkdown(inquirerResponse), (err) => //pass in correct string, must invoke
        err ? console.error(err) : console.log('Success!')
    );
    })
    .catch((err) => {
        console.log(err);
    })
}

const userName = questions.userName


// Function call to initialize app
init();
