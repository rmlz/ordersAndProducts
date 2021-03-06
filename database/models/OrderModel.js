const mongoose = require("mongoose")
const config = require("../config")

const OrderSchema = new mongoose.Schema(
    {
        orderElements: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                customerComment: String
            }
        ]
    },
    {timestamps: true}
)

module.exports = mongoose.model("Order", OrderSchema, config.order)
