// db.js

import mongoose from 'mongoose';

const serverOptions = {
  poolSize: 100,
  socketOptions: {
    socketTimeoutMS: 60000
  }
};

const db = mongoose.connect('mongodb://jcarpent:password123@ds040837.mlab.com:40837/test_api', {
  useMongoClient: true,
  server: serverOptions,
  replset: serverOptions
});


export default db;
