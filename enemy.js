function Enemy(_img, x, y) {
    this.x = x;
    this.y = y;
    this._img = _img;
    this.xNoiseIncrement = 0;
        
    this.show = function() {
        push();
        imageMode(CENTER);
        image(this._img, this.x, this.y);
        pop();
    }

    this.update = function() {
        this.xNoiseIncrement += 0.01;
    
        this.x = width * 0.2 + noise(this.xNoiseIncrement) * width * 0.8;
        this.y = height * 0.05 + noise(this.xNoiseIncrement + 0.5) * height / 2;
    }


    this.moveForward = function() {
        this.y = this.y - speed;
        push();
        stroke(100, 255, 0);
        strokeWeight(8);
        point(this.x, this.y);
        pop();
    }
}

