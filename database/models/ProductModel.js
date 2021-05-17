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
            default: 5,
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
            max: 100,
            default: 0
        },
        finalPrice: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model("Product", ProductSchema, config.product)
