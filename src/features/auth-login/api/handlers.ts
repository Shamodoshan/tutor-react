import { supabase } from '@/shared/api/supabase';
import { type LoginSchema } from '../model/schema';

export const handleLogin = async (data: LoginSchema) => {
  const { data: session, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    // Standardizing error handling for the UI
    console.error("Login error:", error);
    throw new Error(error.message);
  }

  return session;
};