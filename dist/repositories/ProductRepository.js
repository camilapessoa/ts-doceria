"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        this.products = [];
    }
    getAll() {
        return this.products;
    }
    add(product) {
        this.products.push(product);
    }
}
exports.ProductRepository = ProductRepository;
