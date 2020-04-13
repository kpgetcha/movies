import { AxiosResponse } from 'axios'
import BaseService from './../base/'

class MovieService extends BaseService {

    constructor(){
        super()
    }

    async getMovieDetails(id: string) : Promise<AxiosResponse>{
        return await this.get(`/movie/${id}?append_to_response=credits`);
    }

    async getPopularMovies(page = "1") : Promise<AxiosResponse>{
        return await this.get(`/movie/popular?page=${page}`);
    }

    async searchMovies(title: string, page = "1") : Promise<AxiosResponse>{
        return await this.get(`/search/movie?query=${title}&page=${page}`);
    }
}

export default MovieService;
