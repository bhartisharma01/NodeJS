const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const apiData = fs.readFileSync("userApi.json", "utf-8");
  if (req.url == "/") {
    res.end("This is home page");
  }
  else if (req.url == "/about") {
    res.end("This is about page");
  }
  else if (req.url == "/userApi") {
    const objData = JSON.parse(apiData);
    console.log(objData);
    // res.writeHead(200, { "content-type": "document/json" })
    res.end(objData[2].name);
    res.writeHead(200, { "content-type": "document/json" });
  }
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error, page doesn't exist</h1>");
  }
});
server.listen(4000, "127.0.0.1", () => {
  console.log("this is port no 4000");
});