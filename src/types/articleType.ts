export interface articleType {
  id: string;
  name: string;
  picture: string;
  sellerId: string;
  description: string;
  createdAt: string;
  buyUrl: string;
}

export type CreateArticlePayLoad = Omit<articleType,  'id' | 'createdAt'>
export type UpdateArticlePayLoad = Partial<CreateArticlePayLoad>;