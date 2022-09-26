function createSquare() {
	const rightPanel = document.querySelector(".right-panel");
	for (let i = 0; i < 256; i++) {
		const div = document.createElement("div");
        div.classList.add('square');  
		rightPanel.appendChild(div);
	}
}

createSquare();
