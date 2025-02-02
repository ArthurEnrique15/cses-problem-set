const readline = require('readline');

function getLongestRepetition(dna) {
  let longestRepetition = 1;
  let currentRepetition = 1;

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] !== dna[i + 1]) {
      if (currentRepetition > longestRepetition) {
        longestRepetition = currentRepetition;
      }

      currentRepetition = 1;
      continue;
    }

    currentRepetition++;
  }

  console.log(longestRepetition);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (dna) => {
  getLongestRepetition(dna);
  rl.close();
});
