const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {

    try {
        const course = await Course.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category
        });
        res.status(201).json({
            status: 'success',
            course
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}

exports.getAllCourses = async (req, res) =>
{
    try{
        const categorySlug = req.query.categories;

        let filter = {};

const category = await Category.findOne({ slug: categorySlug });

if (categorySlug)
{
    filter = { category: category._id };
}

        const courses = await Course.find(filter);

const categories = await Category.find();

    res.status(200).render('index', {
        courses,
        categories,
        page_name: 'courses',
        file_name: 'courses'
    });
    }catch (error)
    {
        res.status(400).json({
            status: 'fail',
            error
        });
    }
}

exports.getCourse = async (req, res) =>
{
    try{

const course = await Course.findOne({ slug: req.params.slug });
res.status(200).render('index', {
    course,
    page_name: 'courses',
    file_name: 'course'
});
    }catch (error) {
        res.status(400).json(
            {
                status: 'fail',
                error
            }
        );
    }
}