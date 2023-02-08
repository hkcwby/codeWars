// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString(strng) {
  // return incrementedString
  const position = strng.search(/(\d\d*)$/);
  if (position == -1) return strng.concat("1");
  else {
    let original = strng.slice(position);
    let num = String(Number(original) + 1);
    let end =
      original.length > num.length ? num.padStart(original.length, "0") : num;
    console.log("this is end", end);

    return strng.slice(0, position).concat(end);
  }
}

console.log(incrementString("foo"));

console.log(incrementString("foobar23"));

console.log(incrementString("foo0042"));

console.log(incrementString("foo9"));

console.log(incrementString("foo099"));
