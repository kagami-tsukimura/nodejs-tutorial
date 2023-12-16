const ONE_SECOND = require('./modules/define');

const callLog = (message) => {
  console.log(message);
};

const loopCallLog = (count, message) => {
  Array(count)
    .fill()
    .forEach((_, i) => callLog(`${message}-${i + 1}`));
};

setTimeout(function () {
  loopCallLog(3, 'Hello World');
}, ONE_SECOND);
