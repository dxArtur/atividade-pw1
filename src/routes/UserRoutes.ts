import express, { Request, Response } from "express";
import UserController from "../controller/UserController";


const controllerUser = new UserController()


const router = express.Router()
//cadastrar usuario
router.post('/users', (req: Request, res: Response) => controllerUser.createUser(req, res));


export default router