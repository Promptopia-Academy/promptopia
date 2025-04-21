export type Post = {
  id: number;
  title: string;
  description: string;
  slug: number;
  created_at: string;
  Image: string;
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
