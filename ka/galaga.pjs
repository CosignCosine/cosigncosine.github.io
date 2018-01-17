//coded in 6 hours by Blaze. I created all sprites, functions, et cetera.
/** Credits
 * Thanks to thinsoldier for the stars. Kudos!
 * Moral Support and first vote: The guy who likes traffic lights, Tariq Jabbar *
 

*/
//I got mentioned....
//http://cs-blog.khanacademy.org/2016/01/custom-and-bigger-program-sizes.html
/** 
 * FAQ FAQ FAQ FAQ FAQ
 * 
 * You: It's not a real game!
 * Me: It is! Look here: https://en.wikipedia.org/wiki/Galaga
 * 
 * You: How many years of experience do you have?
 * Me: Two, sadly.
 * 
 * You: I want—
 * Me: Ugh, I'll just give you all the facts.
 * I'm a boy.
 * I've finished 100% of all the curriculums here except for SQL.
 * I'm 13 years old.
 * This program has pixel art, object oriented programming, flashing, gradients, life.... death.... to be or not to be......
 * 
 */
//Winners!
//-Tariq Jabbar
//-Yatrik Patel
//-The #1 Coding and Math Proponent
//-Gleam of Dawn
//press a/d/l/r to move, up\w to shoot.
var delag = false;
//The graphics library (which will be expanded in times to come)
var gfx = {
    //when you opened this, did you think it was small? LOL!
    player: [".........00.........", "........0000........", ".......000000.......", "......00011000......", "......00100100......", "......00100100......", "......00100100......", "......00100100......", "......01000010......", "......01000010......", ".....2010000102.....", ".....2010000102.....", "....220010010022....", "....220001100022....", "...22200100100222...", "...2..00000000..2...", "........0110........"],
    
    //the enemies
    beginningEnemy: [".........0..........", "...11...202...11....", "....11..020..11.....", "....31131313113.....", ".....331313133......", "......3113113.......", ".......33133........", "........313.........", ".........3.........."],
    intermediateEnemy: ".........00.......,..11.2...11...2.11,...33233133133233.,....323231132323..,.....2321331232...,.....2323113232...,.....2.213312.2...,.......231132.....,.......2.33.2.....,.........33.......",
    harderEnemy: ".0.1.0.,2022202,2033302,0223220,0223220,0.222.0,0.222.0,...2...,...2...",
    evenHarderEnemy: "...0.........0...,...0.........0...,..0000000000000..,..0100011100010..,..0011000001100..,.020001111100020.,.021000000000120.,.020110000011020.,..2.001111100.2..,..2...00000...2..,........0........",
    hardestEnemy: "...00...1...00...,..020..131..020..,..020.00000.020..,.0200.04440.0020.,.020000444000020.,.002000444000200.,.0020.02220.0200.,.0200.00000.0020.,..20.........02..,..00.........00..",
    //the alphabet
    alphabet: {
        a: ".000.,0...0,00000,0...0,0...0",
        b: "00000,01110,00000,01110,00000",
        c: "00000,01111,01111,01111,00000",
        d: "0000.,01110,01110,01110,0000.",
        e: "00000,0111.,00000,0111.,00000",
        f: "00000,0111.,00000,0111.,0....",
        g: "00000,0111.,0..00,01110,00000",
        h: "0...0,0...0,00000,0...0,0...0",
        i: "..0..,..0..,..0..,..0..,..0..",
        j: "..000,...0.,...0.,.0.0.,.000.",
        k: "0..0.,0.0..,00...,0.0..,0..0.",
        l: "0....,0....,0....,0....,00000",
        m: "00000,0.0.0,0.0.0,0.0.0,0.0.0",
        n: "0...0,00..0,0.0.0,0..00,0...0",
        o: "00000,0...0,0...0,0...0,00000",
        p: "00000,0...0,00000,0....,0....",
        q: "00000,0...0,0.0.0,00000,...0.",
        r: "00000,0...0,00000,0.0..,0..0.",
        s: "00000,0....,00000,....0,00000",
        t: "00000,..0..,..0..,..0..,..0..",
        u: "0...0,0...0,0...0,0...0,00000",
        v: "0...0,0...0,.0.0.,.0.0.,..0..",
        w: "0.0.0,0.0.0,0.0.0,0.0.0,.000.",
        x: "0...0,.0.0.,..0..,.0.0.,0...0",
        y: "0...0,.0.0.,..0..,..0..,..0..",
        z: "00000,...0.,..0..,.0...,00000",
        ".": ".....,.....,.....,.....,..0..",
        ",": ".....,.....,.....,..0..,..0..",
        "?": ".000.,...0.,.000.,.....,..0..",
        "!": "..0..,..0..,..0..,.....,..0..",
        "/": "....0,...0.,..0..,.0...,0....",
        1: "..0..,.00..,..0..,..0..,..0..",
        2: "..0..,.00..,..0..,..0..,..0..",
        3: "..0..,.00..,..0..,..0..,..0..",
        4: "..0..,.00..,..0..,..0..,..0..",
        5: "..0..,.00..,..0..,..0..,..0..",
        6: "..0..,.00..,..0..,..0..,..0..",
        7: "..0..,.00..,..0..,..0..,..0..",
        8: "..0..,.00..,..0..,..0..,..0..",
        9: "..0..,.00..,..0..,..0..,..0..",
        0: ".000.,0...0,0...0,0...0,.000."
    },
    
    //I was going to add planets that parallaxed by in the background, but I don't think I have time, or the memory on my computer xD
    planets: {
        earth: ".......000000.......,.....0000000000.....,...11001111000111...,..0110011100011111..,..0111110000011111..,.001111101001111000.,.001111111001100111.,00001111100000001111,00001111100000001111,00001110100000001111,00000110000000000011,00000111000000000001,11000100111100000001,.100000111110000000.,.100000111110000000.,..0000001111000000..,..0000000011000000..,...00000001100000...,.....0000010000.....,.......000000.......",
        something: "....................,....................,.......000000.11....,.....00000000011....,....000220000010....,...00022200001000...,...02222200011000...,..0002220001100000..,..00002200010000001.,.10000000010000000.1,1.00000000100000011.,.11000000100000111..,..0111111100111100..,...00001111110000...,...00011000000000...,...1011000000000....,..11.1000000000.....,...111.000000.......,....................,..................../",
    },
    
    //Text calibration
    r: 0,
    b: 0,
    g: 0,
    size: 14
};

