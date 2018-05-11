/**THANK YOU FOR STOPPING THE HATE FLAGGING! THANK YOU SO MUCH!*/
/**
 * All characters are copyright Universal.  No copyright infringement intended. Thank you.
 * 
 * Check out this program!
 * https://www.khanacademy.org/computer-programming/timmy-turner/4773024019644416
 * 
 * Hobbes is an anthropomorphic tiger created by Bill Watterson for the Calvin and Hobbes comic strips. When seen by Calvin, he looks like this, but when he is seen by other people, he looks like a stuffed tiger... which is he? ;)
 * 
 * Why did you guys flag? I did nothing wrong. I wasn't inappropriate and I didn't plagiarize. And on top of that, join.me was running, and I was being watched by a lot of users! For more on this before you flag, check out: https://www.khanacademy.org/computer-programming/flagging-annoyances/4796293833687040
 * 
 * I got 1000 Kelvin! Cool!
 * http://puu.sh/jRNiy/0ca30220f8.png
 * 
 * No flags! Thanks to whoever came and removed them!
 * http://www.khanacademy.org/api/labs/scratchpads/5297153323958272
 * 
 * 
 * Old flags:
 * "flags": ["plagiarism: copyright\n", "doesnotbelong: ", "vote-soliciting: ", "inappropriate: ", "vote-soliciting: ", "doesnotbelong: You are so stupid", "inappropriate: ", "plagiarism: ", "inappropriate: ", "inappropriate: "]
 * Copyright? Let me tell you something. There is a thing called "Fair Use".
 * Definition: In United States copyright law, fair use is a doctrine that permits limited use of copyrighted material without acquiring permission from the rights holders. 
 * 
 * I quote SpongeJr:
 * If Megacorp, Inc. sends a DMCA takedown notice to Khan Academy or otherwise made a big deal because some learner in the CS section learning programming used Steamboat Willie in a project, made a Dig-Dug clone, or a game about Harry Potter characters, it would be a Huge Jerk Move™, in my opinion, and a terrible PR decision. They might as well go after elementary schools for hanging kids' drawing of Sonic the Hedgehog up on the walls if they're going to do that... again, in my opinion.
 * 
 * I quote Infiltration:
 *  I highly doubt that people will be looking around a learning website for copyright infringements. If they had, I'd probably have been asked to take down some of my programs already. (anyway, this isn't making them lose money or anything)
 * 
 * I have the right to create this program under fair use. Stop hate flagging people!
 * 
 * And also remember: All code is owned by its respective author and made available under an MIT license. All non-code (such as writing, drawings, images, etc.) are also owned by their respective author and made available under a Creative Commons Attribution License. For more information please see the Terms of Service.
 * 
 * Does not belong? What do you mean? It isn't like I made a button clicker or anything. 
 * 
 * Vote soliciting? Anyone who knows me knows that I hate vote soliciting. STOP HATE FLAGGING PEOPLE PLEASE I BEG OF YOU!
 * 
 * Inappropriate? How? This is a stuffed tiger from a comic, people! I didn't do the other well known picture from Calvin and Hobbes for obvious reasons! Please don't hate flag!
 * 
 * "You are so stupid?" Why must everyone hate me?
 */

//Where should I start?

//With comments.
/**Unlike DY, I do my bezierVertex()'s by hand. A round of applause to he who has SVG :)

Sadly, my source image is just a durned PNG.


Made while chatting with Tariq Jabbar, Raumaankidwai, and Prudii!

And I finished it while chatting with Tariq, Raumaan, Absolute Zero, T#1B12P, Eytukan (sorry), and Loki! ;)
*/
//60th vote by The nu!
//200th vote by Light Runner!
//300th vote by TimeStopper!

var mouseIsReleased = false;
//Why hello! 
scale(width/400, height/400);
//Smooth...
smooth();
noStroke();

//Not working?

//The... eyes.
var eye = function(x, y, w, h, theta){
    pushMatrix();
    translate(x, y);
    rotate(theta);
    fill(0, 0, 0);
    ellipse(0, 0, w, h);
    popMatrix();
};

var c = function(a){
    beginShape();
    for(var i = 0; i < a.length; i++){
        vertex(a[i][0], a[i][1]);
    }
    endShape();
};
var Hobbes = function(){
    //Because I feel like it.
    this.phase = false;
    this.colorScheme = color(255, 132, 0);
};

