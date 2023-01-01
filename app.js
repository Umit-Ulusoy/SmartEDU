const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const { MongoURL, port } = require('./config.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));


//connect to database

mongoose.set('strictQuery', true);
mongoose.connect(MongoURL)
.then(() => console.log('Connected to the database'))
.catch(console.error);


app.use(pageRoute);

app.listen(port, () => console.log('Server is running on port: ' + port));