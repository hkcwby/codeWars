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

  const modify = process.splice(0, check + 2);
  const turningPoint = modify[modify.length - 1];
  // console.log(turningPoint);
  const best = modify.indexOf(
    String(
      modify
        .map((value) => value - turningPoint)
        .filter((value) => value < 0)
        .reduce((a, b) => Math.max(a, b), -10) + Number(turningPoint)
    )
  );
  // console.log(modify);
  // console.log(best);
  console.log(modify.map((value) => value - turningPoint));
  const lead = modify.splice(best, 1);
  // console.log(lead);
  // console.log(modify);
  // console.log(process);
  const output = process.reverse().concat(lead, modify.reverse()).join("");

  return Number(output[0]) ? Number(output) : -1;

  // [modify[check], modify[check + 1]] = [modify[check + 1], modify[check]];
  // console.log(modify);

  //return Number(modify.concat(process).reverse().join(""));
}

// console.log(nextSmaller(21));
//console.log(nextSmaller(907));
// console.log(nextSmaller(531));
// console.log(nextSmaller(414));
console.log(nextSmaller(1027));
// nextSmaller(8454231);
