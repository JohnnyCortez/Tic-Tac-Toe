const board = Array(9).fill(null);
let currentPlayer = 'X';
let winner = null;

const cells = document.querySelectorAll('td');
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(index));
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => resetGame());

function handleClick(index) {
  if (winner) return;
  if (board[index]) return;

  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const combination of winningCombinations) {
    if (combination.every((i) => board[i] === currentPlayer)) {
      winner = currentPlayer;
      return;
    }
  }
}

function resetGame() {
  board.fill(null);
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  winner = null;
}
