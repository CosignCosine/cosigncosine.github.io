/** Switched with ColorTap because I decided I needed to work on it a little more. Enjoy another hexagon program! :P */
colorMode(HSB);
var hexagon = function(x, y, w, h){
    pushMatrix();
    translate(x, y);
    rotate(30);
    beginShape();
    for(var i = 0; i < 360; i += (360/6)){
        vertex(cos(i)*w, sin(i)*h);
    }
    endShape(CLOSE);
    popMatrix();
};
var col = 0;
var Hexagon = function(){
    this.size = random(25, 50);
    this.timeToLive = 0;
    this.reachedFullPotential = false;
    this.destination = new PVector(random(400), random(400));
    this.current = new PVector(random(400), random(400));
    this.speed = 50;
    this.time = random(0, 400);
};
Hexagon.prototype.run = function(){
    if(this.time < 0){
        this.current.add(new PVector((this.destination.x - this.current.x)/this.speed, (this.destination.y - this.current.y)/this.speed));
        if(!this.reachedFullPotential){
            this.timeToLive+=9;
            if(this.timeToLive > 255){
                this.reachedFullPotential = true;
            }
        }else{
            this.timeToLive-=6;
        }
        stroke(col, 255, 255, this.timeToLive);
        fill(col, 255, 255, this.timeToLive/64);
        hexagon(this.current.x, this.current.y, this.size, this.size);
    }else{
        this.time--;
    }
};
var hexagons = [];
for(var i = 0; i < 45; i++){
    hexagons.push(new Hexagon());
}
background(0);
var draw = function() {
    noStroke();
    fill(0, 0, 0, 50);
    rect(0, 0, 400, 400);
    for(var i = 0; i < hexagons.length; i++){
        hexagons[i].run();
        if(hexagons[i].timeToLive < 0){
            hexagons[i] = new Hexagon();
        }
    }
    col += 0.1;
    col %= 255;
};

