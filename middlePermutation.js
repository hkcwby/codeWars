// You are given a string s. Every letter in s appears once.

// Consider all strings formed by rearranging the letters in s.
// After ordering these strings in dictionary order, return the middle term.
// (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

function bruteForceMiddlePermutation(s) {
  const store = [];
  let counter = 0;
  const searchNum = s
    .split("")
    .map((item, index) => index + 1)
    .reduce((a, b) => a * b);
  function helper(current, remainder) {
    counter += 1;
    if (remainder.length == 0) {
      store.push(current);
      return;
    } else {
      remainder.forEach((item, index) => {
        let clone = [...remainder];
        helper([...current, clone.splice(index, 1)], clone);
      });
    }
  }
  helper("", s.split(""));
  const sorted = store.map((item) => item.join("")).sort();
  return sorted.length % 2
    ? sorted[(sorted.length + 1) / 2 - 1]
    : sorted[sorted.length / 2 - 1];
}

// ab
// bac
// bdca
// cbeda
// cfedba
// dcgfeba
// dhgfecba
// edihgfcba
// ejihgfdcba
//found a solution following a pattern

//halfway value is reverse of the sorted values with either the mid value(s) moved to the front
function middlePermutation(s) {
  let data = s.split("").sort().reverse();

  if (data.length % 2) {
    return (
      data.splice(data.length - data.length / 2, 2).join("") + data.join("")
    );
  } else {
    return (
      data.splice(data.length - data.length / 2, 1).join("") + data.join("")
    );
  }
}

console.log(middlePermutation("ab"));
console.log(middlePermutation("abc"));
console.log(middlePermutation("abcd"));
console.log(middlePermutation("abcde"));
console.log(middlePermutation("abcdef"));
console.log(middlePermutation("abcdefg"));
console.log(middlePermutation("abcdefgh"));
console.log(middlePermutation("abcdefghi"));
console.log(middlePermutation("abcdefghij"));
