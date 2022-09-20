const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile("index.html", (error, data) => {
      if (error) {
        fs.readFile("404.html", (error, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (error, data) => {
      if (error) {
        res.write(error);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("contact-me.html", (error, data) => {
      if (error) {
        res.write(error);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  } else {
    fs.readFile("404.html", (error, data) => {
      if (error) {
        res.write(error);
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log("theres been an error");
  } else {
    console.log(`server listening port ${port}`);
  }
});
