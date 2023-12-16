const fs = require('fs');
const { OUTPUT_TXT_PATH, CALL_MESSAGE, callLog } = require('./modules/define');

fs.writeFile(OUTPUT_TXT_PATH, CALL_MESSAGE, () => {
  callLog('Write Done!');
});

fs.readFile(OUTPUT_TXT_PATH, (_, data) => {
  callLog(data);
  callLog('Read Done!');
});
