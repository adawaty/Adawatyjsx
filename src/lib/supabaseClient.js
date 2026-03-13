 function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL ;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ;

if (!url || !anonKey) {
  // eslint-disable-next-line no-console
  console.warn("Supabase env vars missing: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY");
}

export const supabase = createClient(_nullishCoalesce(url, () => ( "")), _nullishCoalesce(anonKey, () => ( "")), {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
