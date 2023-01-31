
const Engineer = require('../lib/engineer');

describe("engineer", () => {
  test("returns object", () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
  })
});

describe("getGithub", () => {
  test("should return a string of engineers github", () => {
    const github = new Engineer('tammer', 1, 'fake@gmail.com', 'GHtammer');

    expect(github.getGithub()).toEqual('GHtammer');
  })
});

describe("getRole", () => {
  test("should return a string of employees role", () => {
    const role = new Engineer('tammer', 1, 'fake@gmail.com', 'GHtammer','Engineer');

    expect(role.getRole()).toEqual('Engineer');
  })
});
