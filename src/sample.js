const callLog = (message) => {
  console.log(message);
};

Array(3)
  .fill()
  .forEach((_, i) => callLog(`Hello World ${i + 1}`));
