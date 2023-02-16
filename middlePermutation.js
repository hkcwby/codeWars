// You are given a string s. Every letter in s appears once.

// Consider all strings formed by rearranging the letters in s.
// After ordering these strings in dictionary order, return the middle term.
// (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

function middlePermutation(s) {
  const store = [];
  let counter = 0;
  const searchNum = s
    .split("")
    .map((item, index) => index + 1)
    .reduce((a, b) => a * b);
  // console.log(searchNum) / 2;

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
  //console.log(store);
  //console.log(store.map((item) => item.join("")));
  const sorted = store.map((item) => item.join("")).sort();
  // console.log(sorted);
  return sorted.length % 2
    ? sorted[(sorted.length + 1) / 2 - 1]
    : sorted[sorted.length / 2 - 1];
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
