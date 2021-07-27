const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

router.put('/', controller.put);
router.put('/:id', controller.att);
router.put('/:id/sell', controller.sell);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.delete('/:id', controller.rm);

module.exports = router;
