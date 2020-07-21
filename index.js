const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "readme",
            message: "Enter the title of the ReadMe"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project"
        },
        {
            type: "input",
            name: "installation",
            message: "provide information how to install the project"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide usage information for the project"
        },
        {
            type: "input",
            name: "contributing",
            message: "Provide guidelines about contributing"
        },
        {
            type: "input",
            name: "tests",
            message: "Provide test to run for the project and provide examples"
        },
        {
            type: "input",
            name: "questions",
            message: "Provide github profile and email for other users to contact you for any questions"
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license to use for the project?",
            choices: ["Apache", "GNU", "NPM", "OpenBSD", "Rust", "Wordpress", "MIT", "Mozilla"]
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },
        {
            type:"input",
            name:"email",
            message:"Enter email that is best to contact"
        }
    ]);
}
// const questions = [
   
// ];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
