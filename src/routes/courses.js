const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Handle router
router.get('/:id/edit', courseController.edit);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.patch('/:id/restore', courseController.restore); // PATCH: (dùng sửa 1 trường)
router.put('/:id', courseController.update);
router.delete('/:id/force', courseController.destroyForce);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);

module.exports = router;