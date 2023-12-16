const fs = require('fs');
const { OUTPUT_TXT_PATH, CALL_MESSAGE, callLog } = require('./modules/define');

fs.writeFile(OUTPUT_TXT_PATH, CALL_MESSAGE, function () {
  callLog('Write Done!');
});
