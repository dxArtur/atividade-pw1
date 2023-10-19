"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserInterface_1 = require("../models/UserInterface");
const router = express_1.default.Router();
router.use(express_1.default.json());
//cadastrar usuario
router.post('/users', (req, res) => {
    const { name, username } = req.body;
    if (UserInterface_1.User.some((user) => user.username === username)) {
        return res.status(400).json({ error: 'Nome de usuário já existe.' });
    }
    const newUser = new UserInterface_1.User(name, username);
    users.push(newUser);
    return res.status(201).json(newUser);
});
exports.default = router;
