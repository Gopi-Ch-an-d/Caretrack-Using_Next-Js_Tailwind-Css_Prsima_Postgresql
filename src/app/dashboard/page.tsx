'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Plus, Calendar, TrendingUp, Users, Activity, Bell, Settings, LogOut, Menu, X } from 'lucide-react'

interface HealthRecord {
  id: string
  title: string
  description: string
  date: string
  category: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (status === 'authenticated') {
      fetchHealthRecords()
    }
  }, [status, router])

  const fetchHealthRecords = async () => {
    try {
      const response = await fetch('/api/health-records')
      if (response.ok) {
        const data = await response.json()
        setHealthRecords(data)
      }
    } catch (error) {
      console.error('Error fetching health records:', error)
    }
    setIsLoading(false)
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/login')
  }

  const handleSettings = () => {
    router.push('/settings')
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>
              <h1 className="text-sm sm:text-xl font-semibold text-gray-900">CareTrack</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              <Button variant="outline" size="sm" className="text-xs lg:text-sm">
                <Bell className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Notifications</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleSettings} className="text-xs lg:text-sm">
                <Settings className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Settings</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs lg:text-sm">
                <LogOut className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Logout</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="sm:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t bg-white py-2 space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSettings} className="w-full justify-start text-sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start text-sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Welcome Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
            Welcome back, {session.user?.name?.split(' ')[0] || 'User'}!
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Here's an overview of your health journey today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Total Records</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{healthRecords.length}</p>
                </div>
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">12</p>
                </div>
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Health Score</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">85%</p>
                </div>
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Next Appointment</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">2d</p>
                </div>
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Health Records */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">Recent Health Records</CardTitle>
                    <CardDescription className="text-sm">Your latest health tracking entries</CardDescription>
                  </div>
                  <Button size="sm" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Record
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                {healthRecords.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-gray-300 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No health records yet</h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-4">Start tracking your health by adding your first record.</p>
                    <Button size="sm" className="w-full sm:w-auto">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Record
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    {healthRecords.slice(0, 5).map((record) => (
                      <div key={record.id} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{record.title}</h4>
                            <p className="text-xs sm:text-sm text-gray-500 truncate">{record.category} • {new Date(record.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-2 flex-shrink-0">View</Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
                <CardDescription className="text-sm">Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-2 sm:space-y-3">
                <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Health Record
                </Button>
                <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Family Management
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg">Today's Health Tip</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Stay Hydrated</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Drinking 8 glasses of water daily helps maintain optimal body function and improves overall health.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg">Upcoming</CardTitle>
                <CardDescription className="text-sm">Your scheduled health activities</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-3 p-2 sm:p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Dr. Smith Appointment</p>
                      <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">Medication Reminder</p>
                      <p className="text-xs text-gray-500">Daily, 8:00 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}