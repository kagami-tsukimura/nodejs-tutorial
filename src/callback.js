const { ONE_SECOND, callLog } = require('./modules/define');

const loopCallLog = (count, message) => {
  Array(count)
    .fill()
    .forEach((_, i) => callLog(`${message}-${i + 1}`));
};

setTimeout(function () {
  loopCallLog(3, 'Hello World');
}, ONE_SECOND);
