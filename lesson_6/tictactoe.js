const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const ROUNDS_TO_WIN = 2;
const FIRST_TURN = 'choose'; // strings player, computer, or choose
let board = initializeBoard();
let playerScore = 0;
let computerScore = 0;
let currentPlayer = 'player';

function displayBoard() {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`SCOREBOARD | You: ${playerScore}, Computer: ${computerScore}`);
  console.log('   0     1     2');
  console.log('      |     |');
  console.log(`0  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log('      |     |');
  console.log(' -----+-----+-----');
  console.log('      |     |');
  console.log(`1  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log('      |     |');
  console.log(' -----+-----+-----');
  console.log('      |     |');
  console.log(`2  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log('      |     |');
}

function initializeBoard() {
  let board = [[],[],[]];
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      board[row][column] = INITIAL_MARKER;
    }
  }
  return board;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function squareEmpty(coordinates) {
  if (board[coordinates[0]][coordinates[1]] !== INITIAL_MARKER) {
    if (currentPlayer === 'player') prompt("Sorry, that space is taken.");
    return false;
  } else return true;
}

function checkValidInput(coordinates) {
  if (coordinates.length !== 2 || coordinates[0] < 0 || coordinates[0] > 2
    || coordinates[1] < 0 || coordinates[1] > 2 || isNaN(coordinates[0])
    || isNaN(coordinates[1]) || coordinates[0] === '' || coordinates[1] === ''
    || !Number.isInteger(coordinates[1]) || !Number.isInteger(coordinates[0])) {
    prompt("Sorry, that's an invalid choice. Please enter coordinates with a comma, e.g. 1, 2");
    return false;
  } else return true;
}

function playerChoosesSquare(board) {
  prompt('Choose a square (row, column without parentheses):');
  let coordinates;
  do {
    coordinates = readline.question();
    coordinates = coordinates.split(',');
    coordinates = coordinates.map(coordinate => Number(coordinate.trim()));
  } while (!checkValidInput(coordinates) || !squareEmpty(coordinates));
  board[coordinates[0]][coordinates[1]] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  if (thinkMove(board, checkOpportunityToWin) !== true) {
    if (thinkMove(board, checkThreats) !== true) {
      if (checkNextBest() !== true) {
        let coordinates = ['',''];
        do {
          coordinates = coordinates.map(() => Math.floor(Math.random() * 3));
        } while (!checkValidInput(coordinates) || !squareEmpty(coordinates));
        board[coordinates[0]][coordinates[1]] = COMPUTER_MARKER;
      }
    }
  }
}

function checkThreats(array) { // returns the open index position if threat, else null
  if (array.filter(element => element === HUMAN_MARKER).length === 2
    && array.indexOf(INITIAL_MARKER) !== -1) {
    return array.indexOf(INITIAL_MARKER);
  } else return null;
}

function checkOpportunityToWin(array) {
  if (array.filter(element => element === COMPUTER_MARKER).length === 2
    && array.indexOf(INITIAL_MARKER) !== -1) {
    return array.indexOf(INITIAL_MARKER);
  } else return null;
}

function checkNextBest() {
  if (squareEmpty([1,1])) {
    board[1][1] = COMPUTER_MARKER;
    return true;
  } else if (squareEmpty([0,0])) {
    board[0][0] = COMPUTER_MARKER;
    return true;
  } else if (squareEmpty([0,2])) {
    board[0][2] = COMPUTER_MARKER;
    return true;
  } else if (squareEmpty([2,0])) {
    board[2][0] = COMPUTER_MARKER;
    return true;
  } else if (squareEmpty([2,2])) {
    board[2][2] = COMPUTER_MARKER;
    return true;
  } else return false;
}

function tryRows(board, moveType) {
  let linesCheck = []; // three element array
  for (let counter = 0; counter < board.length; counter += 1) {
    linesCheck = [];
    for (let row = 0; row < 3; row += 1) {
      linesCheck.push(board[row][counter]);
    }
    let checkCoord = moveType(linesCheck);
    if (checkCoord !== null) {
      board[checkCoord][counter] = COMPUTER_MARKER;
      return true;
    }
  }
  return false;
}

function tryColumns(board, moveType) {
  let linesCheck = []; // three element array
  for (let counter = 0; counter < board.length; counter += 1) {
    linesCheck = [];
    for (let col = 0; col < 3; col += 1) {
      linesCheck.push(board[counter][col]);
    }
    let checkCoord = moveType(linesCheck);
    if (checkCoord !== null) {
      board[counter][checkCoord] = COMPUTER_MARKER;
      return true;
    }
  }
  return false;
}

function tryDiagUp(board, moveType) {
  let linesCheck = [board[2][0], board[1][1],board[0][2]];
  let checkCoord = moveType(linesCheck);
  if (checkCoord !== null) {
    switch (checkCoord) {
      case 0 :
        board[2][0] = COMPUTER_MARKER;
        return true;
      case 1 :
        board[1][1] = COMPUTER_MARKER;
        return true;
      case 2 :
        board[0][2] = COMPUTER_MARKER;
        return true;
    }
  }
  return false;
}

function tryDiagDown(board, moveType) {
  let linesCheck = [board[0][0], board[1][1],board[2][2]];
  let checkCoord = moveType(linesCheck);
  if (checkCoord !== null) {
    switch (checkCoord) {
      case 0 :
        board[0][0] = COMPUTER_MARKER;
        return true;
      case 1 :
        board[1][1] = COMPUTER_MARKER;
        return true;
      case 2 :
        board[2][2] = COMPUTER_MARKER;
        return true;
    }
  }
  return false;
}

function thinkMove(board, moveType) {
  if (tryRows(board, moveType)) return true;
  if (tryColumns(board, moveType)) return true;
  if (tryDiagUp(board, moveType)) return true;
  if (tryDiagDown(board, moveType)) return true;
  return false;
}

function boardNotFull(board) {
  return board.some(subArray => subArray.some(element =>
    element === INITIAL_MARKER));
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let lineCheck = [];
  for (let counter = 0; counter < board.length; counter += 1) {
    lineCheck = [board[0][counter], board[1][counter], board[2][counter]];
    if (whoIsWinner(lineCheck)) return whoIsWinner(lineCheck);
    lineCheck = [board[counter][0], board[counter][1], board[counter][2]];
    if (whoIsWinner(lineCheck)) return whoIsWinner(lineCheck);
  }
  lineCheck = [board[0][0], board[1][1], board[2][2]];
  if (whoIsWinner(lineCheck)) return whoIsWinner(lineCheck);
  lineCheck = [board[2][0], board[1][1], board[0][2]];
  if (whoIsWinner(lineCheck)) return whoIsWinner(lineCheck);
  return null;
}

function whoIsWinner(array) {
  if (array.every(element => element === HUMAN_MARKER)) return 'Player';
  if (array.every(element => element === COMPUTER_MARKER)) return 'Computer';
  return null;
}

function whoStarts() {
  let firstTurn;
  switch (FIRST_TURN) {
    case 'computer' :
      computerChoosesSquare(board);
      currentPlayer = 'player';
      break;
    case 'choose' :
      while (firstTurn !== 'p' || firstTurn !== 'c' ) {
        prompt('Who goes first? (P)layer or (C)omputer');
        firstTurn = readline.question().toLowerCase().trim()[0];
        if (firstTurn === 'c') {
          computerChoosesSquare(board);
          currentPlayer = 'player';
          break;
        } else break;
      }
  }
}

function checkValidYN(answer) {
  answer = answer.toLowerCase().trim();
  if (answer === 'yes' || answer === 'y') {
    return "yes";
  } else if (answer === 'no' || answer === 'n') {
    return 'no';
  } else {
    prompt('Please enter a valid response: (y)es or (n)o');
    return false;
  }
}

function chooseSquare(board, player) {
  if (player === 'player') playerChoosesSquare(board);
  else computerChoosesSquare(board);
  displayBoard();
}

function alternatePlayer(player) {
  if (player === 'player') return 'computer';
  else return 'player';
}

function playAgain() {
  let answer;
  do {
    answer = readline.question().toLowerCase();
  } while (!checkValidYN(answer));
  if (answer === 'no' || answer === 'n') {
    return true;
  } else return false;
}

while (true) {
  while (playerScore < ROUNDS_TO_WIN || computerScore < ROUNDS_TO_WIN) {
    board = initializeBoard();
    whoStarts();
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || !boardNotFull(board)) break;
    }

    if (someoneWon(board)) {
      if (detectWinner(board) === 'Player') playerScore += 1;
      else computerScore += 1;
      displayBoard(board);
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    if (playerScore === ROUNDS_TO_WIN) {
      prompt('Player wins the match!');
      break;
    } else if (computerScore === ROUNDS_TO_WIN) {
      prompt('Computers wins the match!');
      break;
    }
    prompt('Play again? (y or n)');
    if (playAgain()) break;
  }
  // if (playerScore === ROUNDS_TO_WIN) prompt('Player wins the match!');
  // if (computerScore === ROUNDS_TO_WIN) prompt('Computer wins the match!');

  prompt(`Do you want to do another match (first to ${ROUNDS_TO_WIN} wins)? (y or n)`);
  if (playAgain()) break;
  playerScore = 0;
  computerScore  = 0;
  currentPlayer = FIRST_TURN;
}

prompt('Thanks for playing Tic Tac Toe!');