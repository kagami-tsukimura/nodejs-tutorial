const { callLog } = require('./modules/functionDefine');

Array(3)
  .fill()
  .forEach((_, i) => callLog(`Hello World ${i + 1}`));
