const fs = require('fs/promises');
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const getAll = async () => {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data)
}

const getContactById = async (id) => {
    const list = await getAll();

    const result = list.find(item => item.id === id);

    return result || null;
}

const addContact = async (data) => {
    const list = await getAll();

    const newContact = {
        id: nanoid(),
        ...data
    }

    list.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2));
    return newContact;
}

const changeContact = async (id, data) => {
    const list = await getAll();

    const index = list.findIndex(item => item.id === id);

    if(index === -1) {
        return null
    }

    list[index] = {
        id: id,
        ...data
    }

    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2))
    return  list[index];
}

const deleteContact = async (id) => {
    const list = await getAll();

    const index = list.findIndex(item => item.id === id);

    if (index === -1) {
        return null
    }

    const [result] = list.splice(index, 1);

    await fs.writeFile(contactsPath, JSON.stringify(list, null, 2))

    return result
}

module.exports = {
    getAll,
    getContactById,
    addContact,
    changeContact,
    deleteContact
}