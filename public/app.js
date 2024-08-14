/*

repo at https://github.com/niklas-mardby/crap-rpg

Please read README.md

*/

let playerName = "Test";
let xCoord = 3;
let yCoord = 3;
let gameOn = false;

const newGameButton = document.querySelector("#new-game");
const game = document.querySelector(".game");
const room = document.querySelector(".room");
const gameChildren = game.children;
const coords = gameChildren[1].children;

document.querySelector("#north").addEventListener("click", (e) => {
	yCoord--;
	if (yCoord < 1) yCoord = 1;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;
	room.textContent = getRoomText();
});
document.querySelector("#south").addEventListener("click", (e) => {
	yCoord++;
	if (yCoord > 5) yCoord = 5;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;
	room.textContent = getRoomText();
});
document.querySelector("#west").addEventListener("click", (e) => {
	xCoord--;
	if (xCoord < 1) xCoord = 1;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;
	room.textContent = getRoomText();
});
document.querySelector("#east").addEventListener("click", (e) => {
	xCoord++;
	if (xCoord > 5) xCoord = 5;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;
	room.textContent = getRoomText();
});

const savePlayerName = document.querySelector(".player-name button");

newGameButton.addEventListener("click", (e) => {
	playerName = "";
	gameOn = true;
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

	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;
	room.textContent = getRoomText();
});

const getRoomText = () => {
	const pos = "" + xCoord + yCoord;

	if (pos === "11") return "11";
	if (pos === "21") return "21";
	if (pos === "31") return "31";
	if (pos === "41") return "41";
	if (pos === "51") return "51";

	if (pos === "12") return "12";
	if (pos === "22") return "22";
	if (pos === "32") return "32";
	if (pos === "42") return "42";
	if (pos === "52") return "52";

	if (pos === "13") return "13";
	if (pos === "23") return "23";
	if (pos === "33") return "33";
	if (pos === "43") return "43";
	if (pos === "53") return "53";

	if (pos === "14") return "14";
	if (pos === "24") return "24";
	if (pos === "34") return "34";
	if (pos === "44") return "44";
	if (pos === "54") return "54";

	if (pos === "15") return "15";
	if (pos === "25") return "25";
	if (pos === "35") return "35";
	if (pos === "45") return "45";
	if (pos === "55") return "55";

	return "You stand in a dark forest?";
};
