// Create a function that takes a positive integer and returns the next
// bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// function nextBigger(n) {
//   const values = n.toString().split("").reverse();
//   var con = true;
//   var i = 0;

//   while (con == true) {
//     if (values[i] >= values[i + 1] || 10) {
//       [values[i], values[i + 1]] = [values[i + 1], values[i]];
//       con = false;
//     }
//     i++;
//   }
//   return values.reverse().join("");
// }

//brute force method too weak on time complexity
function nextBigger(n) {
  if (n.toString().split("").sort().reverse().join("") == n) return -1;
  var check = false;
  var count = n + 1;

  while (check == false) {
    if (
      n.toString().split("").sort().join("") ==
      count.toString().split("").sort().join("")
    )
      return count;
    count++;
  }
}
console.log(nextBigger(513));
console.log(nextBigger(1234567890));
console.log(nextBigger(321));
console.log(nextBigger(9876543210));
