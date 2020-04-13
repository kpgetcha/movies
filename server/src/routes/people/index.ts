import { Router, Request, Response } from "express";
import { personController } from './../../controllers';

const personRouter = Router();

/**
 * @swagger
 * /person/{id}:
 *    get:
 *      description: Movie API to get a person
 *      tags:
 *          - People
 *      parameters:
 *          - in: path
 *            name: id
 *            description: person id
 *            required: true
 *            type: string
 *      responses:
 *          '200':
 *              description: successful response
 */
personRouter.get('/person/:id', (req: Request, res: Response) => {
    personController.getPerson(req, res)
})

export default personRouter;
