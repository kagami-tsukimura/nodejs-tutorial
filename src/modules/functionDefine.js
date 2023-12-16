const fs = require('fs');
const callLog = (message) => {
  console.log(`Message: ${message}`);
};

// ファイル書き込み
const writeFile = (outputTxtPath, callMessage) => {
  fs.writeFile(outputTxtPath, callMessage, () => {
    callLog('Write Done!');
  });
};

// ファイル読み込み
const readFile = (outputTxtPath) => {
  fs.readFile(outputTxtPath, (_, data) => {
    callLog(data);
    callLog('Read Done!');
  });
};

module.exports = {
  callLog,
  writeFile,
  readFile,
};
