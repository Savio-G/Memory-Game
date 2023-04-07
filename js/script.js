//card options
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]
let choosenCard = []
let cardChoosenIds = []
let cardsWon = []

const grid = document.querySelector('.grid')
const result = document.getElementById('result')


cardArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('card-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)

    }
}
createBoard()

function matchCard() {
    const card = document.querySelectorAll('img')
    const optionOne = cardChoosenIds[0];
    const optionTwo = cardChoosenIds[1]


    if (choosenCard[0] == choosenCard[1]) {
        alert('you have a match')
        card[optionOne].setAttribute('src', 'images/white.png')
        card[optionTwo].setAttribute('src', 'images/white.png')
        card[optionOne].removeEventListener('click', flipCard)
        card[optionTwo].removeEventListener('click', flipCard)
        cardsWon.push(choosenCard)


        if (cardsWon.length == cardArray.length / 2) {
            result.innerText = 'Congratulations you have found them all'
        }
        else {
            result.innerText = cardsWon.length
        }

    }
    else {
        card[cardChoosenIds[0]].setAttribute('src', 'images/blank.png')
        card[cardChoosenIds[1]].setAttribute('src', 'images/blank.png')
    }
    choosenCard = []
    cardChoosenIds = []

}

function flipCard() {
    const cardId = this.getAttribute('card-id')

    // Preventing selecting the same card
    if (cardChoosenIds.includes(cardId)) {
        return
    }

    choosenCard.push(cardArray[cardId].name)
    cardChoosenIds.push(cardId)
    // console.log(choosenCard, cardChoosenIds)
    this.setAttribute('src', cardArray[cardId].img)

    if (choosenCard.length === 2) {
        setTimeout(matchCard, 500)
    }
}
