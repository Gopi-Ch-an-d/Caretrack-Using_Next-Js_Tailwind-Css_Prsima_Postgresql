'use client'

import { useState } from 'react'
import { Heart, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignupPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    
    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return
    }
    
    if (!agreed) {
      toast.error('Please agree to the Terms of Service and Privacy Policy')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      toast.success('Account created successfully!')
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      setAgreed(false)
    } catch (error) {
      console.error('Registration error:', error)
      const message = error instanceof Error ? error.message : 'An error occurred during registration'
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#374151',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            fontSize: '0.875rem',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-start lg:items-center">
        {/* Logo Section - Responsive positioning */}
        <div className="w-full lg:w-1/3 lg:pr-8 mb-8 lg:mb-0 flex justify-center lg:justify-start lg:sticky lg:top-8">
          <div className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">CareTrack</div>
              <div className="text-xs sm:text-sm text-gray-500">Powered by Sthiram</div>
            </div>
          </div>
        </div>

        {/* Signup Card - Responsive width */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-2xl border-0 rounded-lg mx-auto max-w-md lg:max-w-none">
            {isSubmitted ? (
              <div className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Your account has been created successfully.</p>
                <Link
                  href="/login"
                  className="w-full inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2.5 sm:py-3 px-4 rounded-md transition-all duration-200 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
                >
                  Continue to Sign In
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center p-4 sm:p-6 pb-0">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Create Account</h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">Join CareTrack and start your health journey</p>
                </div>
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          required
                          minLength={3}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Password (min 8 characters)</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="w-full pl-10 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="w-full pl-10 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                          aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 pt-1">
                      <input 
                        type="checkbox" 
                        id="terms"
                        className="mt-1 rounded border-gray-300 w-4 h-4 flex-shrink-0" 
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        required 
                      />
                      <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        I agree to the{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base mt-4 sm:mt-6"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating account...
                        </>
                      ) : 'Create Account'}
                    </button>
                  </form>

                  <div className="text-center pt-2">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                        Sign in
                      </Link>
                    </span>
                  </div>

                  <div className="text-center pt-2">
                    <Link
                      href="/"
                      className="text-xs sm:text-sm text-black hover:underline hover:text-blue-500"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}