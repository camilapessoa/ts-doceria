import { Product } from "../models/Products";

export interface IProductRepository {
    getAll(): Product[];
    add(product: Product): void;
}
