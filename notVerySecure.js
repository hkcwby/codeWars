// In this example you have to validate if a user input string is alphanumeric.
// The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

//     At least one character ("" is not valid)
//     Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//     No whitespaces / underscore

function alphanumeric(string) {
  //check it is not an empty string and then search for non alphanumeric chars
  return string.length == 0 ? false : string.search(/[^a-zA-Z0-9]/) == -1;
}

alphanumeric("Mazinkaiser");
alphanumeric("hello world_");
alphanumeric("PassW0rd");
alphanumeric("     ");

//refactored using RegExpObject.test(string)

function refactoredAlphanumeric(string) {
  return /^[a-zA-Z0-9]+$/.test(string);
}
