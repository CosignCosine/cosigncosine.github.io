var spartan = function(x, y, s){
    pushMatrix();
    translate(x, y);
    translate(-200, -200);
    scale(s);
    //translate(55,55);
    //scale(0.8);
    var COLOR = color(2, 91, 64);
    fill(COLOR);
    arc(220, 200, 225,223, 91, 347);
    beginShape();
    vertex(219, 344);
    bezierVertex(219, 344, 242, 361, 329, 394);
    bezierVertex(320, 277, 317, 322, 323, 240);
    bezierVertex(313, 244, 285, 247, 263, 228);
    bezierVertex(279, 213, 297, 201, 318, 208);
    bezierVertex(330, 216, 346, 232, 343, 265);
    vertex(391, 275);
    bezierVertex(374, 252, 339, 207, 328, 168);
    vertex(202, 143);
    vertex(115, 238);
    bezierVertex(116, 253, 134, 278, 108, 351);
    endShape();
    translate(200, 200);
    //fill(255, 0, 0);
    beginShape();
    vertex(17, -123);
    bezierVertex(17, -123, 16, -133, 18, -146);
    vertex(18, -157);
    bezierVertex(18, -157, 33, -161, 71, -151);
    bezierVertex(62, -150, 39, -146, 25, -124);
    endShape();
    pushMatrix();
    rotate(10);
    translate(0, 2);
    for(var i = 0; i < 7; i++){
        
        rotate(-10);
        translate(1, 2);
    quad(8, -159, 8, -122, -3, -121, -8, -157);
    
    }
    popMatrix();
    beginShape();
    vertex(-99, -41);
    vertex(-131, -55);
    bezierVertex(-133, -50, -135, -40, -137, -11);
    bezierVertex(-135, -13, -125, -33, -104, -33);
    endShape();
    beginShape();
    vertex(81, -158);
    bezierVertex(81, -158, -26, -187, -106, -109);
    bezierVertex(-110, -105, -142, -76, -144, -9);
    bezierVertex(-141, 3, -146, 61, -198, 92);
    bezierVertex(-197, 86, -177, 54, -180, -10);
    bezierVertex(-182, -21, -198, -143, -97, -201);
    bezierVertex(-63, -218, 29, -264, 118, -213);
    endShape();
    /**
    quad(-15, -155, -11, -120, -21, -118, -32, -151);
    quad(-39, -149, -28, -116, -36, -113, -54, -142);
    quad(-62, -137, -41, -108, -49, -104, -74, -128);
    pushMatrix();
    translate(-4, 3);
    quad(-78, -125, -53, -101, -59, -96, -88, -115);
    popMatrix();
    */
    popMatrix();
};
var draw = function() {
    noStroke();
    background(255, 255, 255);
    spartan(226, 242, 0.9);
    mouseReleased = function(){
        print((mouseX - 200) + ", " + (mouseY - 284) + ", ");
    };
    keyReleased = function(){
        println("");
    };
};
