/**16th on the hot list! */
/** Forgot this earlier, but Tartarus Caeruleus' shape generator was used to create the top part of the visor. (Oops....)*/
background(0, 0, 0);
//Helmet base colors
scale(0.9);
translate(21, 13);
pushMatrix();
fill(163, 163, 163);
noStroke();
ellipse(200, 166, 300, 284);
rect(200 - 150, 171, 300, 185);
triangle(50, 356, 179, 355, 178, 396);
triangle(400 - 50, 356, 400 - 179, 355, 400 - 178, 396);
rect(178, 355, 44, 41);

//Blue around visor
fill(0, 64, 255);
rect(50, 160, 300, 196);
triangle(50, 356, 179, 355, 178, 401);
triangle(400 - 50, 356, 400 - 179, 355, 400 - 178, 401);
rect(178, 355, 44, 46);
bezier(50, 160, 174, 157, 400 - 174, 157, 350, 160);
//Debugging (New and improved!)

//Blue around cheek
fill(28, 43, 140);
bezier(50, 204, 165, 222, 161, 307, 176, 401);
bezier(400 - 50, 204, 400 - 165, 222, 400 - 161, 307, 400 - 176, 401);
quad(50, 205, 50, 357, 100, 373, 84, 225);
quad(400 - 50, 205, 400 - 50, 357, 400 - 100, 373, 400 - 84, 225);
triangle(50, 347, 42, 337, 45, 333);
triangle(45, 333, 50, 327, 53, 359);
rect(45, 336 - 183, 5, 183, 2);
rect(400 - 50, 336 - 178, 5, 182, 2);
rect(40, 153, 8, 100, 2);
triangle(400 - 50, 347, 400 - 42, 337, 400 - 45, 333);
triangle(400 - 45, 333, 400 - 50, 327, 400 - 53, 359);


//Grey around cheek && grey antenna (I can't remember the name!)
fill(163, 163, 163);
bezier(62, 362, 81, 170, 139, 292, 174, 400);
bezier(400 - 62, 362, 400 - 81, 170, 400 - 139, 292, 400 - 174, 400);
rect(43, -9, 4, 192);


//Black lines and forehead markings
noFill();
stroke(0, 0, 0);
bezier(50, 152, 162, 148, 400 - 162, 148, 400 - 50, 152);
translate(0, -10);
bezier(52, 152, 162, 148, 400 - 162, 148, 400 - 52, 152);
translate(0, 19);
stroke(138, 138, 138);
translate(11, 0);
triangle(163, 135, 178, 133, 178, 137);
translate(-22, 0);
triangle(400 - 163, 135, 400 - 178, 133, 400 -178, 137);
popMatrix();

//visor
translate(0, 10);
noStroke();
fill(0, 0, 0);
beginShape();
vertex(60, 169);
vertex(60, 180);
vertex(167, 202);
vertex(186, 391);
vertex(400 - 186, 391);
vertex(400 - 167, 202);
vertex(400 - 60, 180);
vertex(400 - 60, 169);
endShape(CLOSE);
bezier(60, 170, 175, 166, 400 - 175, 166, 400 - 60, 170);

//antenna
translate(0, -11);
fill(85, 107, 133);
quad(50, -11, 50, 10, 41, 10, 30, -7);
fill(48, 57, 140);
triangle(50, -11, 108, -11, 50, 10);
rect(67, -11, 41, 5, 2);
fill(38, 44, 99);
triangle(64, 4, 93, -6, 104, -6);
translate(0, 10);
textSize(13);
fill(224, 243, 255);
resetMatrix();
textAlign(CENTER, CENTER);
text("I'm just a simple man, trying to\nmake my way in the universe...", 200, 384);
/**
mouseReleased = function(){
    println(mouseX + ", " + mouseY);
};
*/
