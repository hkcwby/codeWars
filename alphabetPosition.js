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

alphabetPosition("aBz");
