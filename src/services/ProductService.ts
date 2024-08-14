import { Produto as ProdutoType, Prisma } from '@prisma/client';
import { IProductRepository } from '../interfaces/IProductRepository';

export class ProductService {
    constructor(private productRepository: IProductRepository) {}

    async getAllProducts(): Promise<ProdutoType[]> {
        return this.productRepository.getAll();
    }

    async addProduct(productData: Prisma.ProdutoCreateInput): Promise<ProdutoType> {
        return this.productRepository.add(productData);
    }
}
