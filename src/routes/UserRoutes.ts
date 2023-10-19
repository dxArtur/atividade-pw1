import express, { Request, Response } from "express";
import { Technology } from "../models/TechInterface";
import { User } from "../models/UserInterface";
import UserController from "../controller/UserController";


const controllerUser = new UserController()


const router = express.Router()
//cadastrar usuario
router.post('/users', (req: Request, res: Response) => controllerUser.addUser(req, res));
router.get('/users', (req: Request, res: Response) => controllerUser.allUser(req, res));


export default router