// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    let ship = shipPositions[i]
    initialBoard[ship[0]][ship[1]] = "S"
  }
  return initialBoard
}

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    let guess = guesses[i]
    if (mountedBoard[guess[0]][guess[1]] == "S") {
      mountedBoard[guess[0]][guess[1]] = "X"
    }
  }
  return mountedBoard
}

function checkWinCondition(guessedBoard) {
  for (let i = 0; i < guessedBoard.length; i++) {
    for (let j = 0; j < guessedBoard[i].length; j++) {
      if (guessedBoard[i][j] == "S") {
        return false
      }
    } 
  } 
  return true
}