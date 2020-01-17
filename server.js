const bodyParser = require('body-parser');
const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');
const weights = require('./routes/api/weight');

// Middleware
const app = express();
app.use(bodyParser.json());
app.use('/api/weights', weights);
app.use('/api/exercise', exercise);

const port = process.env.port || 5000;

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(chalk.magenta(`Connected to MongoDB`)))
  .catch(error => console.log(chalk.red(`Error connecting to MongoDB: ${error}`)));

app.listen(port, () => {
  console.log(`Server alive and listening on port: ${chalk.blue(port)}`);
});