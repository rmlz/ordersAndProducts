const Product = require("../models/ProductModel")
const GenericController = require("./GenericController");

class ProductsController extends GenericController  {
    /**
     * @param {Model} model The default model object
     * for the controller. This is required to create
     * an instance of the controller
     */
    constructor(model) {
        super(model);
        this._model = model
        this.finalPrice = this.finalPrice.bind(this)
    }
    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @return {Object} res The response object
     */
    async finalPrice(req, res) {
        try {
            const id = req.params.id
            const data = await this._model.findById(id)
            const finalPrice = data.price * (100 - data.priceCutOff)/100
            const filter = {
                finalPrice: finalPrice.toFixed(2),
                isPromo: data.priceCutOff >= 0
            }
            const update = await this._model.findByIdAndUpdate(id, filter, {new: true})
            return res.json({
                msg: "Final price updated!",
                data: update
            })
        } catch (e) {
            console.log(e)
            return res.json({error: "error"});
        }
    }
}
module.exports = new ProductsController(Product);
