const Employee = require("./Employee");
class Manager extends Employee {
constructor(name, id, email, officeNumber) {
    if (
      typeof officeNumber !== "number" ||
      isNaN(officeNumber) ||
      officeNumber < 0
    ) {
      throw new Error(
        "Expected parameter 'officeNumber' to be a non-negative number"
      );
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;