'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const router = useRouter()

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Email and password are required')
      return
    }

    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: '/dashboard'
      })

      if (result?.error) {
        if (result.error.includes('credentials')) {
          toast.error('Invalid email or password')
        } else {
          toast.error(result.error)
        }
      } else if (result?.url) {
        toast.success('Login successful!')
        router.push(result.url)
      }
    } catch (error) {
      toast.error('An unexpected error occurred')
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      toast.error('All fields are required')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long')
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call for password reset
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Password reset successful!')
      setIsForgotPassword(false)
      // Clear form
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    } catch (error) {
      toast.error('An unexpected error occurred')
      console.error('Password reset error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    setIsLoading(true)
    try {
      toast.loading(`Redirecting to ${provider}...`)
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      toast.dismiss()
      toast.error(`Failed to sign in with ${provider}`)
      console.error(`${provider} login error:`, error)
      setIsLoading(false)
    }
  }

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword)
    // Clear form when switching modes
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setShowPassword(false)
    setShowConfirmPassword(false)
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
          loading: {
            iconTheme: {
              primary: '#3B82F6',
              secondary: '#fff',
            },
          },
        }}
      />

      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-start lg:items-center">
        {/* Logo Section - Responsive positioning */}
        <div className="w-full lg:w-1/3 lg:pr-8 mb-8 lg:mb-0 flex justify-center lg:justify-start lg:sticky lg:top-8">
          <div className="inline-flex items-center space-x-3">
            <div className="flex items-center space-x-3 group">
              <img
                src="/caretrack_logo.png"
                alt="CareTrack Logo"
                className="h-16 w-auto transform group-hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Form Card - Responsive width */}
        <div className="w-full lg:w-2/3">
          <Card className="shadow-2xl border-0 mx-auto max-w-md lg:max-w-none">
            <CardHeader className="text-center px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                {isForgotPassword ? 'Reset Your Password' : 'Welcome Back'}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {isForgotPassword
                  ? 'Enter your email and new password details'
                  : 'Sign in to your CareTrack account'
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              <form onSubmit={isForgotPassword ? handleForgotPasswordSubmit : handleLoginSubmit} className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {isForgotPassword ? 'New Email' : 'Email'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-10 sm:h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder={isForgotPassword ? "Enter your new password" : "Enter your password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-10 sm:h-11"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {isForgotPassword && (
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10 pr-10 h-10 sm:h-11"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                {!isForgotPassword && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        id="remember"
                      />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={toggleForgotPassword}
                      className="text-sm text-blue-600 hover:text-blue-500 text-left sm:text-right"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {isForgotPassword && (
                  <div className="flex items-center justify-start">
                    <button
                      type="button"
                      onClick={toggleForgotPassword}
                      className="text-sm text-blue-600 hover:text-blue-500 inline-flex items-center"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Back to Sign In
                    </button>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-10 sm:h-11"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-sm sm:text-base">
                        {isForgotPassword ? 'Resetting Password...' : 'Signing in...'}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm sm:text-base">
                      {isForgotPassword ? 'Reset Password' : 'Sign In'}
                    </span>
                  )}
                </Button>
              </form>

              {!isForgotPassword && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      onClick={() => handleSocialLogin('google')}
                      disabled={isLoading}
                      className="w-full hover:bg-blue-200 hover:text-blue-700 h-10 sm:h-11"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-sm sm:text-base">Google</span>
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => handleSocialLogin('facebook')}
                      disabled={isLoading}
                      className="w-full hover:bg-blue-200 hover:text-blue-700 h-10 sm:h-11"
                    >
                      <svg className="w-4 h-4 mr-2" fill="#1877f2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="text-sm sm:text-base">Facebook</span>
                    </Button>
                  </div>
                </>
              )}

              <div className="text-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                  {!isForgotPassword && (
                    <span className="text-sm text-gray-600">
                      Don&apos;t have an account?{' '}
                      <Link href="/signup" className="text-blue-600 hover:underline hover:text-blue-500 font-medium">
                        Sign up
                      </Link>
                    </span>
                  )}
                  {isForgotPassword ? (
                    <button
                      type="button"
                      onClick={toggleForgotPassword}
                      className="text-sm text-black hover:underline hover:text-blue-500 inline-flex items-center justify-center"
                    >
                      Back to Home
                    </button>
                  ) : (
                    <Link
                      href="/"
                      className="text-sm text-black hover:underline hover:text-blue-500 inline-flex items-center justify-center"
                    >
                      Back to Home
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}