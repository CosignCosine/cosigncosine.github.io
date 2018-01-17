//KingCodeFish, your move.
/** How to play: Click (and drag) on the grid to change each square's color back to the original color. Try to keep all of the squares the original color, and don't let them get bright red. */
frameRate(60);
var mouseIsIn = function(x, y, w, h){
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}, blockSize = 2, menuColor = color(random(127, 255), random(127, 255), random(127, 255)), menu = 'main', youLose = false, win = false, grid = [[]], mouseOverButton = false, mouseCounter = 0, doingAnimation = false, deepness = 0, difficulty = 1, deep = 5, buttons = [], textarray = function(tt, x, y, aray){
    textAlign(BASELINE, BASELINE);
    var w = textWidth(tt) - tt.length;
    var textL = 0;
    pushMatrix();
    translate(x - w/2, y);
    for(var i = 0, q = 0; i < tt.length; i++){
        fill(aray[q] || 255);
        text(tt[i], textL, 0);
        textL += textWidth(tt[i]) - 1;
        if(tt[i] !== ' '){
            q++;
        }
    }
    popMatrix();
    textAlign(CENTER, CENTER);
}, img, score = 0;
var Square = function(x, y){
    this.x = x;
    this.y = y;
    this.rand = random(100);
    this.col = menuColor;
    this.ttl = 175;
    this.ended = false;
};
Square.prototype.run = function(){
    noStroke();
    if(this.rand < 0){
        this.col = lerpColor(this.col, color(255, 0, 0), 1/100);
        this.ttl--;
        if(this.ttl < 30){
            this.col = color(17, 255, 0);
            this.ended = true;
            win = true;
        }
    }
    fill(this.col);
    rect(this.x, this.y, width/blockSize + 1, height/blockSize + 1);
    this.rand--;
    if(((menu === 'play' && mouseIsIn(this.x, this.y, width/blockSize, height/blockSize) && mouseIsPressed) || ((menu === 'main' || menu === 'choose') && this.ttl < 45)) && !this.ended){
        this.col = menuColor;
        this.ttl = 175;
    }
};
var recalibrateGrid = function(bs){
    grid = [];
    blockSize = bs;
    for(var i = 0; i < bs; i++){
        var row = [];
        for(var j = 0; j < bs; j++){
            row.push(new Square(i*(400/blockSize), j*(400/blockSize)));
        }
        grid.push(row);
    }
};
recalibrateGrid(6);
textAlign(CENTER, CENTER);
var Button = function(){
    this.wasPressed = false;
};
Button.prototype.draw = function(x, y, w, h, t, func){
    rectMode(CENTER);
    fill(150, 150, 150);
    rect(x, y, w, h, 10);
    textFont(createFont("HelveticaNeue-UltraLight"), 28);
    fill(255, 255, 255);
    text(t, x, y);
    if(mouseIsIn(x - w/2, y - h/2, w, h) && deepness < 10){
        fill(255, 255, 255, 30);
        rect(x, y, w, h, 10);
        mouseOverButton = true;
        if(mouseIsPressed && mouseCounter > 20){
            doingAnimation = true;
            mouseCounter = 0;
            this.wasPressed = true;
        }
    }
    if(deepness > 255 && this.wasPressed){
        func();
        this.wasPressed = false;
        mouseCounter = 0;
    }
    rectMode(CORNER);
};
for(var i = 0; i < 30; i++){
    buttons.push(new Button());
}
var draw = function() {
    mouseOverButton = false;
    if(!win){
        background(menuColor);
    }
    if(menu === 'main' || menu === 'choose'){
        for(var i = 0; i < grid.length; i++){
            for(var j = 0; j < grid[i].length; j++){
                if(grid[i][j]){
                    grid[i][j].run();
                }
            }
        }
    }
    switch(menu){
        case 'main': {
            textFont(createFont("HelveticaNeue-UltraLight"), 50);
            fill(71, 71, 71);
            textarray("s q u a r e s", 200, 136, [color(0), color(0), color(0)]);
            buttons[0].draw(200, 236, 128, 63, "p l a y", function(){menu = 'choose';});
        } break;
        case 'choose': {
            textFont(createFont("HelveticaNeue-UltraLight"), 41);
            fill(71, 71, 71);
            textarray("d i f f i c u l t y", 200, 108, [color(0),color(0),color(0),color(0),color(0),color(0)]);
            textSize(30);
            textarray("s e l e c t", 200, 140, [color(0),color(0),color(0)]);
            for(var i = 2; i < 10; i++){
                buttons[i-1].draw(i*43 - 33, 223, 40, 40, i, function(){
                    difficulty = i;
                    recalibrateGrid(difficulty);
                    menu = 'play';
                }); //jshint ignore:line
            }
        } break;
        case 'play': {
            if(win){
                if(!img){
                    mouseCounter = -20;
                    filter(BLUR, 3);
                    img = get(0, 0, 400, 400);
                }else{
                    image(img, 0, 0);
                }
                fill(0, 0, 0);
                textSize(20);
                text("Remember... they can't be red...", 200, 138);
                text("Your score was...", 200, 168);
                textSize(60);
                text(score, 200, 210);
                buttons[12].draw(200, 283, 100, 50, "‹ Main", function(){
                    menu = "main";
                    score = 0;
                    difficulty = 1;
                    img = undefined;
                    win = false;
                    recalibrateGrid(6);
                });
            }else{
                blockSize = difficulty;
                for(var i = 0; i < grid.length; i++){
                    for(var j = 0; j < grid[i].length; j++){
                        if(grid[i][j]){
                            grid[i][j].run();
                        }
                    }
                }
                score += difficulty;
            }
            
        } break;
    }
    if(menu !== 'main' && menu !== 'play'){
        buttons[11].draw(30, 30, 40, 40, "‹", function(){
            menu = "main";
            recalibrateGrid(6);
        }); //jshint ignore:line
    }
    cursor(mouseOverButton?'pointer':'default');
    mouseCounter++;
    fill(0, 0, 0, deepness);
    noStroke();
    rect(0, 0, 400, 400);
    if(doingAnimation){
        deepness+=deep;
        if(deepness > 255){
            deep = -deep;
        }else if(deepness < 0){
            doingAnimation = false;
            deep = -deep;
        }
    }
};
