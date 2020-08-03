const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

  test("getRole() returns Manager", () => {
    const testVar = "Manager";
    const member = new Manager("Jud", 1, "jud@gmail.com", testVar);
    expect(member.getRole()).toBe(testVar);
  });

  test("office number is requested and can be set", () => {
    const testVar = 10;
    const member = new Manager("Jud", 1, "jud@gmail.com", testVar);
    expect(member.officeNumber).toBe(testVar);
  });
  
  test("getOfficeNumber() returns office number", () => {
    const testVar = 100;
    const member = new Manager("Jud", 1, "jud@gmail.com", testVar);
    expect(member.getOfficeNumber()).toBe(testVar);
  });