const Manager = require('../lib/manager');

describe('Manager', () => {
  
  test('should return an object', () => {
    const manager = new Manager;
    expect(typeof(manager)).toBe("object");
  });
});

describe('getOfficeNum', () => {
  test("should return a room number for the manager", () => {
    const officeNum = new Manager('tammer', 3,'fake@gmail.com', 123);
    expect(officeNum.getOfficeNum()).toBe('123');
  })
});

describe("getRole", () => {
  it("should return a string of manager employees", () => {
    const role = new Manager('tammer', 3,'fake@gmail.com', 123, 'manager');

    expect(role.getRole()).toBe('Manager');
  });
});