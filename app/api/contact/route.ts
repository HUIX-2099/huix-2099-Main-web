import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email using Web3Forms (free service)
    const WEB3FORMS_ACCESS_KEY = 'b009dbc9-fe40-45b2-bb63-c52850a218c8'

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        subject: subject || 'New Contact Form Submission - HUIX-2099',
        message: message,
        from_name: 'HUIX-2099 Website',
        to: 'huixtech2099@gmail.com', // Your email
      })
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Email sent successfully!' },
        { status: 200 }
      )
    } else {
      console.error('Web3Forms error:', result)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

