const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');


const teamArr = [];

function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the engineer's name?",
      name: 'name',
      validate: answer => {
        if(answer !== "") {
          return true;
        } else {
          return "Please provide a name";
        }
      }
    },
    {
      type: 'input',
      message: "What is the engineer's id number?",
      name: 'id',
      validate: answer => {
        if(answer !== null) {
          return true;
        } else {
          return "Please enter an ID number";
        }
      }
    },
    {
      type: 'input',
      message: "What is the engineer's email address?",
      name: 'email',
      validate: emailInput => {
        if(emailInput !== "") {
          return true;
        } else {
          return "Please submit an email address";
        }
      }
    },
    {
      type: 'input',
      message: "What is the engineer's github username?",
      name: 'github',
      validate: githubInput => {
        if(githubInput !== "") {
          return true;
        } else {
          return "Please enter a github username";
        }
      }
    }
  ]).then(answer => {
    let engineer = new engineer(answer.name, answer.id, answer.email, "Engineer", answer.github);
    teamArr.push(engineer);
    createTeam();
  })
};

function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the manager's name?",
      name: 'name',
      validate: answer => {
        if(answer !== "") {
          return true;
        } else {
          return "Please provide a name";
        }
      }
    },
    {
      type: 'input',
      message: "What is the manager's ID number?",
      name: 'id',
      validate: answer => {
        if(answer !== null) {
          return true;
        } else {
          return "Please enter an ID number";
        }
      }
    },
    {
      type: 'input',
      message: "What is the manager's email address?",
      name: 'email',
      validate: emailInput => {
        if(emailInput !== "") {
          return true;
        } else {
          return "Please submit an email address";
        }
      }
    },
    {
      type: 'input',
      message: "What is the manager's office number?",
      name: 'officeNumber',
      validate: officeNumberInput => {
        if(officeNumberInput) {
          return true;
        } else {
          return "Please enter an office number";
        }
      }
    }
  ]).then(answer => {
    let manager = new manager(answer.name, answer.id, answer.email, "Manager", answer.officeNumber);
    teamArr.push(manager);
    createTeam();
  })
}
function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: "What is the intern's name?",
      name: 'name',
      validate: answer => {
        if(answer !== "") {
          return true;
        } else {
          return "Please provide a name";
        }
      }
    },
    {
      type: 'input',
      message: "What is the intern's id number?",
      name: 'id',
      validate: answer => {
        if(answer !== null) {
          return true;
        } else {
          return "Please enter an ID number";
        }
      }
    },
    {
      type: 'input',
      message: "What is the interns's email address?",
      name: 'email',
      validate: emailInput => {
        if(emailInput !== "") {
          return true;
        } else {
          return "Please submit an email address";
        }
      }
    },
    {
      type: 'input',
      message: "What school did the intern study at?",
      name: 'school',
      validate: schoolInput => {
        if(schoolInput !== "") {
          return true;
        } else {
          return "Please enter a school name";
        }
      }
    }
  ]).then(answer => {
    let intern = new intern(answer.name, answer.id, answer.email, "intern", answer.school);
    teamArr.push(intern);
    createTeam();
  })
}

const writeToFile = data => {
  const generatedHTML = generatedHTML(data);
  return new Promise((resolve, reject) => {
    fs.writeFile('./dest/generated.html', generatedHTML, err => {
      if(err) {
        reject(err);
      }
      resolve({
        ok: true,
        message: 'Page generated'
      });
    });
  });
};

function teamArrToHTML() {
  const cardArr = teamArr.map(o => {
    switch (o.role) {
      case 'Manager':
        return `
      <div class="col-md-6 col-lg-4">
        <div class='card employee-card'>
          <div class='manager-card'>
            <div class='card-header bg-dark text-light'>
              <h2><i class="fas fa-mug-hot"></i>MANAGER</h2>
            </div>
            <ul class="list-group list-group-flush list-unstyled">
              <li class="list-group-item"><h3>NAME: ${o.getName()}</h3></li>
              <li class="list-group-item">ID: ${o.getId()}</li>
              <li class="list-group-item">EMAIL: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
              <li class="list-group-item">OFFICE NUMBER: ${o.getOffice()}</li>
            </ul>
          </div>
        </div>
      </div>`

      case 'Engineer':
        return `
        <div class="col-md-6 col-lg-4">
        <div class='card employee-card'>
          <div class='engineer-card'>
            <div class='card-header bg-dark text-light'>
              <h2><i class="fas fa-glasses"></i>ENGINEER</h2>
            </div>
            <ul class="list-group list-group-flush list-unstyled">
              <li class="list-group-item"><h3>NAME: ${o.getName()}</h3></li>
              <li class="list-group-item">ID: ${o.getId()}</li>
              <li class="list-group-item">EMAIL: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
              <li class="list-group-item">GITHUB: <a href="https://github.com/${o.getGithub()}" target="_blank">${o.getGithub()}></a></li>
            </ul>
          </div>
        </div>
      </div>`

      case 'Intern':
        return`
        <div class="col-md-6 col-lg-4">
        <div class='card employee-card'>
          <div class='intern-card'>
            <div class='card-header bg-dark text-light'>
              <h2><i class="fas fa-user-graduate"></i>INTERN</h2>
            </div>
            <ul class="list-group list-group-flush list-unstyled">
              <li class="list-group-item"><h3>NAME:${o.getName()}</h3></li>
              <li class="list-group-item">ID:${o.getId()}</li>
              <li class="list-group-item">EMAIL: <a href="mailto:${o.getEmail()}">${o.getEmail()}</a></li>
              <li class="list-group-item">SCHOOL:${o.getSchool()}</a></li>
            </ul>
          </div>
        </div>
      </div>`
    default:
      console.log('finished') 
      return results 
    }
  });
  return cardArr;
}

const generateHTML = () => {
  const results = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"/>
</head>

<body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3"></div>
  </header>

  <main class="container my-5">
    <div class="row">
      ${teamArrToHTML().join('')}
    <div>
  </main>
</body>
</html>`;
  return results;
}

function createTeam() {
  inquirer.prompt ([
    {
      name: "role",
      message: "What type of employee would you like to add?",
      type: "list",
      choices: [
        "Engineer",
        "Intern",
        "Manager",
        "None",
      ]
    }
  ]).then(answer => {
    switch(answer.role) {
      case "Engineer":
        addEngineer();
        break;
      
      case "Intern":
        addIntern();
        break;
      
      case "Manager":
        addManager();
        break;
      
      default:
        console.log(teamArr);
        writeToFile(teamArr);
    };
  });
}

createTeam();



