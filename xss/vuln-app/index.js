// Server Side

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sanitize = require('sanitize-html');
const app = express();

app.use(bodyParser());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"]
    }
}));
app.use(express.static('.'));

const comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    const sanitizedComment = sanitize(comment);
    comments.push(sanitizedComment);
    console.log('ORIGINAL', comment);
    console.log('AFTER SANITIZATION', sanitizedComment);
    res.end('Saved');
});

app.get('/comments', (req, res) => {
    // Express API
    // res.json(comments);

    // Pure Node.js API
    res.end(JSON.stringify(comments));
});

app.listen(7000);
