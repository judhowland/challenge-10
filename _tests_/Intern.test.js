const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

  test("getRole() returns Intern", () => {
    const testVar = "Intern";
    const member = new Intern("Jud", 1, "jud@gmail.com", "U of Cool");
    expect(member.getRole()).toBe(testVar);
  });

  test("School name is requested and can be set", () => {
    const testVar = "U of Cool";
    const member = new Intern("Jud", 1, "jud@gmail.com", testVar);
    expect(member.school).toBe(testVar);
  });
  
  test("getSchool() returns name of School", () => {
    const testVar = "U of Cool";
    const member = new Intern("Jud", 1, "jud@gmail.com", testVar);
    expect(member.getSchool()).toBe(testVar);
  });