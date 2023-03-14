import express from 'express';
import config from 'config';
import {stream} from './logger';
import morgan from 'morgan';
import cors from 'cors';
import { Server } from 'http';
import { notFound } from './base/notFound';
import { ok } from './base/ok';
import {error} from './base/error';
const port = config.get('restApi.port');
const logStyle = config.get<string>('restApi.logStyle');

export const setupServer = (...router: express.Router[])=> {
  const server = express();
  server.use(cors());
  server.use(morgan(logStyle, { stream }));

  // Body parser options
  server.use(express.urlencoded({ extended: true }));
  server.use(express.text());
  server.use(express.json());

  if (router.length > 0) {
    server.use(router);
  }

  // Base Routes
  server.get('/', ok);
  server.use(notFound);
  server.use(error);
  return server;
};

const init = (...router: express.Router[] ): Promise<Server> => {
  const server = setupServer(...router);
  return new Promise((accept) =>  {
    const instance = server
      .listen(port, () => {
        accept(instance);
      })
      .on('error', (error) => {
        throw new Error(`Unable to launch server: Shutting down. ${error}`);
      });
  });
};

export default init;