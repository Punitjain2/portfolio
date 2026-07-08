import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }
    if (!message || !message.trim() || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters long' }, { status: 400 });
    }

    // SMTP configuration check
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587');
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const receiver = process.env.CONTACT_RECEIVER;

    if (!host || !user || !pass || !receiver) {
      console.error('SMTP credentials or receiver email are not fully configured in environment variables');
      return NextResponse.json(
        { error: 'Mail server configuration error. Please contact the administrator.' },
        { status: 500 }
      );
    }
    console.log("HOST:", process.env.SMTP_HOST);
    console.log("PORT:", process.env.SMTP_PORT);
    console.log("USER:", process.env.SMTP_USER);
    console.log("PASS LENGTH:", process.env.SMTP_PASSWORD?.length);

    // Create SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    await transporter.verify();
    console.log("SMTP Connected Successfully");

    // Setup email headers and body
    const mailOptions = {
      from: `"${name} via Portfolio" <${user}>`,
      to: receiver,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Portfolio Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #14b8a6; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eaeaea;" />
          <p style="font-size: 11px; color: #888;">This email was sent dynamically from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message transmitted successfully' });
  } catch (error: any) {
    console.error('Error dispatching email through SMTP:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to transmit message. Please try again.' },
      { status: 500 }
    );
  }
}
