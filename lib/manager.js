const employee = require('./employee');

class manager extends employee {
  constructor (name, id, email, role, officeNumber) {
    super(name, id, email, role);

    this.officeNumber = officeNumber;
  }

  getOffice() {
    return this.officeNumber
  }
}

module.exports = manager;