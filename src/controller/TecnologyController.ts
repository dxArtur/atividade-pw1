import { Request, Response } from 'express';
import { Tecnology } from '../models/Tecnology';
import { User } from '../models/User';

export  default class TecnologyController {
  getTecnologies = async (req: Request, res: Response) => {
    const id = req.id;
    try {
      const user = await User.findFirst({ where: { id }, include: { tecnologies: true } });
      return res.json({ tecnologies: user?.tecnologies });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  };

  createTecnology = async (req: Request, res: Response) => {
    const userId = req.id;
    const body = req.body;
    try {
      const tecnology = await Tecnology.create({
        data: {
          title: body.title as string,
          deadline: new Date(body.deadline),
          userId: userId as string,
        },
      });
      return res.status(201).json({ tecnology });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  };

  putTecnology = async (req: Request, res: Response) => {
    const userId = req.id;
    const { id } = req.params;
    const body = req.body;

    const user = await User.findFirst({ where: { id: userId }, include: { tecnologies: true } });
    const check = user?.tecnologies.some((tecnology) => tecnology.id == id);

    if (check) {
      const object = {
        title: body.title ? (body.title as string) : undefined,
        deadline: body.deadline ? new Date(body.deadline) : undefined,
      };

      try {
        await Tecnology.update({
          where: { id },
          data: { ...object },
        });
        return res.json({ info: 'tecnology updated.' });
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    } else return res.json({ error: 'tecnology not found.' });
  };

  patchTecnology = async (req: Request, res: Response) => {
    const userId = req.id;
    const { id } = req.params;

    const user = await User.findFirst({ where: { id: userId }, include: { tecnologies: true } });
    const check = user?.tecnologies.some((tecnology) => tecnology.id == id);

    if (check) {
      try {
        await Tecnology.update({ where: { id }, data: { studied: true } });
        return res.json({ info: 'tecnology updated.' });
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    } else return res.json({ error: 'tecnology not found.' });
  };

  deleteTecnology = async (req: Request, res: Response) => {
    const userId = req.id;
    const { id } = req.params;

    const user = await User.findFirst({ where: { id: userId }, include: { tecnologies: true } });
    const check = user?.tecnologies.some((tecnology) => tecnology.id == id);

    if (check) {
      try {
        await Tecnology.delete({ where: { id } });
        return res.json({ info: 'tecnology deleted.' });
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    } else return res.json({ error: 'tecnology not found.' });
  };
}
