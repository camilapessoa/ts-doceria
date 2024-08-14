import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { PrismaClient, type Prisma } from '@prisma/client';

export class ProductController {
    constructor(private productService: ProductService) {}

    public async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }

    public async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const productData: Prisma.ProdutoCreateInput = req.body;
            const newProduct = await this.productService.addProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar produto' });
        }
    }
}
