import { createClient } from '@supabase/supabase-js';

// Supabase client, created only when the project env vars are set (see .env.example).
// The prototype does not read from or write to Supabase yet: tables, auth and API
// calls are intentionally not defined here. Add them once the backend contract is specified.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey)
  : null;
