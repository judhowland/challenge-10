const createTeamPage = members => {

    // Create Manager HTML section
    const createManager = manager => {
        return `
        <div class="card team-member-card">
        <div class="card-header">
            <h2 class="card-title text-center">${manager.getName()}</h2>
            <h4 class="card-title text-center">${manager.getRole()}</h>
            <h1 class="text-center"><i class="fas fa-bullhorn"></i></h1>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID #: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Room #: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // Create Engineer HTML section
    const createEngineer = engineer => {
        return `
        <div class="card team-member-card">
    <div class="card-header">
        <h2 class="card-title text-center">${engineer.getName()}</h2>
        <h4 class="card-title text-center">${engineer.getRole()}</h4>
        <h1 class="text-center"><i class="fas fa-laptop-code"></i></h1>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID #: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // Create Intern HTML section
    const createIntern = intern => {
        return `
        <div class="card team-member-card">
    <div class="card-header">
        <h2 class="card-title text-center">${intern.getName()}</h2>
        <h4 class="card-title text-center">${intern.getRole()}</h4>
        <h1 class="text-center"><i class="far fa-user-circle"></i></h1>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID #: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    // merge all HTML parts
    const createHTML = []

    createHTML.push(members
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );

    createHTML.push(members
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );

    createHTML.push(members
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return createHTML.join("");
}

module.exports = members => {

    // Create greater document HTML shell
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Jud Co, Inc Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">Jud Co, Inc Team Members</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${createTeamPage(members)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};