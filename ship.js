
function Ship(baseLength, shipLength, height, width) {
    this.baseLength = baseLength;
    this.shipLength = shipLength;
    this.Yposition = height * 4 / 5;
    this.Xposition = width/2 - baseLength/2; 
    this.vertexPositionLD = [this.Xposition, this.Yposition];
    this.vertexPositionLR = [this.Xposition + baseLength, this.Yposition];
    this.vertexPositionU = [this.Xposition + baseLength / 2, this.Yposition - shipLength];
    
    this.drawShip = function() {

        triangle(this.vertexPositionLD[0], this.vertexPositionLD[1],
            this.vertexPositionLR[0], this.vertexPositionLR[1],
            this.vertexPositionU[0], this.vertexPositionU[1]);
    
    };

    this.setX = function(x) {
        this.Xposition = x;
        this.vertexPositionLD = [this.Xposition, this.Yposition];
        this.vertexPositionLR = [this.Xposition + baseLength, this.Yposition];
        this.vertexPositionU = [this.Xposition + baseLength / 2, this.Yposition - shipLength];

    };

    this.setY = function(y) {
        this.Yposition = y;
    };

    this.shoot = function(speed) {
        return new Shot(this.Xposition + baseLength / 2, this.Yposition - shipLength, speed);

    };

}

function Shot(x, y, speed) {
    this.x = x;
    this.y = y;
        strokeWeight(8);
        point(x, this.y);
        strokeWeight(1);
    this.moveForward = function() {
        this.y = this.y - speed;
        strokeWeight(8);
        point(x, this.y);
        strokeWeight(1);
    };
}

        