//the player: you!
var player;

//Something that KCF mentioned.
var oldenMode = false;

//Alphabet/graphics calibration
{
    //just splitting the pixels up. I could have made my pixel program do it, but I'm lazy.
    for (var i in gfx.alphabet) {
        gfx.alphabet[i] = gfx.alphabet[i].split(",");
    }
    
    //more laziness
    gfx.intermediateEnemy = gfx.intermediateEnemy.split(",");
    gfx.harderEnemy = gfx.harderEnemy.split(",");
    gfx.evenHarderEnemy = gfx.evenHarderEnemy.split(",");
    gfx.hardestEnemy = gfx.hardestEnemy.split(",");
    
    //alphabet pixel function. once again I'm lazy
    var drawPixels2 = function(pixel, x, y) {
        noStroke();
        var xl = 5;
        var xys = gfx.size;
        pushMatrix();
        translate(x, y);
        translate((-5 / 2) * xys, (-5 / 2) * xys);
        for (var x1 = 0; x1 < 5; x1++) {
            for (var y1 = 0; y1 < 5; y1++) {
                if (pixel[y1][x1] !== '.' && pixel[y1][x1] !== '1') {
                    fill(gfx.r, gfx.g, gfx.b);
                    rect(x1 * xys, y1 * xys, xys, xys);
                }
            }
        }
        popMatrix();
    };
    //my pixel text functions. I could get a link, but I'm ____ <-- fill in the blank. (hint: lazy)
    var pixelFill = function(r, g, b) {
        gfx.r = r;
        gfx.g = g;
        gfx.b = b;
    };
    var pixelSize = function(ss) {
        gfx.size = ss;
    };
    
    /**the pixel text functions. 
    var laze = 'lazy';
    var draw = function() {
        fill(255, 0, 0);
        text(laze, random(width), random(height));
    };
    */
    var pixelText = function(txt, x, y) {
        //Too lazy for names
        var lkr = {
            x: x,
            y: y
        };
        
        //Split up the text
        for (var i = 0; i < txt.length; i++) {
            
            //change it to lowercase
            var that = txt.substr(i, 1).toLowerCase();
            
            //if it's not empty
            if (that !== ' ') {
                
                //If it's i, I need special calibration
                if (that === 'i') {
                    lkr.x -= gfx.size * 2;
                }
                //something I was working on with periods, but it didn't work
                /**
                if (isNaN(that)) {
                */
                //It's kind of nice having that key the same letter as the alphabet. *STROKE OF GENIUS MOMENT*
                    drawPixels2(gfx.alphabet[that], lkr.x, lkr.y);
                /**
                } else {
                    drawPixels2(gfx.alphabet[that], lkr.x, lkr.y);
                }
                */
                
                //more special calibration
                if (that === 'i') {
                    lkr.x -= gfx.size * 2;
                }
            }
            //and then keep on going
            lkr.x += gfx.size * 6;
        }
    };

}

