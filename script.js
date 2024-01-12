let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

const checkWinner = () => {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      showWinnerLine(pattern);
      return board[a];
    }
  }
  return null;
};

const showWinnerLine = (pattern) => {
  const [a, b, c] = pattern;
  const cells = document.getElementsByClassName('cell');
  cells[a].classList.add('winner');
  cells[b].classList.add('winner');
  cells[c].classList.add('winner');
};

const handleClick = (index) => {
  if (!gameActive || board[index] !== '') return;

  board[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].innerText = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    document.getElementById('result').innerText = `Player ${winner} wins!`;
    gameActive = false;
  } else if (!board.includes('')) {
    document.getElementById('result').innerText = "It's a tie!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].classList.remove('winner');
  }

  document.getElementById('result').innerText = '';
};
