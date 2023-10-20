import cors from "cors";
import express, { json, Express } from "express";
import { connectDb, disconnectDb } from "./config/database";

const app = express()

app
  .use(cors())
  .use(json())

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}
export default app;