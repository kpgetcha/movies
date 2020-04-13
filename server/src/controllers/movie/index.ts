import { Request, Response } from 'express';
import BaseController from '../base';
import { movieService } from '../../services'
import logger from './../../logger'

export class MovieController extends BaseController {

    constructor() {
        super();
    }

    public async getMovieDetails(req: Request, res: Response) : Promise<void | any> {
        const id = req.params['id']
        await movieService.getMovieDetails(id)
            .then(response => response.data)
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                logger.error(error)
                return this.badRequest(res, error);
            })
    }

    public async getPopularMovie(req: Request, res: Response) : Promise<void | any> {
        const page = req.params['page']
        await movieService.getPopularMovies(page)
            .then(response => response.data)
            .then(data => {
                res.status(200).send(data)
            })
            .catch(error => {
                logger.error(error)
                return this.badRequest(res, error);
            })
    }

    public async searchMoviesByTitle(req: Request, res: Response) : Promise<void | any> {
        const title = req.params['title']
        const page = req.params['page']
        await movieService.searchMovies(title, page)
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