"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    getAllProducts() {
        return this.productRepository.getAll();
    }
    addProduct(product) {
        this.productRepository.add(product);
    }
}
exports.ProductService = ProductService;
