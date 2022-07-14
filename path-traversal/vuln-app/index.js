const fs = require('fs');
const express = require("express");
const app = express();

app.use(express.static("static/"));

app.get("/download", (req, res) => {
  const page = req.query?.page;
  const content = fs.readFileSync(`./static/pages/${page}`);
  res.end(content);
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server was started at http://localhost:${PORT}`);
});
