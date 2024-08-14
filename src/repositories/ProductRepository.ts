import { PrismaClient, Produto, Prisma } from '@prisma/client';


export class ProductRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getAll(): Promise<ProdutoType[]> {
        return this.prisma.produto.findMany();
    }

    async add(productData: Prisma.ProdutoCreateInput): Promise<ProdutoType> {
        return this.prisma.produto.create({
            data: productData,
        });
    }
}
