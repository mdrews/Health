const express = require('express');
const router = express.Router();
const Exercise = require('../../models/exercises');

router.get('/', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises));
});

router.post('/', (req, res) => {
  const newExercise = new Exercise({
    exerciseType: req.body.exerciseType,
    time: req.body.time,
    distance: req.body.distance,
    calories: req.body.calories
  });
  newWeight.save().then(weight => res.json(weight));
});

module.exports = router;