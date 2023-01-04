const Course = require('../models/Course');

exports.createCourse = async (req, res) => {

    try {
        const course = await Course.create(req.body);
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
        const courses = await Course.find();
    res.status(200).render('index', {
        courses,
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