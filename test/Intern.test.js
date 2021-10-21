const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("get the school name from the Intern object", () => {
      const intern = new Intern(
        {
          name: "Janna",
          id: 1,
          email: "janna@gmail.com",
        },
        "UGA"
      );

      // Verify that the method returns the correct information
      expect(intern.getSchool()).toEqual("UGA");
    });
  });

  describe("getRole", () => {
    it("get the role from the Intern object", () => {
      const intern = new Intern(
        {
          name: "Janna",
          id: 1,
          email: "janna@gmail.com",
        },
        "UGA"
      );

      // Verify that the method returns the correct information
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
