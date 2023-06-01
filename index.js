// const fs = require("fs/promises")

// const { admin, clients } = require("./users/users");
// const {isLeapYear} = require("./date")
// const getCurrentMonth = require("./date").getCurrentMonth()

// console.log("Hello Node.js i know how to create project and i am profeshional");
// console.log("users", admin, clients);


// isLeapYear(getCurrentMonth);

// const readFile = async () => {
//     const data = await fs.readFile("./files/files.txt", "utf-8")

//     console.log("data", data);
// }

// const addText = async () => {
//     const data = await fs.appendFile("./files/files.txt", "\nCongritulate, you can add text")
// }

// const replaceText = async () => {
//     const data = await fs.writeFile("./files/files.txt", "Wow , that is great, well done ")
// }

// addText()
// replaceText()
// readFile()

const contacts = require("./contacts");

const invakeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case "getAll":
            const getList = await contacts.getAll();
            return console.log(getList);
        case "getContacById":
            const getById = await contacts.getContactById(id);
            return console.log(getById);
        case "addContact":
            const addContact = await contacts.addContact({name, email, phone});
        return console.log(addContact);
        case "changeContact":
            const changeContact = await contacts.changeContact(id, {name, email, phone});
        return console.log(changeContact);
        case "deleteContact":
            const deleteContact = await contacts.deleteContact(id);
        return console.log(deleteContact);
    
        default:
            console.log("There is no methods");
    }
}

// invakeAction({action: "getAll"})
// invakeAction({action: "getContacById", id: "e6ywwRe4jcqxXfCZOj_1e"})
// invakeAction({action: "changeContact", id: "z5N9C5cr_kSbRX7GbpJcL", name: "Dude", email: "You", phone: "are really the ebst"})
// invakeAction({action: "deleteContact", id: "z5N9C5cr_kSbRX7GbpJcL"})

const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const listContast = require('./contacts/contacts.json')

const app = express();

app.use(async (req, res, next) => {
    const {method, url} = req;
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`)
    next();
})

app.get("/", (req, res) => {
    res.send("<h1>You are in homepage</h1>")
})

app.get("/contacts", (req, res) => {
    res.send("<h1>You are in contacts page</h1>")
})

app.get("/listcontacts", (req, res) => {
    res.send(listContast)
})

app.listen(3001, () => console.log("Server is running"))