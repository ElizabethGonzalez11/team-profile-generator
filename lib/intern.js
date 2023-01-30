const employee = require('./employee');

class intern extends employee {
  constructor (name, id, email, role, school) {
    super(name, id, email, role);

    this.school = school;
  }

  getSchool(){
    return this.school
  }
}

module.exports = intern;