//inputs
{
    //input
    var input = {};
    
    //if a key is down, the lightbulb (variable) associated with it turns on. then we can see if the lightbulb is on.
    keyPressed = function() {
        input[key.toString().toUpperCase()] = true;
        input[keyCode] = true;
    };
}

//pixel function created by me
{
    //the real pixel function. 
    //If you don't want to see terrifying code, close your eyes or skip to line 219
    var drawPixels = function(pixel, mapping, x, y, s) {
        
        //I hate that look
        noStroke();
        
        //the x size so that we don't get dumb errors
        var xl = pixel[0].length;
        
        //the y size for similar reasons
        var yl = pixel.length;
        
        //pixel size
        var xys = s;
        
        pushMatrix(); //go stand in the corner
        translate(x + (-xl / 2) * xys, y + (-yl / 2) * xys); //it's just x and y away.... plus some
        //Basically I'm centering the pixels.
        
        //iterate over the xlength and ylength
        for (var x1 = 0; x1 < xl; x1++) {
            for (var y1 = 0; y1 < yl; y1++) {
                
                //what is the current pixel value?
                switch (parseFloat(pixel[y1][x1])) {
                    
                    //Now this whole notation looks bad, but when I tried to neaten the code, it displayed wrong. *sigh*
                    case NaN:
                        break;
                    case 0:
                        {
                            fill(mapping[0]);
                            rect(x1 * xys, y1 * xys, xys, xys);
                        }
                        break;
                    case 1:
                        {
                            fill(mapping[1]);
                            rect(x1 * xys, y1 * xys, xys, xys);
                        }
                        break;
                    case 2:
                        {
                            fill(mapping[2]);
                            rect(x1 * xys, y1 * xys, xys, xys);
                        }
                        break;
                    case 3:
                        {
                            fill(mapping[3]);
                            rect(x1 * xys, y1 * xys, xys, xys);
                        }
                        break;
                    case 4:
                        {
                            fill(mapping[4]);
                            rect(x1 * xys, y1 * xys, xys, xys);
                        }
                        break;
                }
            }
        }
        popMatrix(); //matrix ain't a balloon buddy
    };
}

//A couple of variables
{
    var debugging = false;
    var levels;
    var youWin = false;
    var youLose = false;
    var currentLevel = 0;
    var bulletSpeed = 4;
    var started = false;
}

