const Coures = require('../models/Course');
// const {mutippleMongooseToObject} = require('../../util/mongose');

class SiteController {

    async index(req, res, next) {
        //     Coures.find({}, function(err, course){
        //         if(!err){
        //             res.json(course);
        //         }else{
        //             res.status(400).json({error: 'ERROR...!!!'});
        //         }
        //     })

        try {
            Coures.find({}).lean() 
            .then(courses => res.render('home',{
                courses: courses
            }))
        } catch (err) {
            next(err);
        }

    };
    search(req, res) {
        res.render('search');
    };
};

module.exports = new SiteController;