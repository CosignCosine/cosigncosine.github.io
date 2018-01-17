descr: {
    /**
     * This is my first game in quite a while. Hello all.
     * 
     * This is also the last thing I'll spend a lot of time on here because I have other things to attend to. If you want a full explanation, feel free to join my discord server.
     * 
     * How to play: You want the little triangle on the hexagon to avoid all the barriers. Press left arrow/a to move it couter-clockwise and right arrow/d to move it clockwise.
     * 
     * Note: I am American. I use "." for decimal points. Every second gives you 1 point, and you can have fractions of a point. If you play for 14 seconds, you may have a score of 14.322 or 14.000 (I've even gotten 14 flat once). It's not 14 thousand, it's 14.000. In Europe people use 14,000 as a decimal (or so I've been told) so I just want to clear up that misconception.
     */
}

init: {
    var scpt = "-400s";
    var scf = 1;
    /**
     * Working scripts:
     * 
     * Scripts
     * -wok
     * -ø
     * 
     * Force States
     * -400s
     * -800s
     * -600s
     */
     
    frameRate(60);
    angleMode = 'degrees';
    colorMode(HSB);
    
    var keys = [];
    keyPressed = function(){
        keys[keyCode] = true;
        keys[key.toString().toUpperCase()] = true;
    };
    keyReleased = function(){
        keys[keyCode] = false;
        keys[key.toString().toUpperCase()] = false;
    };
}

vars: {
    var player, mouseIsClicked = false, mouseOverButton = false;
    var laneData = {
        rot: 0, //defaults to 0, the rotation of the lanes
        display: 6, //how many lanes of the six is the game working with?
        shear: 0, //how much are the lanes sheared?
        lanes: [], //lane prototype storage
        true: random(255), //true color of the lanes
        speed: 1, //hi
        paused: false, // duh
        time: function(){
            return frameCount * 60;
        },
        finalScore: null,
        finalScoreSet: false,
        cannotEnter: [0, 0, 0, 0, 0, 0], //what boxes can the player not enter?
        shapes: [] //the polygons that move towards you
    };
    var menuData = {
        debug: false, //debug. change with the -ø modifier
        slide: "Base|Main", //current menu
        difficulty: 0.4, // game difficulty
        dead: false, // nothing of importance
        death: {
            lightness: 255,
            zoom: 1,
            
        }
    };
    var optionData = {
        invert: false,
        colorScheme: 0
    };
    var transition = {
        color: {
            target: 128, //defaults to what I believe is greenish
            rspeed: 15, //reverse speed
            transitioning: false //don't mess with this please, or else you'll complain about things not working the way they should and i won't listen
        },
        finalData: {
            orig: 450,
            rspeed: 25,
            transitioning: false
        },
        pulse: {
            orig: 255,
            rspeed: 25,
            transitioning: false
        }
    };
    var positions = [
        [1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 0],
        [1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 0]
    ];
    var times = {
        '0': 'point',
        '10': 'line',
        '20': 'triangle',
        '30': 'square',
        '40': 'pentagon',
        '60': 'hexagon'
    };
    var ttemp = [], rtemp = times['0'];
    for(var i = 0; i < 61; i++){
        if(times[i.toString()]){
            rtemp = times[i.toString()];
        }
        ttemp.push(rtemp);
    }
    times = ttemp;
}

