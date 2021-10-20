const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { createPromptModule } = require("inquirer");
// const { create } = require("domain");

// Make video explaining how code works or the application works???
// have to put the inquirer question loops for type of employee into functions
// Use 10-OOP mini-project as a reference for the homework
let teamArray = [];

createEmployee("Manager");

function createEmployee(role) {
  inquirer
    .prompt([
      {
        // Manager's Name
        type: "input",
        message: `What is the ${role}'s name?`,
        name: "name",
      },
      {
        // Manager's employee id
        type: "input",
        message: `${role}'s employee id:`,
        name: "id",
      },
      {
        // Manager email
        type: "input",
        message: `${role}'s email address:`,
        name: "email",
      },
      {
        // Team manager office number
        type: "input",
        // sus
        when: (answers) => role == "Manager",
        message: `Enter team managers office number:`,
        name: "managerOfficeNum",
      },
      {
        // Team manager office number
        type: "input",
        when: (answers) => role == "Engineer",
        message: `Enter github username:`,
        name: "engineerGithub",
      },
      {
        // Team manager office number
        type: "input",
        when: (answers) => role == "Intern",
        message: `Enter intern's school:`,
        name: "internSchool",
      },
    ])
    .then((response) => {
      // create a new class with the response according to role
      const employeeInfo = {
        name: response.mame,
        id: response.id,
        email: response.email,
      };
      switch (role) {
        case "Manager":
          teamArray.push(new Manager(employeeInfo, response.managerOfficeNum));
          break;
        case "Engineer":
          teamArray.push(new Engineer(employeeInfo, response.engineerGithub));
          break;
        case "Intern":
          teamArray.push(new Intern(employeeInfo, response.internSchool));
          break;
      }
      createRole();
    });
}

function createRole() {
  inquirer
    .prompt([
      {
        // Add a team member
        type: "list",
        message: "Add a member to the team?",
        choices: ["Engineer", "Intern", "Build my team"],
        name: "teamMember",
      },
    ])
    .then((answers) => {
      if (answers.teamMember !== "Build my team") {
        createEmployee(answers.teamMember);
      }
      else {
        for (var i = 0; i < teamArray.length; i++) {
          teamArray[i]
        }
          fs.writeFile(`index.html`, 
`
<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <title>My Team</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>


`        
          ,(err) => {
          err ? console.error(err) : console.log('Success!')
      }
    });
}
