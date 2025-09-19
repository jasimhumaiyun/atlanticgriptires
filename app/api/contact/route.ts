import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface BookingPayload {
  name?: string
  phone?: string
  email?: string
  service?: string
  date?: string
  notes?: string
}

function isValidPayload(payload: BookingPayload): payload is Required<Pick<BookingPayload, 'name' | 'phone' | 'email' | 'service'>> & BookingPayload {
  return Boolean(payload.name && payload.phone && payload.email && payload.service)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const { name, phone, email, service, date, notes } = body

    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS
    const to = process.env.EMAIL_TO || 'atlanticgriptires@gmail.com'
    const from = process.env.EMAIL_FROM || user

    if (!user || !pass || !from) {
      console.error('Email credentials are not configured. Set EMAIL_USER, EMAIL_PASS, and optionally EMAIL_FROM / EMAIL_TO.')
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured. Please contact us by phone while we resolve this.'
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user,
        pass
      }
    })

    const plainTextLines = [
      `New booking from ${name}.`,
      '',
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Selected Service: ${service}`,
      date ? `Preferred Date: ${date}` : undefined,
      notes ? `Notes: ${notes}` : undefined
    ].filter((line): line is string => Boolean(line))

    const plainText = plainTextLines.join('\n')

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New booking from ${name}`,
      text: plainText,
      html: `
        <p><strong>New booking from ${name}</strong></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Selected Service:</strong> ${service}</p>
        ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ''}
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed! We will contact you shortly.'
    })
  } catch (error) {
    console.error('Booking error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.'
      },
      { status: 500 }
    )
  }
}
