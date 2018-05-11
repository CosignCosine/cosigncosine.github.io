/** This is part of my sports series started by my "alt"(...not), Cadett! 
 * @Football: https://www.khanacademy.org/computer-programming/football/4728891993358336
 * @Basketball: this!
 * 
 * @WIP: A hand on the basketball, suggested by Tariq Jabbar on 11:15 AM, October 31. Finished: 11:47 AM, October 31
*/
/**
bbbbbbbb                                                                           
b::::::b            lllllll                                                        
b::::::b            l:::::l                                                        
b::::::b            l:::::l                                                        
 b:::::b            l:::::l                                                        
 b:::::bbbbbbbbb     l::::l   aaaaaaaaaaaaa   zzzzzzzzzzzzzzzzz    eeeeeeeeeeee    
 b::::::::::::::bb   l::::l   a::::::::::::a  z:::::::::::::::z  ee::::::::::::ee  
 b::::::::::::::::b  l::::l   aaaaaaaaa:::::a z::::::::::::::z  e::::::eeeee:::::ee
 b:::::bbbbb:::::::b l::::l            a::::a zzzzzzzz::::::z  e::::::e     e:::::e
 b:::::b    b::::::b l::::l     aaaaaaa:::::a       z::::::z   e:::::::eeeee::::::e
 b:::::b     b:::::b l::::l   aa::::::::::::a      z::::::z    e:::::::::::::::::e 
 b:::::b     b:::::b l::::l  a::::aaaa::::::a     z::::::z     e::::::eeeeeeeeeee  
 b:::::b     b:::::b l::::l a::::a    a:::::a    z::::::z      e:::::::e           
 b:::::bbbbbb::::::bl::::::la::::a    a:::::a   z::::::zzzzzzzze::::::::e          
 b::::::::::::::::b l::::::la:::::aaaa::::::a  z::::::::::::::z e::::::::eeeeeeee  
 b:::::::::::::::b  l::::::l a::::::::::aa:::az:::::::::::::::z  ee:::::::::::::e  
 bbbbbbbbbbbbbbbb   llllllll  aaaaaaaaaa  aaaazzzzzzzzzzzzzzzzz    eeeeeeeeeeeeee  
 */
