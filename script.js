/*Declaring variables*/

let studentName = "Steven Starovoitov";
let studentAge = 23;
let isEnrolled = true;

console.log(studentName,studentAge,isEnrolled);

/*Demonstrating Data Types*/

const stringValue = "Hello world!";
const numValue = 12;
let boolValue = false;
let arrayEx = ["apple","banana","cherry"];
let person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(stringValue,numValue,boolValue,arrayEx,person);

/*Basic Operators*/

addition = 5 + 3;
subtraction = 12 - 4;
multiply = 2 * 5;
division = 3 * 4;

console.log(addition,subtraction,multiply,division);

greaterT = 52 > 2;
lessT = 4 < 5;

console.log(greaterT,lessT);

AND = 5 && 2;
OR = 2 || 4;
NOT = 2 != 4;

console.log(AND,OR,NOT);

/*Extra for logical operators
Just to show something of use that isn't just stating the operator*/

/*AND example*/
let age = 21;
let validID = true;

if (age >= 18 && validID) {
    console.log("Welcome!");
} else {
    console.log("You cannot enter.");
}

/*OR example*/

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No work today!");
} else {
    console.log("Go to work!");
}