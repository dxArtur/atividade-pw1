"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const TechRoutes_1 = __importDefault(require("./TechRoutes"));
const router = require('express').Router();
router.use('/user', UserRoutes_1.default);
router.use('/tech', TechRoutes_1.default);
exports.default = router;
