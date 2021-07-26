const express = require('express');
const router = express.Router();
const controller = require('../controllers/users')

router.put('/perm', controller.perm);
router.put('/:id', controller.att);
router.put('/', controller.put);
router.get('/', controller.get);
router.post('/login', controller.login);
router.delete('/', controller.rm);

module.exports = router;
