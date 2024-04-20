import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? "3000";

app.use(express.static(path.join(__dirname, "../../client")));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
