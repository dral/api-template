import logger from './logger';
import init from './server';
import initdb from './store';
import app from './app';
import config from 'config';

const dbHost = config.get<string>('mongodb.host');
const dbOptions = config.get<object>('mongodb.options');

logger.info('Starting server');
Promise.all([
  init(app),
  initdb(dbHost, dbOptions),
])
  .then(([instance, connection]) => {
    logger.info('Server started', instance.address());
    logger.info('Connected to db', connection.host);
  })
  .catch(error => {
    logger.error({error});
    process.exit(1);
  });
