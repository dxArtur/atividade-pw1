import {Request, Response} from 'express'

export default class techController {
    constructor(){}

    createTech = (req: Request, res: Response) => {
        res.send('create tech')
    }

    getAllTech = (req: Request, res: Response) => {
        res.send('all tech')
    }

    updateTitleTech = (req: Request, res: Response) => {
        res.send('update title tech')
    }

    updateDeadlineTech = (req: Request, res: Response) => {
        res.send('update deadline tech')
    }

}
