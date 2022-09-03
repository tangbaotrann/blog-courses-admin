const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// Handle router
router.get('/trash/courses', meController.showTrash);
router.get('/stored/courses', meController.meCourses);

module.exports = router;