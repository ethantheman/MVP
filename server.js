const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const compiler = webpack(webpackConfig);
const db = require('./database/index.js').db;
const Card = require('./database/index.js').Card;
const body_parser = require('body-parser');
app.use(body_parser.json())
 
app.use(express.static(__dirname + '/client/dist'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/', (req, res) => {
  console.log('hello');
  res.send('index.js');
});

app.post('/cards', (req, res) => {
  console.log('post to /cards...');
  console.log('request: ', req.body);
  res.redirect('/');
});
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Flashify listening at http://%s:%s', host, port);
});

