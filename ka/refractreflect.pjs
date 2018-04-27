// Setup
var IOR = {
    AIR: 1,
    WATER: 1.333333,
    DIAMOND: 2.417,
    AMBER: 1.55,
    ACETONE: 1.36,
    ETHANOL: 1.36,
    GLASS: {
        WINDOW: 1.52,
        CROWN: 1.5,
        ACRYLIC: 1.49,
        FLINT: 1.6
    },
    HALITE: 1.5,
    SILICON: 3.48,
    GERMANIUM: 4.05
};

// User variables (Change these to common materials or input your own!)
var indexTop = IOR.AIR; 
var indexBottom = IOR.SILICON; 

// More setup
{
    var angle = 68;
    textFont(createFont('Arial Black'));
    var angle2 = asin((indexTop * sin(angle))/indexBottom);
}

draw = function() {
    background(255, 255, 255);
    // Render
    stroke(0, 0, 0, 50);
    line(200, 100, 200, 300);
    line(100, 200, 300, 200);
    for(var i = 0; i < 200; i++){
        stroke(0, 0, 0, indexTop < indexBottom ? 50 - i/4 : i/4);
        line(0, indexTop > indexBottom ? i : 200 + i, 400, indexTop > indexBottom ? i : 200 + i);
    }
    
    textSize(50);
    
    stroke(255, 0, 0);
    line(200 - (100 * sin (angle)), 200 - (100 * cos(angle)), 200, 200);
    fill(255, 0, 0, 50);
    text(angle + 'º', 205, 193);
    if((indexTop * sin(angle))/indexBottom < 1){
        stroke(85, 0, 255);
        line(200 + (100 * sin (angle2)), 200 + (100 * cos (angle2)), 200, 200);
        fill(85, 0, 255, 50);
        text(~~angle2 + 'º', 102, 246);
    }else{
        textSize(15);
        fill(85, 0, 255);
        text('Total internal reflection or terminal angle! No light is refracted.', 222, 222, 150, Infinity);
    }
    
    if(mouseIsPressed){
        angle = round(atan2(mouseY, mouseX) % 90);
        angle2 = asin((indexTop * sin(angle))/indexBottom);
    }
    
    textSize(30);
    fill(255, 0, 0);
    text(indexTop.toFixed(2), 10, 193);
    fill(85, 0, 255);
    text(indexBottom.toFixed(2), 10, 232); // I ***KNOW*** that toFixed does not give precise values for some values.
};
