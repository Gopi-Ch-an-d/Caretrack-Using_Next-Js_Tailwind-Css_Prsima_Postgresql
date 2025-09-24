import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET() {  
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const healthRecords = await prisma.healthRecord.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(healthRecords)
  } catch (err) {
    console.error('Error fetching health records:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const body = await req.json()
    const { title, description, date, category } = body

    // Check plan limits for Basic users
    if (user.plan === 'BASIC') {
      const recordCount = await prisma.healthRecord.count({
        where: { userId: user.id }
      })
      
      if (recordCount >= 10) {
        return NextResponse.json({ 
          error: 'Basic plan limit reached. Upgrade to add more records.' 
        }, { status: 403 })
      }
    }

    const healthRecord = await prisma.healthRecord.create({
      data: {
        userId: user.id,
        title,
        description,
        date: new Date(date),
        category
      }
    })

    return NextResponse.json(healthRecord)
  } catch (err) {
    console.error('Error creating health record:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}