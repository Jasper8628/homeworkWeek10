const Employee=require("./Employee");
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email,"Intern");
        this.school=school;
    }
    getSchool(){
        console.log(this.school);
        return this.school;
    }
}/* 
const tim = new Intern("tim",999,"tim.com","ucla");
tim.getName(); */
module.exports=Intern;