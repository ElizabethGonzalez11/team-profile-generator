//packages needed for app

const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const generateHTML = require('./src/generateHTML');

let answersArr = [];

//creating questions
const questions = [
  {
    name: 'role',
    message: "What type of employee would you like to add?",
    type: 'list',
    choices: ['Engineer','Intern','Manager','All done']
  }
];

const manager = [
  {
    type: 'input',
    message: "What is the manger's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is their id number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is their email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is their office number?",
    name: 'officeNum',
  }
];
  
 const engineer = [
  {
    type: 'input',
    message: "What is the engineer's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is their id number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is their email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is their Github username?",
    name: 'github',
  }
];

const intern = [
  {
    type: 'input',
    message: "What is the intern's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is their id number?",
    name: 'id',
  },
  {
    type: 'input',
    message: "What is their email address?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What school did they attend?",
    name: 'school',
  },
];

//init app
function init () {
  inquirer.prompt(questions).then(answers => {
    if (answers.role === 'All done') {
      console.log(answersArr);
      generateTeam();
      return;
    }
    if (answers.role === 'Manager') {
      inquirer.prompt(manager).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        answersArr.push(manager);
        init();
      })
    }
    if (answers.role === 'Engineer') {
      inquirer.prompt(engineer).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        answersArr.push(engineer);
        init();
      })
    }
    if (answers.role === 'Intern') {
      inquirer.prompt(intern).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        answersArr.push(intern);
        init();
      })
    }
  })
};

//call to init app
init();

//write file of team members
function generateTeam() {
  fs.writeFileSync('./dist/generatedTeam.html', generateHTML(answersArr), "utf-8");
  console.log('Team created')
};