import { supabase } from '@/lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password, name } = req.body

  if (!email ||  !password || !name) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
    },
  })

  if (error) {
    return res.status(500).json({ message: error.message })
  }

  res.status(200).json({ message: 'User registered', data })
}