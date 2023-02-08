// In this simple Kata your task is to create a function that turns a string into
// a Mexican Wave. You will be passed a string and you must return that string in
// an array where an uppercase letter is a person standing up.

// rules

// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  return (
    str
      //split each value of the string into an array so that we can use higher level functions
      .split("")
      //map each letter to uppercase with the relevant lower case values str using index to coordinate
      .map((letter, index) =>
        str
          .substring(0, index)
          .concat(letter.toUpperCase(), str.substring(index + 1, str.length))
      )
      //apply a filter out iterations without capitals due to spaces
      .filter((item) => item.search(/[A-Z]/) != -1)
  );
}
// a refactored version using ellipses to create to deconstruct to array 
  return [...str]
    .map(
      (letter, index) =>
        str.slice(0, index) + letter.toUpperCase() + str.slice(index + 1)
    )
    //filtering so that the items published do not match the original string which is lowercase
    .filter((item) => item != str);
}
console.log(wave("hello world"));

console.log(refactoredWave("hello world"));