game: {
    var polygon = function(x, y, w, h, s, rt){
        beginShape();
        for(var i = 0; i < s; i++){
            vertex(cos((i/s)*360 + rt)*w + x, sin((i/s)*360 + rt)*h + y);
        }
        endShape();
    };
    var Shape = function(intake){
        //placeholder variable for cleanliness
        this.pos = width * 1.5;
        this.deletion = false;
    };
    Shape.prototype.update = function(){
        this.pos -= menuData.difficulty * 7;
    };
    var Lane = function(intake){
        this.n = intake.n;
        this.shapes = [];
    };
    Lane.prototype.display = function(no){
        switch(optionData.colorScheme){ // not going to use any more ternary operators than needed
            case 0: {
                fill(laneData.true, no !== 0 ? (this.n % 2 === 0 ? 255 : 180) : no, no === 0 ? (this.n % 2 === 0 ? 0 : 50) : 255);
            } break;
            case 1: {
                fill(laneData.true, this.n % 2 === 0 ? 255 : 180, this.n % 2 === 0 ? 0 : 50);
            } break;
            case 2: {
                fill(0);
            } break;
            case 3: {
                fill(laneData.true, this.n % 2 === 0 ? 30 : 0, 255);
            } break;
        }
        if(no===0){
            fill(laneData.true, 0, (this.n % 2 === 0 ? 0 : 50));
        }
        noStroke();
        triangle(width/2, height/2, cos(laneData.rot + (this.n/laneData.display) * 360) * width + width/2, sin(laneData.rot + (this.n/laneData.display) * 360) * width + width/2, cos(laneData.rot + ((this.n+1)/laneData.display) * 360) * width + width/2, sin(laneData.rot + ((this.n+1)/laneData.display) * 360) * width + width/2);
        
    };
    Lane.prototype.addShapes = function(){
        this.shapes.push(new Shape(width*1.3));
    };
    Lane.prototype.update = function(){
        for(var i = 0; i < this.shapes.length; i++){
            this.shapes[i].update();
        }
        for(var i = 0; i < this.shapes.length; i++){
            switch(optionData.colorScheme){
                case 0:
                case 2: {
                    fill(255, 0, 255);
                    stroke(255, 0, 255);
                } break;
                case 1:
                case 3: {
                    fill(laneData.true, 255, 255);
                    stroke(laneData.true, 255, 255);
                } break;

            }
            var shape = this.shapes[i];
            pushMatrix();
            translate(width/2, height/2);
            rotate(laneData.rot + (this.n/laneData.display) * 360);
            
            strokeWeight(2);
            beginShape();
            vertex((width/1.1625)*(shape.pos/(width*1.5)), -shape.pos);
            vertex((-width/1.1625)*(shape.pos/(width*1.5)), -shape.pos);
            vertex((-width/1.1625)*((shape.pos + width/9)/(width*1.5)), -shape.pos - width/9);
            vertex((width/1.1625)*((shape.pos + width/9)/(width*1.5)), -shape.pos - width/9);
            endShape(CLOSE);
            noStroke();
            if(menuData.debug){
                fill(255, 0, 0);
                text(this.n, 0, -shape.pos);
            }
            popMatrix();
            if(abs(shape.pos - width/15) < width/40){
                if(player.lane() === this.n){
                    menuData.dead = true;
                }
            }
            if(shape.pos < width/25){
                laneData.cannotEnter[this.n] = 1;
            }
            if(shape.pos < -width/25){
                shape.deletion = true;
            }
        }
        for(var i = 0; i < this.shapes.length; i++){
            if(this.shapes[i].deletion){
                this.shapes.splice(i, 1);
            }
        }
    };
    
    for(var i = 0; i < 6; i++){
        laneData.lanes.push(new Lane({n: i}));
    }
    var Player = function(){
        this.rot = 45;
        this.dead = false;
        this.lane = function(){
            return floor((this.rot + 30) / 60) > 5 ? 0 : floor((this.rot + 30) / 60);
        };
    };
    Player.prototype.draw = function() {
        pushMatrix(); //i don't want to do math lol
        translate(width/2, height/2);
        rotate(this.rot + laneData.rot);
        translate(0, width/13);
        switch(optionData.colorScheme){
            case 0:
            case 2: {
                fill(255, 0, 255, 100);
            } break;
            case 1:
            case 3: {
                fill(laneData.true, 255, 255, 100);
            } break;
        }
        triangle(0, -width/15 - 3 * width/28, -width/91, (-4 * width)/25, width/91, (-4 * width)/25);
        translate(0, width/17 - width/15);
        switch(optionData.colorScheme){
            case 0:
            case 2: {
                fill(255, 0, 255);
            } break;
            case 1: 
            case 3: {
                fill(laneData.true, 255, 255);
            } break;
        }
        triangle(0, -width/15 - 3 * width/28, -width/91, (-4 * width)/25, width/91, (-4 * width)/25);
        popMatrix();
    };
    Player.prototype.update = function(){
        this.draw();
        if(!menuData.dead){
            if(keys[LEFT] || keys.A){
                if(laneData.cannotEnter[this.lane()] !== 1){
                    this.rot-=6;
                }else{
                    this.rot = this.lane() * 60 + 30;
                }
            }
            if(keys[RIGHT] || keys.D){
                if(laneData.cannotEnter[this.lane()] !== 1){
                    this.rot+=6;
                }else{
                    this.rot = this.lane() * 60 - 30;
                }
            }
            if(this.rot < 0){
                this.rot = 356;
            }
            if(this.rot > 360){
                this.rot = 4;
            }
        }
    };
    player = new Player();
}   
    
