const express = require("express");
const helmet = require("helmet");
const app = express();

// Solution: Enable Content Security Policy
// app.use(helmet.contentSecurityPolicy());
app.use(express.static("static/"));

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
