import express, { Request, Response } from "express";
import { Technology } from "../models/TechInterface";
import { User } from "../models/UserInterface";
import { checkExistsUserAccount } from "../middleware/CheckExistsUserAccount ";
import techController from "../controller/TechController";


const controllerTech = new techController()

const router = express.Router()

router.get('/technologies', checkExistsUserAccount, (req, res)=>controllerTech.getAllTech(req, res))
router.post('/technologies', checkExistsUserAccount, (req, res)=>controllerTech.addTech(req, res))
router.patch('/technologies/:id/studied', checkExistsUserAccount, (req, res)=>controllerTech.studiedTech(req, res))
router.delete('/technologies/:id', checkExistsUserAccount, (req, res)=>controllerTech.deleteTech(req, res))

export default router