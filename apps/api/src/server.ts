import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});