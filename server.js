// server.js
import app from './app';
import readline from 'readline';
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});

/*
Ensure that the server is closed down when terminal
is shutdown
*/
const shutdown = () => {
  console.log('Closing express server connection');
  server.close(() => {
    process.exit(0);
  });
}

//import readline module for handling SIGINT in windows
if (process.platform === "win32") {
  readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }).on("SIGINT", function() {
    process.emit("SIGINT");
  });
}

process.on('SIGINT', shutdown);
