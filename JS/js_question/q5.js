const squareNumbers = (arr) => arr.map((num) => num * num);

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);

const getNames = (arr) => arr.map((item) => item.name);

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
