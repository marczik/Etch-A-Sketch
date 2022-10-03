function createBigSquare() {
	const rightPanel = document.querySelector(".right-panel");
	for (let i = 0; i < 192; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.classList.add("big-square");
		rightPanel.appendChild(div);
	}
};
//16 x 12
createBigSquare();

function createMediumSquare() {
	const rightPanel = document.querySelector(".right-panel");
	for (let i = 0; i < 768; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.classList.add("medium-square");
		rightPanel.appendChild(div);
	}
};
//32 x 24
//createMediumSquare();

function createSmallSquare() {
	const rightPanel = document.querySelector(".right-panel");
	for (let i = 0; i < 3072; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		div.classList.add("small-square");
		rightPanel.appendChild(div);
	}
};
//64 x 48
//createSmallSquare();





const square = document.querySelectorAll('.square');

function changeSquare() {
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', () => {
	square[i].classList.add("bgcolor");
  });
}};
changeSquare();


