const express = require('express');
const app = express();

app.use(express.static('.'));

// app.get('download', (req, res) => {
//     const page = req.params.page;
//     res.end();
// })

app.listen(7000);
