const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const generateHTML = require('./src/generateHTML');

const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

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
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: "Add new employee?",
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, office, github, school, confirmNewEmployee} = employeeData;
        let employee;

        if (role === 'Manager') {
            employee = new Manager (name, id, email, office);

        } else if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
        }

        teamArray.push(employee);

        if (confirmNewEmployee) {
            return addEmployee(teamArray);
        } else {
            console.log(teamArray)
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Team profile created! The index.html file has been placed in your "dist" folder');
        }
    })
}

addEmployee()
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
