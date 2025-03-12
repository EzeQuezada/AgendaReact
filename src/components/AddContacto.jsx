import React, { useState } from 'react'
import { agendaService } from '../services/agendaService'

export const AddContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  })
  const [contacts, setContacts] = useState([])
  const [searchText, setSearchText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await agendaService.createContact(formData)
      fetchContacts()
      setFormData({ nombre: '', apellido: '', telefono: '' })
    } catch (error) {
      console.error('Error adding contact:', error)
    }
  }

  const fetchContacts = async () => {
    try {
      const data = await agendaService.getContacts()
      setContacts(data)
    } catch (error) {
      console.error('Error fetching contacts:', error)
    }
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase())
  }

  const filteredContacts = contacts.filter(contact => 
    `${contact.nombre} ${contact.apellido} ${contact.telefono}`
      .toLowerCase()
      .includes(searchText)
  )

  return (
    <div className="container">
      <h1>Agenda de Contactos</h1>

      <div className="addContactSection">
        <h2>Agregar Nuevo Contacto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            required 
          />

          <label htmlFor="apellido">Apellido:</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido"
            value={formData.apellido}
            onChange={(e) => setFormData({...formData, apellido: e.target.value})}
            required 
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input 
            type="text" 
            id="telefono" 
            name="telefono"
            value={formData.telefono}
            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
            required 
          />

          <button type="submit">Agregar Contacto</button>
        </form>
      </div>

      <h2>Buscar Contacto</h2>
      <input 
        type="text" 
        className="searchInput" 
        placeholder="Buscar por nombre, apellido o teléfono"
        value={searchText}
        onChange={handleSearch}
      />

      <h2>Lista de Contactos</h2>
      <ul className="contactList">
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  )
}
