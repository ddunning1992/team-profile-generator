//team members
const Employee = require('../lib/Employee');

//node modules
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

//team
const teamArray = [];

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the emloyee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            when: (input) => input.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub?",
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
            when: (input) => input.role === 'Intern'
        }
    ])
}
