// Express Server
const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();

const OUTPUT_JSON_PATH = './json/about.json';

const h1Send = (message) => {
  return `<h1>${message}</h1>`;
};

const readJson = (outputJsonPath) => {
  return fs
    .readFile(outputJsonPath)
    .then((jsonMessage) => JSON.parse(jsonMessage))
    .catch((error) => {
      console.error(error);
      return 'Json Not Found...';
    });
};

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (_, res) => {
//   res.send(h1Send('Top Page!'));
// });

app.post('/v1/quiz', (req, res) => {
  const correctAnswer = 'flipper';
  const answer = req.body.answer && req.body.answer.toLowerCase();
  answer === correctAnswer ? res.send('Correct!') : res.send('Incorrect.');
});

app.get('/v1/about', (_, res) => {
  readJson(OUTPUT_JSON_PATH)
    .then((jsonMessage) => {
      res.send(jsonMessage);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(3000, () => {
  console.log('Express Running...');
});
