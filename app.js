const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MongoURL, port } = require('./config.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect(MongoURL)
.then(() => console.log('Connected to the database'))
.catch(console.error);


app.get(/^(\/|\/home)$/, (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'home'
    });
});
app.get('/about', (req, res) =>
{
    res.status(200).render('index',
    {
        page_name: 'about'
    });
});

app.listen(port, () => console.log('Server is running on port: ' + port));