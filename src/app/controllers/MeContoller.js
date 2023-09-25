const Coures = require('../models/Course');

class MeController {
    storedCourses(req, res) {
        try {
            Coures.find({}).lean()
                .then(courses => res.render('me/stored-courses', {
                    courses: courses
                }))
        } catch (err) {
            next(err);
        }
    };
}

module.exports = new MeController;