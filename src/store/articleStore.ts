import {create} from 'zustand'
import { articleType } from '../types/articleType'

interface articleStore{
    articles: articleType[]
    setArticles: (articles: articleType[]) => void
    addArticle: (newArticle: articleType) => void
    updateArticle: (updateArticle: articleType) => void
    deleteArticle: (id: string) => void
}

export const useArticleStore = create<articleStore>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
  addArticle: (newArticle) => set((state) => ({articles: [...state.articles, newArticle]})),
  updateArticle: (updatedArticle) => set((state) => ({
    articles: state.articles.map((a) => a.id === updatedArticle.id ? updatedArticle : a)})),
  deleteArticle: (id) => set((state) => ({
      articles: state.articles.filter((a) => a.id !== id)
  }))
}))


