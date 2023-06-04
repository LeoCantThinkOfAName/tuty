import { supabase } from "./clients";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(
        "*, author:profiles (id, name, img, title), category:categories (*)",
      )
      .order("createdAt", { ascending: false });
    if (data) return data;
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};

export const usePosts = () => {
  return useQuery(["posts"], fetchPosts);
};
