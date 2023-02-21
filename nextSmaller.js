// Write a function that takes a positive integer and returns the next smaller
// positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017

function nextSmaller(n) {
  //stringify the number for ease of spliting and reversing
  const process = String(n).split("").reverse();
  //we want to check through the values in reverse order to find the first opportunity for a modifcation
  const check = process
    .map((item, index) => process[index] < process[index + 1])
    .indexOf(true);
  //if the check yields no possible swappable values we return -1
  if (check < 0) return -1;
  //splice the relevant range we want to modify only keep the remainder in the original array to reattach later
  const modify = process.splice(0, check + 2);
  //the turningPoint is the value the that must be shifted
  const turningPoint = modify[modify.length - 1];
  //search for the closest value that is less than the turning point value
  const best = modify.indexOf(
    String(
      modify
        .map((value) => value - turningPoint)
        .filter((value) => value < 0)
        .reduce((a, b) => Math.max(a, b), -10) + Number(turningPoint)
    )
  );

  //take the best candidate value
  const lead = modify.splice(best, 1);
  //reconstruct our new lower number from the components sorting the remaing values high to low
  const output = process
    .reverse()
    .concat(lead, modify.sort().reverse())
    .join("");
  //check the new leading number is not 0 because otherwise we will not be returning all digits
  return Number(output[0]) ? Number(output) : -1;
}

// console.log(nextSmaller(21));
//console.log(nextSmaller(907));
// console.log(nextSmaller(531));
// console.log(nextSmaller(414));
//console.log(nextSmaller(1207));
// nextSmaller(8454231);
