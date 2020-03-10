const express = require('express');
const router = express.Router();
const Weight = require('../../models/Weight');

router.get('/', (req, res) => {
  console.log('GET weight')
  Weight.find()
    .sort({ date: -1 })
    .then(weights => res.json(weights));
});

router.post('/', (req, res) => {
  console.log('POST weight');
  const newWeight = new Weight({
    user: req.body.user,
    weight: req.body.weight,
    dateRecorded: req.body.dateRecorded
  });
  newWeight.save().then(weight => res.json(weight));
});

router.delete('/', (req, res) => {
  console.log('DELETE weight');
  Weight.findByIdAndDelete(req.body.id)
  then(() => res.status(200).json({status: "success"}));
});

module.exports = router;