//Enemies
{
    //the new enemy constructor
    var Enemy = function(type, xAlign, yAlign, health) {
        
        //type of alien
        this.type = type;
        
        //the x and y
        this.x = xAlign;
        this.y = yAlign;
        
        //the bullet x and y
        this.bulletY = this.y;
        this.bulletX = this.x;
        
        //health functions
        this.health = health;
        this.totalHealth = health;
        
        //I hope it isn't dead (I'm evil you know)
        this.dead = false;
        
        //style
        this.style = null;
        
        //which style?
        switch (this.type) {
                case 0:
                    {
                        //this style is the beginning enemy
                        this.style = gfx.beginningEnemy;
                        
                        //this is the color.
                        this.colors = [color(255, 132, 0), color(0, 136, 255), color(255, 0, 0), color(102, 102, 102)];
                    }
                    break;
                case 1:
                    {
                        this.style = gfx.intermediateEnemy;
                        this.colors = [color(255, 132, 0), color(0, 255, 17), color(5, 74, 250), color(46, 46, 46)];
                    }
                    break;
                case 2:
                    {
                        this.style = gfx.harderEnemy;
                        this.colors = [color(117, 117, 117), color(255, 123, 0), color(255, 255, 0), color(97, 150, 248)];
                    }
                    break;
                case 3:
                    {
                        this.style = gfx.evenHarderEnemy;
                        this.colors = [color(117, 117, 117), color(255, 123, 0), color(255, 255, 0), color(97, 150, 248)];
                    }
                    break;
                case 4.1: case 4.2:
                    {
                        this.style = gfx.hardestEnemy;
                        this.colors = [color(92, 91, 89), color(255, 136, 0), color(5, 74, 250), color(255, 217, 0), color(0, 153, 255)];
                    }
                    break;
                //what to do if it's default?
                default:
                    {
                        throw ({
                            message: "Wut. I think you mispeellled something."
                        });
                    }
                    break;
            }
    };
    Enemy.prototype.shoot = function() {
        //Don't shoot if you're dead! This reminds me of Star Wars...
        if (this.health > 0) {
            
            //a nice orange color
            fill(255, 127, 0);
            rect(this.bulletX, this.bulletY, 6, 6);
            this.bulletY = (this.bulletY > 600) ? this.y : this.bulletY + 5;
            
            //If it has returned, change its position to its x position.
            if (this.bulletY === this.y) {
                this.bulletX = this.x;
            }
        }
    };
    Enemy.prototype.draw = function() {
        //setting variables to undefined just to have them as global vars
        var enemyStyle, enemyColors;
        
        //don't display if you're dead. That's creeeeeepy.
        if (this.health > 0) {
            //what type is it?
            switch(this.type){
                case 0: 
                case 2:
                case 3:
                {
                    this.y += 0.5;
                    this.x += random(-1, 1);
                }break;
                default: {
                    if(player.x > this.x){
                        this.x += 1;
                    }else{
                        this.x -= 1;
                    }
                    this.y += 0.5;
                }
            }
            //Some move faster than others ^ ^ ^
            
            //If you lose........ let's hope not.
            if(youLose){
                this.y += 5;
            }
            
            //Draw the enemy style.
            if (this.style) {
                drawPixels(this.style, this.colors, this.x, this.y, 6);
                fill(255, 0, 0);
                rect(this.x - this.style[0].length * 3, this.y + this.style.length * 3 + 6, (this.health / this.totalHealth) * this.style[0].length * 6, 6);
            }
        } else {
            
            //If not you;re dead.
            this.dead = true;
        }
        if(this.y > 600){
            
            // ;)
            youLose = true;
        }
        
    };
}

//Super-efficient level code
{
    var Level = function(k, s) {
        
        //The enemies inside
        this.enemies = k;
        
        //speed
        this.speed = s;
        
        //How many enemies because it was glitching before
        this._length = k.length;
        
        //Great, the level can die too?
        this.isNotDead = true;
    };
    Level.prototype.addEnemy = function(x, y, t) {
        
        //Just adding enemies.
        this.enemies.push(new Enemy(t, x, y));
    };
    Level.prototype.run = function() {
        //that is cool cause it's highlighted. window is cool too, but I don't want this to ever break.
        var that = this.enemies;
        
        //the dead ones o_O
        var deadOnes = 0;
        
        //so for all the enemies
        for (var i in that) {
            
            //if the shoot and draw methods exist,
            if (that[i].shoot && that[i].draw) {
                
                //draw and shoot.
                //I feel like a stormtrooper. shoot shoot shoot and still can't hit anything
                that[i].shoot();
                that[i].draw();
                
                //if it's dead, there are obviously more than one dead alien.
                if (that[i].dead) {
                    deadOnes++;
                }
            }
        }
        
        //win and next level check
        if (deadOnes === this._length && this.isNotDead && currentLevel !== levels.length - 1) {
            currentLevel = levels[currentLevel] ? currentLevel + 1 : currentLevel;
            this.isNotDead = false;
            
            //Reset the frameCount 'cause it JUST MAKES SENSE. Used for recalibration.
            frameCount = 0;
        }
        if (currentLevel === levels.length - 1) {
            youWin = true;
        }
    };
}

