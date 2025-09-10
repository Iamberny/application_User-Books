import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Api } from "@/api/api";
import {
  CreateBookPayLoad,
  UpdateBookPayLoad,
} from "@/types/bookType";

export function useBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: Api.getBooks,
  });
}

export function useCreateBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newBook: CreateBookPayLoad) =>
      Api.createBook(newBook),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}

export function useUpdateBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateBookPayLoad }) =>
      Api.updateBook(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}

export function useDeleteBook() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => Api.deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
