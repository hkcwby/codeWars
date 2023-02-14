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

function sumPairs(ints, s) {
  function helper(range, t, stored) {
    // console.log("new helper called");
    if (range.length <= 1) return stored;
    let i = 0;
    for (value of range) {
      console.log("value", value);
      console.log("t", t);
      console.log("stored", stored);
      console.log("range slice", range.slice(i + 1));
      // console.log(
      //   "check",
      //   range.slice(i + 1).find((item) => item == t - value)
      // );
      if (!isNaN(range.slice(i + 1).find((item) => item == t - value))) {
        // console.log(true);
        // console.log(
        //   "this is range index",
        //   range.slice(i + 1, i + 1 + range.slice(i + 1).indexOf(t - value))
        // );
        // console.log("this is stored", [value, t - value]);
        return helper(
          range.slice(i + 1, i + 1 + range.slice(i + 1).indexOf(t - value)),
          t,
          [value, t - value]
        );
      }
      i++;
    }
    return stored;
  }
  return helper(ints, s, undefined);
}
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

// console.log(sumPairs([0, 2, 0], 0));
