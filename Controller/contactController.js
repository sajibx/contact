const cont = require('../Model/Contacts')
const {contacts} = require("../Model/Contacts");
const {json} = require("express");

exports.getAllContacts = (req, res) => {
    res.json(cont.contacts.getAllContact())
}

exports.getByIdContacts = (req, res) => {
    let id = req.params.id
    id = parseInt(id)

    let contact = cont.contacts.getContactById(id)
    res.json(contact)
}

exports.createContact = (req, res) => {
    let { name, number, email, id } = req.body
    console.log(name+" "+number+" "+email)
    let contact = cont.contacts.createContact({name, number, email, id})
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let ids = req.params.id
    ids = parseInt(ids)

    let { name, number, email, id } = req.body
    let update = cont.contacts.updateContact(ids, {name, number, email})
    res.json(update)
}

exports.deleteContact = (req, res) => {
    let ids = req.params.id
    ids = parseInt(ids)

    let cont = contacts.deleteContact(ids)
    res.json(cont)

}
