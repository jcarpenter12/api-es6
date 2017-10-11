// app.js
import express from 'express';
import db from './db';
import UserController from './user/UserController';

const app = express();
app.use('/users', UserController);

//URL not found
app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  });
});

export default app;
