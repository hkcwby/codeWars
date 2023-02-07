// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// function pigIt(str) {
//   return str
//     .split(" ")
//     .map((item) => {
//       let arr = item.split("");
//       if (item[item.length - 1].search(/[a-z]/g)) {
//         console.log(item[0].search(/[.,\/#!$%\?^&\*;:{}=\-_`~()]/g));
//         if (
//           item.length == 1 &&
//           item[0].search(/[.,\/#!$%\?^&\*;:{}=\-_`~()]/g) == 0
//         )
//           return item;
//         return arr
//           .splice(1, arr.length - 2)
//           .join("")
//           .concat(arr.splice(0, 1)[0], "ay", arr[0] ? arr[0] : "");
//       } else {
//         return arr
//           .splice(1, arr.length - 1)
//           .join("")
//           .concat(arr[0], "ay");
//       }
//     })
//     .join(" ");
// }

function refactoredPigIt(str) {
  return str.replace(/\w+/g, (item) => {
    return item.slice(1) + item[0] + "ay";
  });
}

console.log(pigIt("Pig latin is cool."));
console.log(pigIt("Hello World !"));

console.log(pigIt("0 tempora o mores !"));
