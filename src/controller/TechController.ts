import {Request, Response} from 'express'
import { Technology } from '../models/TechInterface'
import { User } from '../models/UserInterface'

export default class techController {

    getAllTech = (req: Request, res: Response) => {
        const user = req.user as User

        return res.status(200).json(user.technologies)
    }

    addTech = (req: Request, res: Response) =>{
        const {title, deadline} = req.body
        const username = req.headers.username as string

        const { user } = req;

        const newTechnology = new Technology({
            id: uuidv4(),
            title,
            studied: false,
            deadline: new Date(deadline), // Converta a data para um objeto Date
            created_at: new Date(),
          })

        user.technologies.push(newTechnology);

        return res.status(201).json(newTechnology)
    }

    updateTitleTech = (req: Request, res: Response) => {
        res.send('update title tech')
    }

    studiedTech = (req: Request, res: Response) => {
        const {id} = req. params
        const username = req.headers.username as string

        const user = req.user as User

        const technology = user.technologies.find((tech) => tech.id === id)

        if (!technology) {
            return res.status(404).json({ error: "Tecnologia não encontrada." });
        }

        technology.studied = true

        return res.json(technology)
    }

    deleteTech = (req: Request, res: Response) => {
        const user = req.user;
        const technologyId = req.params.id;

        const technologyIndex = user.technologies.findIndex((tech) => tech.id === technologyId);

        if (technologyIndex === -1) {
            return res.status(404).json({ error: 'Tecnologia não encontrada.' });
        }

        user.technologies.splice(technologyIndex, 1);

        return res.status(200).json(user.technologies);
    }

}
