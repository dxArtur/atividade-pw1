import { Router, Request, Response } from "express"
import techController from "../controller/TechController"
const router = require('express').Router()

router.get('/techAdd', (req:Request, res:Response)=>techController.createTech(req, res))


