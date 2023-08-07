import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

import { getNextPageParam } from "../utils/getNextPage";
import { supabase } from "./supabaseClient";

export type Post = NonNullable<
  Awaited<ReturnType<typeof queryFn>>
>["data"][number];

const queryFn = async ({
  pageParam,
  queryKey,
}: QueryFunctionContext<[string, { term: string }], number>) => {
  const term = queryKey[1].term;
  try {
    let query = supabase
      .from("posts")
      .select(
        "*, author:profiles (id, name, img, title), category:categories (*)"
      )
      .order("createdAt", { ascending: false });

    if (term) query = query.textSearch("textSearch", term);

    const from = (pageParam ? pageParam * 10 : 0) + 1;
    const { data, error } = await query.range(from, from + 9);
    if (data) return { data: data, nextPage: (pageParam ?? 0) + 1 };
    if (error) throw error;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const usePosts = (term?: string) => {
  return useInfiniteQuery({
    queryKey: ["posts", { term: term ?? "" }],
    queryFn,
    getNextPageParam,
  });
};
