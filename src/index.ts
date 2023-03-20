import http from "http";
import { sum } from "./lib/sum";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  const result = sum(1, 2);
  res.end(`hello, word, ${result}`);
});

server.listen(8080);
