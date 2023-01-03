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