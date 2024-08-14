/*

repo at https://github.com/niklas-mardby/crap-rpg

*/

let playerName = "Test";
let xCoord = 3;
let yCoord = 3;

let xMax = 5;
let xMin = 1;
let yMax = 5;
let yMin = 1;

const newGameButton = document.querySelector("#new-game");
// const main = document.querySelector("main");
const game = document.querySelector(".game");
//const room = document.querySelector("room");

const savePlayerName = document.querySelector(".player-name button");

newGameButton.addEventListener("click", (e) => {
	playerName = "";
	document.querySelector(".player-name input").value = "";

	document.querySelector(".player-name").style.display = "block";

	document.querySelector(".intro").style.display = "none";
});

savePlayerName.addEventListener("click", (e) => {
	playerName = document.querySelector(".player-name input").value;
	document.querySelector(".game h2").textContent =
		"Adventures of " + playerName;

	game.style.display = "block";
	document.querySelector(".player-name").style.display = "none";

	const gameChildren = game.children;
	const coords = gameChildren[1].children;

	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;

	gameChildren[2].textContent = getRoomText();
});

const getRoomText = () => {
	return "You stand in a dark forest.";
};
