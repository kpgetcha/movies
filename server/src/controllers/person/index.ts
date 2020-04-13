import * as express from 'express';
import BaseController from '../base';
import { personService } from '../../services'
import logger from './../../logger'

export class PersonController extends BaseController {

    constructor() {
        super();
    }

    public async getPerson(req: express.Request, res: express.Response) : Promise<void | any> {
        const id = req.params['id']
        await personService.getPersonDetails(id)
            .then(response => response.data)
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                logger.error(error)
                return this.badRequest(res, error);
            })
    }
}