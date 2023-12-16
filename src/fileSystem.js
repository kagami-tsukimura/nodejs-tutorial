const fs = require('fs');
const { OUTPUT_TXT_PATH, CALL_MESSAGE, callLog } = require('./modules/define');

// ファイル書き込み
fs.writeFile(OUTPUT_TXT_PATH, CALL_MESSAGE, () => {
  callLog('Write Done!');
});

// writeFileを読み込み
fs.readFile(OUTPUT_TXT_PATH, (_, data) => {
  callLog(data);
  callLog('Read Done!');
});
