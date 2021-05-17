const express = require('express');
const OrdersController = require('../database/controller/OrdersController');
const router = express.Router();


router.get('/', OrdersController.findAll)
router.post('/', OrdersController.store)

module.exports = router;
