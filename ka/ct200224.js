/** As of my new update, cheat code "jet" no longer works. Sorry to any Jet lovers :(
 * 
 */
 var clone = {style: 2};
var circle = function(x, y, d){
    ellipse(x, y, d, d);
};
var captainrexmark = function(){
    /**Made with Farfalla 1.0 BETA
https://www.khanacademy.org/computer-programming/farfalla/6037364689469440?width=500*/
pushMatrix();
translate(106, 62);
scale(0.25);
beginShape();
vertex (265,363);
vertex (254,323);
vertex (237,267);
vertex (216,223);
vertex (197,183);
vertex (177,142);
vertex (160,100);
vertex (148,121);
vertex (145,137);
vertex (141,155);
vertex (144,171);
vertex (145,188);
vertex (149,202);
vertex (151,216);
vertex (155,232);
vertex (158,252);
vertex (162,266);
vertex (167,288);
vertex (174,309);
vertex (179,329);
vertex (180,340);
vertex (184,357);
vertex (196,366);
vertex (209,374);
vertex (202,357);
vertex (194,344);
vertex (193,323);
vertex (186,296);
vertex (181,281);
vertex (177,266);
vertex (174,254);
vertex (173,239);
vertex (170,220);
vertex (170,202);
vertex (167,186);
vertex (160,167);
vertex (158,152);
vertex (158,143);
vertex (166,154);
vertex (178,178);
vertex (185,191);
vertex (188,204);
vertex (191,214);
vertex (194,233);
vertex (199,250);
vertex (205,262);
vertex (211,276);
vertex (216,287);
vertex (220,298);
vertex (226,313);
vertex (232,326);
vertex (243,334);
vertex (255,351);
vertex (258,357);
vertex (263,365);
vertex (269,370);
endShape();

beginShape();
vertex (252,250);
vertex (265,254);
vertex (270,264);
vertex (273,271);
vertex (274,281);
vertex (275,289);
vertex (274,294);
vertex (268,290);
vertex (263,285);
vertex (257,277);
vertex (251,266);
vertex (251,259);
endShape();
popMatrix();
};
var applyColors = function(){
    switch(clone.style){
        case 2: {
            fill(255, 0, 0);
        }break;
        case 3: {
            fill(114, 184, 53);
        }break;
        case 4: {
            fill(0, 145, 255);
        }break;
        case 5: {
            fill(247, 255, 0);
        }break;
    }
};
var _clone = function(x, y, scaleF){
    //base
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(scaleF);
    fill(255, 255, 255);
    circle(0, -51, 199);
    rectMode(CENTER);
    rect(0, -117, 30, 99, 5);
    rect(0, 33, 199, 170, 5);
    rectMode(CORNER);
    pushMatrix();
    translate(0, 31);
    beginShape();
    vertex(-95, 86);
    bezierVertex(-95, 88, -58, 119, -4, 124);
    bezierVertex(37, 124, 58, 114, 96, 86);
    endShape();
    var tyty = -29;
    quad(99, -49 + tyty, 110, -38 + tyty, 110, 74, 99, 74);
    quad(-99, -49 + tyty, -110, -38 + tyty, -110, 74, -99, 74);
    triangle(-98, 83, -108, 74, -90, 50);
    triangle(98, 83, 108, 74, 90, 50);
    beginShape();
    vertex(-110, 63);
    bezierVertex(-112, 68, -116, 74, -107, 80);
    vertex(-98, 85);
    endShape();
    beginShape();
    vertex(110, 63);
    bezierVertex(112, 68, 116, 74, 107, 80);
    vertex(98, 85);
    endShape();
    popMatrix();
    
    if(clone.style !== 1){
        applyColors();
        pushMatrix();
        beginShape();
        vertex(-98, -31);
        vertex(-31, -34);
        vertex(24, -34);
        vertex(97, -31);
        vertex(96, -7);
        vertex(20, 18);
        vertex(-20, 18);
        vertex(-97, -9);
        endShape();
        quad(-31, 10, -17, 66, 16, 74, 31, 7);
        quad(-14, 66, -13, 154, 14, 154, 14, 66);
        popMatrix();
    }
    
    //advanced gradients
    var d = 41;
    var light = color(255, 255, 255);
    var dark = color(255, 255, 255, 0);
    strokeWeight(1);
    for(var i = 0; i < d; i++){
        this.top = -155;
        stroke(lerpColor(light, dark, i/d));
        line(0 - 15, this.top + i, 0 + 15, this.top + i);
    }
    fill(110, 110, 110);
    beginShape();
    vertex(-99, -49);
    bezierVertex(-97, -49, -90, -48, -92, -36);
    vertex(-97, -33);
    endShape();
    beginShape();
    vertex(99, -49);
    bezierVertex(97, -49, 90, -48, 92, -36);
    vertex(97, -33);
    endShape();
    
    //black
    fill(0, 0, 0);
    var ty = 27;
    beginShape();
    vertex(-99, -35);
    bezierVertex(-99, -35, -96, -37, -90, -37);
    bezierVertex(-86, -36, -7, -42, 86, -37);
    bezierVertex(90, -37, 96, -37, 99, -35);
    vertex(99, -29);
    //println(abs(-35 + 29));
    bezierVertex(99, -37 + 6, 96, -37 + 6, 90, -37 + 6);
    bezierVertex(86, -36 + 6, -7, -42 + 6, -86, -36 + 6);
    bezierVertex(-90, -37 + 6, -96, -37 + 6, -99, -35 + 6);
    endShape();
    stroke(0, 0, 0);
    beginShape();
    vertex(-68, 126);
    vertex(-10, 60);
    bezierVertex(-10, 60, -11, 5, -39, -2);
    vertex(-39, -2);
    vertex(-93, -13);
    vertex(-93, -19);
    bezierVertex(-93, -19, 0, -25, 93, -19);
    vertex(93, -13);
    vertex(39, -2);
    
    bezierVertex(39, -2, 11, 5, 10, 60);
    vertex(10, 60);
    vertex(68, 126);
    bezierVertex(12, 73, 7, 64, -12, 75);
    endShape();
    rectMode(CENTER);
    rect(0, 153, 16, 14, 7);
    rectMode(CORNER);
    
    if(clone.style === 'rex'){
        fill(0, 0, 255);
        pushMatrix();
        pushMatrix();
        translate(-200, -200);
        captainrexmark();
        popMatrix();
        pushMatrix();
        translate(200, -200);
        scale(-1, 1);
        captainrexmark();
        popMatrix();
    }
    //highlights...
    noFill();
    stroke(255, 255, 255, 50);
    strokeCap(SQUARE);
    strokeWeight(43);
    arc(0, -90, 100, 50, 215, 330);
    strokeCap(ROUND);
    
    strokeWeight(1);
    stroke(212, 212, 212, 200);
    line(-97, -29, -97, 5);
    line(97, -29, 97, 5);
    line(42, 69, 42, 97);
    line(-42, 69, -42, 97);
    line(-88, 16, -88, 76);
    line(88, 16, 88, 76);
    line(88, 76, 43, 92);
    line(-88, 76, -43, 92);
    fill(214, 214, 214);
    bezier(-97, 5, -81, 12, -56, 44, -42, 69);
    bezier(97, 5, 81, 12, 56, 44, 42, 69);
    noStroke();
    fill(255, 255, 255, 50);
    beginShape();
    vertex(-76, -40);
    vertex(-74, 26);
    vertex(-45, 63);
    vertex(-48, -49);
    endShape();
    beginShape();
    vertex(76, -40);
    vertex(74, 26);
    vertex(45, 63);
    vertex(48, -49);
    endShape();
    quad(-97, -27, -96, 5, -91, 10, -90, -30);
    quad(97, -27, 96, 5, 91, 10, 90, -30);
    pushMatrix();
    rotate(-17);
    ellipse(-3, 135, 39, 22);
    popMatrix();
    rotate(17);
    ellipse(-3, 135, 39, 22);
    popMatrix();
    
    
    
    popMatrix();
};


