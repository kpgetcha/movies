import { AxiosResponse } from 'axios'
import BaseService from '../base'

class PersonService extends BaseService {

    constructor(){
        super()
    }

    async getPersonDetails(id: string) : Promise<AxiosResponse>{
        return await this.get(`person/${id}`);
    }
}

export default PersonService;
