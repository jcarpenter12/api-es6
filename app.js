// app.js
import express from 'express';
import UserController from './user/UserController';
import db from './database/db';

const app = express();
app.use('/users', UserController);

export default app;
