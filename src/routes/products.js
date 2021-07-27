const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

router.put('/sell/:id', controller.sell);
router.put('/:id', controller.att);
router.put('/', controller.put);
router.get('/:id', controller.getById);
router.get('/', controller.get);
router.delete('/:id', controller.rm);

module.exports = router;
