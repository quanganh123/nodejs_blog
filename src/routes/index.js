const newRouter = require('./news');
const siteRouter = require('./site');
const CouresRouter = require('./courses');

function router(app) {

    app.use('/news' ,newRouter);
    app.use('/courses' ,CouresRouter);

    app.use('/', siteRouter);
}

module.exports = router;