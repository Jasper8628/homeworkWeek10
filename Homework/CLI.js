const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/intern");
let html = ``;
const htmlHead = `
<html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
<body>
<div class="container">
    <div class="row">`;
const htmlFoot = ` 
</div>
</div>
 </body>
</html>`;
let htmlMng = ``;
let htmlEng = ``;
let htmlInt = ``;
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
                    const manager = new Manager(
                        answers.name,
                        answers.id,
                        answers.email);
                    inquirer.prompt(questionManager).
                        then(function (answers) {
                            manager.officeNumber = answers.officeNumber;
                            const title = manager.getRole();
                            htmlMng = htmlMng + `
                                <div class="card col-md-2" >
                                    <div class="card-body">
                                      <h5 class="card-title">${manager.name}</h5>
                                      <p class="card-text">${title}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">ID: ${manager.id}</li>
                                      <li class="list-group-item">Email: ${manager.email}</li>
                                      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                                    </ul>
                                  </div>`;
                            if (answers.next) {
                                enterInfo();
                            }
                            else {
                                CreateHtml();
                            }
                        });
                    break;

                case "engineer":
                    const engineer = new Engineer(
                        answers.name,
                        answers.id,
                        answers.email);
                    inquirer.prompt(questionEngineer).
                        then(function (answers) {
                            engineer.github = answers.github;
                            const title = engineer.getRole();
                            htmlEng = htmlEng + `
                            <div class="card col-md-2" >
                                <div class="card-body">
                                  <h5 class="card-title">${engineer.name}</h5>
                                  <p class="card-text">${title}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">ID: ${engineer.id}</li>
                                  <li class="list-group-item">Email: ${engineer.email}</li>
                                  <li class="list-group-item">Github: ${engineer.github}</li>
                                </ul>
                              </div>`
                            if (answers.next) {
                                enterInfo();
                            }
                            else {
                                CreateHtml();
                            }
                        });
                    break;

                case "intern":
                    const intern = new Intern(
                        answers.name,
                        answers.id,
                        answers.email
                    );
                    inquirer.prompt(questionIntern).
                        then(function (answers) {
                            intern.school=answers.school;
                            const title = intern.getRole();
                            htmlInt = htmlInt + `
                            <div class="card col-md-2" >
                                <div class="card-body">
                                  <h5 class="card-title">${intern.name}</h5>
                                  <p class="card-text">${title}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">ID: ${intern.id}</li>
                                  <li class="list-group-item">Email: ${intern.email}</li>
                                  <li class="list-group-item">School: ${intern.school}</li>
                                </ul>
                              </div>`
                            if (answers.next) {
                                enterInfo();
                            }
                            else {
                                CreateHtml();
                            }
                        });

            }
        });
}
function CreateHtml() {
    html = htmlHead + htmlMng + htmlEng + htmlInt + htmlFoot;
    fs.writeFile("team.html", html, function (err) {
        if (err) throw err;
        console.log(html);
    })
}
enterInfo();