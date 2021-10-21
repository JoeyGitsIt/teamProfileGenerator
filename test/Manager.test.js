const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("get the office number from the manager object", () => {
      const manager = new Manager(
        {
          name: "Janna",
          id: 1,
          email: "janna@gmail.com",
        },
        132
      );

      // Verify that the method returns the correct information
      expect(manager.getOfficeNumber()).toEqual(132);
    });
  });

  describe("getRole", () => {
    it("get the role from the manager object", () => {
      const manager = new Manager(
        {
          name: "Janna",
          id: 1,
          email: "janna@gmail.com",
        },
        132
      );

      // Verify that the method returns the correct information
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
