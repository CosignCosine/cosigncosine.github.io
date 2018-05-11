//Inspired by http://codepen.io/Beaugust/pen/kflHc
angleMode = 'radians';
colorMode(HSB);
var col = 0;
var τ = TWO_PI;
var hexagon = function(x, y, w, h){
    pushMatrix();
    translate(x, y);
    rotate(τ/12);
    beginShape();
    for(var i = 0; i < τ; i += τ/6){
        vertex(cos(i)*w, sin(i)*h);
    }
    endShape(CLOSE);
    popMatrix();
};
var Hexagon = function(x, y){
    this.x = x;
    this.y = y;
    this._hue = random(0, 255);
    this.isOn = random()<0.5;
};
Hexagon.prototype.nextFrame = function(){
    var l = (col + this.x/19)%255;
    stroke(l, 255, 255);
    fill(l, 255, this._hue);
    hexagon(this.x, this.y, 25, 25);
    if(this.isOn){
        if(this._hue < 290){
            this._hue+=7;
        }else{
            this.isOn = false;
        }
    }else{
        if(this._hue > -90){
            this._hue-=7;
        }else{
            this.isOn = true;
        }
    }
};
var hexagons = [];
for(var i = 0; i < 15; i++){
    for(var j = 0; j < 21; j++){
        hexagons.push(new Hexagon(i*43 + (j%2)*21.5, j*38 + 3));
    }
}
var draw = function() {
    col += 0.2;
    background(0, 0, 0);
    for(var i = 0; i < hexagons.length; i++){
        hexagons[i].nextFrame();
    }
};
