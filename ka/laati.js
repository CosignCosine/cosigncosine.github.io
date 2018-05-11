//I am CT-2/002-24, and this is all my code.  I made the whole code, and I started from a blank canvas and a blank code page.

//This Republic Gunship was created for InceptionTime.


//Program first, ask questions later.

//I created a function for this program that you can use (circ) in your programs. It has all the built in errors that the Oh Noes Guy/Error Buddy usually says about functions. Enjoy!

var creator = "CT-2/002-24"; //Change if moving the code

if(height !== width){
    throw("I'm sorry, but this canvas size is not supported by this program! Please change your canvas size to one I can understand.");
}
var circ = function(x, y, w){
    if(arguments.length !== 3){
        throw("I thought \"circ\" takes 3 arguments, not " + arguments.length + "!");
    }
    if(w > width){
        throw("The circle is bigger than the canvas! Perhaps you have made a mistake in your code?");
    }
    
    ellipse(x, y, w, w);
};//Circle function created by me (CT-2/002-24) to use on this project
var r = function(){
    background(237, 228, 228);
    strokeWeight(7);
    fill(255, 255, 255);
    circ(200, 200, 300);
    fill(0, 0, 0);
    for(var i = 0; i<=6; i++){
        strokeWeight(11);
        translate(200, 200);
        rotate(i*360/7);
        pushMatrix();
        translate(-200, -200);
        rect(200, 200, 10, 98);
        bezier(178, 73, 153, 79, 140, 86, 121, 100);
        popMatrix();
        resetMatrix();
    }
    fill(0, 0, 0);
    circ(200, 200, 82);
    var dr = get(0, 0, 400, 400);
    return dr;
    /**
    mouseReleased = function(){
        println(mouseX + ", " + mouseY);
    };
    */
};
var draw = function() {
    
    background(255, 255, 255);
    var q = r();
    
    strokeWeight(1);
    background(224, 208, 114);
    fill(82, 0, 0);
    quad(21, 183, 48, 183, 130, 169, 148, 120);
    fill(0, 0, 0, 50);
    circ(43, 170, 33);
    strokeWeight(3);
    stroke(217, 217, 217);
    line(16, 183, 183, 100);
    noStroke();
    
    fill(138, 0, 0);
    for(var i = 0; i<40; i++){
        circ(-(4.1)*i + 243, 0.5*i + 76, 40-i);
    }
    for(var i = 0; i<8; i++){
        circ(-(4.1)*i + 272, 0.5*i + 72, 40);
        
    }
    triangle(117, 131, 208, 71, 215, 91);
    fill(138, 0, 0);
    rotate(-8);
    rect(63, 102, 65, 10, 5);
    resetMatrix();
    fill(237, 228, 228);
    beginShape();{
    vertex(34, 230);
    vertex(36, 287);
    vertex(21, 321);
    vertex(28, 347);
    vertex(46, 359);
    vertex(88, 374);
    vertex(121, 367);
    vertex(147, 357);
    vertex(300, 263);
    vertex(322, 212);
    vertex(331, 129);
    vertex(299, 67);
    vertex(223, 65);
    vertex(47, 214);
    }endShape(); //initial body
    fill(173, 173, 173);
    circ(47, 324, 44);
    circ(118, 343, 43);
    fill(124, 209, 81);
    stroke(222, 222, 222);
    strokeWeight(3);
    line(32, 326, -41, 368);
    line(114, 347, 109, 395);
    noStroke();
    beginShape();{
        vertex(48, 360);
        vertex(27, 346);
        vertex(33, 344);
        vertex(43, 329);
        vertex(44, 320);
        vertex(41, 310);
        vertex(32, 296);
        vertex(35, 290);
        vertex(61, 301);
        vertex(110, 310);
        vertex(134, 310);
        vertex(149, 339);
        vertex(127, 321);
        vertex(117, 318);
        vertex(110, 320);
        vertex(102, 325);
        vertex(96, 337);
        vertex(89, 365);
        vertex(97, 372);
        vertex(88, 374);
    }endShape(); //green on front
    fill(168, 0, 0);
    beginShape();{
    vertex(36, 234);
vertex(50, 228);
vertex(60, 226);
vertex(68, 231);
vertex(88, 236);
vertex(97, 230);
vertex(110, 231);
vertex(131, 217);
vertex(128, 205);
vertex(167, 168);
vertex(178, 174);
vertex(190, 167);
vertex(185, 155);
vertex(197, 145);
vertex(203, 145);
vertex(223, 132);
vertex(219, 112);
vertex(191, 102);
vertex(175, 105);
vertex(154, 122);
vertex(144, 136);
vertex(101, 157);
vertex(75, 182);
vertex(61, 210);
vertex(38, 224);
    }endShape(); //pilot seat, forgot the name XD
    fill(102, 102, 102);
    rotate(53);
    ellipse(207, 57, 61, 92);
    ellipse(205, -31, 53, 84);
    resetMatrix();
    fill(168, 0, 0);
    beginShape();{
        vertex(38, 209);
        vertex(38, 217);
        vertex(38, 228);
        vertex(48, 236);
        vertex(89, 246);
        vertex(90, 234);
        vertex(118, 204);
        vertex(122, 183);
        vertex(114, 166);
        vertex(96, 162);
        vertex(74, 167);
        vertex(89, 168);
        vertex(101, 169);
        vertex(113, 177);
        vertex(114, 195);
        vertex(108, 209);
        vertex(96, 220);
        vertex(79, 228);
        vertex(68, 228);
        vertex(55, 224);
    }endShape();
    beginShape();{
        vertex(112, 153);
        vertex(113, 153);
        vertex(115, 143);
        vertex(120, 137);
        vertex(124, 133);
        vertex(127, 128);
        vertex(136, 121);
        vertex(146, 116);
        vertex(162, 113);
        vertex(170, 114);
        vertex(177, 116);
        vertex(182, 122);
        vertex(186, 130);
        vertex(186, 139);
        vertex(172, 125);
        vertex(155, 122);
        vertex(132, 142);
        vertex(134, 153);
        vertex(126, 161);
        vertex(130, 166);
        vertex(136, 164);
        vertex(137, 182);
        vertex(120, 178);
        vertex(108, 164);
    }endShape();
    fill(102, 102, 102);
    ellipse(152, 245, 22, 40);
    beginShape();{vertex(142, 253);
vertex(175, 324);
vertex(177, 326);
vertex(178, 333);
vertex(176, 338);
vertex(199, 326);
vertex(200, 320);
vertex(200, 316);
vertex(199, 310);
vertex(197, 309);
vertex(188, 302);
vertex(184, 292);
vertex(163, 239);}endShape();
    fill(196, 196, 196);
    beginShape();{
        vertex(177, 211);
        vertex(179, 234);
        vertex(209, 288);
        vertex(215, 292);
        vertex(220, 297);
        vertex(220, 301);
        vertex(221, 308);
        vertex(218, 313);
        vertex(288, 272);
        vertex(296, 267);
        vertex(298, 262);
        vertex(301, 256);
        vertex(301, 246);
        vertex(261, 179);
    }endShape();
    fill(171, 171, 171);
    beginShape();
    vertex(273, 169);
    vertex(274, 187);
    vertex(309, 245);
    vertex(314, 250);
    vertex(315, 255);
    vertex(315, 259);
    vertex(312, 264);
    vertex(310, 267);
    vertex(306, 270);
    vertex(306, 270);
    vertex(351, 250);
    vertex(358, 170);
    vertex(357, 159);
    vertex(357, 145);
    endShape();
    fill(232, 223, 223);
    quad(304, 77, 256, 151, 415, 174, 411, 125);
    fill(168, 0, 0);
    triangle(309, 159, 290, 123, 388, 170);
    triangle(299, 93, 291, 110, 388, 152);
    fill(237, 228, 228);
    quad(339, 77, 301, 92, 415, 174, 411, 125);
    fill(168, 0, 0);
    for(var i = 0; i<8; i++){
        circ(-(4.1)*i + 328, 0.5*i + 73, 40);
        
    }
    for(var i = 0; i<40; i++){
        circ(-(4.1)*i + 300, 0.5*i + 76, 40-i);
        
    }
    rotate(-8);
    rect(118, 110, 65, 10, 5);
    resetMatrix();
    
    noFill();
    strokeWeight(1);
    stroke(173, 173, 173);
    line(88, 246, 91, 270);
    bezier(91, 271, 57, 273, 52, 269, 35, 262);
    bezier(91, 271, 111, 264, 125, 259, 141, 254);
    line(104, 266, 110, 295);
    line(110, 295, 140, 291);
    line(140, 291, 169, 343);
    
    //Debugging
    mouseReleased = function(){
        print("vertex(" + mouseX + ", " + mouseY + ");\n");
    };
    Program.assertEqual(creator, "CT-2/002-24");
    keyReleased = function(){
        println("");
    };
    image(q, 214, 145, 33, 39);
    fill(0, 0, 0, 50);
    circ(222, 300, 69);
    noStroke();
    fill(125, 0, 0);
    rect(222, 300, 0, 0.1, -33);
};
