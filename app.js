// app.js
import express from 'express';
import db from './db';
import UserController from './user/UserController';

const app = express();
app.use('/users', UserController);

export default app;
