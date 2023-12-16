const ONE_SECOND = 1000;

const callLog = (message) => {
  console.log(message);
};

const loopCallLog = (count, message) => {
  let i = 0;

  const intervalId = setInterval(() => {
    callLog(`${message}-${i + 1}`);
    i++;

    if (i === count) {
      clearInterval(intervalId);
    }
  }, ONE_SECOND);
};

loopCallLog(3, 'Hello World');
