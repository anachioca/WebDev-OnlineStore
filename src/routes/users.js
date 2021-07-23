const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

router.put('/', controller.put);
router.put('/:id', controller.att);
router.get('/', controller.get);
router.delete('/:id', controller.rm);

module.exports = router;
