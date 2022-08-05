const express = require("express");
const authMiddleware = require("../middleware/auth");
const router = express.Router();
const Product = require("../../models/Product");
const multer = require("multer");
const multerConfig = require("../../config/multer");
router.use(authMiddleware);
//Lists all products.
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        return res.send({ products });
    } catch (err) {
        return res.status(400).send({ error: "Erro ao carregar produtos." });
    }
});

//List a product by id.
router.get("/:productId", async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);

        return res.send({ product });
    } catch (err) {
        return res.status(400).send({ errr: "Produto não encontrado." });
    }
});

//Create a product.
router.post("/", multer().single("img"), async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.send({ product });
    } catch (err) {
        return res.status(400).send({ error: "Erro ao criar novo produto." });
    }
});

//Update a product.
router.put("/:productId", async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.productId, req.body);

        return res.send();
    } catch {
        return res.status(400).send({ error: "Erro ao atualizar produto" });
    }
});

//Deletes a product.
router.delete("/:productId", async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.productId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: "Erro ao remover produto." });
    }
});
module.exports = (app) => app.use("/products", router);
