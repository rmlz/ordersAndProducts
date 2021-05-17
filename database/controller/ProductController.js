const Product = require("../models/ProductModel")
const GenericController = require("./GenericController");

class ProductsController extends GenericController  {
    constructor(model) {
        super(model);
        this._model = model
        this.findOne = this.findOne.bind(this)
        this.patch = this.patch.bind(this)
    }
    async findOne(req, res) {
        try {
            const data = await this._model.findById(req.params.idProduct);
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: e});
        }
    }
    async patch(req, res) {
        try {
            const bodyData = req.body;
            const id = req.params.idProduct;
            debugger;
            console.log(id, bodyData)
            const data = await this._model.findByIdAndUpdate(id, bodyData, {new: true});
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.json({error: e});
        }
    }
}
module.exports = new ProductsController(Product);
