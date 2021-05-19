const express = require('express');
const ProductController = require('../database/controller/ProductController');
const router = express.Router();


router.get('/', ProductController.findAll)
router.post('/', ProductController.store)
router.get('/:id', ProductController.findById)
router.patch('/:id', ProductController.patch)
router.delete('/:id', ProductController.delete)
router.get('/finalprice/:id', ProductController.finalPrice)

module.exports = router;
