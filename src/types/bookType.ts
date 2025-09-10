export interface bookType {
  id: string;
  name: string;
  picture: string;
  sellerId: string;
  description: string;
  createdAt: string;
  buyUrl: string;
}

export type CreateBookPayLoad = Omit<bookType,  'id' | 'createdAt'>
export type UpdateBookPayLoad = Partial<CreateBookPayLoad>;