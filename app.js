const express = require('express');

const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Tjena!',
        title: 'Nunjucks hello world',
    });
});

app.get('/alvin', async function (req, res, next) {
    res.render('alvin.njk', {
        message: 'apple!',
        title: 'Mums',
    });
});

app.use(express.static('public'))
