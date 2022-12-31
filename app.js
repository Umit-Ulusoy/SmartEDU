const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

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

const port = 80;
app.listen(port, () => console.log('Server is running on port: ' + port));