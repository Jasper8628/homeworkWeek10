const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email,"Engineer");
        this.github=github;
    }
    getGithub(){
        console.log(this.github);
        return this.github;
    }
}/* 
const testValue="githubUser"
const sam=new Engineer("sam",102,"sam@sam.com",testValue);
sam.getRole();
console.log(sam.github);
sam.getGithub();
sam.getId();
sam.getName();
sam.getEmail(); */
module.exports=Engineer;
