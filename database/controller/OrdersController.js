const Order = require("../models/OrderModel")
const GenericController = require("./GenericController");

class OrdersController extends GenericController  {
    constructor(model) {
        super(model);
    }
}
module.exports = new OrdersController(Order);