imageMode(CENTER);
var cmplx = function(){
    var args = arguments;
    beginShape();
    for(var i = 0; i < args.length; i+=2){
        curveVertex(args[i], args[i+1]);
        //println(args[i] + ", " + args[i+1]);
    }
    endShape();
};
var bkground = function(){
    background(0, 0, 0);
    noStroke();
    fill(28, 28, 28);
    cmplx(241, 397, 300, 398, 279, 318, 216, 141, 173, 146, 175, 229, 232, 325);
    fill(46, 46, 46);
    cmplx(173, 228, 226, 327, 219, 399, 270, 398, 259, 325, 212, 221);
    noFill();
    stroke(194, 194, 194);
    fill(127, 127, 127, 50);
    strokeCap(ROUND);
    strokeWeight(4);
    quad(77, 68, 77, 244, 313, 202, 316, 22);
    fill(127, 0, 0, 50);
    strokeCap(SQUARE);
    pushMatrix();
    translate(-4, -7);
    quad(155, 148, 155, 222, 238, 207, 238, 131);
    popMatrix();
    
    fill(189, 0, 0);
    stroke(189, 0, 0);
    quad(195, 191, 191, 197, 211, 220, 216, 203);
    noFill();
    stroke(255, 0, 0);
    ellipse(152, 185, 94, 29);
    fill(255, 0, 0);
    quad(190, 196, 207, 221, 174, 228, 154, 203);
    noFill();
    strokeCap(ROUND);
    stroke(255);
    cmplx(106, 187, 120, 211, 127, 226, 128, 237, 129, 251, 127, 262);
    cmplx(116, 180, 119, 199, 129, 217, 133, 230, 134, 241, 134, 256, 134, 264);
    cmplx(119, 183, 130, 200, 138, 212, 144, 222, 156, 234, 156, 251, 163, 264);
    cmplx(132, 174, 132, 186, 130, 203, 135, 215, 139, 229, 142, 244, 143, 256, 141, 269);
    cmplx(133, 176, 140, 194, 147, 206, 161, 223, 166, 238, 166, 248, 169, 262);
    cmplx(150, 172, 143, 192, 143, 201, 143, 215, 149, 229, 149, 245, 149, 253, 150, 265);
    cmplx(152, 173, 153, 194, 158, 204, 153, 216, 142, 230, 137, 247, 127, 262);
    cmplx(166, 176, 164, 185, 157, 195, 151, 202, 136, 218, 129, 231, 129, 247, 132, 264);
    cmplx(166, 179, 170, 188, 170, 205, 166, 211, 160, 221, 149, 231, 149, 245, 144, 262);
    cmplx(177, 180, 168, 198, 159, 209, 159, 235, 159, 252, 158, 264);
    cmplx(179, 181, 180, 191, 180, 196, 170, 206, 160, 225, 170, 251, 172, 261);
    cmplx(189, 182, 181, 193, 175, 208, 172, 217, 166, 224, 162, 238, 147, 248, 147, 260);
    cmplx(189, 185, 189, 193, 181, 199, 181, 208, 174, 220, 170, 233, 170, 241, 175, 257);
    filter(BLUR, 3);
    return get(0, 0, 400, 400);
};
var hand = function(){
    noStroke();
    fill(97, 58, 36);
    pushMatrix();
    translate(519, 0);
    scale(-1, 1);
    cmplx(320, 309, 324, 307, 327, 304, 328, 302, 328, 298, 328, 291, 328, 288, 331, 282, 332, 276, 336, 275, 338, 275, 340, 277, 340, 282, 341, 290, 340, 295, 336, 302, 334, 309, 334, 318, 337, 326, 341, 332, 347, 334, 353, 340, 361, 348, 370, 354, 376, 361, 381, 368, 385, 373, 390, 382, 396, 387, 399, 394, 400, 400, 343, 400, 341, 391, 338, 386, 338, 391, 337, 377, 329, 368, 328, 359, 319, 346, 314, 345, 311, 342, 306, 341, 295, 340, 285, 339, 280, 336, 280, 334, 281, 334, 284, 331, 290, 331, 295, 330, 301, 330, 305, 327, 309, 322, 312, 317, 317, 313, 320, 309);
    cmplx(195, 301, 194, 296, 193, 288, 191, 282, 188, 275, 188, 270, 184, 265, 180, 266, 180, 270, 180, 283, 180, 293, 185, 303, 185, 311, 185, 328, 186, 343, 184, 349, 181, 365, 180, 385, 177, 400, 175, 400, 215, 400, 215, 385, 215, 376, 214, 369, 211, 360, 211, 356, 211, 353, 213, 349, 214, 345, 221, 341, 227, 336, 223, 333, 219, 330, 208, 323, 201, 317, 196, 308);
    popMatrix();
};
var t = bkground();
var bball = function(x, y){
    var w = createGraphics( 400, 400, JAVA2D);
    //filter(BLUR, 2);
    //w.beginDraw();
    w.imageMode(CENTER);
    w.image(t, 200, 200);
    w.pushMatrix();
    w.translate(62, 63);
    w.noStroke();
    w.fill(219, 120, 0);
    w.ellipse(x, y, 159, 159);
    w.noFill();
    w.strokeWeight(2);
    w.stroke(163, 96, 24);
    w.bezier(186, 123, 150, 176, 144, 223, 189, 278);
    w.bezier(133, 160, 142, 190, 168, 196, 196, 182);
    w.bezier(197, 182, 221, 169, 249, 164, 271, 165);
    w.bezier(121, 198, 152, 218, 201, 224, 279, 205);
    w.bezier(139, 251, 150, 237, 168, 232, 196, 251);
    w.bezier(197, 252, 208, 261, 223, 265, 245, 265);
    w.stroke(255, 119, 0);
    var color1 = color(0, 0, 0, 25);
    var color2 = color(0, 0, 0, 1);
    for(var i = 0; i < 31; i++){
        w.stroke(lerpColor(color1, color2, i/31));
        w.ellipse(x, y, 159 - i, 159 - i);
    }
    w.noStroke();
    w.popMatrix();
    w.fill(255, 255, 255);
    w.text("Created by Blaze, CT-2/002-24 for Tariq Jabbar", 4, 396);
    //w.endDraw();
    return w;
};


var ball = bball(200, 200);
//ball.mask(maskImg);
imageMode(CENTER);
    

var draw = function() {
    image(ball, 200, 200);
    hand();
    mouseReleased = function(){
        print(mouseX + ", " + mouseY + ", ");
    };
    keyReleased = function(){
        println("");
    };
};
