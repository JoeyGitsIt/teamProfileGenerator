const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the github username from the Engineer object", () => {
      const engineer = new Engineer(
        {
          name: "Janna",
          id: 1,
          email: "janna@gmail.com",
        },
        "someonesGithub"
      );

      // Verify that the new object returns the correct information
      expect(engineer.getGithub()).toEqual("someonesGithub");
    });
  });

  describe("getRole", () => {
    it("should return the role name from the Engineer object", () => {
      const engineer = new Engineer(
        {
          name: "Janna",
          id: 1,
          email: "janna@gmail.com",
        },
        "someonesGithub"
      );

      // Verify that the new object returns the correct information
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
