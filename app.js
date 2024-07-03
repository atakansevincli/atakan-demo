const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const message = queryObject.message || "FEATURE-3";

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message }));
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
