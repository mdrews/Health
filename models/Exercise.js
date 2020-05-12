const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Exercise Object
const ExerciseSchema = new Schema({
  exerciseType: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: false
  },
  distance: {
    type: Number,
    required: false
  },
  calories: {
    type: Number,
    required: false
  }
});

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);