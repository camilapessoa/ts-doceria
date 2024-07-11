import { Request, Response } from "express";
import { IProductService } from "../interfaces/IProductService";
import { Product } from "../models/Products";

export class ProductController {
    constructor(private productService: IProductService) {}

    public getProducts(req: Request, res: Response): void {
        const products = this.productService.getAllProducts();
        res.status(200).json(products);
    }

    public createProduct(req: Request, res: Response): void {
        const product: Product = req.body;
        this.productService.addProduct(product);
        res.status(201).json(product);
    }
}
