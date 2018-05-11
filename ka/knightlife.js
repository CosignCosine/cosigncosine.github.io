//Basically all of my games Blue Leaf has helped me with in one way or another.... but in this case he wrote part of the collision function.
var hideFromHotList = false;
var collide = function(block, player) {
    return player.x + player.w > block.x && player.y + player.h > block.y && player.x < block.x + block.w && player.y < block.y + block.h;
};
var input = {};
var levelText = [
    [
        "Get to the princess.",
        "Sometimes it's harder.",
        "Sometimes it's a long way.",
        "Sometimes there are enemies.",
        "Sometimes it's confusing.",
        "Sometimes it's challenging.",
        "Sometimes, you just need to make a choice.",
        "How do I...?",
        "3...2...1...GO!"
    ],
    [
        "Hey, I'm Luuk.",
        "I'm a teenager. People sometimes say I make rash decisions.",
        "My family thinks I should go on a quest.",
        "Wait a minute. I've been here before. Am I going in circles?",
        "That's odd. Last time I was here, this was different... but I don't remember how.",
        "What sort of magic is this?!?!",
        "I can see the end.... or is that just part of the maze?",
        "Is this one invisible? Or is that one?",
        "I made it!"
    ],
    [
        "The beginning is always easy.",
        "But quests are similar. They just get harder.",
        "And harder.",
        "Ah, the entrance to the castle. I just need to get around those guards somehow...",
        "It's dark in here...",
        "Very dark...",
        "That's not fair!!",
        "I found her!"
    ],
    [
        "Another quest, another stage.... What's new?",
        "There's nothing new here... all quests are the same. You do it and get something at the end. Or nothing, in my case.",
        "Even invisibility and dark magic. I mean, seriously! It's all the same!!",
        "Darkness. What's new?",
        "You can't fool me.",
        "Nothing is real....",
        "SimpleDodge...",
        "Maybe the best way to end a quest... is not to begin it at all.",
    ],
    [
        "Where art thou, fair Juliet?",
        "I think that was a line from the theatre.",
        "What's beyond this gate? It looks like a prism of some sort.",
        "What the...",
        "I wonder what happened?",
        "Here's a blue prism. What does it do?",
        "Oh I get it! The white prism duplicates me, and the blue one gets rid of the duplicate! Now I can get the princess!"
    ],
    [
        "How did you get here?",
        "You certainly didn't pay to get here.",
        "If I weren't on a quest, I'd kick you out. But frankly, I don't know how.",
        "Oh well. Here, why don't you have a go at this one while I kick back and relax....",
        "What kind of magic is this?!",
        "Where am I?",
        "What are these multi-colored animals with humans inside?!",
        "Where is the princess?!",
        "Quick, there's another one of those magic things!",
        "Good, the princesss is here too."
    ]
];
var blockSize = 25;
var crate = function(x, y, b) {
    fill(171, 117, 29);
    rect(x, y, b, b);
    fill(150, 103, 27);
    rect(x + b / 8, y + b / 8, b * (3 / 4), b * (3 / 4));
    fill(171, 117, 29);
    rect(x + b / 5, y + b / 5, b * (3 / 5), b * (3 / 5));
    beginShape();
    vertex(x + b / 8, y);
    vertex(x + b, y + (b) * (7 / 8));
    vertex(x + b * (7 / 8), y + b);
    vertex(x, y + b / 8);
    endShape(CLOSE);
    fill(0, 0, 0, 20);
    triangle(x, y + b, x + b, y + b, x + b, y);
};
var Game = {currentLevel: 0};
var Block = function(x, y, n) {
    this.positionInArray = new PVector(x, y);
    this.x = x*blockSize;
    this.y = y*blockSize;
    this.w = blockSize;
    this.h = blockSize;
    this.n = n;
    this.turnedOn = true;
};
var levelDefaultBeginPositions = [[], [], [], [], [], [], [], []];
var Player = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = 0;
    this.h = 0;
    this.xVel = 0;
    this.yVel = 0;
    this.speed = 2;
    this.characterData = 0;
    this.needsToResetPosition = true;
    this.destinationVector = new PVector(200, 200);
};
Player.prototype.run = function(levl) {
    if(levl){
        if(this.needsToResetPosition){
            this.destinationVector = levl.defaultBeginPosition || {x: 200, y: 200};
            this.x = this.destinationVector.x;
            this.y = this.destinationVector.y;
            this.needsToResetPosition = false;
        }
        this.speed = blockSize/20;
        if (input[LEFT]) {
            this.xVel = -this.speed;
        } else if (input[RIGHT]) {
            this.xVel = this.speed;
        }
    
        if (input[UP]) {
            this.yVel = -this.speed;
        } else if (input[DOWN]) {
            this.yVel = this.speed;
        }
        if (!input[LEFT] && !input[RIGHT]) {
            this.xVel = 0;
        }
        if (!input[UP] && !input[DOWN]) {
            this.yVel = 0;
        }
        this.x += this.xVel;
        this.y += this.yVel;
        for (var i = 0; i < levl.length; i++) {
            for (var j = 0; j < levl[i].length; j++) {
                if (levl[i][j] instanceof Block) {
                    levl[i][j].collide(this);
                }
            }
        }
        if(this.x + this.w > 400){
            this.x = 400 - this.w;
        }
        if(this.y + this.h > 400){
            this.y = 400 - this.h;
        }
        if(this.x < 0){
            this.x = 0;
        }
        if(this.y < 0){
            this.y = 0;
        }
    }
};
var player = new Player(200, 200);
/**
 * Rudolph
 * Alexi
 * Maxim
 * Luuk
 * Default_enemy
 */

