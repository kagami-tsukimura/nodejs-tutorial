const {
  OUTPUT_TXT_PATH,
  CALL_MESSAGE,
  person,
} = require('./modules/variableDefine');
const { readFile, writeFile, callError } = require('./modules/functionDefine');

// コマンドライン引数
const request = process.argv[2];

request === 'read'
  ? readFile(OUTPUT_TXT_PATH)
  : request === 'write'
  ? writeFile(OUTPUT_TXT_PATH, CALL_MESSAGE)
  : callError('Specify [read] or [write] for the command line argument.');
