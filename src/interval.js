const { ONE_SECOND, callLog } = require('./modules/define');

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

loopCallLog(3, 'Hello World');
