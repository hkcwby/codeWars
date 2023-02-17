// Write a function that takes a positive integer and returns the next smaller
// positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

function nextSmaller(n) {
  const process = String(n).split("").reverse();
  console.log(process);

  const check = process
    .map((item, index) => process[index] < process[index + 1])
    .indexOf(true);
  console.log(check);
  if (check < 0) return -1;

  let modify = process.splice(0, check + 2).sort();
  console.log(modify);

  [modify[check], modify[check + 1]] = [modify[check + 1], modify[check]];
  console.log(modify);

  return Number(modify.concat(process).reverse().join(""));
}

console.log(nextSmaller(21));
console.log(nextSmaller(907));
console.log(nextSmaller(531));
// nextSmaller(8454231);