/*
var _size = 26;
var menuX = 0;
var _speed = 2;
var deepness = 255;
var deep = 10;
var deathX = 0;
var menu = 'main';
var menubeginninggame = false;
var ttd = function(){
    menu = 'logo';
};
var doingAnimation = true;
var currentDeathAnimation = 1;
colorMode(HSB);
var pts = 0;
var radius = 100;
textAlign(CENTER, CENTER);
var randomDrops = [];
var Droplet = function(x, y, c, l, s){
    this.hasParams = x || false;
    this.x = x || random(30, 400 - 30);
    this.y = y || random(-20, -1000);
    this.color = c || random(255);
    this.l = l || random(16, 213);
    this.r = radius;
    this.r2 = this.r;
    this.r3 = this.r - this.r/1.61818181818;
    this.speed = function(q){ 
        return q || (s || _speed);
    };
    this.doingDeathAnimation = false;
    this.timeToLive = 0;
    this.iterations = 28;
    this.scoreY = this.y;
    this.scoreTTL = 255;
};
Droplet.prototype.handleClicks = function(){
    if(!this.doingDeathAnimation && dist(mouseX, mouseY, this.x, this.y) < this.r*0.52){
        this.doingDeathAnimation = true;
        pts += this.color*this.speed()*0.9;
        this.scoreY = this.y;
    }
}; // for use ONLY IN MOUSE CLICKED/RELEASED statements
Droplet.prototype.die = function(){
    if(menu !== 'main'){
        switch(currentDeathAnimation){
            case 0: 
                this.timeToLive+=5;             
                this.y += this.speed()/3;
                break;
            case 1:
                this.y -= 15;
                break;
            case 2:
                this.x += (this.x < 200) ? -9 : 9;
                this.y -= this.speed();
                break;
        }
    }
};
Droplet.prototype.run = function(){
    if(this.hasParams){
        this.color = frameCount % 255;
    }
    noFill();
    rectMode(CENTER);
    for(var i = 0; i < this.iterations; i++){
        noFill();
        stroke(this.color, 255, 255, constrain(1/i - this.timeToLive, 0, 255));
        ellipse(this.x, this.y, this.r2 + i, this.r2 + i);
        stroke(this.color, 255, 255, constrain(1/i * (255 - this.timeToLive) * 2, 0, 255));
        ellipse(this.x, this.y, this.r + i, this.r + i);
        stroke(this.color, 255, 255, constrain(1/i * (255 - this.timeToLive) * 3, 0, 255));
        ellipse(this.x, this.y, this.r - i, this.r - i);
        
        stroke(this.color, 255, 255, constrain(1/i * (255 - this.timeToLive) * 2, 0, 255)/2);
        ellipse(this.x, this.y, this.r + i + 25, this.r + i + 25);
    }
    rectMode(CORNERS);
    if(dist(mouseX, mouseY, this.x, this.y) < 20){
        this.r2 += (this.r3 - this.r2)/10;
    }else{
        this.r2 += (this.r - this.r2)/10;
    }
    if(!this.doingDeathAnimation){
        if(menu !== 'main' || !this.hasParams){
            this.y += this.speed();
        }
    }else{
        this.die();
        this.scoreY+=2;
        this.scoreTTL-=5;
    }
    if(menu !== 'main'){
        fill(this.color, 255, 255, this.scoreTTL);
        text("+" + round(this.color*this.speed()*0.9), this.x, this.scoreY);
    }
};
for(var i = 0; i < 5; i++){
    randomDrops.push(new Droplet());
}
var menuDroplets = (function(){
    var retrun = [];
    for(var i = 0; i < 16; i++){
        retrun.push(new Droplet());
    }
    return retrun;
})();

var menuButton = new Droplet(200, 244);
var youLose = false;
var died = false;
var restartTime = 150;
frameRate(30);
var draw = function() {
    background(0, 0, 0);
    randomDrops.sort(function(a, b){
        if(a.doingDeathAnimation){
            return 0;
        }
        if(b.doingDeathAnimation){
            return randomDrops.length;
        }
        return b.y - a.y;
        
    });
    switch(menu){
        case 'play': {
            pushMatrix();
            translate(deathX, 0);
            fill(255, 0, 0);
            noStroke();
            for(var i in randomDrops){ //Gotcha >:D
                if(randomDrops[i] instanceof Droplet){
                    randomDrops[i].run();
                    if(randomDrops[i].doingDeathAnimation && randomDrops[i].y < -60){
                        randomDrops[i] = new Droplet();
                    }
                    if(randomDrops[i].y > 400 && !died){
                        youLose = true;
                    }
                }
            }
            for(var i = 400, k = 255; i > 200; --i, k-=4){
                var c = randomDrops[0].color;
                stroke(c, 255, 255, (k/2)/2);
                line(0, i, 400, i);
            }
            var pointText = round(pts).toString();
            for(var i = 0, r = 0; i < pointText.length; i++){
                r += textWidth(pointText[i]);
                textSize(24);
                for(var j = 0; j < 5; j++){
                    fill(randomDrops[0].color, 255, 255, 75);
                    textSize(24 + j * j);
                    text(pointText[i], 200 + r - textWidth(pointText)/2 + j*1.1111, 26);
                }
                textSize(24);
                fill(randomDrops[0].color, 255, 255);
                text(pointText[i], 200 + r - textWidth(pointText)/2 + 1, 26);
            }
            textSize(50);
            fill(frameCount%255, 255, 255);
            text("your score was\n", -200, 101);
            fill(frameCount%255, 255, 255, 10);
            for(var i = 0; i < frameCount % 200; i++){
                text("your score was\n", -200 + cos(i)*(i/2), 101 + sin(i)*(i/2));
            }
            fill(frameCount%255, 255, 255);
            textSize(80);
            text(round(pts), -200, 200);
            textSize(15);
            text("Restarting in " + floor(restartTime/30) + "...", -200, 100);
            popMatrix();
            if(youLose){
                deathX+=(400 - deathX)/20;
                restartTime--;
            }
            if(restartTime <= 0 && youLose){
                restartTime = 0;
                ttd = function(){
                    menu = 'play';
                    pts = 0;
                    randomDrops = [];
                    radius = 100;
                    for(var i = 0; i < 5; i++){
                        randomDrops.push(new Droplet());
                    }
                    deathX = 0;
                    youLose = false;
                    restartTime = 150;
                    _speed = 2;
                };
                doingAnimation = true;
            }
            _speed+=0.01;
            radius -= 0.05;
        }break;
        case 'main': {
            for(var i in menuDroplets){
                menuDroplets[i].run();
                if(menuDroplets[i].y > 460){
                    menuDroplets[i].y = -40;
                }
            }
            fill(0, 0, 0, 200);
            rect(0, 0, 400, 400);
            pushMatrix();
            translate(menuX, 0);
            textSize(70);
            var r = 142;
            fill(frameCount%255, 255, 255);
            text("ColorTap", 200, 101);
            fill(frameCount%255, 255, 255, 10);
            for(var i = 0; i < frameCount % 200; i++){
                text("ColorTap", 200 + cos(i)*(i/2), 101 + sin(i)*(i/2));
            }
            menuButton.run();
            if(mouseIsPressed && dist(mouseX, mouseY, 200, 244) < 55){
                doingAnimation = true;
                ttd = function(){
                    menu = 'play';
                };
            }
            for(var i = 0; i < 360; i++){
                var l = map(i, 0, 360, 0, 255);
                fill(l, 255, 255);
                ellipse(cos(i)*109 - 200, sin(i)*109 + 200, 44, 4);
            }
            text(atan((mouseY-200)/(mouseX-200)), -200, 200);
            popMatrix();
            if(menubeginninggame){
                menuX += (400 - menuX)/9;
            }
            
        }break;
        case 'logo': {
            stroke(255, 0, 127);
            fill(255, 0, 127);
            line(100, 0, 100, abs(90 - frameCount) > 5 ? 230 : 260);
            ellipse(100, abs(90 - frameCount) > 5 ? 230 : 260, 3, 6);
            if(frameCount > 100){
                fill(255, 0, 255);
            }else{
                fill(0, 0, 0);
            }
            textFont(createFont("Times"), 40);
            text("blaze", 200, 200);
            if(frameCount > 200){
                doingAnimation = true;
                ttd = function(){
                    menu = 'main';
                    textFont(createFont("Arial-bold"), 24);
                };
            }
        }break;
    }
    fill(0, 0, 0, deepness);
    noStroke();
    rect(0, 0, 400, 400);
    if(doingAnimation){
        deepness+=deep;
        if(deepness > 255){
            deep = -deep;
            ttd();
        }else if(deepness < 0){
            doingAnimation = false;
            deep = -deep;
        }
    }
};

mousePressed = function(){
    if(!youLose){
        for(var i in randomDrops){
            if(randomDrops[i] instanceof Droplet){
                randomDrops[i].handleClicks();
            }
        }
    }
};
*/
