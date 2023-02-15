// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
  return (
    //convert to string then to an array, perform appropriate operation on each value
    //sum values using reduce and then compare to original value
    value
      .toString()
      .split("")
      .map((item) => Math.pow(item, value.toString().length))
      .reduce((a, b) => a + b) == value
  );
}

// console.log(narcissistic(153));
// console.log(narcissistic(7));
// console.log(narcissistic(371));
