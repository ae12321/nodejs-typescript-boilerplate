import http from "http";
import { sum } from "./lib/sum";

function hello(name: string) {
  return `Hello, ${name}`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200);
  const result = sum(1, 5);
  res.end(`hello, word, ${result}, ${hello("ss")}`);
});

server.listen(8080);
