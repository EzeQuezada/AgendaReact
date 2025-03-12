import React from 'react'

export const SearchBar = ({ searchText, onSearch }) => {
  return (
    <div>
      <h2>Buscar Contacto</h2>
      <input 
        type="text" 
        className="searchInput" 
        placeholder="Buscar por nombre, apellido o teléfono"
        value={searchText}
        onChange={onSearch}
      />
    </div>
  )
}
