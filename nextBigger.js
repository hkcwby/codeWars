// Create a function that takes a positive integer and returns the next
// bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

//brute force method too weak on time complexity
// function nextBigger(n) {
//     //first check if there is a solution and if not return -1
//   if (n.toString().split("").sort().reverse().join("") == n) return -1;
//   var check = false;
//   var count = n + 1;

//   while (check == false) {
//     if (
//       n.toString().split("").sort().join("") ==
//       count.toString().split("").sort().join("")
//     )
//       return count;
//     count++;
//   }

// }

// function nextBigger(n) {
//   if (n.toString().split("").sort().reverse().join("") == n) return -1;

//   const values = n.toString().split("").reverse();

//   const mapped = values.map((value, index) => value > values[index + 1]);

//   if (mapped.indexOf(true) == 0)
//     [values[0], values[1]] = [values[1], values[0]];
//   else if (mapped.indexOf(true) > 0)
//     [
//       values[mapped.indexOf(true) + 1],
//       values[mapped.indexOf(true)],
//       values[mapped.indexOf(true) - 1],
//     ] = [
//       values[mapped.indexOf(true)],
//       values[mapped.indexOf(true) - 1],
//       values[mapped.indexOf(true) + 1],
//     ];

//   return values.reverse().join("");
// }

function nextBigger(n) {
  const values = n.toString().split("").reverse();

  const mapped = values.map((value, index) => value > values[index + 1]);
  //check if there is actually a solution and if not return -1
  if (mapped.indexOf(true) < 0) return -1;
  //if there is a solution find the point at which a change can be made
  let turnPoint = mapped.indexOf(true) + 2;
  //need to manipulate as a string in order to perform the operation and need its length
  let length = n.toString().length;
  //the hopefully larger section of the number we do not need to modify after the turningPoint
  let keep = n.toString().substring(0, length - turnPoint);
  //digits to process before the turningPoint
  let change = n.toString().substring(length - turnPoint, length);
  let changeArray = change.split("");
  //determine the best digit to lead, which is the smallest digit larger than the current leading value
  let best =
    Number(
      changeArray
        .map((value) => value - changeArray[0])
        .filter((value) => value > 0)
        .reduce((a, b) => Math.min(a, b), 10)
    ) + Number(changeArray[0]);
  //splice the best leading digit from the array
  const lead = changeArray.splice(changeArray.indexOf(String(best)), 1);
  //return the kept values appending the lead value followed by the remainging values sorted to produce the lowest possible base ten number
  return Number(keep + lead + changeArray.sort().join(""));
}

// console.log(nextBigger(513));
//console.log(nextBigger(1234567890));
// console.log(nextBigger(231));
// console.log(nextBigger(9876543210));
// console.log(nextBigger(144));
// console.log(nextBigger(143));
//console.log(nextBigger(59884848459853));
// 59884848493558 to equal 59884848483559