//The levels themselves
{
    //My circular algorithm to create a circular battle easily.
    var createCircularEnemies = function(x, y, l, n) {
        if (n <= 150) {
            var retrun = [];
            retrun.push(new Enemy(3, x, -y, 100));
            for (var i = 0; i < 360; i += (360 / n)) {
                retrun.push(new Enemy(2, x + cos(i) * l, -y + sin(i) * l, 10));
            }
            return retrun;
        } else {
            throw ({
                message: "Wut. Do you *want* lag??!?!??!"
            });
        }
    };

    levels = [
        //first level
        new Level([
            new Enemy(0, 200, 0, 30),
            new Enemy(0, 300, -100, 30),
            new Enemy(0, 100, -100, 30),
        ], 0.5),
        //second level
        new Level([
            new Enemy(0, 200, 0, 30),
            new Enemy(0, 300, -100, 30),
            new Enemy(0, 100, -100, 30),
            new Enemy(0, 300, -300, 30),
            new Enemy(0, 100, -300, 30),
        ], 0.5),
        //third level
        new Level([
            new Enemy(1, 200, 200, 200)
        ], 0.5),
        //ok I'm bored
        new Level([
            new Enemy(2, 200, 0, 10),
            new Enemy(2, 100, 0, 10),
            new Enemy(2, 300, 0, 10),
            new Enemy(2, 200, 100, 10),
            new Enemy(2, 100, 100, 10),
            new Enemy(2, 300, 100, 10),
            new Enemy(2, 200, 200, 10),
            new Enemy(2, 100, 200, 10),
            new Enemy(2, 300, 200, 10),
        ], 0.5),
        new Level([
            new Enemy(3, 200, 200, 100),
        ], 0.5),
        new Level([
            new Enemy(1, 200, 0, 30),
            new Enemy(3, 200, -300, 100),
            new Enemy(2, 200, -200, 5),
            new Enemy(2, 100, -200, 5),
            new Enemy(2, 300, -200, 5),
        ], 0.5),
        new Level([
            new Enemy(4.1, 200, -200, 500)
        ], 0.5),
        new Level([
            new Enemy(2, 200, -100, 10),
            new Enemy(2, 100, -100, 10),
            new Enemy(2, 300, -100, 10),

            new Enemy(2, 150, -150, 10),
            new Enemy(2, 250, -150, 10),

            new Enemy(2, 300, -200, 10),
            new Enemy(2, 200, -200, 10),
            new Enemy(2, 100, -200, 10),

            new Enemy(2, 150, -250, 10),
            new Enemy(2, 250, -250, 10),
        ], 0.5),
        new Level([
            new Enemy(4.2, 100, -300, 500),
            new Enemy(4.2, 300, -300, 500),
        ], 0.5),
        new Level([
            new Enemy(3, 200, -200, 100),
            new Enemy(3, 200, -200, 100),
        ], 0.5),
        //is this it?
        new Level(createCircularEnemies(200, 200, 150, 7), 0.5),
        
        
        
        
        //last level
        new Level('end')
    ];
}

/** @Explanation
 * So I was trying to figure out a way to make rapid-fire enemies like I saw in my uncle's game. But I decided to make it single-shoot (in a sneaky bypass-y way). But the player should be able to shoot at will. So I still made a bullet constructor, have fun understanding my code! 
 */
{
    
    //I'm sad that I made this, but I couldn't think of a non-lag way to do this to everything. :(
    var Bullet = function(x) {
        this.x = x;
        this.y = 490;
        this.kill = false;
    };
    Bullet.prototype.go = function() {
        fill(0, 115, 255);
        rect(this.x, this.y, 6, 6);
        this.y -= bulletSpeed;
    };
}

