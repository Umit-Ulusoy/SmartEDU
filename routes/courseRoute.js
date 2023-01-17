const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();
router.route('/:slug').get(courseController.getCourse);

router.route('/').get(courseController.getAllCourses);
router.route('/').post(roleMiddleware(['teacher', 'admin']), courseController.createCourse);
router.route('/:slug').delete(courseController.deleteCourse);
router.route('/:slug').put(roleMiddleware(['teacher', 'admin']), courseController.updateCourse);
router.route('/enroll').post(courseController.enrollCourse);
router.route('/release').post(courseController.releaseCourse);

module.exports = router;