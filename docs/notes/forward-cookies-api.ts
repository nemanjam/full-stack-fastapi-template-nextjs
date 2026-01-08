// pages/api/set-cookie.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Read token from incoming cookies
  const token = req.cookies?.auth_cookie;

  if (!token) {
    return res.status(400).json({ error: "No token found in cookies" });
  }

  // Set the cookie for the browser
  res.setHeader(
    "Set-Cookie",
    `auth_cookie=${token}; Path=/; HttpOnly; Secure; SameSite=None; Max-Age=${60 * 60 * 24 * 7}` // 7 days
  );

  // Redirect browser to dashboard
  res.redirect("/dashboard");
}
