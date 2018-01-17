/**
 ,dPYb,     ,dPYb,                                
 IP'`Yb     IP'`Yb                                
 I8  8I     I8  8I                                
 I8  8'     I8  8'                                
 I8 dP      I8 dP    ,gggg,gg     ,gggg,   ,ggg,  
 I8dP   88ggI8dP    dP"  "Y8I    d8"  Yb  i8" "8i 
 I8P    8I  I8P    i8'    ,8I   dP    dP  I8, ,8I 
,d8b,  ,8I ,d8b,_ ,d8,   ,d8b,,dP  ,adP'  `YbadP' 
8P'"Y88P"' 8P'"Y88P"Y8888P"`Y88"   ""Y8d8888P"Y888
                                    ,d8I'         
                                  ,dP'8I          
                                 ,8"  8I          
                                 I8   8I          
                                 `8, ,8I          
                                  `Y8P"     
                                  
If you are wondering, I moved a more deserving program here.
*/
var highlightColor = color(51, 51, 51);
var jerseyColor = color(235, 78, 0);
var jersey = function(num1, num2){
    var CMPLX = function(){
        var args = arguments;
        beginShape();
        for(var i = 0; i < args.length; i+=2){
            vertex(args[i], args[i+1]);
        }
        endShape(CLOSE);
    };
    var MIRROR = function(foo){
        foo();
        pushMatrix();
        translate(400, 0);
        scale(-1, 1);
        foo();
        popMatrix();
    };
    var ONE = function(){
        beginShape();
         vertex(160, 299);
         vertex(160, 348);
         vertex(277, 348);
         vertex(277, 299);
         vertex(253, 299);
         vertex(253, 70);
         vertex(205, 70);
         vertex(135, 142);
         vertex(185, 186);
         vertex(185, 299);
        endShape();
    };
    var FIVE = function(){
        beginShape();
         vertex(252, 72);
         vertex(102, 71);
         vertex(102, 190);
         vertex(156, 191);
         vertex(194, 220);
         vertex(194, 262);
         vertex(120, 300);
         vertex(120, 349);
         vertex(145, 349);
         vertex(251, 286);
         vertex(251, 192);
         vertex(189, 142);
         vertex(147, 142);
         vertex(147, 125);
         vertex(252, 125);
        endShape();
    };
    noStroke();
    MIRROR(function(){
        fill(lerpColor(jerseyColor, color(0), 0.3));
        beginShape();
        vertex(289, 147);
        bezierVertex(313, 149, 335, 145, 354, 131);
        vertex(290, 89);
        endShape();
        
        beginShape();
        vertex(255, 134);
        vertex(255, 86);
        bezierVertex(218, 91, 182, 91, 144, 83);
        vertex(144, 83);
        endShape();
    });
    MIRROR(function(){
        fill(jerseyColor);
        beginShape();
        vertex(200, 145);
        vertex(293, 145);
        bezierVertex(293, 174, 277, 246, 284, 337);
        //bezierVertex(284, 346, 277, 246, 300, 174);
        bezierVertex(274, 340, 202, 350, 127, 338);
        endShape();
        
        triangle(107, 144, 200, 94, 200, 200);
        beginShape();
        vertex(200, 94);
        bezierVertex(223, 95, 246, 90, 257, 81);
        bezierVertex(262, 79, 298, 67, 339, 79);
        bezierVertex(347, 86, 357, 104, 354, 131);
        bezierVertex(336, 128, 307, 130, 293, 151);
        endShape();
    });
    fill(jerseyColor);
    triangle(107, 144, 200, 94, 200, 200);
    
    
    
    fill(highlightColor);
    pushMatrix();
    translate(127, 133);
    scale(0.4);
    translate(-100,0);
    ONE();
    translate(171, 0);
    FIVE();
    popMatrix();
};
background(255, 255, 255);
jersey(1, 5);
