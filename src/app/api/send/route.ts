import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req)
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  console.log(process.env.RESEND_API_KEY);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { to, subject, text } = req.body;
  if (!to || !subject || !text) {
    return res
      .status(400)
      .json({ error: "Missing required fields: from, subject, and/or text." });
  }

  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: to,
      subject: subject,
      text: text,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
