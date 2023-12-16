const {
  ONE_SECOND,
  LOOP_COUNT,
  CALL_MESSAGE,
} = require('./modules/variableDefine');
const { callLog } = require('./modules/functionDefine');

const loopCallLog = (count, message) => {
  let i = 0;

  const intervalId = setInterval(() => {
    callLog(`${message}-${i + 1}`);
    i++;

    if (i === count) {
      clearInterval(intervalId);
    }
  }, ONE_SECOND);
};

loopCallLog(LOOP_COUNT, CALL_MESSAGE);
