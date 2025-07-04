// Basic types for BoardTracker
// Add new types incrementally as features develop

import { User as SupabaseUser } from '@supabase/supabase-js'

// Use Supabase's built-in User type (includes Google Auth fields)
export type User = SupabaseUser

// Player types (basic structure)
export interface Player {
  id: string
  user_id: string
  name: string
  profile_picture_url?: string
  created_at: string
}

// Auth mode types
export type AuthMode = 'authenticated' | 'demo'

// Basic app state
export interface AppUser {
  user: User | null
  mode: AuthMode
} 