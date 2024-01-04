// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        name: "title",
        message: "What is the title of your project?"
    },
    {
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project:"
    },
    {
        name: "usage",
        message: "Provide instructions and examples for use:"
    },
    {
        type: "rawlist",
        name: "license",
        message: "What type of License do you use?",
        choices: [
            "Apache License 2.0",
            "MIT License",
            "GNU GPLv3 License",
            "Mozilla Public License 2.0",
            "No License"
        ]
    },
    {
        name: "contribute",
        message: "Provide instructions for how other developers can contribute to your project:"
    },
    {
        name: "tests",
        message: "Provide examples on how to run tests written for your application:"
    },
    {
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        name: "email",
        message: "What is your e-mail address?"
    }
];

async function askQuestions() {
    const answers = await inquirer.prompt(questions)
    return answers;

    /*
    // This is the method we were taught to use, I used async because it makes the code a little easier to follow.

    inquirer.prompt(questions)
    .then(answers => {
        return answers
    });
    */
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (!fs.existsSync("./output")) {
        fs.mkdirSync("./output");
    }

    fs.writeFileSync("./output/" + fileName, data);
    console.log("README has been created at ./output/" + fileName);
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await askQuestions();
    const readme = generateMarkdown(answers);
    writeToFile("README.md", readme);
}

// Function call to initialize app
init();
