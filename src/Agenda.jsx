import React, { useEffect, useState } from 'react'
import { AddContacto, ContactList, SearchBar } from './components/'
import { agendaService } from '../src/services/agendaService'

export const Agenda = () => {
  const [contacts, setContacts] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const data = await agendaService.getContacts()
    setContacts(data)
  }

  const handleAddContact = async (newContact) => {
    await agendaService.createContact(newContact)
    fetchContacts()
  }

  const filteredContacts = contacts.filter(contact => 
    `${contact.nombre} ${contact.apellido} ${contact.telefono}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  )

  return (
    <div className="container">
      <h1>Agenda de Contactos</h1>
      <AddContacto onAddContact={handleAddContact} />
      <SearchBar 
        searchText={searchText} 
        onSearch={(e) => setSearchText(e.target.value)} 
      />
      <ContactList contacts={filteredContacts} />
    </div>
  )
}
