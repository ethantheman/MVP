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
  res.send('index.js');
});

app.post('/', (req, res) => {
  console.log('POST TO HOME');
  console.log('req: ', req.body);
  Card.remove({"_id": req.body._id}, (err, result) => {
    if ( err ) {
      console.error(err);
    } else {
      console.log('successfully deleted document.')
    }
    res.send(result);
  });
});

app.post('/cards', (req, res) => {
  console.log('request: ', req.body);
  let c = new Card({question: req.body.question, answer: req.body.answer});
  c.save((err, result) => {
    if ( err ) {
      console.error('database error: ', err);
    } else {
      console.log('card was saved!');
    }
  });
  res.status(201).send(JSON.stringify(c));
});

app.get('/cards', (req, res) => {
  Card.find((err, result) => {
    res.status(200).end(JSON.stringify(result));
  });
});
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Flashify listening at http://%s:%s', host, port);
});

