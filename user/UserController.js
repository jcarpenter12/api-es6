//UserController.js

import express from 'express';
import bodyParser from 'body-parser';
import User from './UserModel';

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

// GET SINGLE USER FROM THE DATABASE
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

//UPDATE
router.put('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    },
    function(err, user) {
      if (err) return sas.status(500).send("There was a problem updating the \
    user");
      res.status(200).send(user);
    });
});

//DELETE
router.delete(':/id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.status(500).send("There was a problem deleting \
    the user");
    res.status(200).send("User " + user.name + " was deleted.");
  });
});

export default router;
