function Pipe(){
	this.bot = random(80, 340);
	this.top = height - 180 - this.bot;
	this.w = 60;
	this.x = width;
	this.v = -5;
	this.update = function(){
		this.x += this.v;
	}
	this.show = function(){
		fill(0, 255, 0);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bot, this.w, this.bot);
	}
	this.hit = function(bird){
		return (this.x <= bird.x + bird.r && this.x + this.w >= bird.x - bird.r) && 
		(this.top >= bird.y - bird.r || height - this.bot <= bird.y + bird.r);
	}
}