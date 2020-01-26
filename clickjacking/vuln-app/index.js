const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.static('.'));

app.listen(7000);
