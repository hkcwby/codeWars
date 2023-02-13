// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same
// character, but the function should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("")
// or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  console.log(s.replace(/\?/g, ""));

  return Math.min(
    ...s
      .replace(/\?/g, "")
      .toLowerCase()
      .split("")
      .map((item, index) =>
        s
          .replace(/\?/g, "")
          .slice(0, index)
          .concat(
            s
              .replace(/\?/g, "")
              .toLowerCase()
              .slice(index + 1)
          )
          .search(item)
      )
  ) >= 0
    ? ""
    : s.replace(/\?/g, "")[
        s
          .replace(/\?/g, "")
          .toLowerCase()
          .split("")
          .map((item, index) =>
            s
              .replace(/\?/g, "")
              .slice(0, index)
              .concat(
                s
                  .replace(/\?/g, "")
                  .toLowerCase()
                  .slice(index + 1)
              )
              .search(item)
          )
          .indexOf(-1)
      ];
}

console.log(firstNonRepeatingLetter("sTreSS ﬁ?"));

// a solution using lastIndexOf to check each value to see if it is the only instance

function refactorFirstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}

//a shortened version of the above

function shorterRefactorFirstNonRepeatingLetter(s) {
  return (
    s[
      [...s.toLowerCase()].findIndex(
        (c, _, s) => s.indexOf(c) === s.lastIndexOf(c)
      )
    ] || ""
  );
}
//a regex style solution using RegExp

function regexFirstNonRepeatingLetter(str) {
  return (
    str
      .split("")
      .find((e) => str.match(new RegExp(`${e}`, "gi")).length === 1) || ""
  );
}
