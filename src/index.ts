import logger from './logger';
import init from './server';
import app from './app';
logger.info('Starting server');

init(app)
  .then(instance => {
    logger.info('Server started', instance.address());
  })
  .catch(error => {
    logger.error({error});
    process.exit(1);
  });
