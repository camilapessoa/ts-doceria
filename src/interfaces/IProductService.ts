import { Produto, Prisma } from '@prisma/client';


export interface IProductService {
    getAllProducts(): Promise<Produto[]>;
    addProduct(productData: Prisma.ProdutoCreateInput): Promise<Produto>;
}
