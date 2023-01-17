const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator')
const User = require('../models/User');
const Category = require('../models/Category');
const Course = require('../models/Course');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect('/login');
  } catch (error) {
    const errors = validationResult(req);

    for (let i = 0; i < errors.array().length; i++) {
      req.flash('error', `${errors.array()[i].msg}`);
    }

    res.status(400).redirect('/register');
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            // USER SESSION
            req.session.userID = user._id;
            res.status(200).redirect('/users/dashboard');
          }else{
            req.flash('error', 'Credentials are not match our records');
            res.status(400).redirect('/login');
          }
        });
      }else{
        req.flash('error', 'Credentials are not match our records');
            res.status(400).redirect('/login');
      }
    
  } catch (error) {
    req.flash('error', 'Something went wrong! Please try again later.');
    res.status(400).redirect('/login');
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/');
  })
}


exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({_id:req.session.userID}).populate('courses');
  const courses = await Course.find({ user: req.session.userID });
  const categories = await Category.find();
  res.status(200).render('index', {
    file_name: 'dashboard',
    page_name: 'dashboard',
    user,
    categories,
    courses
  });
};