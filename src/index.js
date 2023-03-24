const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('#### error handler ###');
  console.error(error);
  response.sendStatus(500);
});

app.listen(3300, () => console.log('Server started at http://localhost:3000'));
