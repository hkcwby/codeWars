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

  if (mapped.indexOf(true) < 0) return -1;
  let turnPoint = mapped.indexOf(true) + 2;
  let length = n.toString().length;
  let keep = n.toString().substring(0, length - turnPoint);
  let change = n.toString().substring(length - turnPoint, length);
  //   console.log(length);
  //   console.log(turnPoint);
  //   console.log(length - turnPoint);
  //   console.log(keep);
  //   console.log(change);
  let changeArray = change.split("");
  let best =
    Number(
      changeArray
        .map((value) => value - changeArray[0])
        .filter((value) => value > 0)
        .reduce((a, b) => Math.min(a, b), 10)
    ) + Number(changeArray[0]);
  //   console.log(best);
  //   console.log(changeArray);
  //   console.log(changeArray.indexOf(String(best)));
  const lead = changeArray.splice(changeArray.indexOf(String(best)), 1);
  //   console.log(lead);
  //   console.log(changeArray);
  return Number(keep + lead + changeArray.sort().join(""));

  //   return Number(
  //     keep +
  //       change[1] +
  //       String((change[0] + change.substring(2)).split("").sort().join(""))
  //   );
}

// console.log(nextBigger(513));
//console.log(nextBigger(1234567890));
// console.log(nextBigger(231));
// console.log(nextBigger(9876543210));
// console.log(nextBigger(144));
// console.log(nextBigger(143));
console.log(nextBigger(59884848459853));
// 59884848493558 to equal 59884848483559
