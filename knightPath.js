// Given two different positions on a chess board, find the least number of moves it would
// take a knight to get from one to the other. The positions will be passed as two arguments
// in algebraic notation. For example, knight("a3", "b5") should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

function knight(start, finish) {
  const positions = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const startColumn = positions.indexOf(start[0]) + 1;
  const startRow = Number(start[1]);
  const finColumn = positions.indexOf(finish[0]) + 1;
  const finRow = Number(finish[1]);
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

  function helper(row, col, targetRow, targetCol, step, visits) {
    let localVisits = [...visits];
    console.log(row, col, targetRow, targetCol, step);
    if (step > 6) return;
    if (visits.includes(String(row) + String(col))) return;
    if (row > 8 || row < 1 || col > 8 || col < 1) return;

    console.log(row, col, targetRow, targetCol, step);
    localVisits.push(String(row) + String(col));
    console.log(visits);
    console.log(output);
    console.log(row == targetRow, col == targetCol);
    if (row == targetRow && col == targetCol) return step;
    else {
      const nextStep = step + 1;
      moves.forEach((set) =>
        helper(
          row + set[0],
          col + set[1],
          targetRow,
          targetCol,
          nextStep,
          localVisits
        )
      );
    }
  }

  return helper(startRow, startColumn, finRow, finColumn, 0, []);
  //return Math.min(...output);
  //return output;
}

console.log(knight("a8", "b5"));

//a solution that is too time intensive
// function knight(start, finish) {
//   console.log(start,finish);
//   const positions = ["a", "b", "c", "d", "e", "f", "g", "h"];
//   const startColumn = positions.indexOf(start[0]) + 1;
//   const startRow = Number(start[1]);
//   const finColumn = positions.indexOf(finish[0]) + 1;
//   const finRow = Number(finish[1]);
//   const moves = [
//     [2, -1],
//     [2, 1],
//     [1, 2],
//     [-1, 2],
//     [-2, 1],
//     [-2, -1],
//     [-1, -2],
//     [1, -2],
//   ];
//   const output = [];
//   const visited = [];

//   function helper(row, col, targetRow, targetCol, step) {

//     if (step > 6) return;
//     if (row > 8 || row < 1 || col > 8 || col < 1) {

//     } else {

//       if (row == targetRow && col == targetCol) output.push(step);
//       else {
//         const nextStep = step + 1;
//         moves.forEach((set) =>
//           helper(row + set[0], col + set[1], targetRow, targetCol, nextStep)
//         );
//       }
//     }
//   }

//   helper(startRow, startColumn, finRow, finColumn, 0);
//   return Math.min(...output);
// }