menus: {    
    var reset = function(){
        frameCount = 0;
        laneData.finalScore = 0;
        laneData.finalScoreSet = false;
        menuData.slide = "Base|Main|Game";
        menuData.dead = false;
        menuData.death.lightness = 255;
        menuData.difficulty = 0.4;
        transition.finalData = {
            orig: 450,
            rspeed: 25,
            transitioning: false
        };
        for(var i = 0; i < laneData.lanes.length; i++){
            laneData.lanes[i].shapes = [];
        }
    };
    var Menu = function(name, process, submenus, parent){
        this.name = name;
        this.submenus = submenus;
        this.process = process; 
        this.parent = parent;
    };
    var button = function(x, y, w, h, t, f){
        strokeWeight(3);
        stroke(255, 0, 255);
        fill(255, 0, 255, 100);
        if(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h){
            mouseOverButton = true;
            fill(255, 0, 255, 150);
            if(mouseIsClicked){
                if(typeof f === 'string'){
                    var f0 = menuData.slide.split("|");
                    f0.pop();
                    menuData.slide = f === ".." ? f0.join("|") : f;
                }else{
                    f();
                }
            }
        }
        rect(x, y, w, h);
        textSize(width/20);
        fill(255, 0, 255);
        text(t, x + w/2, y + h/2);
        strokeWeight(1);
    };
    var BASE = new Menu("BASE", function(){ void(0); }, [
        new Menu("Main", function(){
            background(255);
            
            //Laziness strikes anew.
            pushMatrix();
            scale(2);
            translate(-width/4, width/8);
            for(var i = 0; i < laneData.lanes.length; i++){
                laneData.lanes[i].display(0);
            }
            laneData.rot-=2;
            popMatrix();
            
            
            noStroke();
            fill(255, 0, 255);
            textFont(createFont("Arial Black"), 80);
            textAlign(CENTER, CENTER);
            text("SUPER", 187, 111);
            textSize(51);
            text("HEXAGON", 215, 165);
            textSize(22);
            text("beta", 283, 70);
            text("Khan Academy Edition", 200, 385);
            textSize(15);
            text("a   s c o t t   r e p r o d u c t i o n", 200, 195);
        
            textFont(createFont("Arial Bold"));
            button(100, 240, 200, 30, "p l a y", function(){
                reset();
            });
            button(75, 278, 250, 30, "c o l o r   s c h e m e  ( " + (optionData.colorScheme+1) + " )", function(){
                optionData.colorScheme++;
                if(optionData.colorScheme === 4){
                    optionData.colorScheme = 0;
                }
            });
            button(360, 360, 30, 30, "?", "Base|Main|Options");
            button(100, 316, 200, 30, "c o n t r o l s", "Base|Main|Controls");
        }, 
        [
            new Menu("Game", function(){
        laneData.cannotEnter = [0, 0, 0, 0, 0, 0];
        pushMatrix();
        var todaysRandom1 = random() + constrain(abs(tan(frameCount*8)), 0, 2)*2;
        var sf = 20;
        translate(-todaysRandom1/(sf*2) * width, -todaysRandom1/(sf*2) * height);
        scale(1 + todaysRandom1/sf);
        laneData.rot+=laneData.speed;
        if(frameCount % 60 === 0 && random() < 0.1){
            laneData.speed += random(laneData.speed < -3 ? 0 : -0.5, laneData.speed > 3 ? 0 : 0.5);
        }
        // draw
        for(var i = 0; i < laneData.lanes.length; i++){
            laneData.lanes[i].display();
        }
            for(var i = 0; i < laneData.lanes.length; i++){
                laneData.lanes[i].update(); // SEPARATE FOR A REASON, DON'T BOTHER ME ABOUT IT
            }
        switch(optionData.colorScheme){
            case 0:
            case 2: {
                fill(255, 0, 255);
            } break;
            case 1:
            case 3: {
                fill(laneData.true, 255, 255);
            } break;
        }
        var l = constrain(abs(tan(frameCount*8)), 0, 2)*2;
        polygon(width/2, height/2, height/15 + l, height/15 + l, laneData.display, laneData.rot);
        switch(optionData.colorScheme){
            case 0: {
                fill(laneData.true, 255, 255);
            } break;
            case 1: {
                fill(laneData.true, 255, 15);
            } break;
            case 2: {
                fill(laneData.true, 0, 0);
            } break;
            case 3: {
                fill(255, 0, 255);
            } break;
        }
        polygon(width/2, height/2, height/20 + l, height/20 + l, laneData.display, laneData.rot);
        
        player.update();
        
        if(frameCount % round(width / 6 + (2/3)) === 0){
            var todaysRandom = random();
            for(var i = 0; i < positions.length; i++){
                if(todaysRandom > i/(positions.length) && todaysRandom <= (i+1)/(positions.length)){
                    var offsetRandom = floor(random(0, 6));
                    for(var j = 0; j < 6; j++){
                        if(positions[i][(j+offsetRandom)%6] === 1){
                            laneData.lanes[j].addShapes();
                        }
                    }
                }
            }
        }
        if(random() < 0.01 && frameCount % 20 === 0){
            transition.color.target = random(255);
            transition.color.transitioning = true;
        }
        if(transition.color.transitioning && !laneData.dead){
            laneData.true += (transition.color.target - laneData.true)/transition.color.rspeed;
        }
        popMatrix();
        if(menuData.dead){
            menuData.difficulty-=0.05;
            menuData.death.lightness += -menuData.death.lightness/30;
            menuData.death.zoom += (2 - menuData.death.zoom)/30;
            if(!laneData.finalScoreSet){
                laneData.finalScore = frameCount/90;
                laneData.finalScoreSet = true;
            }
            transition.finalData.orig += (150 - transition.finalData.orig)/transition.finalData.rspeed;
            frameCount = 0;
            
            fill(255, 255, 0);
            strokeWeight(3);
            stroke(laneData.true, 255, 255);
            quad(transition.finalData.orig, width/8, width+5, width/8, width+5, width/4, transition.finalData.orig + width/10, width/4);
            
            textSize(30);
            fill(255, 0, 255);
            text("TIME", transition.finalData.orig + width/5.5, width/5.5);
            textSize(20);
            text(laneData.finalScore, transition.finalData.orig + width/2.5, width/5.5);
            button(transition.finalData.orig + width/2, width/6.4, width/10, width/20, "»", function(){
                reset();
                menuData.dead = false;
            });
            
            fill(255, 255, 0);
            strokeWeight(3);
            stroke(laneData.true, 255, 255);
            quad(400 - transition.finalData.orig, 400 - width/8, -5, 400 - width/8, -5, 400 - width/4, 400 - transition.finalData.orig + width/10, 400 - width/4);
            
            textSize(25);
            fill(255, 0, 255);
            text(times[constrain(floor(laneData.finalScore), 0, 60)].toUpperCase(), 400 - transition.finalData.orig - width/5.5, 400 - width/5.3);
            button(400 - transition.finalData.orig - width/1.7, 5*width/6.4, width/5, width/20, "‹", function(){
                
                menuData.slide = "Base|Main";
            });
            
            fill(255, 0, 255, menuData.death.lightness);
            noStroke();
            rect(0, 0, width, height);
        }
        fill(0, 0, 0, menuData.death.lightness);
        strokeWeight(width/100);
        stroke(laneData.true, 255, 255, menuData.death.lightness);
        rect(-width/100, -width/100, width/6, height/10);
        rect(width + width/100, -width/100, -width/4, height/10);
        fill(255, 0, 255, menuData.death.lightness);
        textFont(createFont("Arial Black"), width/30);
        text(frameCount/90, width/12, width/22);
        text(times[constrain(floor(frameCount/90), 0, 60)].toUpperCase(), width - width/8, width/22);
        
        if(!menuData.dead){
            noStroke();
            fill(255, 0, 255, 255 - frameCount*2);
            rect(0, 0, width, height);
        }
    }, []),
            new Menu("Options", function(){
            background(255);
            
            //Laziness strikes anew (x2).
            pushMatrix();
            scale(2);
            translate(-width/4, width/8);
            for(var i = 0; i < laneData.lanes.length; i++){
                laneData.lanes[i].display(0);
            }
            laneData.rot-=2;
            popMatrix();
            
            
            noStroke();
            fill(255, 0, 255);
            textFont(createFont("Arial Black"), 35);
            textAlign(CENTER, CENTER);
            text("SUPER HEXAGON", 200, 38);
            textSize(75);
            text("OPTIONS", 200, 103);
            textSize(15);
            text("Khan Academy Edition", 200, 385);
            textSize(15);
            text("a   b l a z e   r e p r o d u c t i o n", 200, 62);
        
            textFont(createFont("Arial Bold"));
            button(75, 180, 250, 30, "i n v e r t   ( " + (optionData.invert ? "o n )" : "o f f )"), function(){
                optionData.invert = !optionData.invert;
            });
            button(75, 218, 250, 30, "c o l o r   s c h e m e  ( " + (optionData.colorScheme+1) + " )", function(){
                optionData.colorScheme++;
                if(optionData.colorScheme === 4){
                    optionData.colorScheme = 0;
                }
            });
            button(75, 256, 250, 30, "b a c k", "..");
        }, []),
            new Menu("Controls", function(){
                background(255);
            
                //Laziness strikes anew (x3). At this point I sohuld probably have just made a function
                pushMatrix();
                scale(2);
                translate(-width/4, width/8);
                for(var i = 0; i < laneData.lanes.length; i++){
                    laneData.lanes[i].display(0);
                }
                laneData.rot-=2;
                popMatrix();
                
                fill(255, 0, 255);
                textFont(createFont("Arial Black"), 35);
                textAlign(CENTER, CENTER);
                text("SUPER HEXAGON", 200, 38);
                textSize(65);
                text("CONTROLS", 200, 103);
                textSize(15);
                text("Khan Academy Edition", 200, 385);
                textSize(15);
                text("a   b l a z e   r e p r o d u c t i o n", 200, 62);
                
                textAlign(RIGHT, CENTER);
                textFont(createFont("Arial Bold"), 20);
                fill(255, 0, 255);
                text("Left Arrow/A\nRight Arrow/D", 196, 200);
                
                textAlign(LEFT, CENTER);
                textFont(createFont("Arial"), 20);
                fill(255, 0, 255);
                text("Counter-Clockwise\nClockwise", 204, 200);
                
                textAlign(CENTER, CENTER);
                textFont(createFont("Arial Bold"));
                button(75, 277, 250, 30, "b a c k", "..");
            }, [])
        ]
        )
    ]);
    
    // As a note to anyone who may be potentially reading this code, mutating any preset prototype (Number, Array, Object, String, etc.) can be harmful. Do not attempt it unless you KNOW what you're doing (far more than simply elemental experience with that type).
    Array.prototype.fend = function(s, r){
        for(var i = 0; i < this.length; i++){
            if(this[i][s] === r){
                return this[i];
            }
        }
    };
    //var testArray = [{a: "hi"}, {a: "bye"}];
    //println(testArray.fend("a", "hi").a);
}