var readMappedArray = function(aray){
    if(aray){
        for(var i = 0; i < aray.length; i++){
            if(aray[i]){
                for(var j = 0; j < (aray[i] || []).length; j++){
                    switch(aray[i][j]){
                        case 'P':
                            aray[i][j] = new Block(j, i, 0);
                            break;
                        case 'O':
                            aray[i][j] = new Block(j, i, 1);
                            break;
                        case 'Q':
                            aray.defaultBeginPosition =  {x: j*(400/aray[i].length), y: i*(400/aray.length)};
                            break;
                        default: void(0); break;
                    }
                }
            }
        }
    }
    return aray;
};
var Game = {
    active: hideFromHotList,
    blockSize: blockSize,
    currentLevel: 0,
    currentQuestNumber: 0,
    main: {
        transY: 0,
        transSpeed: -3
    },
    shape: function() {
        for (var i = 0; i < arguments.length; i += 2) {
            curveVertex(arguments[i], arguments[i + 1]);
        }
    },
    setup: function() {
        noStroke();
        textAlign(CENTER, CENTER);
    },
    resetBlockSize: function() {
        this.blockSize = blockSize = 400/((this.levels[this.currentQuestNumber][this.currentLevel] || []).length || 1);
    },
    playerTex: function(x, y, c1, c2) {
        pushMatrix();
        translate(x, y);
        scale(this.blockSize);
        scale(1 / this.blockSize);
        fill(c2);
        beginShape();
        vertex(this.blockSize / 2 - this.blockSize / 15, 0);
        vertex(this.blockSize / 2 - this.blockSize / 15, 0);
        curveVertex(this.blockSize / 2 - this.blockSize / 24, -this.blockSize / 7);
        curveVertex(this.blockSize / 1.8, -this.blockSize / 3);
        curveVertex(this.blockSize / 1.6, -this.blockSize / 2.5);
        curveVertex(this.blockSize / 1.3, -this.blockSize / 2.5);
        curveVertex(this.blockSize / 1.15, -this.blockSize / 4);
        curveVertex(this.blockSize / 1.3, -this.blockSize / 7);
        curveVertex(this.blockSize / 1.5, -this.blockSize / 10);
        curveVertex(this.blockSize / 2 + this.blockSize / 15, 0);
        vertex(this.blockSize / 2 + this.blockSize / 15, 0);
        endShape();
        noStroke();
        fill(112, 112, 112);
        rect(0, 0, this.blockSize, this.blockSize, this.blockSize / 16);
        fill(240, 178, 173);
        rect(this.blockSize / 15, this.blockSize / 4, (this.blockSize * 12.7) / 15, this.blockSize / 4, this.blockSize);
        fill(c1);
        ellipse(2 * this.blockSize / 7, this.blockSize / 2.666, this.blockSize / 9, this.blockSize / 9);
        ellipse(5 * this.blockSize / 7, this.blockSize / 2.666, this.blockSize / 9, this.blockSize / 9);
        fill(0, 0, 0, 20);
        rect(this.blockSize / 2, 0, this.blockSize / 2, this.blockSize,
            0, this.blockSize / 16, this.blockSize / 16, 0);
        popMatrix();
        return this.blockSize;
    },
    flatMainMenuBackground: function() {
        fill(168, 223, 230);
        rect(0, 0, width, height);
        pushMatrix();
        translate(0, 50);
        fill(120, 120, 120);
        beginShape();
        vertex(200, 141);
        vertex(244, 135);
        vertex(248, 206);
        vertex(256, 215);
        vertex(200, 244);
        vertex(200, 141);
        vertex(400 - 244, 135);
        vertex(400 - 248, 206);
        vertex(400 - 256, 215);
        vertex(200, 244);
        endShape();
        fill(156, 156, 156);
        quad(156, 135, 200, 131, 400 - 156, 135, 200, 143);
        fill(255, 0, 0);
        beginShape();
        vertex(197, 136);
        this.shape(192, 136, 207, 99, 225, 85, 239, 97, 234, 112, 219, 108, 210, 119, 206, 134);

        endShape();
        fill(77, 77, 77);
        quad(210, 177, 214, 183, 228, 180, 233, 171);
        quad(400 - 210, 177, 400 - 214, 183, 400 - 228, 180, 400 - 233, 171);
        textFont(createFont("HelveticaNeue-Bold"), 36);
        fill(93, 153, 161);
        text("k n i g h t l i f e", 200, 284);
        if (!this.active) {
            textFont(createFont("HelveticaNeue-Light"), 12);
            text("coming soon", 200, 306);
        }
        popMatrix();
        fill(0, 0, 0, 20);
        rect(0, 0, 200, height);
    },
    levels: [
        [
            [
                ['O', ''],
                ['P', 'Q']
            ],
            [
                ['', 'P', ''],
                ['', '', ''],
                ['Q', 'P', 'O']
            ],
            [ 
                ['Q'],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                ['', '', '', '', '', '', '', '', 'O']
            ]
        ]
    ],
    recalibrateBlocks: function(){
        for(var j = 0; j < this.levels.length; j++){
            for(var i = 0; i < this.levels[j].length; i++){
                if(this.levels[j][i]){
                    this.levels[j][i] = readMappedArray(this.levels[j][i]);
                }
            }
        }
    },
    game: function() {
        this.resetBlockSize();
        for (var i = 0; i < 400; i += this.blockSize * 2) {
            fill(146, 196, 53);
            rect(0, i, 400, this.blockSize);
        }
        for (i = 0; i < 400; i += this.blockSize * 2) {
            fill(0, 0, 0, 10);
            rect(i, 0, this.blockSize, 400);
        }
        for(var i = 0; i < ((this.levels[this.currentQuestNumber][this.currentLevel] || []).length || 0); i++){
            for(var j = 0; j < ((this.levels[this.currentQuestNumber][this.currentLevel][i] || []).length || 0); j++){

                if(this.levels[this.currentQuestNumber][this.currentLevel][i][j] instanceof Block){
                    this.levels[this.currentQuestNumber][this.currentLevel][i][j].draw();
                }
            }
        }
        //z-index: last
        player.run(this.levels[this.currentQuestNumber][this.currentLevel]);
        player.draw();
        
        fill(237, 237, 237);
        rect(0, 400, 400, 100);
        
        fill(117, 117, 117);
        rect(0, 400, 400, 10);
        textSize(20);
        text(levelText[this.currentQuestNumber][this.currentLevel], 0, 400, 400, 100);
    },
    draw: function() {
        background(164, 230, 78);
        this.setup();
        this.game();
        pushMatrix();
        translate(0, this.main.transY);
        this.flatMainMenuBackground();
        popMatrix();
        if (frameCount > 100 && this.active) {
            this.main.transY += this.main.transSpeed;
            this.main.transSpeed *= 1.05;
        }
    }
};
Block.prototype.collide = function(that) {
    this.x = this.positionInArray.x*blockSize;
    this.y = this.positionInArray.y*blockSize;
    this.w = blockSize;
    this.h = blockSize;
    
    if (collide(this, that) && this.turnedOn) {
        switch(this.n){
            case 0: {
                var a = atan2(that.y - this.y, that.x - this.x);
                if (a >= -135 && a <= -45) {
                    that.y = this.y - that.h;
                } else if (a >= 45 && a <= 135) {
                    that.y = this.y + this.h;
                } else if(a < 45 && a > -45){
                    that.x = this.x + this.w;
                } else {
                    that.x = this.x - that.w;
                }
            }break;
            case 1: {
                Game.currentLevel++;
                this.turnedOn = false;
                player.needsToResetPosition = true;
                player.destinationVector = new PVector(this.x, this.y);
            }break;
        }
    }
    return that;
};
Block.prototype.draw = function() {
    crate(this.x, this.y, this.w);
};
Game.recalibrateBlocks();
Player.prototype.draw = function() {
    this.w = this.h = Game.playerTex(this.x, this.y, color(255, 0, 0), color(0, 166, 255));
};
keyPressed = function() {
    input[key.toString().toUpperCase()] = true;
    input[keyCode] = true;
};
keyReleased = function() {
    input[key.toString().toUpperCase()] = false;
    input[keyCode] = false;
};
draw = function() {
    try {
        Game.draw();
    } catch (e) {
        println(e);
        noLoop();
    }
};
