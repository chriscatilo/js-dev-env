let express = require('express');
let path = require('path');
let open = require('open');

let port = 3000;

let app = express();

app.get('/', (request, response) =>{
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  err ? console.log(err) : open(`http://localhost:${port}`);
});
