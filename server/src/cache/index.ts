import { Request, Response } from 'express';
import LRUCache from './lru_cache/'
import logger from './../logger'

const cache = new LRUCache()

const cachingMiddleware = (req: Request, res: Response, next: Function) => {
    
    const url = req.url
    let value = cache.get(url)
    if(value) {
        logger.info(`cache hit for ${url}`)
        res.status(200).send(value)
        return
    }
    else {
        logger.info(`cache miss for ${url}`)
        let oldSend = res.send
        res.send = function(data) {
        cache.insert(url, data)
        res.send = oldSend 
        return res.send(data) 
        }
    }
    next()
}

export default cachingMiddleware