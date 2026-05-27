import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // Read the incoming form submission values matching your layout properties
    const { email, phone, social, message } = await request.json();

    // Your exact Nodemailer configuration block
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends the query straight back to your inbox
      subject: "New Website Inquiry",
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Social:</strong> ${social || "N/A"}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    });

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}