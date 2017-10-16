// db.js

import mongoose from 'mongoose';
import {
  URI
} from '../constants';

const connect = () => {
  const serverOptions = {
    auto_reconnect: true,
    poolSize: 100,
    socketOptions: {
      socketTimeoutMS: 60000
    }
  };
  mongoose.connect(URI, {
    useMongoClient: true,
    server: serverOptions,
    replset: serverOptions
  }).catch(() => {});
}

connect();

// CONNECTION EVENTS
mongoose.connection.once('connecting', () => {
  console.log('Connecting to MongoDB');
});
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + URI);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
  mongoose.disconnect();
});

mongoose.connection.once('open', () => {
  console.info('MongoDB connection opened!');
});

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB reconnected!');
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
let exit = (options, err) => {
  if (options.cleanup) {
    console.log('Closing MongoDB connection...');
    mongoose.connection.close(() => {
      process.exit(0);
    });
  }
}

process.on('SIGINT', exit.bind(null, {
  cleanup: true
}));
