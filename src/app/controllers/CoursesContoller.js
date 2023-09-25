const Coures = require('../models/Course');

class CouresController{
    show(req, res, next){

        try {
            Coures.findOne({slug: req.params.slug})
            .then(courses => {
                res.render('courses/show', {courses});
            })
        } catch (err) {
            next(err);
        }


    };
};

module.exports = new CouresController;