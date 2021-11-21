const createManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${manager.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">Manager</h4>
            </div>
            
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

const createEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${engineer.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">Engineer</h4>
            </div>
            
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const createIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${intern.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">Intern</h4>
            </div>
            
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

generateHTML = (data) => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createIntern(employee);

            cardArray.push(internCard);
        }
    }

    const employeeTemplate = cardArray.join('');

    const buildTeam = generatePage(employeeTemplate);
    return buildTeam;
}

const generatePage = function (employeeTemplate) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css" />
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div>
                <div class="container d-flex flex-row p-2">
                    ${employeeTemplate}
                </div>
            </div>
        </main>
    </body>
    </html>`
}

module.exports = generateHTML;