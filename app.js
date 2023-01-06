const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const { MongoURL, port } = require('./config');
const app = express();


app.set('view engine', 'ejs');


//connect to database
mongoose.set('strictQuery', true);
mongoose.connect(MongoURL)
.then(() => console.log('Connected to the database'))
.catch(console.error);

global.userIN = null;

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true
}));

//Routes
app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
  });
  
app.use(pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

app.listen(port, () => console.log('Server is running on port: ' + port));