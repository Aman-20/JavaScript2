/*javascript object is an entity having state and behaviour */
//js object have special property called prototype

const student = {
    Name : 'Aman',
    marks : 94.3,
    printMarks : () => {
        console.log(this.marks);
    }
}
console.log(student);


//all javascript object inherit properties and method from prototype
const employee = {
    tax1 : function() {
        console.log("hello");
    },
    tax2 : () => {
        console.log("hello1");
    },
    calctax(){
        console.log("tax is 10%");
    },
};
console.log(employee);


//we can pass prototype of one object to another object
const employee1 = {
    salary : 1000,
};
employee1.__proto__ = employee;


//if object and prototype have same method then object method will be used
const employee2 = {
    salary : 1000,
    calctax() {
        console.log("tax is 20%");
    }
};
employee2.__proto__ = employee;
