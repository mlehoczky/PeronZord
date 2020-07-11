function Shot(x, y, speed) {
    this.x = x;
    this.y = y;
        point(this.x, this.y);

    this.moveForward = function() {
        this.y = this.y - speed;
        push();
        stroke(100, 255, 0);
        strokeWeight(8);
        point(this.x, this.y);
        pop();
    };

    this.explode = function() {
        push();
        stroke(200, 100, 10, 180);
        strokeWeight(35);
        point(this.x, this.y);
        pop();
    };

    this.getPosition = function() {
        return {
            x: this.x,
            y: this.y
        }
    }

    this.isLostInSpace = function() {
        return this.y < 0;
    }
}

