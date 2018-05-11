/**
 * Created by Blaze, ct200224. 
 * 
 * Who said I would ever stop making HSB programs? :P But this isn't HSB... >:D
 * 
 * For some reason I'm creating this while listening to "Want You Gone" from Portal 2. It's quite interesting hearing it over and over 50+ times. And I'm not sick of it yet. Now I only want you gone.
 * 
 * This is quite soothing, to be honest.
 * 
 * This is NOT for MTHLGA. NOT.
 */
var Triangle = function(facing, x, y){
    this.facing = facing;
    this.x = x;
    this.y = y;
    this.c = lerpColor(color(17, 0, 255), color(132, 0, 255), this.y/400);
    this.on = false;
    this.time = random(177);
    this.timer = 0;
    this.tim2 = 0;
};
Triangle.prototype.draw = function() {
    noStroke();
    fill(lerpColor(color(40), this.c, this.tim2/100));
    triangle(this.x, this.y, this.x + this.facing*12.5, this.y + 12.5, this.x, this.y + 25);
    this.y-=0.5;
    this.c = lerpColor(color(17, 0, 255), color(132, 0, 255), this.y/400);
    if(this.timer > this.time){
        this.on = true;
        
    }else{
        this.timer++;
    }
    if(this.on){
        this.tim2+=2;
        if(this.tim2 > 99){
            this.on = false;
            this.timer = 0;
            this.time = random(177);
        }
    }else{
        if(this.tim2 > 0){
            this.tim2-=2;
        }
    }
};
var triangels /* I know this is misspelleeeed. */ = [];
for(var i = 0; i < 40; i++){
    for(var j = 0; j < 36; j++){
        var r1 = 12.5;
        var r2 = 12.5;
        if(j%2 === 0){
            if(i%2 === 0){
                triangels.push(new Triangle(-1, i*r1, j*r2));
            }else{
                triangels.push(new Triangle(1, (i-1)*r1, j*r2));
            }
        }else{
            if(i%2 === 0){
                triangels.push(new Triangle(-1, i*r1 + 12.5, j*r2));
            }else{
                triangels.push(new Triangle(1, (i-1)*r1 + 12.5, j*r2));
            }
        }
    }
}
draw = function() {
    background(0, 0, 0);
    for(var i in triangels){
        if(triangels[i] instanceof Triangle){ //rekt noob
            triangels[i].draw();
            if(triangels[i].y < -40){
                triangels.push(new Triangle(triangels[i].facing, triangels[i].x, triangels[i].y + 450));
                triangels.splice(i, 1);
            }
        }
    }
};
