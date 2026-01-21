'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { Lock } from 'lucide-react'

export default function WelcomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-light px-5">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-9">
          <Lock className="w-12 h-12 mb-4" strokeWidth={2.5} />
          <h1 className="font-mono text-6xl font-bold text-primary lowercase">
            keepsake
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg text-grey-dark mb-15 leading-relaxed">
          Turn experiences into visual stories
        </p>

        {/* CTA Button */}
        <button
          onClick={() => router.push('/auth')}
          className="px-15 py-5 bg-primary text-white rounded-xl text-base font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Create a Keepsake
        </button>
      </div>
    </div>
  )
}
