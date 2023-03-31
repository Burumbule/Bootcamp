import {startGame} from "./startgame.js"
export const createGameMenu=()=>{
	const title = document.createElement("h2");
	title.classList.add("game-menu__title");
	const gameSection = document.querySelector(".game-section__conteiner");
	gameSection.innerHTML="";

	title.textContent="СЛОЖНОСТЬ ИГРЫ";

	const createMenuButton = (difficulty)=>{
		const button = document.createElement("button");
		button.classList.add("game-menu__btn");
		if (difficulty==1) difficulty="лёгкий";
		else if (difficulty==2) difficulty="средний";
		else if (difficulty==3) difficulty="сложный";
		button.textContent = difficulty;
		button.addEventListener("click", ()=> startGame(difficulty));
		return button;
	}

	gameSection.append(
		title,
		createMenuButton(1),
		createMenuButton(2),
		createMenuButton(3)
	);
}