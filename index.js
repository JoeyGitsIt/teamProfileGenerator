const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { createPromptModule } = require("inquirer");
// const { create } = require("domain");

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
        name: response.name,
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
      let specificAttribute;
      let specificAttributeTitle;
      if (answers.teamMember !== "Build my team") {
        createEmployee(answers.teamMember);
      } else {
        for (var i = 0; i < teamArray.length; i++) {
          console.log(teamArray[i]);
          switch (teamArray[i].getRole()) {
            case "Manager":
              specificAttribute = teamArray[i].getOfficeNumber();
              specificAttributeTitle = "Office Number:";
              break;
            case "Engineer":
              specificAttribute = teamArray[i].getGithub();
              specificAttributeTitle = "Github:";
              break;
            case "Intern":
              specificAttribute = teamArray[i].getSchool();
              specificAttributeTitle = "School:";
              break;
          }

          outputFile += `
<div class="col-md-4" style="width:33%; padding: 20px 0;">
  <div class="card">
    <h5 class="card-header" style="background:navy; color:white;">
      ${teamArray[i].getName()}
      </br>
      ${teamArray[i].getRole()}
    </h5>
    <div class="card-body">
      <p class="card-text">ID: ${teamArray[i].getId()}</p>
      <p class="card-text">Email:  ${teamArray[i].getEmail()}</p>
      <p class="card-text">${specificAttributeTitle} ${specificAttribute}</p>
    </div>
  </div>
</div>
`;
        }
        outputFile += `
        </div>
        </div>
      </div>
    </div>
        `;
        fs.writeFile(`index.html`, outputFile, (err) => {
          err ? console.error(err) : console.log("Success!");
        });
      }
    });
}

insertIntoFile = "";
outputFile = `
<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <title>My Team</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
    <h3 class="text-center" style="padding-top: 1%; height:15%; background:red; color:white;">My Team</h3>
			<div class="row" style="margin: 0 20%">

`;
