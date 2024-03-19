import { NextResponse } from "next/server";
import { Resend } from "resend";
export async function GET() {
    console.log(process.env.RESEND_API_KEY); // Add this for debugging purposes

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: "mohammedibrahim4641@gmail.com",
      to: "abelshibabaw291@gmail.com",
      subject: "Hello",
      text: "Hello from Resend!",
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