body: {
    scpt = scpt.split(" ");
    /* jshint ignore: start */
    // don't define things in loops kids :weary: :weary: :ok_hand:
    for(var i = 0; i < scpt.length; i++){
        var script = scpt[i].substr(1, scpt[i].length);
        switch(script){
            case "wok": {
                throw {message: "Error 403 – \"Forbidden\"", toString: function(){ return this.message; }};
            }break;
            case "ø": {
                menuData.debug = true;
            }break;
            case "400s": {
                scf = 1;
            }break;
            case "600s": {
                scf = 1.5;
            }break;
            case "800s": {
                scf = 2;
            }break;
        }
    } //script handling
    /* jshint ignore: end */
    mouseReleased = function(){
        mouseIsClicked = true;
    };
    draw = function() {
        pushMatrix();
        scale(scf);
        mouseOverButton = false;
        var path = menuData.slide.split("|");
        path.shift();
        var cur = BASE;
        for(var i = 0; i < path.length; i++){
            cur = cur.submenus.fend("name", path[i]);
        }
        cur.process();
        cursor(mouseOverButton ? 'pointer' : 'default');
        mouseIsClicked = false;
        if(optionData.invert){
            filter(INVERT);
        }
        popMatrix();
    };
    // ha i made a game deal with it noobs
}

acknowledgements: {
    /**

Why did the chicken cross the Möbius Strip?

     * Thanks to antimonic for gifting me Super Hexagon on Steam. Gotta say it has served the 2 most rage-inducing hours of my life.
     * 
     * Thanks to mai boi andy for suggesting that I remake this. You have been slapped over the internet.
     * 
     * Thanks to Tyrone for being.
     * 
     * Thanks to my 12-hour trip from Milwaukee for the time to make this game.
     * 
     * Thanks to VVVVVV for frustrating me enough with its coding to allow me to spend time coding on KA instead.
     * 
     * Thanks to Lloyddeg for beating all of my SH records >_<
     * 
     * Thanks to Blaze for being dead inside
     */
}
