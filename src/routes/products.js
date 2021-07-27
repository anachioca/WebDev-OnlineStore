const express = require('express');
const router = express.Router();
const controller = require('../controllers/products')

router.put('/sell/:id', controller.sell);
router.put('/:id', controller.att);
<<<<<<< HEAD
router.put('/:id/sell', controller.sell);
router.get('/', controller.get);
=======
router.put('/', controller.put);
>>>>>>> f70ce3f09516fc966449a53641c672d93d2b17f0
router.get('/:id', controller.getById);
router.get('/', controller.get);
router.delete('/:id', controller.rm);

module.exports = router;
