const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      user: req.session.userID
    }
    );

    req.flash("success", "Created successfully");
    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    req.flash("error", "Something went wrong! Please try again later");
    res.status(400).redirect('/users/dashboard');
  }
}

exports.deleteCourse = async (req, res) => {
try {
  const course = await Course.findOneAndRemove({ slug: req.params.slug});

  req.flash('success', `${course.name} has been removed successfully`);
  res.status(201).redirect('/users/dashboard');
} catch (error) {
  req.flash('error', 'Something went wrong! Please try again later.');
  res.status(400).redirect('/users/dashboard');
}
}

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    course.name = req.body.name;
    course.description = req.body.description;
    course.category = req.body.category;

    course.save();

    req.flash('success', `${course.name} has been updated successfully`);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    req.falsh('error', 'Something went wrong! Please try again later.');
    res.status(400).redirect('/users/dashboard');
  }
}

exports.getAllCourses = async (req, res) => {
  try {

    const categorySlug = req.query.categories;
    const query = req.query.search;

    const category = await Category.findOne({slug:categorySlug})

    let filter = {};

    if(categorySlug) {
      filter = {category:category._id}
    }

    if (query)
    {
      filter = { name: query };
    }

    if (!query && !categorySlug)
    {
      filter.name = "";
      filter.category = null;
    }

    const courses = await Course.find({
      $or: [
        {name: { $regex: '.*' + filter.name + '.*', $options: 'i' }},
        {category: filter.category }
      ]
    }).sort('-createdAt').populate('user');
    const categories = await Category.find();

    res.status(200).render('index', {
      courses,
      categories,
      page_name: 'courses',
      file_name: 'courses'
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
}

exports.getCourse = async (req, res) => {
  try {
    const user = await User.findById(req.session.userID);
    const course = await Course.findOne({slug: req.params.slug}).populate('user');

    res.status(200).render('index', {
      course,
      user,
      page_name: 'courses',
      file_name: 'course'
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
}

exports.enrollCourse = async (req, res) =>
{
  try {
    const user = await User.findById(req.session.userID);
       await user.courses.push({_id:req.body.course_id});
    await user.save();

    req.flash("success", "Enrolled successfully");
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    req.flash("error", "Something went wrong! Please try again later");
    res.status(400).redirect('/users/dashboard');
  }
}

exports.releaseCourse = async (req, res) =>
{
try {
    const user = await User.findById(req.session.userID);
  await user.courses.pull({_id: req.body.course_id });
  await user.save();

  req.flash("success", "released successfully");
  res.status(200).redirect('/users/dashboard');
} catch (error) {
  req.flash("error", "Something went wrong! Please try again later");
  res.status(400).redirect('/users/dashboard');
}
}