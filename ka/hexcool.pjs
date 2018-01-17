//I hate to be so unoriginal, but the inspiration and one line of code comes from here: http://codepen.io/towc/pen/mJzOWJ/
angleMode = 'radians';
colorMode(HSB, 255, 1, 1, 1);
var angle = TWO_PI/6;
var currColor = 0;
frameRate(0);
var Line = function(){
    this.x = 300;
    this.y = 300;
    this.xVel = 0;
    this.yVel = 0;
    this.ang = 0;
    this.col = currColor;
    this.time = 0;
};
Line.prototype.next = function(){
    if(this.time > 30){
        this.ang += angle * ( random() < 0.5 ? 1 : -1 ); //Copied directly from the source, this line only. I didn't really know what else to do here.
        this.xVel = cos(this.ang);
        this.yVel = sin(this.ang);
        this.time = 0;
    }
    this.x += this.xVel;
    this.y += this.yVel;
    this.time++;
    this.col+=0.1;
    this.col %= 255;
    noStroke();
    fill(this.col, 1, 1, 0.8);
    ellipse(this.x, this.y, 3, 3);
    fill(this.col, 1, 1, 0.2);
    ellipse(this.x, this.y, 5, 5);
    if(this.x < 0 || this.x > width || this.y < 0 || this.y > height){
        this.dead = true;
    }
    if(random() < 0.3){
        fill(this.col, 1, 1, 0.5);
        ellipse(this.x + random(-6, 6), this.y + random(-6, 6), 4, 4);
        fill(this.col, 1, 1, 0.2);
        ellipse(this.x + random(-6, 6), this.y + random(-6, 6), 8, 8);
    }
};
var lines = [];
for(var i = 0; i < 50; i++){
    lines.push(new Line());
}
background(0, 0, 0);
frameRate(160);
var draw = function() {
    currColor = (currColor + 0.1) % 255;
    fill(0, 0, 0, 0.01);
    rect(0, 0, width, height);
    for(var i = 0; i < lines.length; i++){
        lines[i].next();
        if(lines[i].dead){
            lines[i] = new Line();
        }
    }
};
