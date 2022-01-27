// Need to be able to ask them for manager, intern, and engineer info 
// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'` - Build role obj and store in an array
//Mgr - prompt for data, THEN create and store an obj for the manager
    //then ask what they would like to do next
        //write this to HTML page when they select they are done adding team members

//Eng - prompt for data, THEN create and store an obj for the ENGINEER
    //then ask what they would like to do next
            //write this to HTML page when they select they are done adding team members

//intern - prompt for data, THEN create and store an obj for the INTERN
    //then ask what they would like to do next
            //write this to HTML page when they select they are done adding team members

            //USE ALL OF COLLECTED DATA TO PUSH TO SHARED ARRAY
            //USE ALL OF COLLECTED DATA TO BUILD HTML PAGE


const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');



    class Employee {
        constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        }
        
        getName (){
            return this.name;
        };
        getEmail (){
            return this.email;
        };
        getID (){
            return this.id;
        };
        getRole () {
            return 'Employee';
        }
    }

module.exports = Employee;