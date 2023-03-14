import mongoose from 'mongoose';
import logger from './logger';

const initdb = (host: string, options: mongoose.ConnectOptions): Promise<mongoose.Connection> => {
  return mongoose.connect(host, options)
    .then(instance => {
      const connection = instance.connection;
      
      // Force process to exit if connection lost
      connection.on('disconnected', () => {
        logger.error('Disconnected from db');
        process.exit(1);
      });
  
      connection.on('close', () => {
        logger.error('Db connection closed');
        process.exit(1);
      });

      return connection;
    });
};

export const isAlive = () => {
  let state = mongoose.connection.readyState;
  return [
    mongoose.ConnectionStates.connected,
    mongoose.ConnectionStates.connecting,
  ].includes(state);
};

export default initdb;