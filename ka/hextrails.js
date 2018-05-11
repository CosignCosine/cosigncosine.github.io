//Inspired by: http://codepen.io/thebabydino/pen/zGmdep
//Yes. Another hexagon program that I'm done with. Woo, I so awesome.
//Thanks to Novem for the new pointer design!
/** SUBSCRIBE TO ME: https://www.khanacademy.org/computer-programming/subscribe/4305473776 */
colorMode(HSB);
var hexagon = function(x, y, w, h){
    pushMatrix();
    translate(x, y);
    rotate(30);
    beginShape();
    for(var i = 0; i < 360; i += (360/6)){
        vertex(cos(i)*w, sin(i)*h);
    }
    endShape(CLOSE);
    popMatrix();
};
var pointer = function(x, y){
    noFill();
    for(var i = 0; i < 30; i+=1){
        stroke(frameCount%255, 255, 255, map(i, 0, 90, 0, 255));
        ellipse(x, y, 90 - i, 90 - i,90-i,x,y,y+90);
    }
};
var r = 152;
var x = 200;
var y = 200 - r;
var speed = 9;
var l = speed;
var rBound = 130;
var rclBound = -5;
var rcuBound = 5;
var isDoingExtensivePull = false;
background(0, 0, 0);
draw = function(){
    fill(0, 0, 0, 5);
    rect(0, 0, 400, 400);
    stroke(round(frameCount/3)%255, 255, 255);
    pointer(x, y);
    fill(31, 31, 31);
    noStroke();
    for(var i = 0; i < 10; i++){
        for(var j = 0; j < 10; j++){
            hexagon(i*61 + (j%2)*30.5, j*52, 32, 32);
        }
    }
    x = cos(l)*r + 200;
    y = sin(l)*r + 200;
    l += speed;
    speed += random(-3, 3);
    speed = constrain(speed, -9, 9);
    r += random(rclBound, rcuBound);
    r = constrain(r, 15, 200);
    if(r > 170){
        isDoingExtensivePull = true;
        rcuBound = 0;
        rclBound = -5;
    }else if(r < 50){
        isDoingExtensivePull = true;
        rclBound = 0;
        rcuBound = 5;
    }
    if(isDoingExtensivePull && r > 100 && r < 130){
        isDoingExtensivePull = false;
        rclBound = -5;
        rcuBound = 5;
    }
};
