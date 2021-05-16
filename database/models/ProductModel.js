const mongoose = require("mongoose")
const config = require("../config")

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        isPromo: {
            type: Boolean,
            default: false
        },
        priceCutOff: {
            type: Number,
            min: 0,
            max: 1,
            default: 1
        },
        finalPrice: {
            type: Number,
            required: Number
        }
    }
)

module.exports = mongoose.model("Product", ProductSchema, config.product)
