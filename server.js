const bodyParser = require('body-parser');
const chalk = require('chalk');
const express = require('express');

// Middleware
const app = express();
app.use(bodyParser.json());

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server alive and listening on port: ${chalk.blue(port)}`);
});