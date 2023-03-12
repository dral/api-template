import express from 'express';
import doc from './apiDoc';
import license from './licence';

const app = express.Router();

// TODO: set application router here

// Licences API
app.use(license);
// API documentation
app.use(doc);

export default app;
