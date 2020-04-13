import { Router, Request, Response } from "express";
import { movieController } from '../../controllers';

const movieRouter = Router();

/**
 * @swagger
 * /movie/{id}:
 *    get:
 *      description: Movie API to get movie
 *      tags:
 *          - Movie
 *      parameters:
 *          - in: path
 *            name: id
 *            description: movie id
 *            required: true
 *            type: string
 *      responses:
 *          '200':
 *              description: successful response
 */
movieRouter.get('/movie/:id', (req: Request, res: Response) => {
    movieController.getMovieDetails(req, res)
})

/**
 * @swagger
 * /movie/popular/{page}:
 *    get:
 *      description: Movie API to get popular movies
 *      tags:
 *          - Movie
*      parameters:
 *          - in: path
 *            name: page
 *            description: Page number of the popular movie list
 *            required: false
 *            type: string
 *      responses:
 *          '200':
 *              description: Successful response
 */
movieRouter.get('/movie/popular/:page', (req: Request, res: Response) => {
    movieController.getPopularMovie(req, res)
})

/**
 * @swagger
 * /movie/search/{title}/{page}:
 *    get:
 *      description: Movie API to get movie
 *      tags:
 *          - Movie
 *      parameters:
 *          - in: path
 *            name: title
 *            description: Title to be searched
 *            required: true
 *            type: string
 *          - in: path
 *            name: page
 *            description: Page number in the search result
 *            required: false
 *            type: string
 *      responses:
 *          '200':
 *              description: successful response
 */
movieRouter.get('/movie/search/:title/:page', (req: Request, res: Response) => {
    movieController.searchMoviesByTitle(req, res)
})

export default movieRouter;
