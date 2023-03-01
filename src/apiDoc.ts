import swaggerJsdoc from 'swagger-jsdoc';
import project  from  '../package.json';
import config from 'config';

const {name : title, version, description} = project;
const port = config.get<string>('restApi.port');
const baseUrl = config.get<string>('restApi.baseUrl');

let url = new URL(baseUrl);
url.port = port;

const options : swaggerJsdoc.Options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      description,
      title,
      version,
    },
    servers: [
      {
        url,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/**/*.ts'],
};

export const uiOptions = {
  customCss: '.swagger-ui .topbar { display: none }'
};

export const openapiSpecification = swaggerJsdoc(options);