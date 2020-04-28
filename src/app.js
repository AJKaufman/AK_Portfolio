// Credit to simple-server-collision by Cody Van De Mark
const http = require("http");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  express.static(path.resolve(`${__dirname}`));
});

// app.set("/about", path.resolve(`${__dirname}/about.html`));

const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${PORT}`);
});
