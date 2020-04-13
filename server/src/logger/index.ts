import log4js from 'log4js';
import config from 'config';

class Log4jsLogger {
    private logger : log4js.Logger

    constructor(){
        const loggerConfig : log4js.Configuration = config.get('Logger');
        log4js.configure(loggerConfig)
        this.logger = log4js.getLogger();
    }

    info(message: any, ...args: any[]) {
        if(args.length){
            this.logger,this.info(message, args);
        }
        else {
            this.logger.info(message);
        }
    }    

    trace(message: any, ...args: any[]) {
        if(args.length)
            this.logger.trace(message, args);
        else
            this.logger.trace(message);
    }

    error(message: any, ...args: any[]) {
        if(args.length){
            this.logger.error(message, args);
        }
        else {
            this.logger.error(message, args);
        }
            
    }

    debug(message: any, ...args: any[]) {
        if(args.length)
            this.logger.debug(message, args);
        else
            this.logger.debug(message);
    }

    fatal(message: any, ...args: any[]) {
        if(args.length)
            this.logger.fatal(message, args);
        else
            this.logger.fatal(message);
    }
}

const logger = new Log4jsLogger()

export default logger;