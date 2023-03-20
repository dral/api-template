import express from 'express';
import { isAlive as serverOK } from '../server';
import { isAlive as dbOk } from '../db';
/**
 * @openapi
 * /health:
 *   get:
 *     description: Verify server is up
 *     responses:
 *       200:
 *         description: Returns `ok` status
 *       500:
 *         description: Either the db or the server is not working as expected
 */
export const health = (_: express.Request, res: express.Response) => {
  if (serverOK() && dbOk()) {
    return res.sendStatus(200);
  }
  return res.sendStatus(500);
};
