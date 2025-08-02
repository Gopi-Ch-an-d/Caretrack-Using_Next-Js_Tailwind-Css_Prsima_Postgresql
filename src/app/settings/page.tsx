'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings, User, Mail, Lock, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function SettingsPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: session?.user?.name?.split(' ')[0] || '',
    lastName: session?.user?.name?.split(' ')[1] || '',
    email: session?.user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    appointmentReminders: true,
    healthTips: true
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords don't match")
      return
    }

    try {
 
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Settings updated successfully!")
      router.push('/dashboard')
    } catch (error) {
      toast.error("Failed to update settings")
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-12">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-3 sm:mb-4 flex items-center text-sm sm:text-base p-2 sm:p-3 h-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="bg-white shadow-sm sm:shadow rounded-lg p-3 sm:p-4 lg:p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
            <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Account Settings
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Profile Section */}
            <div className="border-b pb-4 sm:pb-6">
              <h2 className="text-base sm:text-lg font-medium text-gray-900 flex items-center mb-3 sm:mb-4">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Profile Information
              </h2>
              <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div className="border-b pb-4 sm:pb-6">
              <h2 className="text-base sm:text-lg font-medium text-gray-900 flex items-center mb-3 sm:mb-4">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Change Password
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Current password
                  </label>
                  <Input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                    placeholder="Enter current password"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      New password
                    </label>
                    <Input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      placeholder="Enter new password"
                      minLength={8}
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm new password
                    </label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="h-10 sm:h-11 text-sm sm:text-base"
                      placeholder="Confirm new password"
                      minLength={8}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
              </div>
            </div>

            {/* Notifications Section */}
            <div>
              <h2 className="text-base sm:text-lg font-medium text-gray-900 flex items-center mb-3 sm:mb-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Email Notifications
              </h2>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start space-x-3">
                  <div className="flex items-center h-5 pt-0.5">
                    <input
                      id="appointmentReminders"
                      name="appointmentReminders"
                      type="checkbox"
                      checked={formData.appointmentReminders}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                    />
                  </div>
                  <div className="text-sm flex-1">
                    <label htmlFor="appointmentReminders" className="font-medium text-gray-700 cursor-pointer">
                      Appointment reminders
                    </label>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Get notified about upcoming appointments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex items-center h-5 pt-0.5">
                    <input
                      id="healthTips"
                      name="healthTips"
                      type="checkbox"
                      checked={formData.healthTips}
                      onChange={handleChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer"
                    />
                  </div>
                  <div className="text-sm flex-1">
                    <label htmlFor="healthTips" className="font-medium text-gray-700 cursor-pointer">
                      Health tips
                    </label>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Receive weekly health tips and updates.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end pt-4 sm:pt-6 space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => router.push('/dashboard')}
                className="w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base order-2 sm:order-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base order-1 sm:order-2"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}