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

function mouseMove1() {
	button1.classList.add("mousemove");
}
function mouseMove2() {
	button2.classList.add("mousemove");
}
function mouseMove3() {
	button3.classList.add("mousemove");
}
function mouseMove4() {
	colorChoice.classList.add("mousemove");
}

button1.addEventListener("mousemove", mouseMove1);
button2.addEventListener("mousemove", mouseMove2);
button3.addEventListener("mousemove", mouseMove3);

function mouseMoveLeave() {
	buttons.forEach(button => button.classList.remove("mousemove"));
	colorChoice.classList.remove("mousemove");
}

let buttons = document.querySelectorAll(".button");

buttons.forEach(button =>
	button.addEventListener("mouseleave", mouseMoveLeave)
);





// choose color:

function setCurrentColor(newColor) {
	currentColor = newColor
  };

const colorChoice = document.getElementById('colorChoice');
colorChoice.oninput = (e) => setCurrentColor(e.target.value);
colorChoice.addEventListener("mousemove", mouseMove4);
colorChoice.addEventListener("mouseleave", mouseMoveLeave);