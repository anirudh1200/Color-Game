let numOf = 6;
let colors = [];
let pickedColor = null;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("hex");
let verdict = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let selectButton = document.querySelectorAll(".button");

const initial = () => {
	resetAll();
	startButtons();
};

const startButtons = () => {
	for (let i = 0; i < selectButton.length; i++) {
		selectButton[i].addEventListener("click", function () {
			selectButton[0].classList.remove("selected");
			selectButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOf = 3 : numOf = 6;
			resetAll();
		})

	};

	reset.addEventListener("click", function () {
		resetAll();
	});
}

const resetAll = () => {
	verdict.textContent = "";
	colors = getRandom(numOf);
	pickedColor = selectRandom();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.background = "none";
	}
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
};

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function () {
		let clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			verdict.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			verdict.textContent = "Try Again!";
			console.log(clickedColor, pickedColor);
		}

	});
}

const changeColor = color => {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

const selectRandom = () => {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

const getRandom = num => {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(colorRandom());
	}
	return arr;
};

const colorRandom = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let total = "rgb(" + r + ", " + g + ", " + b + ")";
	return total;
};

initial();