import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Api } from "../api/api";
import {
  CreateArticlePayLoad,
  UpdateArticlePayLoad,
  articleType,
} from "../types/articleType";

export function useArticles() {
  return useQuery<articleType>({
    queryKey: ["articles"],
    queryFn: Api.getArticles,
  });
}

export function useCreateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newArticle: CreateArticlePayLoad) =>
      Api.createArticle(newArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export function useUpdateArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateArticlePayLoad }) =>
      Api.updateArticle(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => Api.deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
