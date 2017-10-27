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

app.listen(port, (err) => {
  err ? console.log(err) : open(`http://localhost:${port}`);
});
