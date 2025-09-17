import { create } from "zustand";

type ModalType = "none" | "createUser" | "editUser" | "createBook" | "editBook";

interface uiStore {
  selectedUserId: string | null;
  setSelectedUserId: (id: string | null) => void;

  editingBookId: string | null;
  setEditingBookId: (id: string | null) => void;

  modalType: ModalType;
  setModalType: (type: ModalType) => void;

  showOnlyUsersWithBooks: boolean;
  toggleShowOnlyUsersWithBooks: () => void;
}

export const useUiStore = create<uiStore>((set, get) => ({
  selectedUserId: null,
  setSelectedUserId: (id) => set({ selectedUserId: id }),

  editingBookId: null,
  setEditingBookId: (id) => set({ editingBookId: id }),

  modalType: "none",
  setModalType: (type) => set({ modalType: type }),

  showOnlyUsersWithBooks: false,
  toggleShowOnlyUsersWithBooks: () =>
    set({ showOnlyUsersWithBooks: !get().showOnlyUsersWithBooks }),
}));
