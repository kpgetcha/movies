import express from "express";
import Config from 'config';
import cors from 'cors';
import { movieRoute, personRoute} from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import 'module-alias/register';
import cachingMiddleware from './cache'
import logger from './logger'

const app = express()

app.use(cors());

// swagger definition
const swaggerDefinitionConfig : any = Config.get("Swagger");

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinitionConfig,
  // path to the API docs
  apis: ["**/*.ts"],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
})

app.use(cachingMiddleware)
app.use('/', movieRoute)
app.use('/', personRoute)

export default app;
