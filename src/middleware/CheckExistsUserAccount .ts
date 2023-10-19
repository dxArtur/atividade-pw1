import { Request, Response, NextFunction } from "express"
import { User } from "../models/UserInterface"
import UserController from "../controller/UserController"

export function checkExistsUserAccount(req: Request, res: Response, next: NextFunction) {
    const username = req.headers['username'] as string;
    console.log(username)

    if (!username) {
        return res.status(400).json({ error: 'Cabeçalho "username" ausente ou inválido.' });
    }

    const users = (new UserController()).getUsers()
    console.log(users)

    const userFind = users.find((user) => user.username === username)

    if (! userFind ) {
        return res.status(404).json({ error: 'Usuário não encontrado.' })
    }

    req.user = userFind

    next()
}