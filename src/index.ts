// import express, { Request, Response } from "express";
// const app = express();

// app.get("/", (req: Request, res: Response<{ message: string }>) => {
//   return res.status(200).json({ message: "hello, world" });
// });

// const port = 3000;
// const server = app.listen(port, () => {
//   console.log(`server started with port ${port}`);
// });

// export default server;

// -------------------------------------------------------

import http from "http";
import { sum } from "./lib/sum";
import * as dotenv from "dotenv";
dotenv.config();

function hello(name: string) {
  return `Hello, ${name}, ${process.env.ENV_SAMPLE}, ${process.env.PATH}`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200);
  const result = sum(1, 5);
  res.end(`hello, word, ${result}, ${hello("ss")}`);
});

server.listen(8080);
