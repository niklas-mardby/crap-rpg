/*

    repo at https://github.com/niklas-mardby/crap-rpg

    Please read the README.md

*/

let playerName = "";
let xCoord = 3;
let yCoord = 3;
let gameOn = false;
let playerLevel = 1;

const inventory = document.querySelector(".inventory");
let playerInventory1 = "-";
let playerInventory2 = "-";
let playerInventory3 = "-";

const newGameButton = document.querySelector("#new-game");
const game = document.querySelector(".game");
const room = document.querySelector(".room");
const gameChildren = game.children;
const coords = gameChildren[1].children;
const map = document.querySelector(".map");

document.querySelector("#north").addEventListener("click", (e) => {
	yCoord--;
	if (yCoord < 1) yCoord = 1;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;

	room.textContent = getRoomText();

	inventory.children[0].textContent = playerInventory1;
	inventory.children[1].textContent = playerInventory2;
	inventory.children[2].textContent = playerInventory3;

	if (!gameOn) {
		game.children[2].style.display = "none";
	}
});
document.querySelector("#south").addEventListener("click", (e) => {
	yCoord++;
	if (yCoord > 5) yCoord = 5;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;

	room.textContent = getRoomText();

	inventory.children[0].textContent = playerInventory1;
	inventory.children[1].textContent = playerInventory2;
	inventory.children[2].textContent = playerInventory3;

	if (!gameOn) {
		game.children[2].style.display = "none";
	}
});
document.querySelector("#west").addEventListener("click", (e) => {
	xCoord--;
	if (xCoord < 1) xCoord = 1;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;

	room.textContent = getRoomText();

	inventory.children[0].textContent = playerInventory1;
	inventory.children[1].textContent = playerInventory2;
	inventory.children[2].textContent = playerInventory3;

	if (!gameOn) {
		game.children[2].style.display = "none";
	}
});
document.querySelector("#east").addEventListener("click", (e) => {
	xCoord++;
	if (xCoord > 5) xCoord = 5;
	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;

	room.textContent = getRoomText();

	inventory.children[0].textContent = playerInventory1;
	inventory.children[1].textContent = playerInventory2;
	inventory.children[2].textContent = playerInventory3;

	if (!gameOn) {
		game.children[2].style.display = "none";
	}
});

const savePlayerName = document.querySelector(".player-name button");

newGameButton.addEventListener("click", (e) => {
	playerName = "";
	gameOn = true;
	xCoord = 3;
	yCoord = 3;
	game.style.display = "none";
	document.querySelector(".player-name input").value = "";

	document.querySelector(".player-name").style.display = "block";

	document.querySelector(".intro").style.display = "none";

	playerInventory1 = "-";
	playerInventory2 = "-";
	playerInventory3 = "-";
});

savePlayerName.addEventListener("click", (e) => {
	playerName = document.querySelector(".player-name input").value;
	document.querySelector(".game h2").textContent =
		"Adventures of " + playerName;

	game.style.display = "block";
	document.querySelector(".player-name").style.display = "none";

	coords[0].textContent = "x: " + xCoord;
	coords[1].textContent = "y: " + yCoord;

	playerInventory1 = "-";
	playerInventory2 = "-";
	playerInventory3 = "-";
	inventory.children[0].textContent = playerInventory1;
	inventory.children[1].textContent = playerInventory2;
	inventory.children[2].textContent = playerInventory3;

	room.textContent = getRoomText();

	game.children[2].style.display = "block";
});

