const readline = require('readline');

function weirdAlgorithm(n) {
  console.log(n);
  if (n === 1) return n;
  if (n % 2 === 0) return weirdAlgorithm(n / 2);
  weirdAlgorithm(n * 3 + 1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (n) => {
  weirdAlgorithm(Number(n));
  rl.close();
});
