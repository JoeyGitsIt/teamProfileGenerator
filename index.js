const inquirer = require('inquirer');
const fs = require('fs');

// Make video explaining how code works or the application works???
// have to put the inquirer question loops for type of employee into functions
// Use 10-OOP mini-project as a reference for the homework

inquirer
  .prompt([
    {
      // Manager's Name
      type: 'input',
      message: 'What is the team manager\'s name?',
      name: 'managerName',
    },
    {
      // Manager's employee id
      type: 'input',
      message: 'Team manager\'s employee id:',
      name: 'managerid',
    },
    {
      // Manager email
      type: 'input',
      message: 'Team manager\'s email address:',
      name: 'managerEmail',
    },
    {
      // Team manager office number
      type: 'input',
      message: 'Enter team managers office number:',
      name: 'usage',
    },
    {
      // Add a team member
      type: 'list',
      message: 'Add a member to the team?',
      choices: ["Engineer","Intern","Build my team"],
      name: 'teamMember',
    },

  ])
  .then((response) => {

    // let licenseLogo = '';
    // console.log(response);
    switch(response.license) {
      case 'Engineer':
        inquirer
          .prompt([
            {
              // Manager's Name
              type: 'input',
              message: 'What is the team manager\'s name?',
              name: 'managerName',
            }]);
        break;
      case 'MIT':
        licenseLogo = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'GNU GPLv3':
        licenseLogo = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
    }
  }
  );

  //   fs.writeFile(`${response.title}.md`, (err) => {
  //     err ? console.error(err) : console.log('Success!')
  //   })
  // });