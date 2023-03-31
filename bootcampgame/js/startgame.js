import { createCardsArray, dublicateArray, shuffle } from "./utils.js";
import { createGameCard } from "./gamecards.js";

export const startGame=(difficult)=>{
	let firstCard = null;
	let secondCard = null;
	let clickable = true;

	const gameSection = document.querySelector(".game-section__conteiner");
	gameSection.innerHTML="";

	const gameField = document.createElement("div");

	const cardsArray = createCardsArray(difficult);

	const dubCardsArray = dublicateArray (cardsArray);

	const shuffleCardsArray = shuffle (dubCardsArray);

	gameField.classList.add("game-field");

	shuffleCardsArray.forEach(card => {
		gameField.append(createGameCard("X", card))
	});

	

	gameSection.append(gameField);

	const cards = document.querySelectorAll('.game-card');
	console.log(cards[0]);
	cards.forEach((card,index)=>{
		card.addEventListener("click",()=>{
			if (clickable == true && !card.classList.contains("successfully")){
					card.classList.add("flip");
					const t = card.getElementsByTagName("i")[1].className;
					console.log(t);
					card.classList.add(t)
				
				}
		});
	});
}


