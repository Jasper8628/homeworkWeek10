const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
    getRole(){
        this.title="Manager";
        return this.title;
    }
}
//const dick=new Manager("dick",001,"dick@dick.com",101);
//dick.getName();
//dick.getId();
//dick.getOffice();
//dick.getName();
module.exports = Manager;

