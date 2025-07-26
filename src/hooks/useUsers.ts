import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Api } from '../api/api'
import { CreateUserPayLoad, UpdateUserPayLoad, userType} from '../types/userType'
import { useUserStore } from '../store/userStore'
import { useEffect } from 'react'

export function useUsers(){
    const setUsers = useUserStore(state => state.setUsers)

   const query = useQuery({
    queryKey: ["users"],
    queryFn: Api.getUsers,
  });

  useEffect(() => {
    if (query.data) {
      setUsers(query.data);
    }
  }, [query.data]);

  return query;
}


export function useCreateUser(){
    const queryClient = useQueryClient()
    const addUser = useUserStore(state => state.addUser)

    return useMutation({
        mutationFn: (newUser: CreateUserPayLoad) => Api.createUser(newUser), 
        onSuccess: (createdUser) => {
            addUser(createdUser)
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })
}

export function useUpdateUser(){
    const queryClient = useQueryClient()
    const updateUserStore = useUserStore(state => state.updateUser)

    return useMutation({
        mutationFn: ({id, data} : {id: string, data: UpdateUserPayLoad}) => Api.updateUser(id, data),
        onSuccess:(updateUser) => {
            updateUser(updateUser)
            queryClient.invalidateQueries({queryKey : ['users']})
        }
    })
}

export function useDeleteUser(){
    const queryClient = useQueryClient()
    const deleteUser = useUserStore(state => state.deleteUser)

    return useMutation({
        mutationFn: (id: string) => Api.deleteUser(id),
        onSuccess: (_,id) => {
            deleteUser(id)
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })
}



