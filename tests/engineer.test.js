const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    const employee = {
        name: "Tiffany",
        id: 45,
        email: "email@email.com",
        github: "morgoth27"
    };

    describe("getGitHub", () =>{
        it("gathering github data that was inputted", () => {
            const newPerson = new Engineer(employee.name, employee.id, employee.email, employee.github);
            const result = newPerson.getGithub();
            console.log(result);

            expect(result).toBe(employee.github)
        });
    });

    describe("getRole", () => {
        it("should get engineer role", () => {
            const newPerson = new Engineer(employee.name, employee.id, employee.email, employee.github);
            expect(newPerson.getRole()).toEqual('Engineer');

        });
    });
});