const {
  OUTPUT_TXT_PATH,
  OUTPUT_JSON_PATH,
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
  : request === 'readJson'
  ? readFile(OUTPUT_JSON_PATH)
  : request === 'writeJson'
  ? writeFile(OUTPUT_JSON_PATH, JSON.stringify(person))
  : callError('Specify [read] or [write] for the command line argument.');
