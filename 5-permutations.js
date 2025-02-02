const readline = require('readline');

function permutations(n) {
  if (n === 2 || n === 3) {
    console.log('NO SOLUTION');
    return;
  }

  let array = [];

  for (let i = 2; i <= n; i += 2) {
    array.push(i);
  }

  for (let i = 1; i <= n; i += 2) {
    array.push(i);
  }

  let output = '';

  for (const element of array) {
    output += `${element} `;
  }

  console.log(output);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (n) => {
  permutations(Number(n));
  rl.close();
});
