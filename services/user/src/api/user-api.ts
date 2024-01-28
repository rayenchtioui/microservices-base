import { Express, NextFunction, Request, Response } from "express"
import UserService from "../service/user-service";
import prisma from "../database/models/User";

const UserAPI = (app:Express) => {

    const userService = new UserService();

    app.get('/list', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userList = await prisma.user.findMany();
            console.log("Retrieved user list:", userList);
            return res.status(200).json({ userList });
        } catch (error) {
            console.error("Error retrieving user list:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    
    app.get('/one/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const user = await prisma.user.findUnique({ where: { id } });
            console.log("Retrieved user:", user);
            return res.status(200).json({ user });
        } catch (error) {
            console.error("Error retrieving user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    
    app.post('/create', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, email, wallet } = req.body;
            const user = await prisma.user.create({ data: {name,email, wallet} });
            console.log("Created user:", user);
            return res.status(200).json({ user });
        } catch (error) {
            console.error("Error creating user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    
    app.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const user = await prisma.user.delete({ where: { id } });
            console.log("Deleted user:", user);
            return res.status(200).json({ user });
        } catch (error) {
            console.error("Error deleting user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    
    app.put('/update/:id', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = parseInt(req.params.id);
            const { name, email, wallet } = req.body;
            const user = await prisma.user.update({ where: { id }, data: { name, email, wallet } });
            console.log("Updated user:", user);
            return res.status(200).json({ user });
        } catch (error) {
            console.error("Error updating user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get('/ping-client', async (req:Request, res:Response, next:NextFunction) => {
        await userService.PingClientService();
        return res.status(200).json({msg: 'Pinged client service'});
    });

    app.get('/ping-product', async (req:Request, res:Response, next:NextFunction) => {
        await userService.PingProductService();
        return res.status(200).json({msg: 'Pinged product service'});
    });

}

export default UserAPI;