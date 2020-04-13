import Config from 'config'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

class BaseService {

    private instance: AxiosInstance

    constructor(){
        this.instance = axios.create(Config.get("imdb"))
    }

    public async get(url) : Promise<AxiosResponse>{
        return await this.instance.get(url)
    }
}

export default BaseService;