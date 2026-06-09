import { Request, Response } from "express";
import { deleteAccount } from "./account.service";

export async function deleteAccountHandler(req: Request, res: Response) {
  try {
    const userId = req.user.userId;

    const result = deleteAccount(userId);

    res.clearCookie("auth_token");

    return res.json({
      status: "success",
      message: "Account deleted",
    });

  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete account",
    });
  }
}