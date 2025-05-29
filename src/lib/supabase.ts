import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to register a new user
export async function registerUser(userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  graduationYear?: number;
  degreeProgram?: string;
  currentPosition?: string;
  currentLocation?: string;
  membershipType: string;
}) {
  try {
    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });

    if (authError) throw authError;

    if (authData.user) {
      // Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: authData.user.id,
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            graduation_year: userData.graduationYear,
            degree_program: userData.degreeProgram,
            current_position: userData.currentPosition,
            current_location: userData.currentLocation,
            membership_type: userData.membershipType,
          },
        ]);

      if (profileError) throw profileError;

      return { success: true, user: authData.user };
    }
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}