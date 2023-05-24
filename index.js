const { admin, clients } = require("./users/users");
const {isLeapYear} = require("./date")
const getCurrentMonth = require("./date").getCurrentMonth()

console.log("Hello Node.js i know how to create project and i am profeshional");
console.log("users", admin, clients);


isLeapYear(getCurrentMonth)