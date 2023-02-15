// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers.
// The input numbers are strings and the function must return a string.
// Example

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

function add(a, b) {
  //first establish which of the two strings is longer and set it to be first
  //split into arrays and then reverse the order for easier processing
  const first =
    a.length >= b.length ? a.split("").reverse() : b.split("").reverse();
  const second =
    a.length >= b.length ? b.split("").reverse() : a.split("").reverse();
  //combine the values from each array
  let combined = first.map(function (num, idx) {
    //if the second array ends up being shorter add 0 values to the remaing steps
    return Number(num) + Number(second[idx] || 0);
  });
  //go through each value of the combined array shifting a deca value to the next array index
  //keeping only the modulo of 10 in the original array index
  combined.forEach((item, index) => {
    if (Math.floor(item / 10)) {
      //if we are at the end of the array and there may be a need to create a new index entry
      index < combined.length - 1
        ? (combined[index + 1] += Math.floor(item / 10))
        : combined.push(1);
      combined[index] = item % 10;
    }
  });
  //correct the order of the array and rejoin it converting it back to a string
  return combined.reverse().join("");
}

console.log(add("123", "321"));
console.log(add("11", "99"));

console.log(add("1372", "69"));
