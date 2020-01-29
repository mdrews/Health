const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  user: {
    required: true,
    type: Number
  },
  weight: {
    required: true,
    type: String
  },
  dateRecorded: {
    required: false,
    type: Date,
    default: Date.now()
  }
});

const Weight = mongoose.model('Weight', WeightSchema);

module.exports = Weight;