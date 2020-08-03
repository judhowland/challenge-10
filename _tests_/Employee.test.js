const Employee = require("../lib/Employee");

test("Employee Name is requested and can be set", () => {
    const testVar = "Jud";
    const member = new Employee(testVar);
    expect(member.name).toBe(testVar);
});

test("Employee ID is requested and can be set", () => {
    const testVar = 10;
    const member = new Employee("Jud", testVar);
    expect(member.id).toBe(testVar);
});

test("Employee Email Address is requested and can be set", () => {
    const testVar = "Jud@gmail.com";
    const member = new Employee("Jud", 10, testVar);
    expect(member.email).toBe(testVar);
});

test("getName() returns employee name", () => {
    const testVar = "Jud";
    const member = new Employee(testVar);
    expect(member.getName()).toBe(testVar);
});

test("getId() returns employee ID", () => {
    const testVar = 10;
    const member = new Employee("Jud", testVar);
    expect(member.getId()).toBe(testVar);
});

test("getEmail() returns employee email address", () => {
    const testVar = "jud@gmail.com";
    const member = new Employee("Jud", 10, testVar);
    expect(member.getEmail()).toBe(testVar);
});

test("getRole() returns Employee", () => {
    const testVar = "Employee";
    const member = new Employee("Jud", 10, "jud@gmail.com");
    expect(member.getRole()).toBe(testVar);
});