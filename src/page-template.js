const genTeam = team => {
    //generate manager html
    const genMgr = manager =>{
        return  `
        <div class = "col">
            <div class= "card text-center text-white bg-secondary mb-3">
                <div class = "card-header">
                    <h2 class = card-title">${manager.getName()}</h2>
                    <h3 class = card-title"><span class="glyphicon glyphicon-user"></span>${manager.getRole()}</h3>
                </div>
                <div class ="card-body">
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item list-group-item-action list-group-item-secondary">ID: ${manager.getID()}</li>
                        <li class= "list-group-item list-group-item-action list-group-item-secondary"><a href="mailto:">Email:${manager.getEmail()}</a></li>
                        <li class = "list-group-item list-group-item-action list-group-item-secondary">Office #: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    };

    const genEng = engineer =>{
        return  `
        <div class = "col">
            <div class= "card text-center text-white bg-danger mb-3">
                <div class = "card-header">
                    <h2 class = card-title">${engineer.getName()}</h2>
                    <h3 class = card-title"><span class="glyphicon glyphicon-hdd"></span>${engineer.getRole()}</h3>
                </div>
                <div class ="card-body">
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item list-group-item-action list-group-item-danger">ID: ${engineer.getID()}</li>
                        <li class = "list-group-item list-group-item-action list-group-item-danger">Email: <a href="mailto:">${engineer.getEmail()}</a></li>
                        <li class = "list-group-item list-group-item-action list-group-item-danger">GitHub: ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    const genIntern = intern =>{
        return  `
        <div class = "col">
            <div class= "card text-center text-white bg-primary mb-3">
                <div class = "card-header">
                    <h2 class = card-title">${intern.getName()}</h2>
                    <h3 class = card-title"><span class="glyphicon glyphicon-education"></span>${intern.getRole()}</h3>
                </div>
                <div class ="card-body">
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item list-group-item-action list-group-item-primary">ID: ${intern.getID()}</li>
                        <li class = "list-group-item list-group-item-action list-group-item-primary">Email: <a href="mailto:">${intern.getEmail()}'</a></li>
                        <li class = "list-group-item list-group-item-action list-group-item-primary">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    const html = [];

    html.push(team  
        .filter(employee=>employee.getRole() === 'Manager')
        .map(manager => genMgr(manager))
    );

    html.push(team  
        .filter(employee=>employee.getRole() === 'Engineer')
        .map(engineer => genEng(engineer))
        .join('')
    );

    html.push(team  
        .filter(employee=>employee.getRole() === 'Intern')
        .map(intern => genIntern(intern))
        .join('')
    );

    return html.join('');
}


module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> 
    <title>My Team</title>
</head>

<div class="p-3 mb-4 text-white bg-dark sticky-top">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold"><i class="bi bi-people"></i> My Team</h1>
        <p class="col-md-8 fs-4">A list of my team members, with their respective role and contact information.</p>
      </div>
</div>

<body>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${genTeam(team)}
        </div>
    </div>
</body>
</html>
`
}