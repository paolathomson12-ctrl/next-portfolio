import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "paola.thomson12@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "paola.thomson12@gmail.com";

    if (apiKey) {
      sgMail.setApiKey(apiKey);

      const response = await sgMail.send({
        to: toEmail,
        from: fromEmail,
        replyTo: email,
        subject: `SendGrid Website contact`,
        text: [
          `You received a new message from your website contact form.`,
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Social: ${social || "Not provided"}`,
          "",
          `Message:`,
          message,
          "",
          `Reply to this email to respond to ${name}.`,
        ].join("\n"),
        html: `<p>You received a new message from your website contact form.</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Social:</strong> ${social || "Not provided"}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p><p>Reply to this email to respond to ${name}.</p>`,
      });

      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
        data: response[0],
      });
    }

    const formLink = process.env.GOOGLE_FORM_LINK;
    const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
    const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
    const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
    const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

    if (formLink && fieldIdName && fieldIdEmail && fieldIdMessage && fieldIdSocial) {
      const params = new URLSearchParams({
        [fieldIdName]: name,
        [fieldIdEmail]: email,
        [fieldIdMessage]: message,
        [fieldIdSocial]: social || "",
      });

      await fetch(`${formLink}/formResponse?${params.toString()}`);
      return NextResponse.json({
        success: true,
        message: "Message forwarded to Google Form",
      });
    }

    return new NextResponse(
      "Please configure SENDGRID_API_KEY or Google Form env vars",
      { status: 500 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
