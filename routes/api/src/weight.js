const express = require('express');
const router = express.Router();
const Weight = require('../../../models/Weight');

router.get('/', (req, res) => {
  Weight.find()
    .sort({ date: -1 })
    .then(weights => res.json(weights));
});

module.exports = router;