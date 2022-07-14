const express = require("express");
const app = express();

app.use(express.static("static/"));

const PORT = 7001;

app.listen(PORT, () => {
  console.log(`Server was started at http://localhost:${PORT}`);
});