//Player
{
    //new player Constructor
    var Player = function() {
        
        //variabless
        this.x = 200;
        this.bullets = [];
        this.y = 543;
        this.life = 200;
        this.totalLife = this.life;
    };
    Player.prototype.draw = function() {
        
        //if we haven't won, you can still shoot
        if (!youWin) {
            //for all your bullets
            for (var i in this.bullets) {
                
                //that is the current bullet
                var that = this.bullets[i];
                
                //make it go boom
                that.go();
                
                //let's check if it actually hit anything
                for (var j in levels[currentLevel].enemies) {
                    
                    //the second that? can we even do this people
                    var _that = levels[currentLevel].enemies[j];
                    
                    //if _that even exists. it should, but it keeps on giving me stupid errors.
                    if (_that.style && _that) {
                        
                        ///if the distance between the bullet and it is less than a certain radius around it
                        if (dist(that.x, that.y, _that.x, _that.y) < _that.style[0].length * 2.5 && !_that.dead) {
                            //its health decreases
                            _that.health -= 3;
                            
                            //this bullet disappears
                            this.bullets.splice(i, 1);
                        }
                    }
                }
            }
        }
        //that was a lot of brackets!
        
        //draw the player
        drawPixels(gfx.player, [color(79, 79, 79), color(238, 255, 0), color(0, 174, 255)], this.x, this.y, 6);
        
        //let's check if their bullets are hitting us now
        for (var j in levels[currentLevel].enemies) {
            
            //a new that
            var that = levels[currentLevel].enemies[j];
            
            //if we're touching the bullet....
            if (dist(this.x, this.y, that.bulletX, that.bulletY) < 20) {
                //♫ ♪ I'm bulletproof, nothing to lose ♪
                //♪ Fire away, fire away ♫
                // ♪ Ricochet, you take your aim ♪ ♩
                // ♩ Fire away, fire away ♫
                //♩ You shoot me down but I won't fall ♪ ♫
                this.life--;
                //♩ ♪ I am— oh wait
            }
            
            //(Titanium by David Guetta + Sia)
        }
        
        //if we have less than 0 life
        if (this.life < 0) {
            
            //byebye
            youLose = true;
        }
        
        //our health is down in the bottom left corner
        if (started) {
            fill(255, 0, 0);
            rect(10, 543, (this.life / this.totalLife) * 106, 6);
        }
        this.x = constrain(this.x, 46, 400 - 46);
    };
    player = new Player();
}

//Stars
{

    //array
    var stars = [];
    for (var i = 0; i < 150; i++) {
        stars.push({
            x: random(0, 400),
            y: random(0, 600),
            z: round(random(1,5)) // used for size and speed
        });
    }
    //how fast they go by the screen (note: round(π*100) = 314)
    var StarSpeed = 1;
    var runStars = function() {
        background(0, 0, 0);
        stroke(255, 255, 255, 50);
        //for all the stars
        for (var i in stars) {
            //draw them
            strokeWeight( (stars[i].z/2) );
            point(stars[i].x, stars[i].y);
            point(stars[i].x, stars[i].y);
            point(stars[i].x, stars[i].y);
            point(stars[i].x, stars[i].y);
            stars[i].y += stars[i].z * StarSpeed / 4;
            if (stars[i].y > 600) {
                stars[i].y = -10;
            }
        }
    };
}

//More Stars (delag version)
{

    //array
    var starsA = [];
    for (var i = 0; i < 400; i++) {
        starsA.push({
            x: random(0, 400),
            y: random(0, 600)
        });
    }
    //how fast they go by the screen (note: round(π*100) = 314)
    var StarSpeed2 = 4;
    var runStars2 = function() {
        background(0, 0, 0);
        stroke(255, 255, 255, 50);
        //for all the stars
        for (var i in stars) {
            //draw them
            strokeWeight(6);
            point(starsA[i].x, starsA[i].y);
            strokeWeight(2);
            point(starsA[i].x, starsA[i].y);
            point(starsA[i].x, starsA[i].y);
            point(starsA[i].x, starsA[i].y);
            starsA[i].y += StarSpeed2;
            if (starsA[i].y > 600) {
                starsA[i].y = -10;
            }
        }
    };
}

