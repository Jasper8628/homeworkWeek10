const Employee=require("./Employee");
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
    getSchool(){
        console.log(this.school);
        return this.school;
    }
    getRole(){
        this.title="Intern";
        return this.title;
    }
}/* 
const tim = new Intern("tim",999,"tim.com","ucla");
tim.getName(); */
module.exports=Intern;