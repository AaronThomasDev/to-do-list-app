const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log('listening on 3000');
});

// read
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// create
app.post('/todo', (response, request) => {
  console.log('hellooo');
});

// update
//test
// delete
