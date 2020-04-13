import _LRUCache from 'lru-cache'
import Config from 'config'

class LRUCache {

    cache : _LRUCache<string, string>;
    
    constructor(){
        this.cache = new _LRUCache({ 
            max: 500
            , length: (n: string, key: string) =>  n.length
            , maxAge: 1000 * 60 * 60 });
    }

    delete(key: string): void {
        this.cache.del(key)
    }
    
    get(key: string) {
        return this.cache.get(key)
    }

    insert(key: string, value: any, maxAge = 5 * 60 * 60): boolean {
        this.cache.set(key, value, maxAge)
        return true;
    }
}

export default LRUCache; 