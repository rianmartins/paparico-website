import "server-only";

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resend = apiKey ? new Resend(apiKey) : null;

export const resendEmailConfig = {
  fromEmail: process.env.RESEND_FROM_EMAIL,
  toEmail: process.env.RESEND_TO_EMAIL,
};
