const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

// Handle
function route(app) {

    // page me
    app.use('/me', meRouter);
    // page courses
    app.use('/courses', coursesRouter);
    // page news
    app.use('/news', newsRouter);
    // page home
    app.use('/', siteRouter);

}

module.exports = route;