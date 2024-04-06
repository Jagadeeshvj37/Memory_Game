const cardsArray = [
  {
    name: "dog",
    icon: '<i class="fa-solid fa-dog"></i>',
  },
  {
    name: "cat",
    icon: '<i class="fa-solid fa-cat"></i>',
  },
  {
    name: "frog",
    icon: '<i class="fa-solid fa-frog"></i>',
  },
  {
    name: "fish",
    icon: '<i class="fa-solid fa-fish-fins"></i>',
  },
  {
    name: "crow",
    icon: '<i class="fa-solid fa-crow"></i>',
  },
  {
    name: "horse",
    icon: '<i class="fa-solid fa-horse"></i>',
  },
  {
    name: "dog",
    icon: '<i class="fa-solid fa-dog"></i>',
  },
  {
    name: "cat",
    icon: '<i class="fa-solid fa-cat"></i>',
  },
  {
    name: "frog",
    icon: '<i class="fa-solid fa-frog"></i>',
  },
  {
    name: "fish",
    icon: '<i class="fa-solid fa-fish-fins"></i>',
  },
  {
    name: "crow",
    icon: '<i class="fa-solid fa-crow"></i>',
  },
  {
    name: "horse",
    icon: '<i class="fa-solid fa-horse"></i>',
  },
];

let flippedcard = [];
let matchedpairs = 0;

shufflecard();
console.log(cardsArray);
const gameBoard = document.getElementById("gameBoard");
displaycard();
function shufflecard() {
  for (let i = cardsArray.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[randomIndex]] = [
      cardsArray[randomIndex],
      cardsArray[i],
    ];
  }
}

function displaycard() {
  cardsArray.forEach((curr, index, arr) => {
    const card = document.createElement("div");
    card.setAttribute("id", index);
    card.classList.add("cardback");
    card.classList.add("active");
    gameBoard.append(card);
    card.addEventListener("click", flipcard);
  });
}

function flipcard() {
  if (flippedcard.length < 2 && this.classList.contains('active')) {
    let cardid = this.getAttribute("id");
    console.log(this);
    flippedcard.push(this);
    this.classList.remove("cardback");
    this.innerHTML = cardsArray[cardid].icon;
  }
  if(flippedcard.length == 2)
  {
    setInterval(checkmatch,1000)
  }
}

function checkmatch()
{
    let cardid1 = flippedcard[0].getAttribute('id');
    let cardid2 = flippedcard[1].getAttribute('id');

    if(cardsArray[cardid1].name === cardsArray[cardid2].name)
    {
        flippedcard[0].style.border='none';
        flippedcard[0].style.backgroundColor='bisque';
        flippedcard[0].innerHTML='';
        flippedcard[0].classList.remove('active');
        flippedcard[1].classList.remove('active')
        flippedcard[1].style.border='none';
        flippedcard[1].style.backgroundColor='bisque';
        flippedcard[1].innerHTML='';
        matchedpairs++;
        checkgameover();
    }
    else{
        flippedcard[0].innerHTML='';
        flippedcard[0].classList.add("cardback");
        flippedcard[1].innerHTML='';
        flippedcard[1].classList.add("cardback");
    }

    flippedcard=[];
}

function checkgameover(){
    if(matchedpairs == cardsArray.length/2)
    {
        while(gameBoard.firstChild)
        {
            gameBoard.removeChild(gameBoard.firstChild);
        }
        gameBoard.innerHTML="You Won";
        gameBoard.classList.remove("game");
        gameBoard.classList.add('won');
    }
}