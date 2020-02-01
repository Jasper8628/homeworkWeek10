class Employee {
    constructor(name, id, email,title) {
        this.name = name;
        this.title = title;
        this.id = id;
        this.email = email;

    }
    getName(){
        console.log(this.name);
        return this.name;
    }
    getId  () {
        console.log(this.id);
        return this.id;

    }
    getEmail  () {
        console.log(this.email);
        return this.email;

    }
    getRole  () {
        console.log(this.title);
        return this.title;

    }
}
//const bob=new Employee("Bob",101,"bob@bob.com","employee");
module.exports = Employee;

//bob.getRole();

//bob.getEmail();