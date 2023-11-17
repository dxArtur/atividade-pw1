import { NextFunction, Request, Response } from 'express';
import { User } from '../models/User';

export const checkExistsUserAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.headers;
  if (username) {
    try {
      const check = await User.findFirst({ where: { username: username as string } });
      if (check) {
        req.id = check.id;
        next();
      } else return res.status(404).json({ error: 'user not exists.' });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  } else return res.status(404).json({ error: 'user not exists.' });
};
