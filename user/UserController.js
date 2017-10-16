//UserController.js

import express from 'express';
import bodyParser from 'body-parser';
import User from './UserModel';

const router = express.Router();
router.use(bodyParser.urlencoded({
  extended: true
}));

//CREATE
router.post('/', (req, res) => {
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    (err, user) => {
      if (err) return res.status(500).send("There was a problem adding \
    the information to the database");
      res.status(200).send(user);
    });
});

//RETURN
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send("There was a problem \
    finding users");
    res.status(200).send(users);
  });
});

// GET SINGLE USER FROM THE DATABASE
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

//UPDATE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    },
    (err, user) => {
      if (err) return res.status(500).send("There was a problem updating the \
    user");
      res.status(200).send(user);
    });
});

//DELETE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send("There was a problem deleting \
    the user");
    res.status(200).send("User " + user.name + " was deleted.");
  });
});

export default router;
