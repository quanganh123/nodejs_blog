const express = require('express');
const router = express.Router();
const couresController = require('../app/controllers/CoursesContoller');

router.get('/create', couresController.create);

router.get('/:id/edit', couresController.edit); 

router.put('/:id', couresController.update); 

router.delete('/:id', couresController.delete); 

router.post('/store', couresController.store);

router.get('/:slug', couresController.show);

module.exports = router;