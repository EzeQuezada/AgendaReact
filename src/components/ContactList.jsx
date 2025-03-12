import React from 'react'

export const ContactList = ({ contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.nombre} {contact.apellido} - {contact.telefono}
        </li>
      ))}
    </ul>
  )
}