//Bullet functions, extra keymapping 
{
    //addbullte function
    var addBullet = function() {
        player.bullets.push(new Bullet(player.x, player.y));
    };
    
    //the end of that original mapping
    keyReleased = function() {
        //if the key is no longer pressed, the lightbulb turns off
        input[key.toString().toUpperCase()] = false;
        input[keyCode] = false;
        
        //only when a key is released this happens.
        if (key.toString().toLowerCase() === 'w' || keyCode === UP) {
            addBullet();
        }
    };
    var keys = function() {
        // ^ is called the XOR operator. It checks if input.A is true or input.LEFT is true, but NOT BOTH. If both are true, then it returns false, and it doesn't run.
        if(oldenMode === true){
            if(frameCount % 3 === 0){
                if (input.A ^ input[LEFT]) {
                    player.x-=10;
                }
                if (input.D ^ input[RIGHT]) {
                    player.x+=10;
                }
                
                //ah, you found a secret feature!
                if (input.A && input[LEFT]) {
                    player.x -= 40;
                }
                if (input.D && input[RIGHT]) {
                    player.x += 40;
                }
            }
        }else{
            if (input.A ^ input[LEFT]) {
                player.x-=2;
            }
            if (input.D ^ input[RIGHT]) {
                player.x+=2;
            }
            
            //ah, you found a secret feature!
            if (input.A && input[LEFT]) {
                player.x -= 4;
            }
            if (input.D && input[RIGHT]) {
                player.x += 4;
            } 
        }
    
    };
}
var clickCounter = 0;
//The draw function
var main = function() {
    
    //if we don't have errors, run this code:
    try {
        
        //nice little stars flying by the window
        if(delag){
            runStars2();
        }else{
            runStars();
        }
        
        //if the game has started
        if (started) {
            
            //did I mention that I reset the frameCount a lot?
            if (frameCount > 50) {
                
                //if we haven't won and the level exists, then we'll run the level
                if (levels[currentLevel] && !youWin) {
                    levels[currentLevel].run();
                }
                //if we haven't won, then we win!!!!!
                if (!youWin) {
                    keys();
                }
            } else if (frameCount % 30 < 15 && currentLevel !== 0 && !youWin) {
                
                //my functions from earlier. without them I'd have a lot of for loops
                pixelSize(4);
                pixelFill(color(0, 60, 255));
                pixelText("next level", 98, 325);
            }
            //health, yes we all need it.
            pixelSize(2);
            pixelFill(color(255, 0, 0));
            pixelText("health", 17, 534);
        } else {
            
            //main menu
            pixelSize(4.5);
            pixelFill(color(0, 221, 255));
            pixelText("galaga/galaxian", 19, 200);
            pixelSize(2);
            pixelFill(color(255, 0, 0));
            pixelText("adapted By Blaze", 19, 224);
            
            //blinky text
            if (frameCount % 30 < 15) {
                pixelSize(4);
                pixelFill(color(0, 60, 255));
                pixelText("click to begin", 56, 325);
            }
            if(frameCount % 25 < 16){
                pixelSize(2);
                pixelFill(color(183, 0, 255));
                pixelText("delag me", 20, 549);
            }
            //if we press the screen in the first menu, then we start the program and reset the frameCount.
            if (mouseIsPressed) {
                
                if(mouseX < 100 && mouseY > 500){
                    if(clickCounter > 30){
                        delag = !delag;
                        clickCounter = 0;
                    }
                }else{
                    started = true;
                    frameCount = 0;
                    clickCounter = 0;
                }
            }
        }
        //hai
        player.draw();
        
        //error handling
        {
            //credit to Swax97 for this. It gets rid of the Oh Noes guy and his errors that don't exist
            this[["KAInfiniteLoopCount"]] = -1000000;
        }
        
        //if we win,
        if (youWin) {
            
            //display the you win text!!!!!!!!!!!!
            pixelSize(6);
            pixelFill(color(0, 221, 255));
            pixelText("You Win!!", 72, 200);
        }
        
        //if you lose
        if (youLose && frameCount % 30 < 15) {
            pixelSize(6);
            pixelFill(color(255, 0, 0));
            
            //you lose. goodbye
            pixelText("You Lose", 72, 200);
        }
    } catch (e) {
        //catch the exception
        println(e.message);
    } finally {
        //we're done.
        if(debugging){
            println("this block is on line 755 as of the newest update.");
        }
    }
    
    //this system is so that we can't double tap things by mistake :P
    clickCounter++;
};

var generateBackground = function()
{
    for( var i=0; i<600; i+=1 )
    {
        //stroke(0,0,120, i/5.3);
        stroke(200,0,0, 127 - i/(600/255));
        strokeWeight( 1 );
        line(0, i, 400, i);
    }
    
};

draw = function() {
    main();
    if(!delag){
        generateBackground();
    }
};
