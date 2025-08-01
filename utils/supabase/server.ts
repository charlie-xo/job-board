import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export const createClient = () => {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          // You can skip `set` if you don’t need auth sessions to persist
        },
        remove(name: string) {
          // Same, skip if not doing auth
        },
      },
    }
  )
}
