const express = require('express');
const router = express.Router();
const Exercise = require('../../models/exercises');

router.get('/', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises));
});

router.post('/', (req, res) => {
  const newWeight = new Weight({
    user: req.body.user,
    weight: req.body.weight
  });
  newWeight.save().then(weight => res.json(weight));
});

module.exports = router;