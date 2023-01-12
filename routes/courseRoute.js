const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();
router.route('/:slug').get(courseController.getCourse);

router.route('/').get(courseController.getAllCourses);
router.route('/').post(roleMiddleware(['teacher', 'admin']), courseController.createCourse);
router.route('/enroll').post(courseController.enrollCourse);

module.exports = router;