const getRoomText = () => {
	const pos = "" + xCoord + yCoord;

	drawMap();

	if (pos === "11")
		return "You stand in the dark forest of the north. The cold is biting and little light trickle down to the forest floor. You can't go further north nor west.";
	if (pos === "21") {
		if (playerInventory2 === "-") {
			gameOn = false;
			return "You walk in a dark mystical forest. You find a tree with a large key hole and handle. As you pull on the handle vines come out from the tree and catch you. You are slowly strangled. Game Over.";
		}
		if (playerInventory2 === "Wooden Key") {
			playerInventory2 = "Crimson Gem";
			return "You walk in a dark mystical forest. You find a tree with a large key hole and handle. You open the tree with your magical Wooden Key and inside find a Crimson Gem.";
		}
		return "You walk in a dark mystical forest.";
	}
	if (pos === "31")
		return "To the west the mountains leave way for dark cold forest. Here is still rocks all around, You can't go further north.";
	if (pos === "41")
		return "Tall mountains of cold rocks. You can't go further north. The mountains to the east look perilous.";
	if (pos === "51") return "51";

	if (pos === "12")
		return "The forest is dark and cold. It seems to continue north. You can't go further west.";
	if (pos === "22")
		return "The forest continues to the north, west, south but to the east you see hills.";
	if (pos === "32") {
		if (playerInventory1 === "-") {
			playerInventory1 = "Steel Dagger";
			return "Amidst the rolling hills you find an old grave dug into an ancient hill. Inside you find a trusty dagger!";
		}
		return "These ancient hills house graves for ancient kings.";
	}
	if (pos === "42")
		return "Hills covered in grass and the odd tree or bush. To the east and north the mountains rise high.";
	if (pos === "52")
		return "Gray and cold the rocks and cliffs of the mountains surround you. You can't go further east.";

	if (pos === "13") {
		if (playerInventory1 === "Steel Dagger") {
			playerInventory1 = "Double Crossbow";
			return "You enter a filthy swamp. The waters are murky and dark, sucking at your shoes. With a howl the hairy smelly monster attack you! Armed with your Steel Dagger you slay the beast. You find the monsters lair and loot a Double Crossbow!";
		}
		if (playerInventory1 === "-") {
			gameOn = false;
			return "You enter a filthy swamp. The waters are murky and dark, sucking at your shoes. With a howl a hairy smelly monster attack you and you are slain. Game over.";
		}
		return "You enter a filthy swamp. The waters are murky and dark, sucking at your shoes.";
	}
	if (pos === "23")
		return "You are still traveling through forest but to the west a foul swamp is spreading to the south.";
	if (pos === "33") {
		const firstVisit =
			playerInventory1 + playerInventory2 + playerInventory3 === "---";
		if (firstVisit)
			return (
				"Welcome " +
				playerName +
				" to these lands! You are surrounded by forest though you see hills to the east."
			);
		else return "The forest continue here but end to the east.";
	}
	if (pos === "43") {
		if (playerInventory2 === "-") {
			playerInventory2 = "Wooden Key";
			return "This area has hills covered in grass, bushes and the odd ruin. In one such ruin you find a magical key of some sort.";
		} else {
			return "This area has hills covered in grass, bushes and the odd ruin.";
		}
	}
	if (pos === "53") return "53";

	if (pos === "14")
		return "The foul smell and sights of the swamp surrounds you. It looks even more dangerous and ugly to the north. To the east lies the forest. You can't go further west.";
	if (pos === "24")
		return "Trees all around. Your footsteps tread silently on damp leaves. To the south the forest gives way to plains of grass.";
	if (pos === "34") return "34";
	if (pos === "44")
		return "Tall grass and a few bushes. The plains continue to the east.";
	if (pos === "54")
		return "Dark mountains to the north and a glittering lake further south of the grass lands you stand among here. You can't go further east.";

	if (pos === "15")
		return "The gentle grass of the plains spread out around you. You can't go further south or west.";
	if (pos === "25")
		return "Rolling plains of grass stretch out around you both to the east and west. You can't go further south.";
	if (pos === "35") {
		if (playerInventory1 === "Double Crossbow") {
			// last reward?
			return "You walk among the tall grass of these far streatching plains. Far above you hear a terrifying scream from a winged horrible monster. You shoot it dead with your Double Crossbow.";
		}
		if (playerInventory1 === "-") {
			gameOn = false;
			return "You walk among the tall grass of these far streatching plains. Far above you hear a terrifying scream from a winged horrible monster. It descends and tears you apart. Game Over.";
		}
		return "You walk among the tall grass of these far streatching plains. It is peaceful and quiet here now with tall clouds above.";
	}
	if (pos === "45")
		return "A river snaking through the plains to the lake in the east.";
	if (pos === "55") return "55";

	return "You seem to be lost. Please restart the game.";
};

const drawMap = () => {
	let str = ``;

	for (let i = 1; i <= 5; i++) {
		str += `<div>`;

		for (let j = 1; j <= 5; j++) {
			if (xCoord === j && yCoord === i) str += `<div class="chosen"></div>`;
			else str += `<div></div>`;
		}

		str += `</div>`;
	}
	map.innerHTML = str;
};
