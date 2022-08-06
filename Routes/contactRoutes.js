
const contactRouter = require('express').Router()
const { getAllContacts, getByIdContacts, createContact, updateContact, deleteContact, } = require('../Controller/contactController')

contactRouter.get('/get', getAllContacts)

contactRouter.get('/:id', getByIdContacts)

contactRouter.post('/create', createContact)

contactRouter.post('/:id', updateContact)

contactRouter.post('/delete/:id', deleteContact)

module.exports = contactRouter
