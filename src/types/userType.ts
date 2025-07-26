export interface userType {
  id: string;
  name: string;
  avatar: string;
  birthdate: string;
  createdAt: string;
  articlesId: string; 
}

export type CreateUserPayLoad = Omit<userType,  'id' | 'createdAt' | 'articlesId'>;
export type UpdateUserPayLoad = Partial<CreateUserPayLoad>;

