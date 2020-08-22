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
  target: 'http://50.18.135.245',
  changeOrigin: true
}));

app.use('*/sln/api', createProxyMiddleware({
  target: 'http://50.18.3.201',
  changeOrigin: true
}));

app.use('*/photo/api', createProxyMiddleware({
  target: 'http://3.23.171.227',
  changeOrigin: true
}));

app.use('*/sb/api', createProxyMiddleware({
  target: 'http://15.164.155.96',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log('Listening in on port', port);
});
