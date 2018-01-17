var private = [0.57721566490153286060651209008240243104215933593992, (1 + sqrt(5))/2, log(10), Math.E, Math.PI, log(9876)/log(10), pow(130, 1/3), pow(((1 + sqrt(5))/2), 4), sq(Math.E), 1/cos(83), sqrt(90), (1 - pow(Math.E, -6))/(2*pow(Math.E, -3)), 1/tan(5) ];
var public = ["γ", "φ", "ln 10", "e", "π", "log 9876", "   ___\n\xB3√130\n", "φ⁴", "e²", "sec 83º", "  __\n√90\n", "sinh 3", "cot 5º"];
frameRate(30);
textSize(21);
textFont(createFont("HelveticaNeue-italic"));
var _smooth = 0;
var irrClock = function(){
    fill(0, 0, 0);
    noStroke();
    ellipse(200, 200, 300, 300);
    strokeWeight(2);
    stroke(153, 153, 153);
    pushMatrix();
    translate(200, 200);
    for(var i = 0; i < 60; i++){
        rotate(6);
        line(0, 144, 0, 133);
    }
    if(mouseIsPressed){
        for(var i = 0; i < private.length; i++){
            pushMatrix();
            translate(200, 200);
            var θ = 30*private[i] + -90;
            fill(255, 255, 255);
            text(private[i], 107*cos(θ) - 200, 107*sin(θ) - 200);
            popMatrix();
        }
    }else{
        for(var i = 0; i < private.length; i++){
            pushMatrix();
            translate(200, 200);
            var θ = 30*private[i] + -90;
            fill(255, 255, 255);
            text(public[i], 107*cos(θ) - 200, 107*sin(θ) - 200);
            popMatrix();
        }
    }
    noFill();
    stroke(255, 255, 255);
    for(var i = 0; i < private.length; i++){
        pushMatrix();
        translate(200, 200);
        var θ = 30*private[i] + -90;
        var φ = 132;
        ellipse(φ*cos(θ) - 200, φ*sin(θ) - 200, 7, 7);
        popMatrix();
    }
    popMatrix();
    var h = hour();
    var m = minute();
    var s = second() + _smooth/117;
    var apm = h<12?"AM":"PM";
    strokeCap(SQUARE);
    
    //hours
    strokeWeight(5);
    pushMatrix();
    var σ = 30*(h + m/60 + s/360);
    translate(200, 200);
    rotate(σ);
    line(0, 0, 0, -70);
    popMatrix();
    
    //minutes
    strokeWeight(3);
    pushMatrix();
    σ = 6*m + s/60;
    translate(200, 200);
    rotate(σ);
    line(0, 0, 0, -125);
    popMatrix();
    
    //seconds
    strokeWeight(2);
    pushMatrix();
    σ = 6*s;
    translate(200, 200);
    rotate(σ);
    line(0, 0, 0, -134);
    popMatrix();
    strokeCap(ROUND);
    strokeWeight(10);
    point(200, 200);
};
textAlign(CENTER, CENTER);
var draw = function() {
    pushMatrix();
    scale(width/400, height/400);
    background(255, 255, 255);
    irrClock();
    popMatrix();
};
