import { Router } from 'express';
import { ProductRepository } from '../repositories/ProductRepository';
import { ProductService } from '../services/ProductService';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get("/products", (req, res) => productController.getProducts(req, res));
router.post("/products", (req, res) => productController.createProduct(req, res));

export default router;
