-- CreateTable
CREATE TABLE "Produto" (
    "ID" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Descricao" TEXT,
    "Alergenos" TEXT,
    "Valor" DOUBLE PRECISION NOT NULL,
    "QuantidadeDisponivel" INTEGER NOT NULL,
    "CategoriaID" INTEGER NOT NULL,
    "Imagem" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "ID" SERIAL NOT NULL,
    "PrecoUnitario" DOUBLE PRECISION NOT NULL,
    "PedidoID" INTEGER NOT NULL,
    "ProdutoID" INTEGER NOT NULL,
    "Quantidade" INTEGER NOT NULL,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "ID" SERIAL NOT NULL,
    "Status" TEXT NOT NULL,
    "MesaCliente" TEXT NOT NULL,
    "Observacao" TEXT,
    "ValorItens" DOUBLE PRECISION NOT NULL,
    "ValorDesconto" DOUBLE PRECISION,
    "TaxaAtendimento" DOUBLE PRECISION,
    "ValorFinal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "ID" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "EstoqueProduto" (
    "ID" SERIAL NOT NULL,
    "ProdutoID" INTEGER NOT NULL,
    "QuantidadeInicial" INTEGER NOT NULL,
    "QuantidadeFinal" INTEGER NOT NULL,

    CONSTRAINT "EstoqueProduto_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_CategoriaID_fkey" FOREIGN KEY ("CategoriaID") REFERENCES "Categoria"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_PedidoID_fkey" FOREIGN KEY ("PedidoID") REFERENCES "Pedido"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_ProdutoID_fkey" FOREIGN KEY ("ProdutoID") REFERENCES "Produto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstoqueProduto" ADD CONSTRAINT "EstoqueProduto_ProdutoID_fkey" FOREIGN KEY ("ProdutoID") REFERENCES "Produto"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
