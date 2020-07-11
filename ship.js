
// function Ship(baseLength, shipLength, height, width) {
function Ship(baseLength, shipLength) {

    this.baseLength = baseLength;
    this.semiBaseLenth = baseLength / 2;
    this.shipLength = shipLength;
    this.Yposition = height * 5 / 6;
    this.Xposition = width/2 - this.semiBaseLenth; 
    
    
    this.drawShip = function() {
        this.vertexPositionLD = [this.Xposition - this.semiBaseLenth, this.Yposition];
        this.vertexPositionLR = [this.Xposition + this.semiBaseLenth, this.Yposition];
        this.vertexPositionU = [this.Xposition, this.Yposition - shipLength];

        triangle(this.vertexPositionLD[0], this.vertexPositionLD[1],
            this.vertexPositionLR[0], this.vertexPositionLR[1],
            this.vertexPositionU[0], this.vertexPositionU[1]);
    
    };

    this.setX = function(x) {
        this.Xposition = x;
    };

    this.setY = function(y) {
        this.Yposition = y;
    };

    this.shoot = function(speed) {
        return new Shot(this.Xposition + baseLength / 2, this.Yposition - shipLength, speed);
    };

}