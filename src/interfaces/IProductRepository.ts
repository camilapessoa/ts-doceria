import { Produto, Prisma } from '@prisma/client';

export interface IProductRepository {
    getAll(): Promise<Produto[]>;
    add(productData: Prisma.ProdutoCreateInput): Promise<Produto>;
}