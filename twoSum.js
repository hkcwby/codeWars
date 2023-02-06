function twoSum(numbers, target) {
  //create a list of the residual values needed for each number
  const residual = numbers.map((value) => target - value);
  //cycle through each number in turn searching for appropriate matches
  for (let i = 0; i < numbers.length; i++) {
    //the numbers to check should not include the current value or previously reviewed values in the array so we use the sliced array
    const check = numbers.slice(i + 1);
    //seek a residual match from the sliced array
    const matchIndex = check.indexOf(residual[i]);
    if (matchIndex >= 0) {
      //return the current value plus the matched value from slice adjusting by i+1 to match up to the original array positioning
      console.log(i, matchIndex + i + 1);
      return [i, matchIndex + i + 1];
    }
  }
}

twoSum([1, 2, 3], 4);
twoSum([1234, 5678, 9012], 14690);
twoSum([2, 2, 3], 4);
