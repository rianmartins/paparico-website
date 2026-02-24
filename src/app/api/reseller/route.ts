import { NextResponse } from "next/server";

type ResellerPayload = {
  name?: string;
  company?: string;
  email?: string;
  contact?: string;
  message?: string;
  language?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export async function POST(request: Request) {
  let body: ResellerPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const name = body.name?.trim();
  const company = body.company?.trim();
  const email = body.email?.trim();
  const contact = body.contact?.trim();
  const message = body.message?.trim();
  const language = body.language === "en" ? "en" : "pt";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Email service is not configured. Please contact support." },
      { status: 500 },
    );
  }

  const subject =
    language === "en" ? "New reseller inquiry from Paparico" : "Nova solicitação de revenda Paparico";

  const detailsHtml = [
    `<p><strong>Nome:</strong> ${escapeHtml(name)}</p>`,
    company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : "",
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    contact ? `<p><strong>Contato:</strong> ${escapeHtml(contact)}</p>` : "",
    `<p><strong>Mensagem:</strong><br />${escapeHtml(message)}</p>`,
    `<p><strong>Idioma do site:</strong> ${language}</p>`,
  ]
    .filter(Boolean)
    .join("");

  const textSummary = [
    `Nome: ${name}`,
    `Empresa: ${company || "-"}`,
    `Email: ${email}`,
    `Contato: ${contact || "-"}`,
    `Idioma do site: ${language}`,
    "",
    `Mensagem:`,
    message,
  ].join("\n");

  const emailPayload = {
    from: fromEmail,
    to: [toEmail],
    subject,
    html: `<div>${detailsHtml}</div>`,
    text: textSummary,
    reply_to: email,
  };

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later.", details: errorBody },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
