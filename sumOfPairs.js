// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// function sumPairs(ints, s) {
//   const output = ints
//     .map((int, index) => [
//       int,
//       ints.slice(index + 1).find((value) => value == s - int),
//       ints
//         .slice(index + 1)
//         .indexOf(ints.slice(index + 1).find((value) => value == s - int)) +
//         index +
//         1,
//     ])
//     .filter((value) => !isNaN(value[1]))
//     .reduce((a, b) => (a[2] <= b[2] ? a : b), [0, 0, ints.length]);
//   return output[2] < ints.length ? output.slice(0, 2) : undefined;
// }

function recursionSumPairs(ints, s) {
  function helper(range, t, stored) {
    //if the latest chain is less than 2 comparable values return the best value stored so far
    if (range.length <= 1) return stored;
    let i = 0;

    for (value of range) {
      //for each value in the range check the remaining part of the array for a suitable value
      if (!isNaN(range.slice(i + 1).find((item) => item == t - value))) {
        //if suitable value is found return the range between the value and the suitable match and test in that range
        //also store the value and its matching value as the best value for return so far
        return helper(
          range.slice(i + 1, i + 1 + range.slice(i + 1).indexOf(t - value)),
          t,
          [value, t - value]
        );
      }
      i++;
    }
    //if no better values found in the iteration of the for loop it will return the previous stored value
    return stored;
  }
  //trigger the recursive function with undefined as the initial stored value
  return helper(ints, s, undefined);
}
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

// console.log(sumPairs([0, 2, 0], 0));

//a refactored solution that checks numbers against retrospective list of previous values instead
//looking backwards removes the need for a recursive check step
function refactoredSumPairs(ints, s) {
  let previous = {};
  for (let i = 0; i < ints.length; ++i) {
    if (previous[s - ints[i]]) return [s - ints[i], ints[i]];
    previous[ints[i]] = true;
  }
}
