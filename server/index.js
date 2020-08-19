const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.use('/item/:user', express.static(path.join(__dirname, './../public')));

app.use('*/reviews/api', createProxyMiddleware({
  target: 'http://localhost:2625',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log('Listening in on port', port);
});
