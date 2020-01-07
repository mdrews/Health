const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  user: {
    required: true,
    type: Number
  },
  Weight: {
    required: true,
    type: Number
  },
  DateRecorded: {
    required: false,
    type: Date,
    default: Date.now
  }
});

const Weight = mongoose.model('Weight', WeightSchema);

module.exports = Weight;