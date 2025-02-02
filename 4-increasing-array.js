const readline = require('readline');

function castInputStringToArray(arrayString) {
  return arrayString.split(' ').map((e) => parseInt(e));
}

function increasingArray(n, array) {
  let moves = 0;

  for (let i = 1; i < array.length; i++) {
    const movesToFixPosition = array[i - 1] - array[i];

    if (movesToFixPosition > 0) {
      array[i] = array[i - 1];
      moves = moves + movesToFixPosition;
    }
  }

  console.log(moves);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (n) => {
  rl.question('', (arrayString) => {
    const array = castInputStringToArray(arrayString);
    increasingArray(Number(n), array);
    rl.close();
  });
});
