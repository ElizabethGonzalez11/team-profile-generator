const Intern = require('../lib/intern');

describe('intern', () => {
  test('should return an object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
  });
});

describe ('getSchool', () => {
  test('should return a string with intern school', () => {
    const school = new Intern('gracie', 2, 'fake@gmail.com', 'some school');
    expect(school.getSchool()).toBe('some school')
  });
});

describe("getRole", () => {
  it("should return a string of intern roles", () => {
    const role = new Intern('gracie', 2, 'fake@gmail.com','intern');

    expect(role.getRole()).toBe('Intern');
  });
})