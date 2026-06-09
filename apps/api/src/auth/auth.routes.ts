import { Router } from "express";
import passport from "./google.strategy";
import { googleCallback, logoutHandler } from "./auth.controller";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);
router.post("/logout", logoutHandler);

export default router;