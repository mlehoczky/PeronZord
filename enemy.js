function Enemy(_img, x, y) {
    this.x = x;
    this.y = y;
    this._img = _img;
    this.xNoiseIncrement = 0;
    this.health = 100;
    this.vulnerableAreas = [];
    this.vulnerableAreasCorrected = [];
    this.beingHit = false;
    this.lastTimeHit;

        
    this.show = function(_time) {
        shotRecently = (_time - this.lastTimeHit ) < 100;

        push();
        imageMode(CENTER);
        
        //image(this._img, this.x, this.y);
        if (this.beingHit || shotRecently) tint(255, 100, 100, 255);
        image(this._img, this.x, this.y);
        pop();
        this.beingHit = false;
    }

    this.update = function() {
        this.xNoiseIncrement += 0.01;
    
        this.x = width * 0.2 + noise(this.xNoiseIncrement) * width * 0.8;
        this.y = height * 0.05 + noise(this.xNoiseIncrement + 0.5) * height / 2;
    }

    this.setVulnerableAreas = function(x0, y0, x1, y1) {
        // params: points coordinates defining vulnerable area
        this.vulnerableAreas.push([x0, y0, x1, y1]);
        this.vulnerableAreasCorrected.push([]);
    }

    this.checkForHits = function(shot) {

        let centerHit = dist(this.x, this.y, shot.x, shot.y) < 28;

        //this.vulnerableAreasCorrected = 
        //vulnerableAreasCorrected[10, 10] = 10;

        for(let i = 0; i < this.vulnerableAreas.length; i++) {
            for(let j = 0; j < this.vulnerableAreas[i].length; j++) {
                if (j == 0 || j == 2) {
                    //alert(this.getCoordinateXCorrected(this.vulnerableAreas[i][j]));
                    //console.log(this.getCoordinateXCorrected(this.vulnerableAreas[i][j]));
                    this.vulnerableAreasCorrected[i][j] = this.getCoordinateXCorrected(this.vulnerableAreas[i][j]);
                    //console.log(vulnerableAreasCorrected);
                } else {
                    this.vulnerableAreasCorrected[i][j] = this.getCoordinateYCorrected(this.vulnerableAreas[i][j]);
                }
            }
        }

        let otherAreasHit = this.checkIfInside(shot.x, shot.y);//, this.vulnerableAreasCorrected);

        if ((otherAreasHit || centerHit)) {
            this.beingHit = true;
            this.lastTimeHit = millis();
            console.log("ENEMY HIT!");
            return true;
        }
        
        //return (otherAreasHit || centerHit);

    }

    this.checkIfInside = function(_x, _y) {// _vulnerableAreas) {
        let x0;
        let y0;
        let x1;
        let y1;
        
        for(i = 0; i < this.vulnerableAreasCorrected.length; i++) {
            x0 = this.vulnerableAreasCorrected[i][0];
            y0 = this.vulnerableAreasCorrected[i][1];
            x1 = this.vulnerableAreasCorrected[i][2];
            y1 = this.vulnerableAreasCorrected[i][3];
            if ((_x < x1) && (_x > x0)
                && (_y < y1) && (_y > y0)) {
                return true;
            }

        }
        return false;

        // return (x < x1) && (x > x0)
        //         && (y < y1) && (y > y0):
    }

    this.getCoordinateXCorrected = function(xFromPNG) {

        return this.x - (150 - xFromPNG);
    }
    this.getCoordinateYCorrected = function(yFromPNG) {
        
        return this.y - (116 - yFromPNG);
    }
}

