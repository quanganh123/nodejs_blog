const Coures = require('../models/Course');
class CouresController {
    show(req, res, next) {

        try {
            Coures.findOne({ slug: req.params.slug })
                .then(courses => {
                    res.render('courses/show', { courses });
                })
        } catch (err) {
            next(err);
        };


    };

    create(req, res, next) {
        res.render('courses/create');
    };

    store(req, res, next) {
        const fromData = req.body;
        fromData.image = `https://img.youtube.com/vi/${req.body.idVieo}/sddefault.jpg`
        const course = new Coures(fromData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => { })
    };

    edit(req, res, next) {
        Coures.findById(req.params.id)
            .then(courses => res.render('courses/edit', {
                courses: courses
            }))
            .catch(next);
        };

    update(req, res, next) {

        console.log(req.params.id)
        console.log(req.body)

        Coures.updateOne({ _id: req.params.id }, req.body)

            .then(() => res.redirect('../me/stored/courses'))
            .catch(next);

    };

    delete(req, res, next) {
        console.log(req.params.id);
        Coures.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };
};

module.exports = new CouresController;