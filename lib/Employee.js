class Employee {
    constructor(name, id, email) {
        //set class varibles
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getEmail() {

        return this.email;
    }
    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;




