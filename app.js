const cardArray = [
  {
    name: "fries",
    img: "images/fries.jpg",
  },
  {
    name: "chesseburger",
    img: "images/chesseburger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "fries",
    img: "images/fries.jpg",
  },
  {
    name: "chesseburger",
    img: "images/chesseburger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("check for a match");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.jpg");
    cards[optionTwoId].setAttribute("src", "images/blank.jpg");
    alert("you clicked the same image");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "images/white.jpg");
    cards[optionTwoId].setAttribute("src", "images/white.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/white.jpg");
    cards[optionTwoId].setAttribute("src", "images/white.jpg");
    alert("Sorry try again");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulation you found all matching options";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