var starPositions = [[10, 14], [15, 31]];
var clone = {
        phase: 1,
        //Phase I and II. Phase I is from Episode II (Attack of The Clones) - SW:CW Season 4, and Phase II is from SW:CW Season 4 - Episode III (Revenge of the Sith) Phase II is unfinished... for now.
        
        area: 1,
        //"Geonosis" is where the first clone battle took place. code: "geonosis"
        //"Kamino" is the birthplace of the clone troopers. code: "kamino"
        //"Space" is... space! The place where spaceships fly. code: "space" (In progress.)     
        //"Mannequin-y" is... makes... [loud cry of despair] It makes him look like a mannequin. code: 1
        
        style: 1,
        //There is an easter egg here... I can smell it.
        
        onlyHelmet: false,
        //Like helmets better than bodies? That's fine. Here's a new feature for people like you. Just change "false" to "true".
        
        alpha: [255, 255], 
        rank: ["Normal: Last", "Captain: 2nd", "Sergeant: 4th", "Lieutenant: 3rd", "Commander: 1st"],
        bkg: ["Mannequin-y", "Geonosis", "Kamino", "Space"]
    }; /**Cool variables inside!!!!*/

//Original comments!
/**
//Most of the code was created by me, CT-2/002-24.
//The rest of it was created by me as well.
//I am a Summer of Scripting Student, and I understand 90% of the JS curriculum. I recieved the Advanced JS badge *before* getting 75% of the Intro to JS done... I wonder where that puts me?
//I think the only thing that I don't understand is bezier();, which never goes quite right for me.
//(However, the moment I say that, the beziers begin working... How sad.)
//I used the "noise" function from my Advanced JS project to create the Geonosis background.
*/


