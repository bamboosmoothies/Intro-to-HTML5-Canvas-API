class Circle {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	constructor() {
		this.circle = {
			x: 200,
			y: 200,
			size: 30,
			dx: 5,
			dy: 4,
		};
		this.update();
	}

	animateCircle(color) {
		this.ctx.beginPath();
		this.ctx.arc(
			this.circle.x,
			this.circle.y,
			this.circle.size,
			0,
			Math.PI * 2
		);
		this.ctx.fillStyle = color;
		this.ctx.fill();
		this.update();
	}

	update() {
		// this.clearRect(0, 0, canvas.width, canvas.height);

		//change position
		this.circle.x += this.circle.dx;
		this.circle.y += this.circle.dy;

		//collison-detection (Detect side walls)
		if (
			this.circle.x + this.circle.size > canvas.width ||
			this.circle.x - this.circle.size < 0
		) {
			this.circle.dx *= -1;
		}

		//collison-detection (Detect top and bottom walls)
		if (
			this.circle.y + this.circle.size > canvas.height ||
			this.circle.y - this.circle.size < 0
		) {
			this.circle.dy *= -1;
		}

		//dunno why but rewrote this in arrow form thing
		requestAnimationFrame(this.update.bind(this));
	}
}

let c1 = new Circle();
c1.animateCircle("red");
