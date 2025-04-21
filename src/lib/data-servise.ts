import { PostWithCategory } from "@/types/data-types";
import { supabase } from "./supabase";

export async function getPosts(): Promise<PostWithCategory[] | null> {
  const { data: posts, error } = await supabase.from("posts").select(`
        *,
        category:categoryId (
          id,
          title,
          slug,
          description,
          created_at
        )
      `);
  //error handling---------------------------
  if (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
  //return data---------------------------
  return posts as PostWithCategory[];
}
