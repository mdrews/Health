const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exerciseType: {
    type: String,
    required: true
  }
});

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);