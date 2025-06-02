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

// Helper function to get user profile
export async function getUserProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

// Helper function to update user profile
export async function updateUserProfile(userId: string, updates: Partial<{
  first_name: string;
  last_name: string;
  phone: string;
  current_position: string;
  current_location: string;
}>) {
  try {
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}

// Helper function to submit event registration
export async function registerForEvent(eventData: {
  userId: string;
  eventId: string;
  name: string;
  email: string;
  phone?: string;
  requirements?: string;
}) {
  try {
    const { error } = await supabase
      .from('event_registrations')
      .insert([eventData]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error registering for event:', error);
    throw error;
  }
}

// Helper function to submit event idea
export async function submitEventIdea(ideaData: {
  userId: string;
  name: string;
  email: string;
  eventTitle: string;
  description: string;
  expectedDate: string;
  location: string;
  expectedAttendees: number;
}) {
  try {
    const { error } = await supabase
      .from('event_ideas')
      .insert([ideaData]);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting event idea:', error);
    throw error;
  }
}