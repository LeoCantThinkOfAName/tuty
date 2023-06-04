import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

import { Database } from "../types/database.types";
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { getNextPageParam } from "../utils/getNextPage";
import { supabase } from "./clients";

const queryFn = async ({
  pageParam,
  queryKey,
}: QueryFunctionContext<[string, { term: string }], number>) => {
  const term = queryKey[1].term;
  try {
    const query = supabase
      .from("posts")
      .select(
        "*, author:profiles (id, name, img, title), category:categories (*)",
      )
      .order("createdAt", { ascending: false });

    if (!!term) query.textSearch("posts_fulltext", term);

    const from = (pageParam ? pageParam * 10 : 0) + 1;
    const { data, error } = await query.range(from, from + 9);
    if (data) return { data: data, nextPage: (pageParam || 0) + 1 };
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};

export const usePosts = (term: string) => {
  return useInfiniteQuery({
    queryKey: ["posts", { term }],
    queryFn,
    getNextPageParam,
  });
};
