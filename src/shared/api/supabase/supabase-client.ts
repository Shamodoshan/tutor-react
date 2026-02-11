import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase environment variables are missing. Check your .env file.'
  );
}

/**
 * Shared Supabase instance
 * Used by Features and Entities to interact with the backend
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);