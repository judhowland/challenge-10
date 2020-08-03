const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

  test("getRole() returns Engineer", () => {
    const testVar = "Engineer";
    const member = new Engineer("Jud", 1, "jud@gmail.com", "GitHubUserName");
    expect(member.getRole()).toBe(testVar);
  });

  test("GitHub username is requested and can be set", () => {
    const testVar = "gitHubUserName";
    const member = new Engineer("Jud", 1, "jud@gmail.com", testVar);
    expect(member.github).toBe(testVar);
  });
  
  test("getOfficeNumber() returns office number", () => {
    const testVar = "gitHubUserName";
    const member = new Engineer("Jud", 1, "jud@gmail.com", testVar);
    expect(member.getGitHub()).toBe(testVar);
  });