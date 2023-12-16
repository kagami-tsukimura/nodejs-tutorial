const {
  ONE_SECOND,
  LOOP_COUNT,
  CALL_MESSAGE,
  callLog,
} = require('./modules/define');

const loopCallLog = (count, message) => {
  Array(count)
    .fill()
    .forEach((_, i) => callLog(`${message}-${i + 1}`));
};

setTimeout(function () {
  loopCallLog(LOOP_COUNT, CALL_MESSAGE);
}, ONE_SECOND);
