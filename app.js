const DEFAULT_COLOR = "black";
const DEFAULT_MODE = "color";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

function createBigSquare() {
	const rightPanel = document.querySelector(".right-panel");
	while (rightPanel.firstChild) {
		rightPanel.removeChild(rightPanel.firstChild);
	}
	for (let i = 0; i < 192; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.classList.add("big-square");
		div.addEventListener("mouseover", changeSquare);
		div.addEventListener("mousedown", changeSquare);
		rightPanel.appendChild(div);
	}
}
//16 x 12
//createBigSquare();

function createMediumSquare() {
	const rightPanel = document.querySelector(".right-panel");
	while (rightPanel.firstChild) {
		rightPanel.removeChild(rightPanel.firstChild);
	}
	for (let i = 0; i < 768; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.classList.add("medium-square");
		div.addEventListener("mouseover", changeSquare);
		div.addEventListener("mousedown", changeSquare);
		rightPanel.appendChild(div);
	}
}
//32 x 24
//createMediumSquare();

function createSmallSquare() {
	const rightPanel = document.querySelector(".right-panel");
	while (rightPanel.firstChild) {
		rightPanel.removeChild(rightPanel.firstChild);
	}
	for (let i = 0; i < 3072; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.classList.add("small-square");
		div.addEventListener("mouseover", changeSquare);
		div.addEventListener("mousedown", changeSquare);
		rightPanel.appendChild(div);
	}
}
//64 x 48
//createSmallSquare();

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSquare(e) {
	if (e.type === "mouseover" && !mouseDown) {
		return;
	} else if (currentMode === "color") {
		e.target.style.backgroundColor = currentColor;
	}
}

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

button1.addEventListener("click", createSmallSquare);
button2.addEventListener("click", createMediumSquare);
button3.addEventListener("click", createBigSquare);
