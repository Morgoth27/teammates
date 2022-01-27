const Intern = require('../lib/intern');

describe("Intern", () => {
    const employee = {
        name: "Tiffany",
        id: 45,
        email: "email@email.com",
        school: "Unversity of Washington"
    };

    describe("getSchool", () =>{
        it("gathering school data that was inputted", () => {
            const newPerson = new Intern(employee.name, employee.id, employee.email, employee.school);
            const result = newPerson.getSchool();
            console.log(result);

            expect(result).toBe(employee.school)
        });
    });

    describe("getRole", () => {
        it("should get intern role", () => {
            const newPerson = new Intern(employee.name, employee.id, employee.email, employee.school);
            expect(newPerson.getRole()).toEqual('Intern');

        });
    });
});