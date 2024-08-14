import { Prisma } from '@prisma/client';
import { PrismaClient, Produto, ProdutoCreateInput } from '@prisma/client';


export class ProductRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<Produto[]> {
        return this.prisma.produto.findMany();
    }

    async add(productData: ProdutoCreateInput): Promise<Produto> {
        return this.prisma.produto.create({
            data: productData,
        });
    }
}
