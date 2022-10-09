let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

class Circle {
	constructor(color) {
		this.color = color;
	}
}
const circle = {
	x: 200,
	y: 200,
	size: 30,
	dx: 5,
	dy: 4,
};

function drawCircle(color) {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCircle("blue");
	drawCircle("yellow");
	drawCircle("red");

	//change position
	circle.x += circle.dx;
	circle.y += circle.dy;

	//collison-detection (Detect side walls)
	if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
		circle.dx *= -1;
	}

	//collison-detection (Detect top and bottom walls)
	if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
		circle.dy *= -1;
	}

	requestAnimationFrame(update);
}

update();
