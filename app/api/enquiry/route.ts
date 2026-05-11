import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "buy@white-butterfly-enterprises.com",
      subject: `New Enquiry for ${body.productName}`,
      html: `
        <h2>New Export Enquiry</h2>

        <p><strong>Full Name:</strong> ${body.fullName}</p>
        <p><strong>Company Name:</strong> ${body.companyName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Country:</strong> ${body.country}</p>
        <p><strong>Product:</strong> ${body.productName}</p>
        <p><strong>Quantity:</strong> ${body.quantity}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 },
    );
  }
}
