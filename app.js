

// For Part 1 question 1
// let favoriteNumber = 3;

// let numUrl = `http://numbersapi.com/${favoriteNumber}?json`;

// let numresp;

// $.getJSON(numUrl, response => {
//     numresp = response
//     console.log("done", numresp);

// })
// console.log("waiting");

// For Part 1 question 2

// let numUrl = `http://numbersapi.com`;

// let factsList = document.getElementById("facts-list");

// async function multinum() {
//     try {
//         let Promisen1 = $.getJSON(`${numUrl}/1?json`)
//         let Promisen2 = $.getJSON(`${numUrl}/2?json`)
//         let Promisen3 = $.getJSON(`${numUrl}/3?json`)

//         let n1 = await Promisen1
//         let n2 = await Promisen2
//         let n3 = await Promisen3
//         let numList = [n1.text, n2.text, n3.text];

//         for (let num in numList) {
//             let li = document.createElement("li");
//             li.textContent = num;
//             factsList.appendChild(li);
//         }
//     } catch (err) {
//         console.log("Error fetching number facts:", err);
//     }
// }

// multinum();

// For Part 1 question 3

// let numUrl = `http://numbersapi.com`;
// let numb = 3;
// let factsList = document.getElementById("facts-list");


// async function factfourNum() {
//     try {
//         let response = await $.getJSON(`${numUrl}/${numb}?json`);
//         let fact = response.text
//         for (let i = 1; i < 5; i++) {
//             let li = document.createElement("li");
//             li.textContent = fact;
//             factsList.appendChild(li);
//         }

//     } catch (e) {
//         console.log("Error fetching number facts:", e);
//     }

// }
// factfourNum()

// For Part 2 question 1
// const cardURL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'

// async function cardSuit() {
//     try {
//         let response = await $.getJSON(`${cardURL}`);
//         let suit = response.cards[0].suit
//         let value = response.cards[0].value
//         let cardsuit = `${value} of ${suit}`
//         console.log(cardsuit)

//     } catch (e) {
//         console.log("Error fetching Card And Suit:", e);
//     }

// }
// cardSuit()


// For Part 2 question 2

// const cardURL = 'https://deckofcardsapi.com/api/deck'
// class DrawCards {
//     async cardID() {
//         try {
//             let response = await $.getJSON(`${cardURL}/new/?json`);
//             this.deck_id = response.deck_id;
//         } catch (e) {
//             console.log("Error fetching deck ID:", e);
//         }
//     }

//     async drawCards() {
//         try {
//             let response = await $.getJSON(`${cardURL}/${this.deck_id}/draw/?count=2`);
//             let [card1, card2] = response.cards;
//             console.log(`${card1.value} of ${card1.suit}`);
//             console.log(`${card2.value} of ${card2.suit}`);
//         } catch (e) {
//             console.log("Error fetching cards: ", e);
//         }
//     }
// }

// For Part 2 question 3

const cardURL = 'https://deckofcardsapi.com/api/deck/'
let deck_id;
let remaining;


async function cardID() {
    try {
        let response = await $.getJSON(`${cardURL}/new/shuffle/?json`);
        deck_id = response.deck_id;
    } catch (e) {
        console.log("Error fetching deck ID:", e);
    }
}

cardID()

document.getElementById('draw-btn').addEventListener('click', async () => {
    try {
        let response = await $.getJSON(`${cardURL}/${deck_id}/draw/?count=1`)
        let remaining = response.remaining;
        document.getElementById("remaining-cards").textContent = `Cards Remaining: ${remaining}`;
        if (remaining === 0) {
            document.getElementById("draw-btn").disabled = true;
        }
        let card = response.cards[0];
        let img = document.createElement('img')
        img.src = card.image

        let container = document.getElementById('card-container')
        container.innerHTML = "";
        container.append(img);
    } catch (err) {
        console.log(err)
    }
})

