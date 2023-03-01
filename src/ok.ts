import express from 'express';

export const ok = (_: express.Request, res: express.Response) => {
  return res.sendStatus(200);
};