//History Lesson
/**History Lesson:
 * Clone Troopers began to be created about 32 BBY on Kamino.
 * They were deployed at the age of 10 in 22 BBY.
 * They were renamed "Stormtroopers" (one word) after Order 66/Operation: Nightfall. (20 BBY-ish)
 * However, some clones did not follow order 66:
    * Captain Rex (Removed chip)
    * Commando Gregor (MIA, appears after o66)
    * Captain Wolffe? (I believe he is the one.)
 * Strange fact: If they had known what they were doing at Order 66 none of them would have complied. In fact, Fives (CT-5/555(-27)) was horrified at the idea. The reason why they completed Order 66 is because they had a special chip in their brain that caused them to be ever-loyal to Chancellor Palpatine, even when he ordered Order 66.
 */
 
for(var i = 0; i<256; i++){
    starPositions.push([random(0, width), random(0, height)]);
}
//The clone!
var draw = function() {
    pushMatrix();
    scale(width/400, height/400);
    cursor('none');
    //Backgrounds
    
    //Geonosis
    if(clone.area === 2){
    angleMode = radians;
var drawRange = function(p, z) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t, z);
        var y = map(n, 0, p, 0, height/2);
        fill(209, 118, 15);
        noStroke();
        rect(t*100, height-y - 58, 1, y);
    }
};
var drawRange2 = function(p, z, k, l) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t, z, 3);
        var y = map(n, 0, p, 0, height/2);
        fill(245, 183, 59);
        noStroke();
        rect(l + t*77, height-y - k, 1, y);
    }
};
var drawRange3 = function(p, z, k, l) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t, z, 21);
        var y = map(n, 0, p, 0, height/2);
        fill(230, 141, 39);
        noStroke();
        rect(l + t*100, height-y - k, 1, y);
    }
};
var drawRange4 = function(p, z, k, l) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t - 1, z, 67);
        var y = map(n, 0, p, 0, height/2);
        fill(237, 181, 50);
        noStroke();
        rect(l + t*100, height-y - k, 1, y);
    }
};
var drawRange5 = function(p, z, k, l) {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t - 10, z, 57);
        var y = map(n, 0, p, 0, height/2);
        fill(199, 165, 64);
        noStroke();
        rect(l + t*100, height-y - k, 1, y);
    }
};


    background(237, 161, 86);
    
    drawRange2(0.8, 0.3, 55, 18);
    drawRange3(0.8, 0.3, 59, -4);
    drawRange4(0.8, 0.3, 56, 1);
    drawRange5(0.8, 0.3, 56, 1);
    stroke(0, 0, 0);
    drawRange(0.8, 58, 77, 0);
    fill(255, 255, 255);
    
    fill(209, 118, 15);
    rect(0, 335, 467, 109);
    
    angleMode = "degrees";
    
    } else if(clone.area === 1){ // Mannequin-y
        background(255);
        background(0, 0, 0);
        for(var i = 0; i < 255; i++){
            noStroke();
            fill(44, 173, 242, i/7);
            rect(i, i, width-2*i, height-2*i, 22);
        }
    } else if(clone.area === 3){ //Kamino
        //Cloudy skies
        background(66, 82, 107);
        
        //Very ugly...
        noStroke();
        
        //Kamino is a watery planet. The whole surface is water. This, however, defines the place where the ellipse that defines the foremost building ends.
        fill(48, 61, 94);
        rect(0, 201, 400, 400);
        
        //Kamino's buildings break the perpetual rain like water off a duck's back.
        fill(112, 112, 112);
        ellipse(300, 391, 500, 500);
        triangle(253, 146, 290, 106, 293, 146);
        triangle(280, 143, 390, 158, 290, 107);
        fill(66, 82, 107);
        rect(0, 214, 400, 280);
        fill(64, 64, 64);
        ellipse(126, 457, 600, 600);
        
        //Here's the water!
        fill(66, 82, 107);
        rect(0, 236, 400, 280);
        strokeWeight(1);
        
        //Antennae, probably for plumper Kaminoans to get the best cable channels (who never seem to show up at all [insert winking smiley here])
        stroke(64);
        line(97, 166, 97, 123);
        strokeWeight(2);
        line(103, 195, 103, 96);
        strokeWeight(12);
        line(86, 231, 89, 322);
        line(58, 231, 58, 322);
        stroke(112);
        line(343, 200, 343, 338);
        line(362, 200, 362, 338);
        strokeWeight(1);
        line(290, 110, 290, 64);
        line(287, 110, 287, 51);
        strokeWeight(2);
        line(304, 138, 304, 51);
        line(282, 126, 282, 86);
        
        //Back to strokeless...
        noStroke();
        
        //We don't want our trooper to be standing on air!
        fill(48, 61, 94);
        rect(0, 289, 400, 400);
        fill(102, 102, 102);
        ellipse(200, 492, 783, 279);
        
        //This is for the helmet. I don't know why it doesn't work without this :(
        strokeWeight(0.5);
    } else {
        background(23, 23, 23);
        stroke(255, 255, 255);
        for(var i = 0; i<starPositions.length; i++){
            point(starPositions[i][0], starPositions[i][1]);
        }
        var variable = floor(random(0, 12));
        if(variable === 0){
            stroke(255, 0, 0);
        } else if(variable === 1){
            stroke(255, 255, 0);
        } else if(variable === 2){
            stroke(255, 162, 0);
        } else if(variable === 3){
            stroke(255, 102, 0);
        } else {
            stroke(23, 23, 23);
        }
        strokeWeight(random(0, 17));
        point(random(0, width), random(0, height));
        strokeWeight(0.5);
    }
    
    //Just in case we select "Geonosis" which uses noise to create its mountain ranges.
    angleMode = "degrees";
    
    noStroke();
    if(clone.onlyHelmet === false){
        /**neckpiece*/{
            //No neck = headless. 
            fill(0, 0, 0);
            ellipse(200, 238, 53, 35);
            rect(201, 191, 26, 49);
            rect(400-227, 191, 26, 49);}
            
        /**body*/ {
            
            //I will describe this by layers.
            
            //Black bodysuit (Layer 1)
            fill(0, 0, 0);
            ellipse(123, 281, 80, 66);
            ellipse(400-123, 281, 80, 66);
            quad(67, 299, 116, 312, 93, 357, 56, 343);
            quad(400-67, 299, 400-116, 312, 400-93, 357, 400-56, 343);
            
            
            //White abdominal plate part 1 (Layer 2)
            fill(255, 255, 255);
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //This is where we hide easter eggs.
            beginShape();
            vertex(116, 297);
            vertex(126, 400);
            vertex(400-126, 400);
            vertex(400-116, 297);
            endShape();
            
            
            //Light grey shadows (Layer 3)
            fill(232, 232, 232);
            if(true){
            if(clone.style === null - NaN){
                fill(99, 91, 47);
            }
            } //*whistle whistle whistle*
            triangle(117, 302, 128, 321, 121, 344);
            triangle(400-117, 302, 400-128, 321, 400-121, 344);
            fill(186, 186, 186);
            if(true){if(clone.style === null - NaN){
                fill(212, 207, 51);
            }} //Avoiding your eyes...
            rect(190, 255, 31, 48);
            triangle(200, 304, 127, 312, 129, 321);
            triangle(400-200, 304, 400-127, 312, 400-129, 321);
            triangle(116, 297, 127, 309, 130, 323);
            triangle(400-116, 297, 400-127, 309, 400-130, 323);
            bezier(136, 400, 166, 315, 400-166, 315, 400-136, 400);
            fill(247, 247, 247);
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} // [I break into nervous conversation about newest Clone DC-15 rifle]
            bezier(141, 400, 182, 329, 400-182, 329, 400-141, 400);
            
            
            //Arm plates (Layer 4)
            fill(227, 227, 227);
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //Stop looking at me!
            
            //"From shoulder to elbow" armor.
            beginShape();
            vertex(69, 297);
            vertex(116, 318);
            vertex(98, 355);
            vertex(75, 339);
            vertex(56, 337);
            endShape();
            
            //Its mirror image.
            beginShape();
            vertex(400-69, 297);
            vertex(400-116, 318);
            vertex(400-98, 355);
            vertex(400-75, 339);
            vertex(400-56, 337);
            endShape();
            
            //Rounding the corners!
            ellipse(102, 316, 29, 10);
            ellipse(400-102, 316, 29, 10);
            
            //Color time! [insert ridiculous dance music here]
            if(clone.style === 1){
                fill(255, 255, 255);
            } else if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            } else if(true){
                if(clone.style === 0){
                    fill(0, 26, 255);
                } else if(clone.style === null - NaN){
                    fill(125, 96, 57);
                }
            } //This is completely normal! Pass on by!
            
            if(clone.style !== 1){ //Privates don't have ranks.
                beginShape();
                vertex(56, 338);
                vertex(75, 340);
                vertex(100, 312);
                vertex(73, 293);
                endShape();
                beginShape();
                vertex(400 - 56, 338);
                vertex(400 - 75, 340);
                vertex(400 - 100, 312);
                vertex(400 - 73, 293);
                endShape();
            }
            
            //Pectoral Plates (Layer 4)
            fill(252, 252, 252);
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //I don't think I know of anything else to say, so... go talk to the next guy!
            
            //I call these the pectoral plates. I have no idea what their technical term is. Pectoral comes from the muscle in the region that these plates are.
            beginShape();
            vertex(174, 237);
            vertex(199, 255);
            vertex(199, 304);
            vertex(127, 313);
            vertex(116, 296);
            vertex(122, 244);
            vertex(145, 239);
            endShape();
            
            //Mirrored.
            beginShape();
            vertex(400-174, 237);
            vertex(400-199, 255);
            vertex(400-199, 304);
            vertex(400-127, 313);
            vertex(400-116, 296);
            vertex(400-122, 244);
            vertex(400-145, 239);
            endShape();
            
            //Shoulder armor!
            fill(255, 255, 255);
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //What else do I need to say?
            
            //I feel upside-down...
            pushMatrix();
            rotate(33);
            fill(77, 77, 77, 100);
            ellipse(229, 179, 66, 90);
            fill(255, 255, 255);
            if(!false){if(clone.style === null - NaN){
                fill(212, 207, 51);
            }} //How about something new now?
            ellipse(225, 181, 55, 90);
            popMatrix(); //It's good to be back!
            triangle(57, 284, 73, 315, 55, 318);
            fill(255, 255, 255);
            pushMatrix(); //Uh-oh...
            rotate(-33);
            fill(56, 56, 56, 100);
            ellipse(400-295, 396, 66, 90);
            fill(255, 255, 255);
            if(!false){if(clone.style === null - NaN){
                fill(212, 207, 51);
            }} //*Do you think I can pass by unnoticed?*
            ellipse(400-291, 397, 55, 90);
            popMatrix(); //Back to earth now... or should I say Kamino?
            triangle(325, 313, 342, 285, 344, 317);
            
            //More paint detailing! 
            if(clone.style === 1){
                fill(255, 255, 255);
            } else if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            }
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //Shh!
            ellipse(217, 293, 10, 10);
            ellipse(231, 295, 10, 10);
            ellipse(251, 303, 10, 10);
            
            if(true){if(clone.style === 0){
                fill(0, 26, 255);
            }} //Sound the alarm, sir! We've been detected!
            
            if(true){if(clone.style === null - NaN){
                fill(212, 207, 51);
            }} //They're on all sides! We're surrounded!
            bezier(56, 299, 53, 260, 94, 222, 112, 236);
            bezier(400 - 56, 299, 400 - 53, 260, 400 - 94, 222, 400 - 112, 236);
            
            
            //Abdominal plates (detailing)
            stroke(130, 130, 130);
            line(186, 400, 186, 379);
            line(400-186, 400, 400-186, 379);
            line(186, 379, 175, 350);
            line(400-186, 379, 400-176, 354);
            line(400-183, 379, 400-173, 356);
            line(400-183, 400, 400-183, 378);
            line(183, 379, 173, 354);
            line(183, 400, 183, 379);
            noStroke();
            
            //Gun (Layer 5)
            //(I'm sorry, it's very hard to provide commentary (I mean comments) here, because there is nothing to comment on!)
            fill(38);
            beginShape();
            vertex(57, 380);
            vertex(86, 399);
            vertex(138, 360);
            vertex(195, 349);
            vertex(230, 342);
            vertex(253, 323);
            vertex(285, 312);
            vertex(307, 289);
            vertex(345, 269);
            vertex(360, 271);
            vertex(374, 244);
            vertex(414, 223);
            vertex(414, 208);
            vertex(367, 230);
            vertex(367, 228);
            vertex(339, 243);
            vertex(339, 236);
            vertex(324, 245);
            vertex(296, 248);
            vertex(278, 287);
            vertex(217, 314);
            vertex(213, 306);
            vertex(173, 325);
            vertex(176, 331);
            vertex(131, 348);
            vertex(59, 361);
            endShape();
            stroke(38);
            noFill();
            ellipse(196, 354, 10, 10);
            noStroke();
            
            //Arms (Layer 5)
            
            //Undersuit (arms)
            fill(0, 0, 0);
            
            //Wrist to elbow
            quad(56, 342, 64, 380, 154, 387, 152, 367);
            
            //Wrist
            ellipse(159, 375, 17, 17);
            
            //Fingers
            pushMatrix(); //Is the ground shifting?
            rotate(8); //Only a little bit. Sir, it was only 4.6 magnitude.
            rect(217, 342, 24, 9, 5);
            rect(217, 334, 24, 9, 5);
            rect(217, 327, 24, 9, 5);
            rect(230, 320, 11, 9, 5);
            popMatrix();
            
            //Wrist and fingers, left hand
            beginShape();
            vertex(264, 322);
            vertex(268, 331);
            vertex(283, 329);
            vertex(285, 314);
            vertex(278, 309);
            vertex(277, 321);
            endShape();
            pushMatrix();
            rotate(-40);
            rect(-15, 383, 10, 14, 5);
            rect(-6, 383, 10, 14, 5);
            rect(1, 387, 10, 14, 5);
            rect(9, 391, 10, 14, 5);
            popMatrix();
            
            //elbow armor
            fill(240, 240, 240);
            if(!(!true)){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //I thought we had lost them! 
            if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            }
            beginShape();
            vertex(90, 350);
            vertex(96, 355);
            vertex(75, 364);
            vertex(70, 379);
            vertex(70, 390);
            vertex(57, 373);
            vertex(54, 359);
            endShape();
            
            //forward arm armor right
            fill(255, 255, 255);
            if(!(!(!false))){if(clone.style === null - NaN){
                fill(212, 207, 51);
            }} //Seriously? That moustache and glasses doesn't fool anyone, buddy.
            quad(95, 350, 158, 366, 154, 388, 93, 386);
            if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            }
            
            beginShape();
            vertex(94, 367);
            vertex(93, 387);
            vertex(155, 389);
            vertex(156, 377);
            endShape();
            
            //forward arm armor left
            fill(219, 216, 216);
            if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            }
            if(true === true && false === false){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //I think the size of your costume tipped them off, mate.
            ellipse(337, 369, 30, 54);
            fill(0, 0, 0);
            ellipse(336, 367, 21, 27);
            fill(245, 245, 245);
            if(true){if(clone.style === null - NaN){
                fill(212, 207, 51);
            }} //This disguise works the best.
            beginShape();
            vertex(345, 344);
            vertex(342, 358);
            vertex(334, 370);
            vertex(321, 372);
            vertex(258, 332);
            vertex(283, 327);
            vertex(282, 310);
            endShape();
            if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            }
            beginShape();
            vertex(280, 328);
            vertex(338, 363);
            vertex(334, 370);
            vertex(321, 372);
            vertex(259, 332);
            endShape();
            
            //wrist armor left
            fill(232, 232, 232);
            //very easter egg-y
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }}
            beginShape();
            vertex(157, 361);
            vertex(186, 348);
            vertex(182, 372);
            vertex(162, 375);
            endShape();
            
            if(clone.style === 2){
                fill(255, 0, 0);
            } else if(clone.style === 3){
                fill(114, 184, 53);
            } else if(clone.style === 4){
                fill(0, 145, 255);
            } else if(clone.style === 5){
                fill(247, 255, 0);
            }
            
            beginShape();
            vertex(161, 368);
            vertex(184, 361);
            vertex(181, 372);
            vertex(162, 375);
            endShape();
            
            //wrist armor right
            fill(232, 232, 232);
            if(true){if(clone.style === null - NaN){
                fill(125, 96, 57);
            }} //Can you see me? [No, right?]
            beginShape();
            vertex(263, 326);
            vertex(249, 309);
            vertex(267, 297);
            vertex(280, 305);
            vertex(281, 324);
            endShape();
            
            //soft shadows
            fill(82, 82, 82, 100);
            ellipse(200, 242, 88, 38);
            
            //top of chestplate
            fill(0, 0, 0);
            ellipse(200, 242, 59, 25);}
        
    }
    
    /**helmet*/ {
    if(clone.phase === 1){
    
    _clone(200, 177, 0.49);
    
    //colors (paint, technically layer ∞)
    
    } else {
        /** 
            * This is an unfinished project. I'll let everyone know when it's done.
            * I'm sorry, but this part isn't commented, because it isn't finished :( */
        //Phase II Helmet
        var radiusSize = 25;
        fill(255, 255, 255);
        ellipse(200, 163, 98, 98);
        rect(151, 163, 98, 69);
        ellipse(158, 218, 30, 30);
        ellipse(400-158, 218, 30, 30);
        ellipse(217, 232, radiusSize, radiusSize);
        ellipse(400-217, 232, radiusSize, radiusSize);

        triangle(157, 232, 173, 239, 200, 200);
        triangle(400-157, 232, 400-173, 239, 200, 200);
        triangle(193, 238, 200, 231, 191, 231);
        triangle(400-193, 238, 400-200, 231, 400-191, 231);
        rect(195, 111, 10, 10, 5);

        fill(66, 66, 66);
        quad(194, 231, 206, 231, 204, 238, 196, 238);
        
        fill(0);
        rect(152, 160, 96, 4, 1);
        beginShape();
        vertex(164, 169);
        vertex(164, 180);
        vertex(191, 175);
        vertex(194, 195);
        vertex(173, 213);
        vertex(197, 202);
        vertex(400 - 197, 202);
        vertex(400 - 173, 213);
        vertex(400 - 194, 195);
        vertex(400 - 191, 175);
        vertex(400 - 164, 180);
        vertex(400 - 164, 169);
        endShape();
        ellipse(182, 237, 10, 10);
        ellipse(400 - 182, 237, 10, 10);
    
    }}

    //More background stuff: describes the "film" over the trooper in each environment.
    //Like in Geonosis, there's a yellowish sandy element over the trooper. :)
    if(clone.area === 2){ //Geonosis
        fill(255, 218, 107, 50);
        rect(0, 0, width, height);
    }
    if(clone.area === 3){ //Kamino
        fill(6, 35, 71, 100);
        rect(0, 0, width, height);
    }
    if(clone.area === 4){ //Space
        fill(0, 0, 0, 150);
        rect(0, 0, width, height);
    }
    
    //Debugging (How I created the picture)
    /**
    mouseReleased = function(){
        fill(255, 0, 0);
        println(mouseX + " " + mouseY);
    };
    */
    
    //UI
    textFont(createFont("monospace"));
    
    //Buttons
    fill(198, 215, 230);
    rect(2, 2, 72, 40, 5);
    fill(198, 215, 230);
    rect(2, 45, 72, 40, 5);
    
    //Button Text
    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("Next Rank\n", 37, 26);
    textSize(8);
    text(clone.rank[clone.style], 38, 33);
    text("Next Background\n", 38, 68);
    text(clone.bkg[clone.area], 36, 78);
    
    //Text announcements
    fill(84, 84, 84);
    textSize(30);
    if(true){
        if(clone.style === null - NaN){
            clone.rank[7] = "Commander Jet";
        } else if(clone.style === 0){
            clone.rank[7] = "Captain Rex";
        }
    } //Yes! All the spies are in! Blow that baby! (Boom, et cetera.)
    fill(84, 84, 84, clone.alpha[0]);
    text(clone.rank[clone.style - 1], 250, 77);
    fill(84, 84, 84, clone.alpha[1]);
    text(clone.bkg[clone.area - 1], 250, 77);
    textAlign(BASELINE, BASELINE);
    clone.alpha[0]-= 4; //Hi Pamela! Is it possible just to say "clone.alpha -= 4;"?
    clone.alpha[1]-= 4;
    
    //Button check-for-presses
    if((mouseX && mouseY) > 2 && mouseX < 74 && mouseY < 42){
        fill(61, 61, 61, 100);
        rect(2, 2, 72, 40, 5);
        mouseReleased = function(){
            clone.style++;
            if(clone.style > 5){
                clone.style = 1;
            }
            clone.alpha[0] = 255;
        };
    }
    if(mouseX > 2 && mouseY > 45 && mouseX < 74 && mouseY < 45 + 42){
        fill(61, 61, 61, 100);
        rect(2, 45, 72, 40, 5);
        
        mouseReleased = function(){
            clone.area++;
            if(clone.area > 4){
                clone.area = 1;
            }
            clone.alpha[1] = 255;
        };
        
        keyReleased = function(){
            if(key.toString() === "d"){
                noLoop();
            }
        };
    }
    popMatrix();
    //Do I have to bow? :)
    //Created by CT-2/002-24
    //noLoop();
    //filter(BLUR, 4);
    //fill(255, 0, 0);
    //textAlign(CENTER, CENTER);
    //textFont(createFont("HelveticaNeue-Bold"), 128);
    //text("WIP", 250, 250);

};
