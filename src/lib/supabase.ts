import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Debug: Log environment variables (remove in production)
if (typeof window !== 'undefined') {
  console.log('Supabase URL:', supabaseUrl ? '✅ Loaded' : '❌ Missing')
  console.log('Supabase Key:', supabaseAnonKey ? '✅ Loaded' : '❌ Missing')
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ Supabase credentials missing!')
  console.error('URL:', supabaseUrl)
  console.error('Key:', supabaseAnonKey ? 'exists' : 'missing')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export interface QuoteRequest {
  id?: string
  created_at?: string
  name: string
  phone: string
  company_name: string
  email: string
  product_type: string
  production_quantity: string
  width: string
  height: string
  bottom_side: string
  printing_method: string
  function: string
  formulation: string
  material: string
  print_count: string
  product_information: string
  additional_input: string
  attached_file_url?: string
  shape: string
  surface: string
}
