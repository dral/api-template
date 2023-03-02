import express from 'express';
import license from './licence';

const app = express.Router();

// TODO: set application router here
app.use(license);

export default app;
