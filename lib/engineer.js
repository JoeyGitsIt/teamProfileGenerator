const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(employeeInfo, github) {
    super(employeeInfo);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
