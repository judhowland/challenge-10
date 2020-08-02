const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const arrayNum = [];

function teamMemberOptions() {

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team Manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email address?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the Manager's office number?"
            }
        ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            teamMembers.push(manager);
            arrayNum.push(response.managerId);
            addTeamMembers();
        });
    }

    function addTeamMembers() {

        inquirer.prompt([
            {
                type: "list",
                name: "teamChoices",
                message: "Which team member options would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No additional team members needed"
                ]
            }
        ])
        .then(selection => {
            switch (selection.teamChoices) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID number?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email address?"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the engineer's GitHub username?"
            }
        ])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
            teamMembers.push(engineer);
            arrayNum.push(response.engineerId);
            addTeamMembers();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's ID number?"
            },
            { 
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school did/does the intern attend?"
            }
        ])
        .then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamMembers.push(intern);
            arrayNum.push(response.internId);
            addTeamMembers();
        });
    }

    function buildTeam() {
        // Build the directory if needed
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }

    addManager();

}

teamMemberOptions();