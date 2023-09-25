const newRouter = require('./news');
const siteRouter = require('./site');
const CouresRouter = require('./courses');
const meRouter = require('./me');

function router(app) {

    app.use('/news' ,newRouter);
    app.use('/me' ,meRouter);
    app.use('/courses' ,CouresRouter);
    
    app.use('/', siteRouter);
}

module.exports = router;