// Write a function that takes a positive integer and returns the next smaller
// positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

function nextSmaller(n) {
  const process = String(n).split("").reverse();
  const check = process
    .map((item, index) => process[index] < process[index + 1])
    .indexOf(true);

  if (check < 0) return -1;

  const modify = process.splice(0, check + 2);
  const turningPoint = modify[modify.length - 1];

  const best = modify.indexOf(
    String(
      modify
        .map((value) => value - turningPoint)
        .filter((value) => value < 0)
        .reduce((a, b) => Math.max(a, b), -10) + Number(turningPoint)
    )
  );
  console.log(modify);
  console.log(best);

  const lead = modify.splice(best, 1);

  const output = process
    .reverse()
    .concat(lead, modify.sort().reverse())
    .join("");

  return Number(output[0]) ? Number(output) : -1;
}

// console.log(nextSmaller(21));
//console.log(nextSmaller(907));
// console.log(nextSmaller(531));
// console.log(nextSmaller(414));
console.log(nextSmaller(1207));
// nextSmaller(8454231);
