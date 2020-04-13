import app from "./app";
import compression from "compression";
import helmet from "helmet";
import 'module-alias/register';
import logger from './logger'

app.use(helmet()); // set well-known security-related HTTP headers
app.use(compression());

app.disable("x-powered-by");

const port : any = process.env.PORT || 3001

const server = app.listen(port, () => {
    logger.info(`Starting ExpressJS server on Port http://localhost:${port}`);
    logger.info(`Available REST APIS can be invoked using Swagger at http://localhost:${port}/api-docs`)
});

export default server;
