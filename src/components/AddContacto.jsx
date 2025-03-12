import React, { useState } from 'react'
  

export const AddContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            onChange={handleChange}
            required 
          />

          <label htmlFor="apellido">Apellido:</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required 
          />

          <label htmlFor="telefono">Teléfono:</label>
          <input 
            type="text" 
            id="telefono" 
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
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
      />
      <button className="searchButton">Buscar</button>

      <button 
        className="showFormButton" 
        style={{display: 'none'}}
      >
        Agregar Nuevo Contacto
      </button>

      <h2>Lista de Contactos</h2>
      <ul className="contactList"></ul>
    </div>
  )
}
