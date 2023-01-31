
const Employee = require('../lib/employee');


describe('employee', () => {
  
  test('should return an object', () => {
    const employee = new Employee;
    expect(typeof(employee)).toBe("object");
  });
});

describe("getName", () => {
  test("should return a string of the employees name", () => {
    const name = new Employee('tammer');
    expect(name.getName()).toBe('tammer');
  })
});

describe("getId", () => {
  test("should return a number of employees id", () => {
    const id = new Employee('tammer', 1);
    expect(id.getId()).toBe(1);
  })
});

describe("getEmail", () => {
  test("should return a string of employees email", () => {
    const email = new Employee('tammer', 1, 'fake@gmail.com');

    expect(email.getEmail()).toBe('fake@gmail.com');
  })
});

describe("getRole", () => {
  it("should return a string of employee roles", () => {
    const role = new Employee('tammer', 1, 'fake@gmail.com','Employee');

    expect(role.getRole()).toBe('Employee');
  })
})