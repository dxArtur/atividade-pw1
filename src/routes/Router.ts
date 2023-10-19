import express, { Router, Request, Response } from "express"
import userRouter from './UserRoutes'
import techRouter from './TechRoutes'

const router = require('express').Router()

router.use('/', userRouter)
router.use('/', techRouter)

export default router






