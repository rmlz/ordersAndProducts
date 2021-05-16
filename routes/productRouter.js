const express = require('express');
const ProductController = require('../database/controller/ProductController');
const router = express.Router();


router.get('/', ProductController.index)
router.post('/', ProductController.store)

module.exports = router;
