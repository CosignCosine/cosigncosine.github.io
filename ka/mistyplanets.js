/** I've been releasing a lot of programs that were going to be in Misty Planets but did just not make the cut. Here's another one: The 3D planets screen. Pretty awesome, right? */
var p = createGraphics(400, 400, P3D);
p.lights();
var planetPositions = [200, -300, 310];
var planetRot = [284, 413, -78];
var planetColors = [color(255, 0, 0), color(0, 255, 102), color(0, 85, 255)];
var planetNames = ["Rugosa", "Endor", "Kamino"];
var planetSizes = [54, 41, 45];
var rotationAmount = 40;
var selected = 1;
var radius = 200;
var thetaOffset = 200;
var stars = [];
for(var i = 0; i < 100; i++){
    stars.push({
        x: cos(random(0, 360))*random(400, 600) + 100,
        y: sin(random(0, 360))*random(400, 600) + 200,
        z: cos(random(0, 360))*random(400, 600) + 100,
        s: color(random(0, 255), random(0, 255), random(0, 255)),
        a: random(0, 1)<0.1,
        sr: 0,
        sg: 0,
        sb: 0
    });
    stars[i].sr = red(stars[i].s);
    stars[i].sg = green(stars[i].s);
    stars[i].sb = blue(stars[i].s);
    stars[i].s = lerpColor(stars[i].s, color(255), 0.6);
}
//Inside
var draw = function() {
    cursor("default");
    p.background(0, 0, 0);
    p.noStroke();
    
    
    //sun
    p.pushMatrix();
    p.translate(100, 200, -radius);
    p.pushMatrix();
    p.rotateY(frameCount/319);
    p.fill(255, 255, 0, 90);
    p.sphere(40);
    for(var i = 40; i < 50; i++){
        p.fill(255, 255, 0, 22);
        p.sphere(i);
    }
    p.popMatrix();
    
    p.pushMatrix();
    p.rotateY(rotationAmount);
    //planets
    p.pushMatrix();
    p.rotateY(thetaOffset);
    for(var i = 0; i < 4; i++){
        p.noStroke();
        p.translate(0, 0, planetPositions[i]);
        p.rotateY(PI);
        p.pushMatrix();
        p.pushMatrix();
        p.rotateY(planetRot[i]);
        p.fill(planetColors[i]);
        p.sphere(planetSizes[i]);
        p.popMatrix();
        if((selected-1) === i){
            p.stroke(255, 255, 255);
            
            p.pushMatrix();
            if(i%2===1){
                p.rotateY(PI);
                p.line(0, 0, 0, -90);
                //p.line(0, -90, -26, -90);
            }else{
                p.line(0, 0, 0, -90);
                //p.line(0, -90, 26, -90);
            }
            p.fill(255, 255, 255);
            p.textFont(createFont("monospace"), 41);
            p.translate(0, 0, 20);
            p.text(planetNames[i], 26, -90);
            p.popMatrix();
        }
        p.popMatrix();
    }
    keyReleased = function(){
        switch(keyCode){
            case LEFT: {
                selected = constrain(selected - 1, 1, 3);
            }break;
            case RIGHT: {
                selected = constrain(selected + 1, 1, 3);
            }break;
        }
        
    };
    if(keyIsPressed){
        switch(key.toString().toLowerCase()){
            case 'w': {
                radius+=10;
            }break;
            case 's': {
                radius-=10;
            }break;
            case 'a': {
                thetaOffset-=0.02;
            }break;
            case 'd': {
                thetaOffset+=0.02;
            }
        }
    }
    p.popMatrix();
    
    p.popMatrix();
    p.rotateY(frameCount/512);
    for(var i = 0; i < stars.length; i++){
        p.pushMatrix();
        var s = stars[i];
        p.translate(s.x, s.y, s.z);
        p.stroke(s.s);
        p.point(0, 0, 0);
        //p.noStroke();
        p.fill(s.sr, s.sg, s.sb, 50);
        p.sphere(0, 0, 30, 30);
        p.popMatrix();
    }
    p.popMatrix();
    rotationAmount += 0.01;
    image(p, 0, 0);
    resetMatrix();
    fill(255, 255, 255, 50);
    noStroke();
    rect(0, 325, 400, 75);
    fill(255, 255, 255);
    textFont(createFont("monospace", 44));
    text(planetNames[selected - 1], 10, 379);
    noFill();
    stroke(255, 255, 255);
    strokeWeight(5);
    rect(330, 337, 50, 50, 20);
    text("›", 344, 371);
    noStroke();
    if(mouseX < 330 + 50 && mouseX > 330 && mouseY < 337 + 50 && mouseY > 337){
        fill(255, 255, 255, 50);
        noStroke();
        rect(330, 337, 50, 50, 20);
        cursor("pointer");
        if(mouseIsPressed){
            noLoop();
        }
    }
};

