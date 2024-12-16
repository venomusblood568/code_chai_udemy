function sumOfN(n) {
  let natural_number = (n * (n + 1)) / 2;
  return natural_number;
}

function printMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

function countVowels(str) {
  let count = 0;
  const vowels = "AEIOUaeiou";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
