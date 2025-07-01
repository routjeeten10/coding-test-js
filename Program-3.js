// Program-3.js
function customSeries(a) {
  const result = [];
  let num = 1;
  while (result.length < a) {
    result.push(num);
    num += 2;
  }
  if (a % 2 === 0) result.pop();
  return result;
}

console.log("Series (4):", customSeries(4));
console.log("Series (5):", customSeries(5));