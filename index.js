const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
            choices: ["Apache 2.0", "GNU AGPLv3", "Unlicense", "OpenBSD", "Rust", "GNU GPLv3", "MIT", "Mozilla"]
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

//Run through prompt user function and then function right after
promptUser()
.then((answers) => {
    console.log(answers);
    
    //take replies and put them on the pre created generateMarkdown.js
    fs.writeFile("TestREADME.md", generateMarkdown(answers),(error) => {
        if(error){
            return console.log(error);
        }
    });
});

//Recommended started code not used
// const questions = [
   
// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();