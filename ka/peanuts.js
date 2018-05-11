//Source: http://www.skierpage.com/images/peanuts_1989-10-31.png

//Change blahBlah to true!
/** Change all the variables inside, please! */
{
    //If your browser doesn't support Comic Sans MS, then turn this to 'false'.
    var comicText = true;
    
    /**Wanna [sic] see something awesome?*/
    var invertColors = false;
    
    //Blah blah blah blah, blah blah blah blah blah blah! 
    var blahBlah = false;
    
    //What should CB say?
    var sayings = (blahBlah === false) ? 
    ["Yes, sir, Mr. Principal... \nI'm going to give up \nschool... Everybody \nsays I'm stupid anyway.", "I've decided to devote the \nrest of my life to making my \ndog happy...", "No, it isn't such a bad \nidea, is it, sir?", "Well, maybe you should talk it \nover with your cat, and see what \nhe thinks..."]
    : 
    ["Blah blah blah blah... \nBlah blah blah blah\nBlah blah blah blah\nBlah blah blah blah.", "Blah blah blah blah blah blah\nBlah blah blah blah blah blah\nBlah blah blah blah blah blah  \nblah...", "Blah blah blah blah blah\nBlah blah blah blah blah?", "Blah blah blah blah blah blah blah\nblah blah blah blah blah blah blah\nblah blah blah..."];
}

//If you like the half of hopper shown in the 2nd panel, then tell me! I'll show you how to do it.

//I am currently condensing the code! Let's hope when the condensing ends, Charlie Brown doesn't end up as a mutant...

//Condensed from 580 lines of code to 491! Hopefully I can condense some more...

//Currently testing new scaleF variable.

//I know now 100% of Intro to JS, and I know 50-60% (not -10%) of Advanced JS.
//It doesn't matter, but I also know HTML+CSS. A little bit.
//I am a Summer of Scripting Student, and I'm currently reviewing what I've already learned!

/** Mr. Schultz wrote this joke! I am not the one responsible for this good humor. In fact, I hardly can make a joke when I am killing myself trying. */

/**Guessing here, but Pamela probably doesn't like Peanuts either. :) */

/** The following code was created by CT-2/002-24 and is credited where necessary. I hereby do not allow copy-and-pasters, or people claiming I am a hacker. Thank you. */

//Support for all canvas sizes!
scale(width/400, height/400); //Thanks to Kaadmy for this!
var panel, comicFont, half; //this defines panel and comicFont and makes them both undefined.

//This is for the createFont()s!
var comicSize = (comicText === true) ? 9 : 10;
comicFont = (comicText === true) ? createFont("Comic Sans MS", comicSize) : createFont("sans-serif", comicSize); //This line is the equivalent of the following:
/** var comicFont;
 * if(comicText === true){
 *      comicFont = createFont("Comic Sans MS");
 * } else {
 *      comicFont = createFont("Monospace");
 * }
 */
panel = 1;


