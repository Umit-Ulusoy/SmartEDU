const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const { MongoURL, port } = require('./config.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//connect to database

mongoose.set('strictQuery', true);
mongoose.connect(MongoURL)
.then(() => console.log('Connected to the database'))
.catch(console.error);

//Routes
app.use(pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

app.listen(port, () => console.log('Server is running on port: ' + port));