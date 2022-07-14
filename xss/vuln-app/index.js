const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const sanitize = require("sanitize-html");
const app = express();

app.use(bodyParser.json());
// app.use(helmet.contentSecurityPolicy());
app.use(express.static("static/"));

const comments = [];

app.post("/comments", (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  console.log("ORIGINAL", comment);
  // Solution: Sanitization
  // comments.push(sanitize(comment));
  // console.log("AFTER SANITIZATION", sanitize(comment));
  res.end("Saved");
});

app.get("/comments", (req, res) => {
  // Express API
  // res.json(comments);

  // Pure Node.js API
  res.end(JSON.stringify(comments));
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server was started at http://localhost:${PORT}`);
});
