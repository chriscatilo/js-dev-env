/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000,
app = express();

// configure webpack bundler
{
  const webpack = require('webpack'),
        bundleConfig = require('../webpack.config.dev').default,
        webpackDevMiddleware = require('webpack-dev-middleware'),
        bundleCompiler = webpack(bundleConfig);

  app.use(webpackDevMiddleware(bundleCompiler, {
    noInfo: false, 
    publicPath: bundleConfig.output.publicPath
  }));
}      

app.get('/', (request, response) =>{
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email': 'bob@gmail.com'},
    {'id': 2, 'firstName': 'Tammy', 'lastName': 'Norton', 'email': 'tnorton@yahoo.com'},
    {'id': 3, 'firstName': 'Tina', 'lastName': 'Lee', 'email': 'lee.tina@hotmail.com'},
  ])
})

app.listen(port, (err) => {
  err ? console.log(err) : open(`http://localhost:${port}`);
});
