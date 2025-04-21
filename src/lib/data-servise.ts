import { Post } from "@/types/data-types";
import { supabase } from "./supabase";

export async function getPosts(): Promise<Post[] | null> {
  // Fetch posts from Supabase--------------------------------
  const { data: posts, error } = await supabase.from("posts").select("*");
  //error handling---------------------------
  if (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
  //return data---------------------------
  return posts;
}
