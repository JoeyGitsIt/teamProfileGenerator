const Employee = require("./Employee");

class Manager extends Employee {
  constructor(employeeInfo, officeNumber) {
    super(employeeInfo);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
