import { createClient } from '@supabase/supabase-js'

// Using the credentials from config.js
const supabaseUrl = "https://oawjbwgdzayqcgixkcfn.supabase.co"
const supabaseAnonKey = "sb_publishable_eOZ1Bo3SFHVB0ENIEybkZQ_PydU5qOO"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface NewsletterSubscription {
  id?: string
  email: string
  created_at?: string
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Subscription error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
