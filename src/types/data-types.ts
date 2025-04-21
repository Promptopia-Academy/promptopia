export type Post = {
  id: number;
  title: string;
  description: string;
  slug: number;
  created_at: string;
  image: string;
  userId: number;
  categoyId: number;
};
export type Category = {
  id: number;
  title: string;
  slug: string;
  description: string;
  created_at: string;
};

export type PostWithCategory = {
  id: number;
  title: string;
  description: string;
  slug: number;
  created_at: string;
  image: string;
  userId: number;
  categoyId: number;
  category: Category;
};
