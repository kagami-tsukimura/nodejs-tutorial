const {
  OUTPUT_TXT_PATH,
  OUTPUT_JSON_PATH,
  CALL_MESSAGE,
  person,
  args,
} = require('./modules/variableDefine');
const { readFile, writeFile, callError } = require('./modules/functionDefine');

// コマンドライン引数
const request = process.argv[2];
const formattedArgs = Object.keys(args)
  .map((arg) => `[${args[arg]}]`)
  .join(', ');

request === args.read
  ? readFile(OUTPUT_TXT_PATH)
  : request === args.write
  ? writeFile(OUTPUT_TXT_PATH, CALL_MESSAGE)
  : request === args.readJson
  ? readFile(OUTPUT_JSON_PATH)
  : request === args.writeJson
  ? writeFile(OUTPUT_JSON_PATH, JSON.stringify(person))
  : callError(
      `Specify one of the following for the command line argument.\n${formattedArgs}`
    );
