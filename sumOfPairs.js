// Given a list of integers and a single sum value, return the first two values
// (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// function sumPairs(ints, s) {
//   const negative = ints.map((int) => s - int);
//   console.log(negative);
//   const check = ints
//     .map((int) => negative.find((value) => value === int))
//     .filter((value) => value != undefined);
//   console.log(check);
//   return check.length > 0 ? [check[0], s - check[0]] : undefined;
// }

function sumPairs(ints, s) {
  const output = ints
    .map((int, index) => [
      int,
      ints.slice(index + 1).find((value) => value == s - int),
      ints
        .slice(index + 1)
        .indexOf(ints.slice(index + 1).find((value) => value == s - int)) +
        index +
        1,
    ])
    .filter((value) => !isNaN(value[1]))
    .reduce((a, b) => (a[2] <= b[2] ? a : b), [0, 0, ints.length]);

  return output[2] < ints.length ? output.slice(0, 2) : undefined;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

console.log(sumPairs([0, 2, 0], 0));
