// Implement a function that receives two IPv4 addresses, and returns the number
// of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last
// address will always be greater than the first one.

// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input C  => return  246

function ipsBetween(start, end) {
  const e = end.split(".");
  const s = start.split(".");
  return e
    .map(
      (item, index) => (item - s[index]) * Math.pow(256, e.length - index - 1)
    )
    .reduce((a, b) => a + b, 0);
}

//refactored for a single line return statement
function refactoredIpsBetween(start, end) {
  return end
    .split(".")
    .map(
      (item, index) =>
        (item - start.split(".")[index]) *
        Math.pow(256, end.split(".").length - index - 1)
    )
    .reduce((a, b) => a + b, 0);
}

console.log(refactoredIpsBetween("10.0.0.255", "10.1.0.0"));
