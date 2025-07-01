// Program-2.js
function generateOddSeries(a) {
  const result = [];
  let num = 1;
  for (let i = 0; i < a; i++) {
    result.push(num);
    num += 2;
  }
  return result;
}

console.log("Series:", generateOddSeries(4));