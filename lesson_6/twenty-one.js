let readline = require("readline-sync");
let numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let suits = ['H', 'D', 'S','C'];
let deck = [];
let userHand = [];
let dealerHand = [];
let move = '';
let userTotal = 0;
let dealerTotal = 0;
let winner = ''; //'dealer' or 'user'
let playAgain = ''; // (y)es or (n)o
const DRAMATIC_PAUSE = true;

function initializeGame() {
  userHand = [];
  dealerHand = [];
  userTotal = 0;
  dealerTotal = 0;
  move = '';
  deck = [];
  winner = '';
  playAgain = '';
  initializeDeck();
  print("##################################");
  print("# Welcome to lxman's Twenty One! #");
  print("##################################");
}

function initializeDeck() {
  suits.forEach(suit => {
    numbers.forEach(card => {
      deck.push([suit, card]);
    });
  });
}

function print(message) {
  console.log(">> " + message);
}

function minimizeAcesValue(deck, currentTotal) {
  let aceCards = deck.filter(card => card[1] ===  'A');
  let numAceCards = aceCards.length;
  while (numAceCards > 0 && currentTotal > 21) {
    currentTotal -= 10;
    numAceCards -= 1;
  }
  return currentTotal;
}

function calcTotal(deck) {
  let sum = 0;
  deck.forEach(card => {
    if (card[1].search(/[JQK]/) !== -1) {
      sum += 10;
    } else if (card[1] === 'A') {
      sum += 11;
    } else sum += Number(card[1]);
  });
  if (sum > 21) sum = minimizeAcesValue(deck, sum);
  return sum;
}

function deal(playerHand, numCardsToDeal = 1) {
  for (let counter = 0; counter < numCardsToDeal; counter += 1) {
    let pickCardIndex = Math.floor(Math.random() * deck.length);
    let card = deck[pickCardIndex];
    deck.splice(pickCardIndex, 1);
    playerHand.push(card);
  }
}

function startDeal() {
  deal(userHand, 2);
  deal(dealerHand, 2);
}

function printCards(player) {
  if (player === 'user') {
    let total = calcTotal(userHand);
    print("You have" + userHand.map(card => " " + card[1]) + ".");
    print(`Your total is ${total}.`);
  } else {
    let total = calcTotal(dealerHand);
    print("Dealer has" + dealerHand.map(card => " " + card[1]) + ".");
    print(`Dealer's total is ${total}.`);
  }
}


function printCardsHidden() {
  print(`Dealer has ${dealerHand[0][1]} and ${dealerHand.length - 1} other ${dealerHand.length === 2 ? 'card' : 'cards'}.`);
}

function isInvalidAnswer(input, array) {
  if (array.includes(input)) {
    return false;
  } else {
    print("Not a valid response. Please try again.");
    return true;
  }
}

function checkBust(player) {
  let total;
  if (player === 'user') total = userTotal;
  if (player === 'dealer') total = dealerTotal;
  if (total > 21) {
    print(`${player[0].toUpperCase()}${player.slice(1)} went bust!`);
    return 'bust';
  } else return 'game on'; // don't use this return value, but if we don't write this down, eslint throws a consistent-return rule problem
}

function getUserMoves() {
  while (true) {
    while (true) {
      print("(H)it or (s)tay?");
      move = readline.question().toLowerCase().trim();
      if (!isInvalidAnswer(move, ['h', 'hit', 's', 'stay'])) break;
    }
    if (move === 'h' || move === 'hit') {
      print('You hit...');
      deal(userHand);
      userTotal = calcTotal(userHand);
      printCards('user');
      if (checkBust('user') === 'bust') return 'bust';
      move = '';
    } else {
      print('You stay...');
      return 'game on'; // need to return, but not the return value. but if we don't include a value, we get a 'consistent-return' error from eslint
    }
  }
}

function getDealerMoves() {
  dealerTotal = calcTotal(dealerHand);
  while (dealerTotal < 17) {
    deal(dealerHand);
    print('Dealer hits...');
    printCardsHidden();
    dealerTotal = calcTotal(dealerHand);
  }
}

function identifyWinner() {
  if (!['dealer', 'user'].includes(winner)) {
    if (userTotal > dealerTotal) winner = 'user';
    else if (dealerTotal > userTotal) winner = 'dealer';
    else winner = 'tie';
  }
}

function printWinner() {
  if (winner === 'tie') {
    print(`It's a tie. Push!`);
  } else print(`${winner.toUpperCase()} wins!`);
}

function playGame() {
  if (getUserMoves() !== 'bust') {
    getDealerMoves();
    print('Dealer stays. Are you ready to reveal?');
    if (DRAMATIC_PAUSE === true) {
      print("Press [enter] to find out who wins.");
      readline.question();
    }
    if (checkBust('dealer') === 'bust') {
      printCards(dealerHand);
      winner = 'user';
    } else {
      printCards('dealer');
      printCards('user');
    }
  } else {
    winner = 'dealer';
  }
}

function newRound() {
  while (true) {
    print("-------------------------");
    print("Play again? (Y)es or (N)o");
    playAgain = readline.question().toLowerCase();
    if (!isInvalidAnswer(playAgain, ['y', 'yes', 'n', 'no'])) break;
  }
  if (playAgain === 'n' || playAgain === 'no') {
    print("Thank you for playing 21 with me. Play again soon!");
    return 'stop';
  } else return 'game on'; // don't use this return value, but if we don't write this down, eslint throws a consistent-return rule problem
}

while (true) {
  console.clear();
  initializeGame();
  startDeal();
  printCardsHidden();
  printCards('user');
  playGame();
  identifyWinner();
  printWinner();
  if (newRound() === 'stop') {
    break;
  }
}