// cálculo
// - defina um index, que será o maior valor entre y e x
// - defina um valor, que será o seguinte: index^2 - (index - 1)
// - defina diff, que será a diferença entre x e y (deve ser um valor positivo)
// - agora, para chegar no valor final, a lógica deve ser a seguinte:
// - se index par e y > x -> final = valor + diff
// - se index par e x > y -> final = valor - diff
// - se index impar e y > x -> final = valor - diff
// - se index impar e x > y -> final = valor + diff

// tive que usar bigInts pq os testes tinham valores muito grandes, o node não suportava e os cálculos estavam ficando errados

const readline = require('readline');

function numberSpiral(n, tests) {
  tests.forEach(({ x, y }) => {
    if (x === y) {
      const bigIntIndex = BigInt(x);
      const bigIntIndexMinusOne = BigInt(x - 1);
      const output = bigIntIndex ** 2n - bigIntIndexMinusOne;
      return console.log(String(output));
    }

    const greaterIndex = x > y ? x : y;
    const bigIntGreaterIndex = BigInt(greaterIndex);

    const diagonalValueForIndex = BigInt(
      bigIntGreaterIndex ** 2n - (bigIntGreaterIndex - 1n)
    );
    const valueToOperate = x - y < 0 ? BigInt((x - y) * -1) : BigInt(x - y);

    if (greaterIndex % 2 === 0) {
      if (x > y)
        return console.log(
          String(BigInt(diagonalValueForIndex - valueToOperate))
        );

      return console.log(
        String(BigInt(diagonalValueForIndex + valueToOperate))
      );
    }

    if (x > y)
      return console.log(
        String(BigInt(diagonalValueForIndex + valueToOperate))
      );

    return console.log(String(BigInt(diagonalValueForIndex - valueToOperate)));
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
const testsArray = [];

rl.on('line', (line) => {
  if (n === null) {
    n = parseInt(line, 10);
  } else {
    testsArray.push(line);
    if (testsArray.length === n) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  formattedTests = testsArray.map((e) => {
    const arr = e.split(' ');
    return {
      y: Number(arr[0]),
      x: Number(arr[1]),
    };
  });

  numberSpiral(n, formattedTests);
});
