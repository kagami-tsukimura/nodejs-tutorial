const ONE_SECOND = 1000;
const LOOP_COUNT = 3;
const CALL_MESSAGE = 'Hello World!';

const OUTPUT_TXT_PATH = './outputs/output.txt';
const OUTPUT_JSON_PATH = './outputs/output.json';

const person = {
  name: 'Kagami',
  age: 28,
};

const args = {
  read: 'read',
  write: 'write',
  readJson: 'readJson',
  writeJson: 'writeJson',
};

module.exports = {
  ONE_SECOND,
  LOOP_COUNT,
  CALL_MESSAGE,
  OUTPUT_TXT_PATH,
  OUTPUT_JSON_PATH,
  person,
  args,
};
