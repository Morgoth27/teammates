const Manager = require('../lib/manager.js');

describe("Manager", () => {
    const employee = {
        name: "Tiffany",
        id: 45,
        email: "email@email.com",
        officeNum: "12"
    };

    describe("getOfficeNumber", () =>{
        it("gathering office number that was inputted", () => {
            const newPerson = new Manager(employee.name, employee.id, employee.email, employee.officeNum);
            const result = newPerson.getOfficeNumber();
            console.log(result);

            expect(result).toBe(employee.officeNum)
        });
    });

    describe("getRole", () => {
        it("should get intern role", () => {
            const newPerson = new Manager(employee.name, employee.id, employee.email, employee.officeNum);
            expect(newPerson.getRole()).toEqual('Manager');

        });
    });
});