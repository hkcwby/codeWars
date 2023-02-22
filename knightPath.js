// Given two different positions on a chess board, find the least number of moves it would
// take a knight to get from one to the other. The positions will be passed as two arguments
// in algebraic notation. For example, knight("a3", "b5") should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

//a solution that is too time intensive
function knight(start, finish) {
  //breaking down the input data into a numeric set of coordinates
  const positions = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const startColumn = positions.indexOf(start[0]) + 1;
  const startRow = Number(start[1]);
  const finColumn = positions.indexOf(finish[0]) + 1;
  const finRow = Number(finish[1]);
  //all possible movement vectors for a single space
  const moves = [
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
  ];
  const output = [];

  //a helper function that enables brute forcing
  function helper(row, col, targetRow, targetCol, step) {
    //no distance should ever exceed 6 moves
    if (step > 6) return;
    //moves that land outside the chess board are invalid
    if (row > 8 || row < 1 || col > 8 || col < 1) {
      return;
    } else {
      //if the new position matches the target store the number of moves in output
      if (row == targetRow && col == targetCol) output.push(step);
      //otherwise call the helper iteratively for each move in the move vector recursively
      else {
        const nextStep = step + 1;
        moves.forEach((set) =>
          helper(row + set[0], col + set[1], targetRow, targetCol, nextStep)
        );
      }
    }
  }
  //call the initial helper function using the start values
  helper(startRow, startColumn, finRow, finColumn, 0);
  //we have various solutions but we want to return the minimum moves
  return Math.min(...output);
}
