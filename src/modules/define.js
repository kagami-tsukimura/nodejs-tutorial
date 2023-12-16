const ONE_SECOND = 1000;
const LOOP_COUNT = 3;
const CALL_MESSAGE = 'Hello World!';

const OUTPUT_TXT_PATH = './outputs/output.txt';

const callLog = (message) => {
  console.log(`Message: ${message}`);
};

module.exports = {
  ONE_SECOND,
  LOOP_COUNT,
  CALL_MESSAGE,
  OUTPUT_TXT_PATH,
  callLog,
};
