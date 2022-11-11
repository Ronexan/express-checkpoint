const express = require('express');
const requestTime = require('./middleware/requestTime');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(requestTime);

app.get('/', (req, res) => {
    let date = new Date();
    let info;

    if (date.getHours() >= 9 && date.getHours() <= 17) info = 'Website open.';
    else info = 'Website closed for the day.';
    res.render('index', {webOpen: req.webOpen});
});

app.get('/our-services', (req, res) => {
    res.render('services', {webOpen: req.webOpen});
});

app.get('/contact-us', (req, res) => {
    res.render('contact', {webOpen: req.webOpen});
});

app.listen(8000, () => {
    console.log('App running.')
});
