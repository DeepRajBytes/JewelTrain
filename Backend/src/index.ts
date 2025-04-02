import express, { Request, Response } from "express";
import config from "./config/config";
import connectDB from "./Database/ConnectionSettings/db";

const app = express();
const port = config.port;

connectDB(); // DataBase Connection is here

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Backend!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
