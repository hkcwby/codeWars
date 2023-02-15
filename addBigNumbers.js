// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers.
// The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

function add(a, b) {
  const first =
    a.length >= b.length ? a.split("").reverse() : b.split("").reverse();
  const second =
    a.length >= b.length ? b.split("").reverse() : a.split("").reverse();

  let combined = first.map(function (num, idx) {
    return Number(num) + Number(second[idx] || 0);
  });
  combined.forEach((item, index) => {
    if (Math.floor(item / 10)) {
      index < combined.length - 1
        ? (combined[index + 1] += Math.floor(item / 10))
        : combined.push(1);
      combined[index] = item % 10;
    }
  });
  return combined.reverse().join("").toString();
}

console.log(add("123", "321"));
console.log(add("11", "99"));

console.log(add("1372", "69"));
