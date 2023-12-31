const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, From Swapnil! This is my app.');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