Hobbes.prototype.real = function() {
    eye(99, 181, 16, 42, -9);
    //hmm
    eye(144, 181, 16, 47, -9);
    
    beginShape(); {
    //DUN DUN DUN DUUUUUNNNNN!!!!!
    //Trying to do the thing on the left... this is way easier to draw XD
    vertex(47, 204);
    bezierVertex(58, 206, 73, 223, 81, 200);
    //darn...
    bezierVertex(82, 193, 80, 189, 80, 189);
    bezierVertex(72, 153, 77, 116, 79, 81);
    bezierVertex(73, 97, 65, 127, 68, 153);
    bezierVertex(69, 169, 72, 185, 74, 193);
    bezierVertex(76, 197, 74, 202, 65, 204);
    vertex(48, 204);
    //Oh I know, that shows I stink 
        //more fail XD
        
        //My attention span is too short for that XD
    } endShape(); //Forehead
    
    //Oh noes... the nose
    beginShape(); {
        //Why did I do this to myself? :(
        vertex(122, 221);
        bezierVertex(122, 221, 20, 228, 62, 234);
        bezierVertex(68, 237, 72, 237, 66, 244);
        bezierVertex(64, 248, 55, 256, 61, 265);
        bezierVertex(67, 273, 76, 290, 97, 286);
        vertex(131, 274);
        
        bezierVertex(135, 270, 142, 267, 142, 263);
        bezierVertex(144, 256, 145, 249, 141, 238);
        bezierVertex(139, 235, 138, 231, 136, 230);
        bezierVertex(135, 228, 132, 224, 124, 221);
        
    } endShape();
    /**
    noFill();
    stroke(0, 0, 0);
    */
    //Now the top of the head. Very complex shape.
    beginShape();
    //IT'S THE FINAL COUNTDOWN
    //Why is that song going through my head?
    vertex(64, 62);
    bezierVertex(62, 63, 57, 60, 63, 57);
    bezierVertex(70, 55, 79, 53, 88, 49);
    bezierVertex(93, 45, 93, 41, 88, 42);
    bezierVertex(80, 43, 76, 44, 75, 40);
    bezierVertex(75, 39, 75, 36, 80, 36);
    bezierVertex(85, 36, 106, 34, 119, 31);
    bezierVertex(124, 30, 132, 26, 126, 23);
    bezierVertex(124, 19, 118, 11, 126, 3);
    bezierVertex(141, -3, 164, -3, 173, 6);
    bezierVertex(179, 9, 227, 14, 264, 11);
    bezierVertex(270, 11, 293, 10, 296, 2);
    bezierVertex(322, -13, 334, 0, 342, 4);
    vertex(346, 7);
    
    //That durned positioning...
    
    bezierVertex(350, 10, 364, 19, 333, 70);
    bezierVertex(331, 72, 330, 75, 330, 81);
    bezierVertex(331, 90, 335, 118, 335, 137);
    //Why!?!?!?!?!?!?!?!?!?!?!
    
    bezierVertex(336, 141, 336, 143, 341, 141);
    bezierVertex(352, 138, 366, 133, 392, 130);
    bezierVertex(393, 131, 397, 131, 365, 159);
    vertex(375, 159);
    bezierVertex(379, 159, 395, 163, 412, 173);
    bezierVertex(398, 181, 384, 185, 364, 192);
    vertex(380, 203);
    bezierVertex(385, 207, 397, 219, 373, 220);
    bezierVertex(361, 222, 339, 223, 351, 219);
    bezierVertex(364, 215, 376, 212, 372, 207);
    bezierVertex(354, 199, 339, 192, 363, 186);
    bezierVertex(370, 185, 386, 175, 372, 168);
    bezierVertex(360, 166, 349, 165, 357, 157);
    vertex(362, 154);
    bezierVertex(366, 152, 397, 127, 343, 151);
    bezierVertex(334, 154, 327, 161, 327, 165);
    bezierVertex(327, 169, 328, 173, 320, 172);
    bezierVertex(316, 172, 311, 173, 308, 167);
    bezierVertex(309, 164, 309, 156, 296, 165);
    bezierVertex(290, 168, 285, 173, 287, 165);
    bezierVertex(293, 156, 302, 153, 312, 145);
    vertex(311, 151);
    bezierVertex(309, 155, 318, 159, 315, 156);
    bezierVertex(318, 156, 323, 156, 324, 147);
    bezierVertex(325, 142, 323, 129, 319, 119);
    bezierVertex(318, 115, 316, 104, 301, 102);
    bezierVertex(293, 101, 279, 103, 259, 108);
    bezierVertex(252, 110, 247, 113, 238, 110);
    bezierVertex(235, 109, 226, 107, 261, 96);
    bezierVertex(246, 102, 274, 89, 305, 86);
    bezierVertex(305, 86, 313, 86, 306, 81);
    bezierVertex(303, 78, 266, 73, 307, 53);
    bezierVertex(310, 50, 317, 48, 319, 40);
    bezierVertex(319, 39, 318, 26, 307, 36);
    bezierVertex(305, 38, 304, 41, 298, 43);
    bezierVertex(296, 46, 286, 51, 271, 46);
    bezierVertex(269, 45, 261, 43, 259, 39);
    bezierVertex(257, 35, 255, 31, 241, 30);
    bezierVertex(237, 32, 232, 31, 238, 37);
    bezierVertex(240, 41, 246, 53, 233, 69);
    bezierVertex(231, 71, 231, 73, 229, 70);
    bezierVertex(229, 43, 213, 29, 175, 30);
    bezierVertex(131, 31, 160, 43, 164, 42);
    bezierVertex(178, 44, 183, 47, 193, 76);
    bezierVertex(195, 79, 193, 84, 185, 81);
    bezierVertex(178, 76, 155, 42, 106, 62);
    bezierVertex(104, 63, 100, 69, 103, 67);
    bezierVertex(105, 70, 103, 72, 99, 73);
    bezierVertex(97, 74, 89, 72, 81, 75);
    bezierVertex(78, 77, 76, 79, 71, 80);
    bezierVertex(70, 81, 60, 84, 44, 83);
    bezierVertex(41, 82, 36, 81, 43, 76);
    bezierVertex(50, 74, 59, 72, 79, 63);
    bezierVertex(80, 64, 83, 59, 75, 61);
    endShape();
    
    pushMatrix();
    translate(9, 0);
    beginShape();
    vertex(271, 152);
    bezierVertex(268, 163, 264, 173, 255, 182);
    bezierVertex(253, 185, 244, 190, 242, 178);
    bezierVertex(244, 176, 243, 163, 239, 155);
    bezierVertex(238, 154, 235, 151, 241, 148);
    bezierVertex(243, 148, 247, 149, 248, 156);
    bezierVertex(249, 161, 250, 170, 258, 164);
    
    endShape();
    popMatrix();
    
    beginShape();
    vertex(239, 166);
    bezierVertex(235, 170, 236, 178, 231, 185);
    bezierVertex(227, 191, 222, 192, 217, 187);
    bezierVertex(217, 185, 208, 173, 203, 164);
    bezierVertex(203, 162, 197, 150, 213, 157);
    bezierVertex(215, 159, 225, 162, 221, 172);
    bezierVertex(221, 176, 221, 179, 226, 175);
    bezierVertex(228, 175, 233, 169, 232, 162);
    bezierVertex(232, 160, 232, 158, 235, 158);
    bezierVertex(238, 159, 240, 159, 240, 161);
    endShape();
    
    pushMatrix();
    eye(221, 151, 5, 12, -51);
    popMatrix();
    
    beginShape();
    vertex(307, 243);
    bezierVertex(347, 244, 397, 246, 353, 249);
    bezierVertex(326, 251, 309, 253, 325, 270);
    vertex(354, 286);
    vertex(312, 282);
    bezierVertex(303, 282, 296, 281, 300, 291);
    vertex(302, 310);
    bezierVertex(301, 313, 297, 318, 295, 304);
    bezierVertex(294, 298, 289, 281, 297, 278);
    bezierVertex(304, 278, 328, 278, 309, 247);
    endShape();
    eye(274, 311, 4, 14, -33);
    
    //THE HARD PART... AGAIN
    
    beginShape();
    vertex(252, 318);
    bezierVertex(258, 326, 276, 358, 313, 400);
    vertex(303, 400);
    vertex(288, 386);
    vertex(268, 400);
    vertex(237, 400);
    bezierVertex(242, 394, 262, 355, 226, 365);
    bezierVertex(222, 368, 209, 376, 211, 381);
    bezierVertex(213, 385, 208, 391, 199, 400);
    vertex(176, 400);
    bezierVertex(183, 392, 190, 378, 195, 358);
    bezierVertex(196, 358, 199, 353, 204, 350);
    bezierVertex(224, 345, 241, 341, 234, 322);
    bezierVertex(234, 318, 236, 311, 241, 304);
    bezierVertex(245, 304, 250, 307, 251, 313);
    endShape();
    
    //Five eyes on one tiger? o_O
    eye(217, 323, 4, 16, 16);
    
    //Make that six, central command. ^_^
    eye(193, 327, 4, 29, 32);
    
    stroke(0, 0, 0);
    noFill();
    strokeWeight(8);
    arc(137, 295, 100, 100, 38, 89);
    noStroke();
    
    fill(0, 0, 0);
    beginShape();
    vertex(137, 269);
    bezierVertex(135, 273, 133, 280, 140, 282);
    bezierVertex(145, 283, 153, 285, 161, 290);
    bezierVertex(162, 292, 170, 295, 158, 309);
    //There goes the smile XD
    bezierVertex(156, 313, 149, 325, 148, 349);
    vertex(145, 356);
    bezierVertex(145, 362, 144, 369, 149, 373);
    bezierVertex(152, 376, 155, 382, 148, 380);
    bezierVertex(144, 381, 140, 381, 140, 400);
    vertex(129, 400);
    bezierVertex(129, 398, 113, 362, 84, 351);
    vertex(84, 351);
    bezierVertex(98, 349, 133, 346, 138, 328);
    bezierVertex(139, 311, 139, 291, 121, 291);
    bezierVertex(114, 290, 45, 296, 31, 339);
    bezierVertex(31, 342, 23, 367, 32, 400);
    vertex(20, 400);
    bezierVertex(20, 391, 18, 336, 45, 304);
    bezierVertex(52, 298, 65, 290, 77, 283);
    endShape();
    
    beginShape();
    vertex(94, 400);
    bezierVertex(94, 400, 74, 386, 88, 400);
    endShape();
    
    //<oops caps lock XD>
    //Yeah, I can't figure that out :(
    
    //text("Me ees cool Hobbes. me have bandana.", 200, 292);
    
    //Did you see that?
    
    //What was that?
    
    //I'll try to do it again.
    
    
    //Highlights
    fill(255, 255, 255);
    beginShape(); {
        vertex(125, 242);
        bezierVertex(121, 239, 100, 238, 83, 247);
        bezierVertex(69, 260, 69, 261, 84, 256);
        bezierVertex(98, 250, 173, 228, 94, 250);
    } endShape();
};

