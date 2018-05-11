//Source: http://www.3dartistonline.com/users/407/thm1024/scout2.jpg

//Not at the top of the hot list? What? Well that means I have to program something else! Oh well.

/** This is an imperial scout trooper! Looks pretty awesome, right? :D
 * I guess in this situation it's good to be evil...
 * MUHAHAHAHAHAHAHAHAHAHA
 * ^inappropriate
 * *I find my lack of maturity disturbing.*
 */
/**@SUBSCRIBE_TO_ME: https://www.khanacademy.org/computer-programming/subscribe/6195547271725056 */

//CT-2/002-24 certified.

//Thanks to Aidabaida for his comments!

var circ = function(x, y, w){
    ellipse(x, y, w - 5, w);
}; //not quite a circle, but...


var scout = function(x, y){
    if(arguments.length !== 2){
        throw("scout() takes 2 parameters, not " + arguments.length);
    }
    if(x < -200 || y < -200 || x > 600 || y > 600){
        throw("Are you sure that's on the canvas? If so, please remember that this drawing is only 300px wide.");
    }
    //Fill parts:
    noStroke();
    pushMatrix();
    translate(x, y);
    //Underlays (a word! Thanks!)
    //Very Dark Grey
    fill(54, 54, 54);
    triangle(-129, -65, -106, -5, -101, -70);
    arc(-118, -49, 32, 32, 145, 270);
    quad(-132, -43, -87, 85, -72, 78, -102, -55);
    
    //White 255
    fill(255, 255, 255);
    circ(0, -30, 221);
    rect(82, -65, 40, 121, 16);
    rect(91, -15, 53, 105, 32);
    rect(81, 5, 40, 121, 16);
    pushMatrix();
    rotate(-16);
    rect(40, 32, 40, 121, 16);
    rect(59, 32, -118, 121);
    popMatrix();
    beginShape();
    vertex(-117, -66);
    vertex(-87, -89);
    vertex(-95, -72);
    endShape();
    
    //Mid gray
    fill(105, 105, 105);
    beginShape();
    vertex(-54, 55);
    bezierVertex(-50, 40, -48, 18, -20, 24);
    bezierVertex(-1, 34, -9, 31, 5, 45);
    bezierVertex(1, 41, 14, 59, 40, 103);
    vertex(50, 101);
    bezierVertex(57, 100, 66, 97, 73, 100);
    vertex(97, 92);
    vertex(97, 82);
    vertex(80, 85);
    vertex(50, 40);
    vertex(28, -75);
    vertex(-42, -75);
    vertex(-99, -67);
    vertex(-101, -67);
    bezierVertex(-104, -70, -117, -43, -103, 10);
    vertex(-95, 23);
    endShape();
    triangle(-54, 165, -44, 62, -104, 5);
    
    
    //Pretty Dark Grey
    fill(36, 36, 36);
    arc(-34, 21, 23, 12, 180, 360);
    
    //Now the final countdown song is going through my head...
    /**By the way, this is my third try at the visor. (HARD WORK) */
    
    noFill();
    stroke(94, 94, 94);
    beginShape();
    vertex(-58, 16);
    bezierVertex(-46, -6, -26, -6, -7, 13);
    bezierVertex(1, 23, 23, 43, 38, 32);
    bezierVertex(41, 26, 54, 12, 46, -4);
    bezierVertex(40, -34, 35, -29, 24, -33);
    bezierVertex(-15, -40, -55, -43, -92, -26);
    //bezierVertex(-107, -15, -101, -13, -102, -8);
    //bezierVertex(-102, -22, -104, -15, -101, -16);
    bezierVertex(-98, -21, -102, -18, -100, -10);
    bezierVertex(-104, 15, -73, 52, -66, 33);
    endShape(CLOSE);
    
    noStroke();
    fill(36, 36, 36);
    beginShape();
    vertex(-58, 16);
    bezierVertex(-46, -6, -26, -6, -7, 13);
    bezierVertex(1, 23, 23, 43, 38, 32);
    bezierVertex(41, 26, 54, 12, 46, -4);
    bezierVertex(40, -34, 35, -29, 24, -33);
    bezierVertex(-15, -40, -55, -43, -92, -26);
    //bezierVertex(-107, -15, -101, -13, -102, -8);
    //bezierVertex(-102, -22, -104, -15, -101, -16);
    bezierVertex(-98, -21, -102, -18, -100, -10);
    bezierVertex(-104, 15, -73, 52, -66, 33);
    endShape();
    
    
    //Very light Grey 209
    /**
    fill(209, 209, 209);
    bezier(-97, -78, -87, -100, -69, -124, -28, -136);
    */
    noStroke();
    
    //Dark Grey 122
    fill(122, 122, 122);
    
    beginShape();
    vertex(79, 85);
    vertex(63, -6);
    vertex(45, -15);
    vertex(40, -12);
    vertex(57, 90);
    bezierVertex(61, 92, 67, 92, 73, 88);
    endShape();
    beginShape();
    vertex(40, -11);
    vertex(29, -64);
    vertex(37, -68);
    vertex(53, -4);
    endShape();
    var yTrans = 3;
    translate(0, yTrans);
    beginShape();
    vertex(29, -66);
    bezierVertex(28, -72, 24, -74, 20, -74);
    vertex(19, -83);
    bezierVertex(25, -81, 31, -83, 37, -70);
    endShape();
    translate(0, -yTrans);
    beginShape();
    vertex(20, -80);
    bezierVertex(-40, -84, -68, -82, -132, -69);
    vertex(-128, -61);
    bezierVertex(-69, -73, -29, -74, 21, -70);
    endShape();
    beginShape();
    vertex(-138, -42);
    vertex(-130, -44);
    vertex(-87, 84);
    vertex(-96, 83);
    endShape();
    quad(-120, 11, -123, 26, -107, 82, -92, 84);
    
    
    
    //Darkest Gray 41
    fill(41, 41, 41);
    beginShape();
    vertex(-15, 164);
    vertex(-26, 66);
    bezierVertex(-27, 52, -33, 46, -44, 47);
    bezierVertex(-54, 49, -56, 55, -56, 66);
    vertex(-56, 66);
    vertex(-54, 164);
    endShape();
    rect(93, -4, 40, 84, 29);
    pushMatrix();
    translate(-52, -53);
    rotate(6);
    rectMode(CENTER);
    rect(0, 0, 5, 19, 2);
    rect(10, 0, 5, 14, 2);
    rect(20, 0, 5, 10, 2);
    
    rectMode(BASELINE);
    popMatrix();
    
    
    //White overlays
    fill(255, 255, 255);
    rect(83, -4, 24, 94);
    arc(106, 35, 15, 100, 270, 444);
    
    //Grey overlays
    fill(59, 59, 59);
    beginShape();
    vertex(-51, 162);
    vertex(-52, 67);
    bezierVertex(-50, 62, -52, 58, -42, 55);
    bezierVertex(-37, 55, -31, 60, -29, 66);
    vertex(-29, 66);
    vertex(-19, 162);
    endShape();
    
    //Light grey overlays (Rhyme, rhyme, rhyme on!)
    fill(87, 87, 87);
    beginShape();
    vertex(-48, 136);
    vertex(-48, 159);
    vertex(-21, 159);
    vertex(-24, 135);
    endShape();
    
    //Stroke highlights
    noFill();
    strokeWeight(1);
    stroke(255, 255, 255);
    //line(-58, 62, -55, 140);
    strokeWeight(9);
    stroke(122, 122, 122);
    bezier(-130, -64, -134, -61, -137, -54, -134, -44);
    strokeWeight(1);
    stroke(209, 209, 209);
    line(63, -6, 113, -3);
    line(28, -77, 101, -66);
    line(96, 91, 121, 90);
    strokeWeight(9);
    
    
    
    popMatrix();
};
var draw = function() {
    background(86, 117, 45);
    filter(BLUR);
    scout(200, 200);
    mouseReleased = function(){
        print((mouseX - 200) + ", " + (mouseY - 200) + "\n");
    };
    keyReleased = function(){
        println(" ");
    };
    fill(255, 255, 255);
    textAlign(CENTER);
    //text("you were saying something about being awesome?", 200, 384);
};
