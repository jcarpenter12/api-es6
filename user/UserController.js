//UserController.js

import express from 'express';
import bodyParser from 'body-parser';
import User from './User';

const router = express.Router();
router.use(bodyParser.urlencoded({
  extended: true
}));

//CREATE
router.post('/', function(req, res) {

  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    function(err, user) {
      if (err) return res.status(500).send("There was a problem adding \
    the information to the database");
      res.status(200).send(user);
    });
});

//RETURN
router.get('/', function(req, res) {

  User.find({}, function(err, users) {
    if (err) return res.status(500).send("There was a problem \
    finding users");
    res.status(200).send(users);
  });
});

export default router;
