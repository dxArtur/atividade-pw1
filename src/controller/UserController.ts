import { Request, Response } from 'express';
import { User } from '../models/User';

export default class UserController {
  createUser = async (req: Request, res: Response) => {
    const body = req.body;
    try {
      const check = await User.findFirst({ where: { username: body.username } });
      if (!check) {
        const newUser = await User.create({ data: body, include: { tecnologies: true } });
        res.status(201).json(newUser);
      } else return res.status(400).json({ error: 'user already registered' });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  };
}
