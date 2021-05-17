const express = require('express');
const ProductController = require('../database/controller/ProductController');
const router = express.Router();


router.get('/', ProductController.findAll)
router.post('/', ProductController.store)
router.get('/:idProduct', ProductController.findOne)
router.patch('/:idProduct', ProductController.patch)

module.exports = router;
