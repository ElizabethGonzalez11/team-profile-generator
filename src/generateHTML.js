
const generateHTML = (answersArr) => {
  let newCard = '';
  let employeeCard =[];
  for (let i = 1; i <answersArr.length; i++) {
    switch (answersArr[i].getRole()) {
      case 'Engineer':
        newCard += `
        <div class="card">
        <div class="card-body">
          <h3 class="card-title text-center" id="name">${answersArr[i].name()}</h3>
          <h4 id="role" class="text-center"><i class="fas fa-user-ninja"></i>${answersArr[i].getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="id">${answersArr[i].id()}</li>
          <li class="list-group-item" id="email"><a href="mailto:${answersArr[i].email}">Email: ${answersArr[i].email}</a></li>
          <li class="list-group-item" id="github"><a href="https://github.com/${answersArr[i].github}" target="_blank">Github:${answersArr[i].github}</a></li>
        </ul>
      </div>`;       

        employeeCard.push(newCard)
        break;
    
    case 'Intern':
      newCard += `
      <div class="card">
      <div class="card-body">
        <h3 class="card-title text-center" id="name">${answersArr[i].name}</h3>
        <h4 id="role" class="text-center"><i class="fas fa-user-graduate"></i> ${answersArr[i].getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id">ID: ${answersArr[i].id}</li>
        <li class="list-group-item" id="email"><a href="mailto:${answersArr[i].email}">Email: ${answersArr[i].email}</a></li>
        <li class="list-group-item" id="school">School: ${answersArr[i].school}</li>
      </ul>
    </div>`;      

      employeeCard.push(newCard)
      break;
    }
  };
    
return `

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
  <link rel="stylesheet" href="style.css"/>
</head>

<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <div class="col-12 jumbotron mb-3 team-heading bg-danger">
    <h1 class="text-center text-white">MY TEAM</h1>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="team-area col-12 d-flex justify-content-center mt-5">
<div class="card text">
  <div class="card-body">
    <h3 class="card-title text-center" id="name">${answersArr[0].name}</h3>
    <h4 id="role" class="text-center"><i class="fas fa-mug-hot"></i>Manager</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="id">ID:${answersArr[0].id}</li>
    <li class="list-group-item" id="email"><a href="mailto:${answersArr[0].email}">Email: ${answersArr[0].email}</a></li>
    <li class="list-group-item" id="officeNum">Office number:${answersArr[0].officeNum}</li>
  </ul>
</div>
${newCard}

    </div>
  </div>
</div>


</body>
</html>`;
}

module.exports = generateHTML;