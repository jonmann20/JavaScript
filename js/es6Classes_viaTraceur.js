//----- Game Engine -----\\
class GameObject {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;

		this.color = color;

		console.log(x, y, color);
	}

	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, 40, 40);
	}
}

class MoveableGameObject extends GameObject {
	update() {
		if(keys[88]) --this.y;
		if(keys[68]) ++this.x;
		if(keys[83]) ++this.y;
		if(keys[65]) --this.x;
	}
}

//----- Hero -----\\
class Hero extends MoveableGameObject {
	constructor(x, y, color) {
		super(x, y, color);
		this.hp = 3;
	}
};

//----- Enemy -----\\
class Enemy extends GameObject {

}

//----- Main -----\\
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var keys = [];

window.addEventListener("keydown", function(e) {
	keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e) {
	keys[e.keyCode] = false;
});

var hero = new Hero(0, 0, "red");
var enemy = new Enemy(10, 10, "blue");


function gameLoop(timestamp) {
	ctx.fillStyle = "#777";
	ctx.fillRect(0, 0, 1280, 720);

	hero.update();
	hero.render();

	enemy.render();

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
