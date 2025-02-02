const readline = require('readline');

function castInputStringToArray(arrayString) {
  return arrayString.split(' ').map((e) => parseInt(e));
}

function missingNumber(n, array) {
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i <= n; i++) {
    const missing = i + 1;
    if (missing !== sortedArray[i]) {
      console.log(missing);
      return;
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (n) => {
  rl.question('', (arrayString) => {
    const array = castInputStringToArray(arrayString);
    missingNumber(Number(n), array);
    rl.close();
  });
});
