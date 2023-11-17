import express, { Request, Response } from "express";
import { Tecnology } from "../models/Tecnology";
import { User } from "../models/User"
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
import techController from "../controller/TecnologyController";


const controllerTech = new techController()

const router = express.Router()

router.get('/technologies', checkExistsUserAccount, (req, res)=>controllerTech.getTecnologies(req, res))
router.post('/technologies', checkExistsUserAccount, (req, res)=>controllerTech.createTecnology(req, res))
router.patch('/technologies/:id/studied', checkExistsUserAccount, (req, res)=>controllerTech.patchTecnology(req, res))
router.delete('/technologies/:id', checkExistsUserAccount, (req, res)=>controllerTech.deleteTecnology(req, res))

export default router