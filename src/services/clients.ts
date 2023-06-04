import { Database } from "../types/database.types";
import { QueryClient } from "@tanstack/react-query";
import { createClient } from "@supabase/supabase-js";

export const queryClient = new QueryClient();

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);
