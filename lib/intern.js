const Employee = require("./Employee");
class Intern extends Employee {
  constructor(employeeInfo, school) {
    super(employeeInfo);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
