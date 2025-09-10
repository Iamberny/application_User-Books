import { CreateUserPayLoad, UpdateUserPayLoad } from "../types/userType"
import { CreateBookPayLoad, UpdateBookPayLoad } from "../types/bookType"

const BASE_URL = "https://62c96230d9ead251e8baf02e.mockapi.io/campus"

export const Api = {

  getUsers: async() => {
    const response = await fetch(`${BASE_URL}/users`)
    if(!response.ok) throw new Error('Errore nel recupero utenti')
    return response.json()
  },

  createUser: async(data: CreateUserPayLoad) => {
    const response = await fetch(`${BASE_URL}/users` , {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    if(!response.ok) throw new Error('Errore nella creazione di un utente')
    return response.json()
  },

  updateUser: async(id: string, data: UpdateUserPayLoad) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if(!response.ok) throw new Error('Errore nell aggiornamento di un utente')
    return response.json()
  },

  deleteUser: async (id: string) => {
    const response = await fetch (`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
    })
    if(!response.ok) throw new Error('Errore nella cancellazione di un utente')
    return response.json()
  }, 



  getBooks: async() => {
    const response = await fetch(`${BASE_URL}/articles`)
    if(!response.ok) throw new Error('Errore nel recupero articoli')
    return response.json()
  },

  createBook: async(data: CreateBookPayLoad) => {
    const response = await fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    if(!response.ok) throw new Error('Errore nella creazione di un articolo')
    return response.json()
  },

  updateBook: async(id:string, data: UpdateBookPayLoad) => {
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    if(!response.ok) throw new Error('Errore nella modifica di un articolo')
    return response.json()
  },

  deleteBook: async(id:string) =>{
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
        method: 'DELETE',
    })
    if(!response.ok) throw new Error('Errore nella cancellazione di un articolo')
    return response.json()
  }
}