Hobbes.prototype.color = function() {
    fill(this.colorScheme);
    beginShape();vertex(184, 81);bezierVertex(184, 81, 193, 105, 204, 160);vertex(224, 186);vertex(238, 167);vertex(238, 163); vertex(253, 155); vertex(256, 174); vertex(277, 161); vertex(292, 164); vertex(308, 158); vertex(321, 164); vertex(333, 147); vertex(321, 63); vertex(342, 19); vertex(304, 16); vertex(270, 33); vertex(232, 24); vertex(172, 21); vertex(145, 30);vertex(137, 48); vertex(173, 60); vertex(181, 72); endShape();
    beginShape();vertex(178, 325); vertex(187, 337); vertex(200, 319); vertex(216, 328); vertex(219, 319); vertex(237, 323); vertex(306, 400); vertex(134, 400); vertex(145, 344); vertex(156, 343); vertex(168, 338);endShape();
    //Done!
};

Hobbes.prototype.plush = function(){
    strokeWeight(8);
    //The body!
    //DUN DUN DUN DUN TARIQ!
    fill(this.colorScheme);
    beginShape();
    vertex(149, 164);
    bezierVertex(149, 164, 98, 241, 125, 353);
    bezierVertex(127, 358, 130, 368, 115, 365);
    bezierVertex(108, 364, 71, 364, 31, 373);
    bezierVertex(24, 377, 9, 383, 26, 404);
    vertex(42, 404);
    bezierVertex(44, 397, 38, 389, 52, 387);
    bezierVertex(61, 385, 99, 382, 128, 385);
    bezierVertex(138, 386, 184, 396, 243, 389);
    bezierVertex(252, 387, 270, 370, 249, 353);
    vertex(249, 353);
    bezierVertex(258, 356, 274, 358, 290, 350);
    bezierVertex(295, 344, 311, 324, 283, 315);
    vertex(205, 312);
    bezierVertex(202, 309, 201, 300, 201, 293);
    bezierVertex(201, 291, 217, 293, 212, 266);
    vertex(212, 266);
    bezierVertex(218, 268, 231, 272, 239, 260);
    bezierVertex(241, 254, 247, 241, 231, 228);
    bezierVertex(227, 223, 210, 215, 201, 212);
    vertex(194, 202);
    //Yeah, Eytukan... I get mixed up and start clicking randomly :P
    endShape(CLOSE);
    //Cool Tariq! 
    //He could name his kid Calvin Hobbes! XD
    
    //The head!
    pushMatrix();
    translate(200, 129);
    rotate(31);
    stroke(0, 0, 0);
    strokeWeight(6);
    fill(this.colorScheme);
    ellipse(0, 0, 100, 134);
    popMatrix();
    noStroke();
    fill(0, 0, 0);
    //Darn it this is wrong and bad!
    beginShape();
    vertex(176, 79);
    bezierVertex(176, 79, 174, 58, 185, 49);
    bezierVertex(188, 48, 192, 46, 197, 53);
    bezierVertex(199, 57, 200, 62, 201, 67);
    endShape();
    beginShape();
    vertex(253, 98);
    bezierVertex(264, 101, 282, 101, 275, 109);
    bezierVertex(275, 114, 269, 121, 254, 124);
    endShape();
    beginShape();
    vertex(175, 85);
    bezierVertex(176, 86, 211, 124, 163, 94);
    endShape();
    beginShape();
    vertex(158, 105);
    bezierVertex(158, 107, 207, 129, 148, 118);
    endShape();
    beginShape();
    vertex(145, 136);
    bezierVertex(145, 145, 223, 118, 147, 152);
    endShape();
    beginShape();
    vertex(193, 72);
    bezierVertex(193, 74, 213, 111, 210, 67);
    vertex(201, 69);
    endShape();
    beginShape();
    vertex(220, 67);
    bezierVertex(222, 70, 227, 108, 234, 71);
    endShape();
    beginShape();
    vertex(243, 81);
    bezierVertex(243, 83, 245, 112, 252, 95);
    endShape();
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(4);
    beginShape();
    vertex(215, 147);
    bezierVertex(210, 140, 192, 133, 173, 151);
    bezierVertex(170, 157, 160, 169, 171, 193);
    bezierVertex(173, 198, 181, 205, 195, 196);
    bezierVertex(205, 192, 226, 181, 233, 170);
    bezierVertex(235, 168, 239, 160, 225, 155);
    endShape(CLOSE);
    strokeWeight(8);
    beginShape();
    vertex(173, 198);
    bezierVertex(173, 198, 181, 205, 195, 196);
    bezierVertex(205, 192, 226, 181, 236, 164);
    endShape();
    strokeWeight(4);
    beginShape();
    vertex(189, 203);
    bezierVertex(189, 203, 192, 230, 210, 265);
    bezierVertex(212, 269, 213, 290, 203, 290);
    vertex(200, 292);
    vertex(196, 293);
    bezierVertex(197, 301, 197, 305, 200, 313);
    bezierVertex(197, 305, 201, 323, 208, 344);
    vertex(229, 347);
    //vertex(205, 315);
    //bezierVertex(204, 268, 204, 337, 238, 349);
    bezierVertex(244, 350, 267, 361, 257, 377);
    bezierVertex(260, 374, 254, 390, 230, 388);
    bezierVertex(224, 390, 219, 364, 227, 347);
    bezierVertex(214, 345, 186, 340, 157, 336);
    bezierVertex(155, 328, 152, 306, 158, 275);
    bezierVertex(161, 273, 168, 278, 169, 278);
    bezierVertex(180, 264, 187, 254, 204, 254);
    bezierVertex(203, 253, 180, 241, 158, 224);
    bezierVertex(160, 222, 165, 213, 176, 201);
    //TRUE... OH NOES
    endShape();
    //Hi AZ!
    beginShape();
    vertex(171, 279);
    bezierVertex(171, 278, 183, 286, 196, 293);
    //Yeah, it did. But this is the rerelease! OH YEAH!
    endShape();
    //Watch this guys!
    strokeCap(SQUARE);
    //not right now AZ
    //Yeah, it's common. Guess why I haven't drawn that? XD
    strokeWeight(9);
    noFill();
    bezier(143, 179, 155, 184, 166, 192, 175, 203);
    bezier(134, 200, 146, 204, 155, 207, 161, 219);
    bezier(158, 222, 148, 225, 136, 225, 124, 235);
    bezier(122, 241, 130, 255, 142, 267, 158, 276);
    bezier(168, 232, 159, 238, 151, 246, 153, 271);
    bezier(183, 242, 173, 248, 168, 256, 163, 277);
    bezier(118, 277, 129, 276, 139, 276, 156, 282);
    bezier(119, 305, 130, 303, 139, 305, 155, 310);
    bezier(121, 341, 133, 338, 147, 333, 157, 335);
    strokeCap(ROUND);
    bezier(171, 342, 159, 351, 151, 362, 152, 387);
    bezier(197, 344, 188, 353, 185, 367, 188, 390);
    bezier(214, 348, 205, 359, 209, 369, 213, 389);
    bezier(124, 366, 124, 372, 126, 376, 127, 384);
    bezier(104, 367, 101, 372, 100, 374, 108, 384);
    bezier(85, 368, 85, 373, 85, 378, 90, 383);
    bezier(66, 371, 62, 376, 62, 379, 70, 384);
    bezier(32, 376, 35, 376, 45, 383, 48, 387);
    bezier(24, 398, 26, 395, 32, 394, 41, 395);
    bezier(219, 315, 220, 323, 220, 335, 216, 343);
    bezier(200, 242, 204, 232, 210, 228, 218, 222);
    fill(255, 255, 255);
    //Can you wait until I'm done?
    strokeWeight(2);
    beginShape();
    vertex(246, 317);
    bezierVertex(246, 317, 251, 325, 251, 333);
    bezierVertex(244, 352, 255, 356, 269, 352);
    bezierVertex(287, 353, 295, 347, 301, 336);
    bezierVertex(303, 325, 290, 319, 281, 318);
    //vertex(266, 316);
    endShape();
    beginShape();
    vertex(209, 260);
    bezierVertex(212, 245, 219, 236, 234, 231);
    bezierVertex(232, 235, 260, 268, 210, 263);
    endShape();
    strokeCap(SQUARE);
    strokeCap(ROUND);
    fill(0, 0, 0);
    beginShape();
    vertex(196, 159);
    bezierVertex(200, 166, 201, 171, 197, 176);
    vertex(194, 180);
    vertex(180, 181);
    vertex(178, 182);
    vertex(191, 185);
    vertex(194, 193);
    vertex(196, 192);
    vertex(194, 184);
    vertex(203, 183);
    bezierVertex(205, 180, 212, 174, 217, 173);
    bezierVertex(214, 167, 205, 161, 196, 159);
    endShape();
    
    //The last frontier!
    eye(215, 127, 9, 16, 31);
    eye(232, 135, 6, 17, 33);
};

var hobbes = new Hobbes();

var draw = function() {
    
    
    if(mouseIsPressed){
        background(255, 255, 255);
        fill(0, 0, 0);
        text("Only Calvin is looking...", 0, 16);
        hobbes.color();
        hobbes.real();
        //hobbes.plush();
    }else{
        background(255, 255, 255);
        fill(0, 0, 0);
        text("You're looking. (click)", 28, 108);
        hobbes.plush();
    }
    mouseReleased = function(){
        print(mouseX + ", " + mouseY + ", ");
    };
    keyReleased = function(){
        println("");
    };
    status("Hobbes Rerelease, created by Blaze [CT-2/002-24]");
    //background(255, 255, 255);
};
