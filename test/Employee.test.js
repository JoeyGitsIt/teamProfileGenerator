const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, and email", () => {
      const employee = new Employee({
        name: "Janna",
        id: 1,
        email: "janna@gmail.com",
      });

      // Verify that the new object returns the correct information
      expect(employee.name).toEqual("Janna");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("janna@gmail.com");
    });
  });

  describe("getName", () => {
    it("should get the name of the employee", () => {
      const employee = new Employee({
        name: "Janna",
        id: 1,
        email: "janna@gmail.com",
      });

      // Verify that the method returns the correct information
      expect(employee.getName()).toEqual("Janna");
    });
  });

  describe("getId", () => {
    it("should get the id of the employee", () => {
      const employee = new Employee({
        name: "Janna",
        id: 1,
        email: "janna@gmail.com",
      });

      // Verify that the method returns the correct information
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should get the email of the employee", () => {
      const employee = new Employee({
        name: "Janna",
        id: 1,
        email: "janna@gmail.com",
      });

      // Verify that the method returns the correct information
      expect(employee.getEmail()).toEqual("janna@gmail.com");
    });
  });

  describe("getRole", () => {
    it("should get the role of the employee", () => {
      const employee = new Employee({
        name: "Janna",
        id: 1,
        email: "janna@gmail.com",
      });

      // Verify that the method returns the correct information
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
