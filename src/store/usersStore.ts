import { create } from "zustand";
import { userType, CreateUserPayLoad } from "../types/userType";

interface UsersStore {
  users: userType[];
  addUser: (payload: CreateUserPayLoad) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  addUser: (payload) =>
    set((state) => ({
      users: [
        ...state.users,
        {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          articlesId: "",
          ...payload,
        },
      ],
    })),
}));
