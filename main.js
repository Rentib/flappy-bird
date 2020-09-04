var bird;
var pipe = [];
var loss = 0;
var start = 0;
var birdImg;

function setup(){
	createCanvas(min(windowWidth, 600), windowHeight);
	scaleToFit: true;
	bird = new Bird();
}

function draw(){
	background(0);
	for (var i = pipe.length - 1; i >= 0; i--) {
		if(loss == 1){
			pipe[i].v = 0;
		}
		pipe[i].update();
		pipe[i].show();
		if(pipe[i].hit(bird)){
			loss = 1;
		}
	}
	bird.show();
	if(bird.y < height && start == 1){
		bird.update();
	}
	if(bird.collision()){
		loss = 1;
	}
	if(frameCount % 75 == 0 && loss == 0 && start == 1){
		pipe.push(new Pipe());
	}
}

function keyPressed(){
	start = 1;
	if(loss == 0){
		if(key == ' '){
			bird.up();
		}
	}
}

function touchStarted() {
	start = 1;
	if(loss == 0){
		bird.up();
	}
}