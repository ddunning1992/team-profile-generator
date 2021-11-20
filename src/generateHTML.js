const managerCard = function(manager) {
    return `
    <div>
        <div>
            <div>
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            
            <div>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

const engineerCard = function(engineer) {
    return `
    <div>
        <div>
            <div>
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            
            <div>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const internCard = function(intern) {
    return `
    <div>
        <div>
            <div>
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            
            <div>
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}