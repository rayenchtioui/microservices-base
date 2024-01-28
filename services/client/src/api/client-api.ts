import { Express, NextFunction, Request, Response } from "express"
import ClientService from "../service/client-service";
import prisma from "../database/models/Client";

const ClientAPI = (app:Express) => {

    const clientService = new ClientService();

    app.get('/list', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const clientList = await prisma.client.findMany();
            console.log("Retrieved client list:", clientList)
            return res.status(200).json({ clientList });
        } catch (error) {
            console.error("Error retrieving client list:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get('/one/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const client = await prisma.client.findUnique({ where: { id } });
            console.log("Retrieved client:", client)
            return res.status(200).json({ client });
        } catch (error) {
            console.error("Error retrieving client:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.post('/create', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email } = req.body;
            const wallet = parseFloat(req.body.wallet);
            const client = await prisma.client.create({ data: { name, email, wallet } });
            console.log("Created client:", client)
            return res.status(200).json({ client });
        } catch (error) {
            console.error("Error creating client:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.body.id);
            const client = await prisma.client.delete({ where: { id } });
            console.log("Deleted client:", client)
            return res.status(200).json({ client });
        } catch (error) {
            console.error("Error deleting client:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.put('/update/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const { name, email } = req.body;
            const wallet: number | undefined = parseFloat(req.body.wallet);
            const client = await prisma.client.update({ where: { id }, data: { wallet, name, email } });
            console.log("Updated client:", client)
            return res.status(200).json({ client });
        } catch (error) {
            console.error("Error updating client:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get('/ping-product', async (req:Request, res:Response, next:NextFunction) => {
        await clientService.PingProductService();
        return res.status(200).json({msg: 'Pinged client service'});
    });

    app.get('/ping-user', async (req:Request, res:Response, next:NextFunction) => {
        await clientService.PingUserService();
        return res.status(200).json({msg: 'Pinged user service'});
    });

}

export default ClientAPI;