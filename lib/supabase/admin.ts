import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseApiKey = process.env.SUPABASE_API_KEY

  if (!supabaseUrl || !supabaseApiKey) {
    throw new Error('Missing Supabase admin environment variables')
  }

  return createClient(supabaseUrl, supabaseApiKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
