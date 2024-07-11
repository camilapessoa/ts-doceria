import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../models/Products";

export class ProductRepository implements IProductRepository {
    private products: Product[] = [];

    getAll(): Product[] {
        return this.products;
    }

    add(product: Product): void {
        this.products.push(product);
    }
}
