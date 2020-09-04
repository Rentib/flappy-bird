function Bird() {
	this.x = 65;
	this.y = height / 2;
	this.r = 20;
	this.v = 0;
	this.g = 1;

	this.show = function(){
		fill(250, 0, 0);
		ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
	};

	this.update = function(){
		if(this.y < height)
		this.v += this.g;
		this.y += this.v;
		this.y = min(this.y, height);
	};

	this.up = function(){
		this.v = -16;
	}

	this.collision = function(){
		return (this.y - this.r <= 0 || this.y + this.r >= height);
	}
}