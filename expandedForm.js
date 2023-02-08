// You will be given a number and you will need to
// return it as a string in Expanded Form. For example:

//first attempt using strings and padEnd
function expandedForm(num) {
  return String(num)
    .split("")
    .map((value, index) =>
      String(value).padEnd(String(num).length - index, "0")
    )
    .filter((value) => value > 0)
    .join(" + ");
}
//another version using numbers reverse and then multiplying through
function alternateExpandedForm(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((value, index) => value * Math.pow(10, index))
    .filter((value) => value > 0)
    .reverse()
    .join(" + ");
}

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(alternateExpandedForm(70304));
