const genTeam = team => {
    //generate manager html
    const genMgr = manager =>{
        return  `
        <div class= "card employee-card">
            <div class = "card-header">
                <h2 class = card-title">${manager.getName()}</h2>
                <h3 class = card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class ="card-body">
                <ul class = "list-group">
                    <li class = "list-grp-item">ID: ${manager.getID()}</li>
                    <li class = "list-grp-item">Email: <a href="mailto:${manager.getEmail()}'>${manager.getEmail()}</li>
                    <li class = "list-grp-item">Office #: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const genEng = engineer =>{
        return  `
        <div class= "card employee-card">
            <div class = "card-header">
                <h2 class = card-title">${engineer.getName()}</h2>
                <h3 class = card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class ="card-body">
                <ul class = "list-group">
                    <li class = "list-grp-item">ID: ${engineer.getID()}</li>
                    <li class = "list-grp-item">Email: <a href="mailto:${engineer.getEmail()}'>${engineer.getEmail()}</li>
                    <li class = "list-grp-item">GitHub: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
        `;
    }

    const genIntern = intern =>{
        return  `
        <div class= "card employee-card">
            <div class = "card-header">
                <h2 class = card-title">${intern.getName()}</h2>
                <h3 class = card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class ="card-body">
                <ul class = "list-group">
                    <li class = "list-grp-item">ID: ${intern.getID()}</li>
                    <li class = "list-grp-item">Email: <a href="mailto:${intern.getEmail()}'>${intern.getEmail()}</li>
                    <li class = "list-grp-item">School: ${intern.getSchool()}</li>
                </ul>
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
    <title>Document</title>
</head>
<body>
    ${genTeam(team)}
</body>
</html>
`
}