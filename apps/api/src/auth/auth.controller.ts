import { Request, Response } from "express";
import { createToken } from "./jwt.service";
import { findUserByEmail, createUser } from "./auth.service";

export async function googleCallback(req: Request, res: Response) {
  const profile: any = req.user;

  if (!profile?.email) {
    return res.status(400).send("Invalid OAuth response");
  }

  let user = findUserByEmail(profile.email);

  if (!user) {
    user = createUser(profile);
  }

  const token = createToken({
    userId: user.id,
    email: user.email,
  });

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: false,
  });

  res.redirect("http://localhost:3000/onboarding");
}

export function logoutHandler(req: Request, res: Response) {

  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: false,
  });

  return res.json({
    status: "success",
    message: "Logged out successfully"
  });
}