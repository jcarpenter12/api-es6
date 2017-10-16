// db.js

import mongoose from 'mongoose';
import {
  USER,
  PASSWORD
} from '/constants';

const serverOptions = {
  poolSize: 100,
  socketOptions: {
    socketTimeoutMS: 60000
  }
};

const URI = 'mongodb://' + USER + ':' + PASSWORD + '@ds040837.mlab.com:40837/test_api';

console.log(URI);

const db = mongoose.connect(URI, {
  useMongoClient: true,
  server: serverOptions,
  replset: serverOptions
});


export default db;
