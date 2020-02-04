const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
let html = ``;
const htmlHead = `
<html>
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
<body>
<header style="width: 100%; height : 60px;background-color: brown; margin:auto" class="text-center">
    <h1>
        My Team
    </h1>
</header>
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
    type: "list",
    name: "title",
    message: "Title of employee:",
    choices:["manager","engineer","intern"]
}];
const questionManager = [{
    type: "input",
    name: "officeNumber",
    message: "Office number of employee:"
},
{
    type: "list",
    name: "next",
    message: "Enter another?",
    choices:["yes","no"]
}];
const questionEngineer = [{
    type: "input",
    name: "github",
    message: "Github of employee:"
},
{
    type: "list",
    name: "next",
    message: "Enter another?",
    choices:["yes","no"]
}];
const questionIntern = [{
    type: "input",
    name: "school",
    message: "School of employee:"
},
{
    type: "list",
    name: "next",
    message: "Enter another?",
    choices:["yes","no"]
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
                                <div class="card bg-primary col-md-3" >
                                    <div class="card-body">
                                      <h5 class="card-title">${manager.name}</h5>
                                      <p class="card-text">
                                      <img src="./Assets/piggy-bank.png" style="height: 25px;width: 25px;margin-right: 5px" alt="">${title}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">ID: ${manager.id}</li>
                                      <li class="list-group-item">Email: <a href="#">${manager.email}</a> </li>
                                      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                                    </ul>
                                  </div>`;
                            if (answers.next=="yes") {
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
                            <div class="card bg-primary col-md-3" >
                                <div class="card-body">
                                  <h5 class="card-title">${engineer.name}</h5>
                                  <p class="card-text">
                                  <img src="./Assets/engineer.png" style="height: 25px;width: 25px;margin-right: 5px" alt="">${title}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">ID: ${engineer.id}</li>
                                  <li class="list-group-item">Email: <a href="#">${engineer.email}</a> </li>
                                  <li class="list-group-item">Github: <a href="#">${engineer.github}</a> </li>
                                </ul>
                              </div>`
                            if (answers.next=="yes") {
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
                            <div class="card bg-primary col-md-3" >
                                <div class="card-body">
                                  <h5 class="card-title">${intern.name}</h5>
                                  <p class="card-text">
                                  <img src="./Assets/intern.png" style="height: 25px;width: 25px;margin-right: 5px" alt="">${title}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">ID: ${intern.id}</li>
                                  <li class="list-group-item">Email: <a href="#">${intern.email}</a> </li>
                                  <li class="list-group-item">School: ${intern.school}</li>
                                </ul>
                              </div>`
                            if (answers.next=="yes") {
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
    fs.writeFile("./output/team.html", html, function (err) {
        if (err) throw err;
        console.log(html);
    })
}
enterInfo();