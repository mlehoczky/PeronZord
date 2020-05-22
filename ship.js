/* var baseLength;
var shipLength;
var Yposition;
var Xposition;
var vertexPositionLD;
var vertexPositionLR;
var vertexPositionU;

baseLength = 12;
shipLength = 14;
Yposition = height * 4 / 5;
Xposition = width/2 - baseLength/2;
vertexPositionLD = createVector(Xposition, Yposition);
vertexPositionLR = createVector(Xposition + baseLength, Yposition);
vertexPositionU = createVector(Xposition + baseLength / 2, Yposition - shipLength);

function drawShip() {
    triangle(vertexPositionLD.x, vertexPositionLD.y,
        vertexPositionLR.x, vertexPositionLR.y,
        vertexPositionU.x, vertexPositionU.y);
 
}  */

function Ship(baseLength, shipLength, height, width) {
    this.baseLength = baseLength;
    this.shipLength = shipLength;
    this.Yposition = height * 4 / 5;
    this.Xposition = width/2 - baseLength/2; 
    //this.vertexPositionLD = createVector(this.Xposition, this.Yposition);
    this.vertexPositionLD = [this.Xposition, this.Yposition];
    //this.vertexPositionLR = createVector(this.Xposition + baseLength, this.Yposition);
    this.vertexPositionLR = [this.Xposition + baseLength, this.Yposition];
    //this.vertexPositionU = createVector(this.Xposition + baseLength / 2, this.Yposition - shipLength);
    this.vertexPositionU = [this.Xposition + baseLength / 2, this.Yposition - shipLength];
    
    this.drawShip = function() {
        // triangle(this.vertexPositionLD.x, this.vertexPositionLD.y,
        //     this.vertexPositionLR.x, this.vertexPositionLR.y,
        //     this.vertexPositionU.x, this.vertexPositionU.y);
        triangle(this.vertexPositionLD[0], this.vertexPositionLD[1],
            this.vertexPositionLR[0], this.vertexPositionLR[1],
                this.vertexPositionU[0], this.vertexPositionU[1]);
    
    };

    this.setX = function(x) {
        this.Xposition = x;
        this.vertexPositionLD = [this.Xposition, this.Yposition];
        //this.vertexPositionLR = createVector(this.Xposition + baseLength, this.Yposition);
        this.vertexPositionLR = [this.Xposition + baseLength, this.Yposition];
        //this.vertexPositionU = createVector(this.Xposition + baseLength / 2, this.Yposition - shipLength);
        this.vertexPositionU = [this.Xposition + baseLength / 2, this.Yposition - shipLength];
        /* triangle(this.vertexPositionLD[0], this.vertexPositionLD[1],
                this.vertexPositionLR[0], this.vertexPositionLR[1],
                    this.vertexPositionU[0], this.vertexPositionU[1]); */

    };

    this.setY = function(y) {
        this.Yposition = y;

    };

}