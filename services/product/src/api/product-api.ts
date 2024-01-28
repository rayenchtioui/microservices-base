import { Express, NextFunction, Request, Response } from "express"
import ProductService from "../service/product-service";
import prisma from "../database/models/Product";

const ProductAPI = (app:Express) => {

    const productService = new ProductService();

    app.get('/list', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productList = await prisma.product.findMany();
            console.log("Retrieved product list:", productList);
            return res.status(200).json({ productList });
        } catch (error) {
            console.error("Error retrieving product list:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get('/one/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const product = await await prisma.product.findUnique({ where: { id } });
            console.log("Retrieved product:", product);
            return res.status(200).json({ product });
        } catch (error) {
            console.error("Error retrieving product:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.post('/create', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, description } = req.body;
            const price: number | undefined = parseFloat(req.body.wallet);
            const product = await prisma.product.create({ data: { name, description, price } });
            console.log("Created product:", product);
            return res.status(200).json({ product });
        } catch (error) {
            console.error("Error creating product:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const product = await prisma.product.delete({ where: { id } });
            console.log("Deleted product:", product);
            return res.status(200).json({ product });
        } catch (error) {
            console.error("Error deleting product:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.put('/update/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const { name, description } = req.body;
            const price = parseFloat(req.body.wallet);
            const product = await prisma.product.update({ where: { id }, data: { name, description, price } });
            console.log("Updated product:", product);
            return res.status(200).json({ product });
        } catch (error) {
            console.error("Error updating product:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get('/ping-client', async (req:Request, res:Response, next:NextFunction) => {
        await productService.PingClientService();
        return res.status(200).json({msg: 'Pinged client service'});
    });

    app.get('/ping-user', async (req:Request, res:Response, next:NextFunction) => {
        await productService.PingUserService();
        return res.status(200).json({msg: 'Pinged user service'});
    });

}

export default ProductAPI;