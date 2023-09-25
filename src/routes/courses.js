const express = require('express');
const router = express.Router();
const couresController = require('../app/controllers/coursesContoller');

router.use('/:slug', couresController.show);

module.exports = router;