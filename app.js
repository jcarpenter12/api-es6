// app.js
import express from 'express';
import db from './db';
const app = express();

import UserController from './user/UserController';
app.use('/users', UserController);

export default app;
