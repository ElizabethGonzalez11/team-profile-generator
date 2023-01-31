const Employee = require('./employee');

class Manager extends Employee {
  constructor (name, id, email, role, officeNum) {
    super(name, id, email);

    this.officeNum = officeNum;
  }

  getOfficeNum() {
    console.log (officeNum)
    return this.officeNum;
    
  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;