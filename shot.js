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
}

