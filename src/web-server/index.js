const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('<h1>Top Page!</h1>');
});

app.get('/about', (_, res) => {
  res.send('About Page!');
});

app.listen(3000, () => {
  console.log('Express Running...');
});
