const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

    // [GET] /me/stored/courses
    meCourses(req, res, next) {
        // Promise all
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                    deletedCount: deletedCount,
                });
            })
            .catch(next);

        // HANDLE COUNT DELETED 
        // Course.countDocumentsDeleted()
        //     .then(deletedCount => {
        //         console.log(deletedCount);
        //     })
        //     .catch(next);

        // HANDLE LOAD ALL COURSES (Promise)
        // Course.find({})
        //     .then(courses => {
        //         res.render('me/stored-courses', {
        //             courses: mutipleMongooseToObject(courses)
        //         });
        //     })
        //     .catch(next);
    }

    // [GET] /me/trash/courses
    showTrash(req, res, next) {
        // Promise all
        Promise.all([Course.findDeleted({}), Course.countDocuments()])
            .then(([courses, count]) => {
                res.render('me/trash', {
                    courses: mutipleMongooseToObject(courses),
                    count: count,
                });
            })
            .catch(next);

        // Course.findDeleted({})
        //     .then(courses => {
        //         res.render('me/trash', {
        //             courses: mutipleMongooseToObject(courses)
        //         });
        //     })
        //     .catch(next);
    }

}

module.exports = new MeController;