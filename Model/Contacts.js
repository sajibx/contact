class Contacts {
    constructor() {
        this.contact = []
    }

    getAllContact()
    {
        return this.contact
    }

    getContactById(id)
    {
        return this.contact.find(contacts=> contacts.id===id)
    }

    createContact(contacts)
    {
        console.log("here "+this.contact.length)
        contacts.id = this.contact.length+1
        this.contact.push(contacts)
        return contacts
    }

    updateContact(id, contacts)
    {
        console.log(id)
        this.contact[id-1] = contacts
        this.contact[id-1].id = id
        return contacts
    }

    deleteContact(id)
    {
        let con = this.contact.find(contacts=> contacts.id===id)
        let index = this.contact.indexOf(con)
        console.log(con)
        this.contact.splice(index,1)
        return con
    }
}

exports.contacts = new Contacts()