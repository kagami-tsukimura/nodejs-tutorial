const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('Top Page!');
});

app.get('/about', (_, res) => {
  res.send('About Page!');
});

app.listen(3000, () => {
  console.log('Express Running...');
});
