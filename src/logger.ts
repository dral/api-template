import winston from 'winston';
import config from 'config';
import { StreamOptions } from 'morgan';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      level: config.get('logLevel'),
    }),
  ],
});

export const stream: StreamOptions = {
  write: (message: string) => {
    logger.info(message.trim());
  }
};

export default logger;
