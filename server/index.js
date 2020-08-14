const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.use('/item/:user', express.static(path.join(__dirname, './../public')));

app.listen(port, () => {
  console.log('Listening in on port', port);
});
