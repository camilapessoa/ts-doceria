import { Product } from "../models/Products";

export interface IProductService {
    getAllProducts(): Product[];
    addProduct(product: Product): void;
}
