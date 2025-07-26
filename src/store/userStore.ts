import {create} from 'zustand'
import { userType } from '../types/userType'


interface userStore{
    users: userType[]
    setUsers: (users: userType[]) => void
    addUser: (newUser: userType) => void
    updateUser: (updateUser: userType) => void
    deleteUser: (id: string) => void
}

export const useUserStore = create<userStore>((set) => ({
    users: [],
    setUsers: (users) => set({users}),
    addUser: (newUser) => set(state => ({users: [...state.users, newUser]})),
    updateUser: (updateUser) => set(state => ({
        users: state.users.map(u => u.id === updateUser.id ? updateUser : u)})),
    deleteUser: (id) => set(state => ({
        users: state.users.filter(u => u.id !== id)
    }))
}))





