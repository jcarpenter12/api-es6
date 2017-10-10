// db.js

import mongoose from 'mongoose';
const db = mongoose.connect('mongodb://jcarpent:password123@ds040837.mlab.com:40837/test_api');

export default db;
