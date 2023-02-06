function alphabetPosition(text) {
  const lowerText = text.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = [];
  for (let i = 0; i < text.length; i++) {
    console.log(lowerText[i]);
    if (alphabet.indexOf(lowerText[i]) >= 0)
      output.push(alphabet.indexOf(lowerText[i]) + 1);
  }
  text = output.toString().replaceAll(",", " ");
  console.log(output);
  console.log(text);
  return text;
}

alphabetPosition("aBz");
