"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts(req, res) {
        const products = this.productService.getAllProducts();
        res.status(200).json(products);
    }
    createProduct(req, res) {
        const product = req.body;
        this.productService.addProduct(product);
        res.status(201).json(product);
    }
}
exports.ProductController = ProductController;