var draw = function() {
    switch(panel){
        /**Switch/Case is basically telling the "parser" (probably not the actual term, sorry!) that whenever the variable "panel" is, for instance, 1", then execute the code beneath "case 1:". I put the curly brackets there so that I could condense the code. It is not needed. :) 
                 */
    case 1: {
        var circ = function(x, y, w){
            ellipse(x, y, w, w);
        };//Circle function!!!!!!!
        
        var half_o_hopper = function(){
            imageMode(CENTER);
            background(0, 0, 0);
            image(getImage("creatures/Hopper-Cool"), 200, 200);
            var half2 = get(width/2, 0, width, height);
            return half2;
        }; //This function stays within the guidelines for G-rated comics.
        
        var half = half_o_hopper();  //Photo time!
        
        //Let's turn this back to normal.
        imageMode(CORNER);
        
        //Let's set the background to a pale whitish blue color. 
        background(232, 248, 255);
        
        //This is setting the stroke weight to 2.
        strokeWeight(2);
        
        //Each panel will be carefully drawn by hand with acrylics... No, just kidding :D
        fill(181, 100, 38);
        
        //Top two panels
        rect(2.5, 2.5, 195, 195, 10);
        rect(202.5, 2.5, 195, 195, 10);
        
        //Bottom two panels
        rect(2.5, 202.5, 195, 195, 10);
        rect(202.5, 202.5, 195, 195, 10);
        
        //These are the internal details of each panel. 
        var deskNFloor = function(transX, transY){
            pushMatrix(); //That's not nice! Say sorry to Matrix!
            translate(transX, transY);
            noStroke();
            
            //Floor
            fill(105, 60, 0);
            rect(2.5, 150, 195, 38);
            
            //This is to get the rounded effect.
            rect(2.5, 159, 195, 38, 10);
            
            //Desk
            fill(82, 55, 1);
            rect(2.5, 100, 34, 79);
            
            //This to make the "lip" of the desk.
            rect(2.5, 100, 47, 8, 5);
            
            //Picture on Wall
            fill(255, 234, 0);
            rect(16, 24, 34, 44);
            
            //Oh noes is awesome!
            fill(0, 0, 0);
            rect(18, 26, 30, 40);
            image(getImage("creatures/OhNoes"), 19, 31, 30, 30);
            popMatrix(); //Hey! Matrix is not a balloon!
            {//Credit to Osmium for that pun :)
            }
        };
        
        /** Panel 1 */
        deskNFloor(0, 0);
        
        /** Panel 2 */
        //A little different...
        fill(255, 225, 0);
        rect(205, 23, 60, 119);
        if(half){
            image(half, 205, 25, 114, 114);
        } //We are overcoming a glitch here! Please wait so that you can be redirected to our Uruguay line. [annoying elevator music]
        
        //Go Winston! Of all ages!
        image(getImage("creatures/Winston"), 219, 94, 40, 40);
        image(getImage("creatures/BabyWinston"), 220, 28, 40, 40);
        
        /** Panel 3 */
        deskNFloor(0, 200);
        
        /** Panel 4 */
        deskNFloor(200, 200);
        
        //This is Charlie Brown. I have no idea why I have all these variables. (Actually, I do, because I made it. You'll never KNOW my secrets... MUHAHAHAHAHAHAHA!)
        var CharlieBrown = function(x, y, state, transX, transY, transX1, transY1, p){
            if(state !== "forward"){ //Condensing happened here!
                //Initial head texture
                    fill(255, 214, 214);
                    ellipse(x, y, 55, 55);
                    ellipse(x + -28, y + -1, 10, 10);
                    fill(181, 100, 38);
                    ellipse(x - 24, y - 26, 18, 40);
                    
                    //eye
                    fill(0, 0, 0);
                    ellipse(x - 17, y - 3, 3, 5);
                    noFill();
                    
                    //hair and eyes
                    stroke(0, 0, 0);
                    strokeWeight(1);
                    pushMatrix(); //This saves how the canvas is currently
                    rotate(11);
                    translate(13 + transX1, -21 + transY1);
                    arc(x + 7, y, 10, 10, -115, 118);
                    popMatrix(); //This restores the save made by popMatrix();
                    arc(x + -19, y - 27, 12, 8, -159, 40);
                    line(x + 26, y + 9, x + 29, y + 6);
                    line(x + 26, y + 7, x + 29, y + 6);
                    
                    //Eyebrow
                    line(x + -15, y + -12, x + -20, y + -13);
                    
                    //Message to Pamela: For some reason, I cannot tell it what this statement essentially means, namely, "if(state === 'left'){ //code }" Is there a problem with the scratchpad?
                    //This is saying "if the 'state' variable is equal to 'left' then display the normal mouth".
                    if(state !== "forward" && state !== "open"){
                        //Mouth
                        line(x - 20, y + 19, x - 17, y + 18);
                    }
                    
                    //Collar Right
                    noStroke();
                    fill(255, 255, 255);
                    pushMatrix();
                    translate(transX, transY);
                    rotate(-11);
                    rect(x + -36, y + 49, 14, 4, 2);
                    popMatrix();
                    
                    //Neck
                    fill(255, 214, 214);
                    rect(x + -5, y + 26, 10, 10);
                    
                    //Shirt Base
                    fill(224, 213, 0);
                    quad(x + -9, y + 38, x + -23, y + 65, x + 11, y + 77, x  + 6, y + 35);
                    ellipse(x + -10, y + 69, 30, 14);
                    
                    //Stripe (iconic!)
                    fill(0, 0, 0);
                    pushMatrix();
                    translate(0, 209 - p);
                    beginShape();
                    vertex(84, 136);
                    vertex(88, 142);
                    vertex(94, 137);
                    vertex(99, 142);
                    vertex(108, 139);
                    vertex(109, 145);
                    vertex(103, 149);
                    vertex(93, 146);
                    vertex(87, 151);
                    vertex(82, 144);
                    endShape();
                    popMatrix();
                    
                    //legs
                    fill(224, 186, 186);
                    rect(x + -10, y + 78, 10, 20);
                    fill(255, 214, 214);
                    rect(x + -2, y + 78, 10, 20);
                    
                    //Shorts? Pants? Only Mr. Schultz knows. 
                    fill(0, 0, 0);
                    rect(x - 25, y + 72, 36, 11);
                    
                    //Collar Left
                    fill(255, 255, 255);
                    pushMatrix();
                    rotate(0);
                    rect(x + -7, y + 35, 14, 4, 2);
                    popMatrix();
                    
                    //Shoes
                    fill(255, 255, 255);
                    ellipse(x - 18, y + 96, 12, 10);
                    ellipse(x - 11, y + 96, 12, 10);
                    rect(x - 10, y + 93, 20, 8, 2);
                    rect(x - 19, y + 93, 20, 8, 2);
                    
                    //hand
                    fill(255, 217, 217);
                    rect(x + -2, y + 64, 2, 10, 1);
                    rect(x + 0, y + 65, 2, 10, 1);
                    rect(x + 2, y + 64, 2, 10, 1);
                    
                    //Arm
                    fill(255, 255, 0);
                    quad(x + 7, y + 42, x + -1, y + 47, x + -3, y + 66, x + 6, y + 64);
                
            }
            
            switch(state){ 
                case "left": {
                    
                    //Not working?????
                    //Mouth
                    line(x - 20, y + 19, x - 17, y + 18);
                    
                }
                break;
                case "open": {
                    
                    //Color conditions.
                    stroke(0, 0, 0);
                    noFill();
                    
                    //Mouth
                    strokeWeight(0.56);
                    arc(x - 20, y + 19, 9, 4, -97, 63);
                    
                    //Stripe (iconic!)
                    fill(0, 0, 0);
                    pushMatrix();
                    translate(214, 209);
                    beginShape();
                    vertex(84, 136);
                    vertex(88, 142);
                    vertex(94, 137);
                    vertex(99, 142);
                    vertex(108, 139);
                    vertex(109, 145);
                    vertex(103, 149);
                    vertex(93, 146);
                    vertex(87, 151);
                    vertex(82, 144);
                    endShape();
                    popMatrix();
                    
                    //Revert all changes made.
                    noStroke();
                    noFill();
                }
                break;
                case "forward": {
                    //Head base and ears.
                    fill(204, 170, 170);
                    ellipse(x + -15, y + 30, 12, 16);
                    fill(255, 212, 212);
                    ellipse(x + 24, y + 30, 83, 87);
                    ellipse(x + 65, y + 35, 12, 16);
                    rect(329, 153, 22, 20);
                    
                    //Nose
                    pushMatrix(); //I want to get that position just right.
                    translate(0, -2);
                    noFill();
                    strokeWeight(2);
                    stroke(0, 0, 0);
                    bezier(x + 26, y + 22, x + 16, y + 22, x + 6, y + 41, x + 25, y + 37);
                    noStroke();
                    
                    //Eyes
                    fill(0, 0, 0);
                    circ(x + 11, y + 29, 6);
                    circ(x + 34, y + 28, 6);
                    popMatrix();
                    
                    //Mouth, Eyebrows, and Single Strand of Hair
                    stroke(0, 0, 0);
                    
                    //Mouth
                    line(x + 35, y + 63, x + 16, y + 62);
                    
                    //Eyebrows
                    line(x + 5, y + 12, x + 9, y + 12);
                    line(x + 30, y + 9, x + 34, y + 9);
                    
                    //Single Strand
                    noFill();
                    beginShape();
                    vertex(x + 28, y + -2);
                    vertex(x + 21, y - 1);
                    pushMatrix();
                    translate(x - 317, y - 83);
                    vertex(334, 82); //This is when I decided I had gotten tired of making a global function. :)
                    vertex(330, 81);
                    vertex(327, 81);
                    vertex(325, 85);
                    vertex(325, 88);
                    vertex(327, 92);
                    vertex(335, 96);
                    vertex(337, 92);
                    vertex(342, 96);
                    vertex(345, 94);
                    endShape();
                    popMatrix();
                    
                    //Shirt base
                    noStroke();
                    fill(255, 242, 0);
                    quad(328, 161, 352, 165, 362, 196, 304, 196);
                    noStroke();
                    fill(255, 255, 255);
                    rect(324, 160, 10, 7, 5);
                    
                    //Collar
                    pushMatrix(); //WHY ARE YOU SO MEAN TO MATRIX?
                    rotate(-7);
                    rect(312, 201, 21, 7, 5);
                    popMatrix();
                    fill(0, 0, 0);
                    beginShape();
                    vertex(313, 196);
                    vertex(324, 191);
                    vertex(332, 196);
                    endShape();
                    pushMatrix();
                    translate(23, 0);
                    beginShape();
                    vertex(313, 196);
                    vertex(324, 191);
                    vertex(332, 196);
                    endShape();
                    popMatrix();
                    
                }
                break;
            }
        };
        
        //And now, it's time for Charlie Brown's Photo Op:
        CharlieBrown(100, 83, "left", 0, 0, 0, 0, 209);
        
        CharlieBrown(314, 83, "forward", 0, 45, -4, -39, 0);
        
        CharlieBrown(314, 294, "open", -37, 45, 37, -45, 0);
        
        CharlieBrown(100, 294, "left", -40, 4, 37, 0, 0);
        
        
        //Let's change the font to something more interesting, shall we?
        textFont(comicFont);
        //You can guess what this means.
        textSize(comicSize);
        
        //And now let's unmute this...
        /**Panel 1 Bubble*/
        fill(255, 255, 255);
        text(sayings[0], 92, 14);
        noFill();
        stroke(255, 255, 255);
        arc(133, 62, 5, 10, -40, 100);
        
        /**Panel 2 Bubble*/
        fill(255, 255, 255);
        text(sayings[1], 276, 14);
        noFill();
        stroke(255, 255, 255);
        arc(338, 51, 8, 16, -108, 60);
        
        /**Panel 3 Bubble*/
        fill(255, 255, 255);
        text(sayings[2], 92, 235);
        noFill();
        stroke(255, 255, 255);
        arc(133, 260, 5, 10, -40, 100);
        
        /**Panel 4 Bubble*/
        fill(255, 255, 255);
        text(sayings[3], 259, 217);
        noFill();
        stroke(255, 255, 255);
        arc(338, 252, 9, 20, -40, 100);
        
        //Signatures time! Would you like my autograph?
        textFont(createFont("cursive"), 9);
        fill(0, 0, 0);
        text("CT-2/002-24", 207, 184);
        text("© Schultz", 207, 195);
        text("7-8", 207, 390);
        
        //And a technical detail, putting the cherry on top.
        if(invertColors){
            filter(INVERT);
        }
    }
    break;
    
    //In progress!
    /**
    case 2: {
        noStroke();
        background(255, 196, 196);
        fill(235, 235, 235);
        //Top two panels
        rect(2.5, 2.5, 195, 195, 10);
        rect(202.5, 2.5, 195, 195, 10);
        
        //Bottom two panels
        rect(2.5, 202.5, 195, 195, 10);
        rect(202.5, 202.5, 195, 195, 10);
        
        var Linus = function(x, y, state){
            switch(state){
                case "right":
                    pushMatrix(); //Please don't push me back!
                    translate(x, y);
                    fill(255, 163, 163);
                    ellipse(0, 0, 50, 50);
                    popMatrix();
                break;
                
                
                
                
            }
        };
        Linus();
    }
    break;
    */
}
    
    //This is for advancing the comic.
    mouseReleased = function(){
        panel++;
        if(panel > 1){
            panel = 1;
        }
    };
};

//No matrices were harmed in the making of this comic strip.
