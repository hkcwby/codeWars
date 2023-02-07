// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  //force all the text to lower case
  const lowerText = text.toLowerCase();
  //creating an alphabet string that can then be indexed for positional value
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //create an array to store positional data
  let output = [];
  //traverse the text string
  for (let i = 0; i < text.length; i++) {
    //ignore all values not in the alphabet which are returned as -1 from indexOf and store in the output array
    if (alphabet.indexOf(lowerText[i]) >= 0)
      output.push(alphabet.indexOf(lowerText[i]) + 1);
  }
  //convert the output array to string and replace the comma seperation with blank space
  text = output.toString().replaceAll(",", " ");
  return text;
}

//an alternative refactored one line solution
function refactoredAlphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    text
      //converst the string to lowercase
      .toLowerCase()
      // use regex to remove everything that is not a-z lowercase
      .replace(/[^a-z]/g, "")
      //use split to turn the text into an array so that we can use higher order function like map
      .split("")
      //map remain values to a new array of the index plus one to reflect alphabet positio
      .map((x) => alphabet.indexOf(x) + 1)
      // convert to a string joined by spaces
      .join(" ")
  );
}

console.log(refactoredAlphabetPosition("aBc D"));
