const express = require('express');
const OrdersController = require('../database/controller/OrdersController');
const router = express.Router();


router.get('/', OrdersController.findAll)
router.post('/', OrdersController.store)
router.get('/:id', OrdersController.findOne)
router.delete('/:id', OrdersController.delete)

module.exports = router;
