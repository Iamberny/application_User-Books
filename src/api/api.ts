import { CreateUserPayLoad, UpdateUserPayLoad } from "../types/userType"
import { CreateArticlePayLoad, UpdateArticlePayLoad } from "../types/articleType"

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



  getArticles: async() => {
    const response = await fetch(`${BASE_URL}/articles`)
    if(!response.ok) throw new Error('Errore nel recupero articoli')
    return response.json()
  },

  createArticle: async(data: CreateArticlePayLoad) => {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    if(!response.ok) throw new Error('Errore nella creazione di un articolo')
    return response.json()
  },

  updateArticle: async(id:string, data: UpdateArticlePayLoad) => {
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

  deleteArticle: async(id:string) =>{
    const response = await fetch(`${BASE_URL}/articles/${id}`, {
        method: 'DELETE',
    })
    if(!response.ok) throw new Error('Errore nella cancellazione di un articolo')
    return response.json()
  }
}
