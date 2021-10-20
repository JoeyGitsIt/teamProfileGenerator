class Employee {
  constructor(employeeInfo) {
    this.name = employeeInfo.name;
    this.id = employeeInfo.id;
    this.email = employeeInfo.email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
