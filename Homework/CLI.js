const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/intern");
const questions = [{
    type: "input",
    name: "name",
    message: "Name of employee:"
},
{
    type: "input",
    name: "id",
    message: "Id number of employee"
},
{
    type: "input",
    name: "email",
    message: "email of employee:"
},
{
    type: "input",
    name: "title",
    message: "Title of employee:"
}];
const questionManager = [{
    type: "input",
    name: "officeNumber",
    message: "Office number of employee:"
},
{
    type: "input",
    name: "next",
    message: "Enter another?"
}];
const questionEngineer = [{
    type: "input",
    name: "github",
    message: "Github of employee:"
},
{
    type: "input",
    name: "next",
    message: "Enter another?"
}];
const questionIntern = [{
    type: "input",
    name: "school",
    message: "School of employee:"
},
{
    type: "input",
    name: "next",
    message: "Enter another?"
}];
function enterInfo() {
    inquirer.prompt(questions).
        then(function (answers) {
            switch (answers.title) {
                case "manager":
                    inquirer.prompt(questionManager).
                        then(function (answers) {
                            const manager=new Manager(
                                answers.name,
                                answers.id,
                                answers.email,
                                answers.officeNumber);
                            if (answers.next) {
                                enterInfo();
                            }
                            else {

                            }
                        });
                        break;

                case "engineer":
                    inquirer.prompt(questionEngineer).
                        then(function (answers) {
                            const engineer=new Engineer(
                                answers.name,
                                answers.id,
                                answers.email,
                                answers.github
                            );
                            if (answers.next) {
                                enterInfo();
                            }
                            else {

                            }
                        });
                        break;

                case "intern":
                    inquirer.prompt(questionIntern).
                        then(function (answers) {
                            const intern = new Intern(
                                answers.name,
                                answers.id,
                                answers.email,
                                answers.school
                            );
                            if (answers.next) {
                                enterInfo();
                            }
                            else {

                            }
                        });
                        
            }
        });
}
enterInfo();