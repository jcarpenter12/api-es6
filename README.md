# api-es6

A basic RESTful API using mongodb, express and es6 syntax (compiles with babel-node).

Initial setup:

Add a 'constants.js' file to the top level and add your URI for Mongodb as follows

```javascript

// constants.js

export
const URI = 'mongodb://<username>:<password>@<your_database>';


```


Run with:

```
npm start

```

Debug with:

```
npm test

```
