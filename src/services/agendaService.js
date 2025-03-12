const API_URL = 'http://www.raydelto.org/agenda.php'

export const agendaService = {
  async getContacts() {
    const response = await fetch(API_URL)
    return response.json()
  },

  async createContact(newContact) {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newContact)
    })
    return response.json()
  }
}
