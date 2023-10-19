import {Request,Response} from 'express'
import { User } from '../models/UserInterface'
import { v4 as uuidv4 } from 'uuid';

const users: User[] =[]


export default class UserController {

    

    addUser(req:Request, res:Response) {
        const { name, username, technologies } = req.body
        
        if (users.some((user: User) => user.username === username)) {
            res.status(400).json({ error: 'Nome de usuário já existe.' });
        }
        
        const newUser: User = {
            id: uuidv4(),
            name,
            username,
            technologies,
          };
        
          users.push(newUser);
        
          return res.status(201).json(newUser)
    }

    getUsers(): User[] {
        return users
    }
}