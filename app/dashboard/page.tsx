'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Lock } from 'lucide-react'

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-grey-light">
      {/* Header */}
      <header className="bg-white border-b border-grey-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6" strokeWidth={2.5} />
            <h1 className="font-mono text-2xl font-bold text-primary lowercase">
              keepsake
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-grey-dark">{user.email}</p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Keepsake!</h2>
          <p className="text-lg text-grey-dark mb-8">
            Dashboard is under construction. Phase 1 authentication is complete! ✓
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">What's Next:</h3>
            <ul className="text-left space-y-2 text-grey-dark max-w-md mx-auto">
              <li>✅ User authentication (Google + Email)</li>
              <li>✅ Welcome screen</li>
              <li>✅ Auth page with form validation</li>
              <li>⏳ Dashboard with project library</li>
              <li>⏳ Aspect ratio selection</li>
              <li>⏳ Image upload</li>
              <li>⏳ Canvas editor</li>
              <li>⏳ Export functionality</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
