const Employee = require('../lib/employee');

describe("Employee", () => {
    //test for methods, getName, getemail, getrole

    //Arrange - data for the tests, figured it would be easier to modify within it's own variable
    const employee = {
        name: "Tiffany",
        id: 45,
        email: "Email@email.com",
    }

        // This worked great, just felt redundant
    describe("Initilization", () => {

        it("just testing that the correct formate of data pushes through", () =>{

            //Act
            const newPerson = new Employee("Tiffany", 45, "Email@email.com")

            //Assert - asserting that what we are creating pushes through into an object correctly
            expect(newPerson.name).toEqual(expect.any(String));
            expect(newPerson.id).toEqual(expect.any(Number));
            expect(newPerson.email).toEqual(expect.any(String));
        });
    });

    describe("getName", () =>
    {
        it("Should build with name when provided name", () => {
            //Arrange
            // const name = "Tiffany";

            //act
            const newPerson = new Employee(employee.name, employee.id, employee.email)
            const result = newPerson.getName();
            console.log(result);


            //assert
            expect(result).toBe(employee.name);
        });
    });

    describe("getID", () =>
    {
        it("Should build with ID when provided ID", () => {
            //Arrange
            // const id = 45;

            //act
            const newPerson = new Employee(employee.name, employee.id, employee.email);
            const result = newPerson.getID();
            console.log(result);

            //assert
            expect(result).toBe(employee.id);
        });
    });

    describe("getEmail", () =>
    {
        it("Should build with email address when provided email address", () => {
            //Arrange
            // const email = "email@gmail.com";

            //Act
            const newPerson = new Employee(employee.name, employee.id, employee.email);
            const result = newPerson.getEmail();
            console.log(result);

            //assert
            expect(result).toBe(employee.email)
        });
    });

    describe("getRole", () =>
    {
        it("Should build with role when provided role", () => {
            //Arrange
            // const role = "Employee";

            //act
            const newPerson = new Employee(employee.name, employee.id, employee.email);

            //assert
            expect(newPerson.getRole()).toEqual('Employee');
        });
    });
})