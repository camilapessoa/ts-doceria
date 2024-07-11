import { IProductService } from "../interfaces/IProductService";
import { IProductRepository } from "../interfaces/IProductRepository";
import { Product } from "../models/Products";

export class ProductService implements IProductService {
    constructor(private productRepository: IProductRepository) {}

    getAllProducts(): Product[] {
        return this.productRepository.getAll();
    }

    addProduct(product: Product): void {
        this.productRepository.add(product);
    }
}
