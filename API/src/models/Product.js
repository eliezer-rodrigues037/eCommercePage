const mongoose = require("../database");

//Creates Product Table
const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    peso: {
        type: mongoose.Decimal128,
        required: true,
    },
    preco: {
        type: mongoose.Decimal128,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.pre("save", async function (next) {
    //compress image.
    next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
