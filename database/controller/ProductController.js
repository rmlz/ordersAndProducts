const Product = require("../models/ProductModel")
const GenericController = require("./GenericController");

class ProductsController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new ProductsController(Product);
