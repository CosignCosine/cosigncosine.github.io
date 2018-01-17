noCursor();
//Welcome to the SimCity World! 
//This Khan Version is roughly based off of SimCity 1989 (in color) and the menus for SimCity 2013. Following true to the SimCity style, this game is released *before* it is functional, so that users can grumble and gripe on about the "rough start" of the game. If you want to help out, you can! Just answer my innumerable questions below. And you can help with details.... Thanks!

//If it doesn't work at first, just restart the program a couple of times. It should work then I think.

/** The real SimCity (I play this on multiplayer): www.simcity.com/
 * Cities: Skylines (What I play): http://www.citiesskylines.com/
 */

/** HUGE RENOVATION! THIS GAME IS PLAYABLE AT THE MOMENT. THERE WILL BE PERIODS WHERE YOU MAY NOT BE ABLE TO PLAY IT. JUST SO THAT YOU KNOW.

SADLY, (HOORAY!), I AM RECODING THIS PROGRAM WITH NEW UPDATES AND OOP. SO GUESS WHAT? All 15 of you can play my new version...*/

//This is "SimCity: Khan-sole Edition".
/**VERSION LOG*/
{

/*Version 0.1.K ALPHA*/
/**
 * Start Menu Is Functional. 
 * Consideration of Play Menus begin.
*/

/*Version 0.2.K BETA*/
/**
 * Play Menu Is Functional. 
 * Consideration of separate play menus begin.
*/

/*Version 0.3.K GAMMA*/
/**
 * Separate Play Menus Finished. 
 * Separate Menu Planning Begins.
*/

/*Version 0.4.K DELTA*/
/**
 * Separate Menu Planning Finished.
 * RCI Zoning Plan Begins.
*/

/*Version 0.5.K EPSILON*/
/**
 * RCI Zoning Code Finished.
 * Credits/News/Settings Code Begins.
*/

/*Version 0.6.K ZETA*/
/**
 * Credits/News/Settings Code Finished.
 * SimCity World is released, version 1.0 BETA.
*/

/*Version 1.0.K*/
/**
 * Fixed minor coding errors and random bugs.
 * Finished Delta1140 Map.
 * Released to the public!
*/

/*Version 1.1.K*/ 
/** 
 * New City! Junebug Pont is in Beta Testing mode!
*/

/*Version 1.2.K*/ 
/** 
 * The start menu now has support for different cursors.
 * Created the Pointer(); function to add support for cursors. 
 * All cursors will be used in 1.3.K in the news, settings, credits, and simcityworlds menus.
*/

/*Version 1.3.K*/ 
/** 
 * Do I do what I say I will do? No way! Never! Not a chance!
 * Added pointer support for all menus *except* the news, settings, credits, and simcityworlds menus.
 * All cursors will be used in 1.4.K in the news, settings, credits, and simcityworlds menus.
*/

/*Version 1.4.K*/ 
/** 
 * Do I do what I say I will do? No way! Never! Not a chance!
 * Must type username for game to begin.
 * All cursors will be used in 1.5.K in the news, settings, credits, and simcityworlds menus.
*/

/*Version 1.5.K*/ 
/** 
 * New Splash Screens!
 * (Would you call this a minor update?)
*/

/*Version 1.6.K*/
/** 
 * Optimization of code begins.
 * Game is currently unplayable while changes are made.
 */
 
/* Version 1.6.K Build 1*/
/**
 * Still optimizing code.
 * Game is currently playable, but Junebug Pont is broken for some reason.
 */

/*Next Versions*/
/**
 * If you come up with any new names for cities/regions, leave them in the comments!
 * Creating new menu structures for beginning menus. Hopefully will be done by 2.0.K.
 * Junebug Pont (P—O—N—T) will need DEFG-adding functions. 
 * Hotels are non-existant— that will be in 2.0.K
 * Ploppables should be in 3.0.K... I want to work with a couple of people on this. 
 * Any ideas for ploppables? Leave them in the comments!
*/
}

/**CODE*/
{
var userName = "unknown2";
var version = "1.6.K Build 2 (Playable Renovation Version)";
var dalpha = 0;
var creator = "CT-2/002-24";
var giveCreditIfSpinoff = ["CT-2/002-24", "Brian P. Duckworth", "Peter Collingridge"];
var mouseTicks = 0; //I got this idea from #1 Base 12 Proponent
textAlign(CENTER, CENTER);
// Level contents (credit to Brian P. Duckworth)
//    "A" = Grass    - Green
//    "B" = Sand   - Light Yellow
//    "C" = Ocean  - Blue
//    "D" = Highway   - Gray
//    "E" = Residential - Dark Green
//    "F" = Commercial - Dark Blue
//    "G" = Industrial - Yellow
//    "H" = Hotels - Purple
//    "U" = Unusable Space - Black
var world;
var overButton = false;
var time3 = 0;
var moveInSayings = [
    "We just moved in, so we don't know what to think.",
    "What would we know?",
    "This looks good...",
    "We're okay...",
    "Just moved!",
    "Maybe you can ask someone else!",
    "We don't know."
];
var goodSayings = [
    "We love it here!",
    "This is amazing!",
    "Awesome!",
    "We love living here!",
    "Telling all our friends to move here!",
    "Cool city, dude!",
    "Cool, man."
];
var badSayings = [
    "We're moving out.",
    "It's been nice...",
    "It's terrible here!",
    "Hate it! Hate it! Hate it!",
    "Yuck! Everything is horrible.",
    "Goodbye, you terrible mayor!",
    "I hope this city goes bankrupt!"
];
var worldInfos = [];
for(var i = 0; i++; i<16){
    worldInfos.push(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
}
var junebugRivera = [ "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "AAAAAAAAAAAAAAAAAAAAAAADA",
              "BAAAAAAAAAAAAAAAAAAAAAADA",
              "CBAAAAAAAAAAAAAAAAAAAAADD",
              "CBAABBBAAAAAAAAAAAAAAAAAA",
              "CCBBCCCBAAAAAAAAAAAAAAAAA",
              "CCCCCCCCBBAAAAAAAAAAAAAAA",
              "CCCCBBBCCCBBBAABBBBAAAAAA",
              "CBBBAAABCCCCCBBCCCCBBBAAA",
              "CBAAAAAABCCCCCCCCCCCCBBBB",
              "CCBAAAAAABBBCCCBBBBCCCCCB",
              "CCBAAAAAAAAABBBAAAABBCCCC",
              "CCCBAAAAAAAAAAAAAAAAABBBC",
              "CCBAAAAAAAAAAAAAAAAAAAAAB",
              "CCBAAAAAAAAAAAAAAAAAAAAAA",
              "BBAAAAAAAAAAAAAAAAAAAAAAA"
              ];
var creditAlpha = 0;
var delta1140 = [ "CCCCCCCCCCCCCCCCCCCCCCCCC",
              "CCCCCCCCCBBBBBBBCCCCCCCCC",
              "CCCCCBBBBBBBBBBBBBBBCCCCC",
              "CCCCCBBBBBBBBBBBBBBBCCCCC",
              "CCCCBBBBBBBBBBBBBBBBBBCCC",
              "CCCBBBBBBBBBBBBBBBBBBBCCC",
              "CCBBBBBBBBBBBBBBBBBBBBBCC",
              "CBBCBBBBBBBBBBBBBBBBBBCCC",
              "CBBCBBBBBBBBBBBBBBBBBBBBC",
              "CBCCCBBBBBBBBBBBBBBBBBBCC",
              "CCCCCCCCBBBBBCCBBBBBBBBCC",
              "CBCCCCCBBBBBBCCBBBBBBBBBB",
              "CCCCCCBBBBBBBBCBBBBBBBDDD",
              "CBBCCBBBBBBBBBBBBBBBBBBBB",
              "CBBCCCBBBBBBBBBBBBBBBBBBC",
              "CCCCCBBBBBBBBBBBBBBBBBBCC",
              "CCCCBBBBBBBBBBBBBBBBCCCCC",
              "CCCCBBBBBBBBBBCCCCCCCCCCC",
              "CCCCCCBBBBBBCCCCCCCCCCCCC",
              "CCCCCCCCBBBBCCCCCCCCCCCCC",
              "CCCCCCCCCCCCCCCCCCCCCCCCC",
              "CCCCBBBBBBBBBBBBBBBBBBBCC",
              "CCCBBBBBBBBBBBBBBBBBBBCCC",
              "CCCCBBBBBBBBBBBBBBBBCCCCC",
              "CCCCCCCCCCCCCCCCCCCCCCCCC"
              ];
var junebugPont = [ "ABBCCCCCCCCCBBBAAAAAAABAA",
              "ABBBCCCCCCCBBBBAAAAAAABAA",
              "ABBBCCCCCCCBBBBAAAAAAABAA",
              "AABBCCCCCCCCCBBAAAAAAAAAA",
              "AAABBBCCCCCCBBAAAAAAAAAAA",
              "AAAAABBCCCCCCBAAAAAAAABAA",
              "AAAABCCCCCCCCBBAAAAAABBAA",
              "AAABCCCCCCCCCCCCBBAAAAABA",
              "DDDDDDDDDDDDDDDDDDDDDDDDD",
              "AAAABBCCCCCCCCCCCCCBBAACC",
              "AABBCCCCCCCCCCBBBBBBBCCCB",
              "AAABBCCCCCCCCCBBBBBBCCAAB",
              "AABBBCCCCCCCBBBBBBBCCBAAB",
              "ABBCCCCCCCCCCCBBBCCCBBAAB",
              "ABBBBBACCCCCCCBBBCCCBBBBB",
              "ABBBBBBBCCCCCCCBCCCBBBABB",
              "ABBBBBBCCCCCCCBBBCCBBBBAB",
              "ABBBBBBBBBCCCCBBCCCBBBBAB",
              "AAAAAABBBBCCCCCCCCCBBBBAB",
              "AAAAAABBBBCCCCCCCCCBBBBAB",
              "AAAAABBABCCCCCCCCBCAAAAAA",
              "AAAABBAACCCCCCBBBBCBAAAAA",
              "AAAAABBACCACCCCCCCCBBBAAA",
              "AAAAAAABBCCCCCCCBBAAAAAAA",
              "AAAAAAAAAABCCCCBABAAAAAAA"
              ];
var mode = "R";
var timer2 = 115;
var timer2go = "off";
var mouseSX;
var mouseSY;
var settingsAlpha = 0;
var rectAlpha = 0;
var selectOn = true;
var residentialOn = false;
var commercialOn = false;
var industrialOn = false;
var roadOn = false;
var hotelOn = false;
var oil = 80;
var gasoline = 80;
var metal = 30;
var alloy = 35; 
var computer = 110;
var tv = 130;
var processor = 90;
var LEGO = 200;
var simoleonsPerHour = 0;
var simoleons = 10000;
var order = 0;
var userNamePos = 300;
var userNam = true;
var alphaUserName = 0;
var alphaTitle = 0;
var splashText = "";
var titleX = -80;
var menu = "start";
var cityMenuAlpha = 0;
var regionMenuAlpha = 0;
var regionCenterAlpha = 0;
var beginRegionAlpha = false;
var beginRegionMenu = false;
var sandboxOn = true;
var numberResidential = 0;
var numberCommercial = 0;
var numberIndustrial = 0;
var time = 0;
var qalpha = 0;
var timerBegin = false;
var loadDelta1140 = function(){
    // Each tile will be 10 x 10 pixels.
    var SIZE1 = 400/25;
    
    // Width of level = the # of tiles in the first string
    //                  times the size of each tile.
    var w1 = delta1140[0].length * SIZE1;
    
    // Height of level = the # of strings times the size of each tile.
    var h1 = delta1140.length * SIZE1;
    
    // Location of upper-left corner in order to center the level.
    var firstX1 = (width - w1) / 2;
    var firstY1 = (height - h1) / 2;
    for (var row1 = 0; row1 < delta1140.length; row1++) {
    // For each column in the row...
    for (var col1 = 0; col1 < delta1140[row1].length; col1++) {
        // Determine the coordinates of the tile.
        var x1 = firstX1 + (col1 * SIZE1);
        var y1 = firstY1 + (row1 * SIZE1);
        
        // Determine the color of the tile, based on the level map.
        var clor;
        switch (delta1140[row1][col1]) {
            case 'A': clor = color(0, 189, 28); worldInfos[row1][col1] = "Grass";
                break;
            case 'B': clor = color(255, 255, 199); worldInfos[row1][col1] = "Sand";
                break;
            case 'C': clor = color(0, 187, 255); worldInfos[row1][col1] = "Sea";
                break;
            case 'D': clor = color(107, 107, 107); worldInfos[row1][col1] = "Road";
                break;
            case 'E': clor = color(0, 82, 12); worldInfos[row1][col1] = "Residential\n" + moveInSayings[random(moveInSayings.length)]; 
                break;
            case 'F': clor = color(14, 0, 212); worldInfos[row1][col1] = "Commerciall\n" + moveInSayings[random(moveInSayings.length)]; 
                break;
            case 'G': clor = color(212, 219, 0); worldInfos[row1][col1] = "Industrial\n" + moveInSayings[random(moveInSayings.length)]; 
                break;
            case 'H': clor = color(162, 0, 255); worldInfos[row1][col1] = "Hotel\n" + moveInSayings[random(moveInSayings.length)]; 
                break;
            default:  clor = color(255, 0, 0); // Unknown value in map.
        }
        
        // Draw tile on canvas.
        fill(clor);
        rect(x1, y1, SIZE1, SIZE1);
    }
}
};
var loadJunebugRivera = function(){
    background(255, 255, 255);
    // Each tile will be 10 x 10 pixels.
    var SIZE = 400/25;
    
    // Width of level = the # of tiles in the first string
    //                  times the size of each tile.
    var w = junebugRivera[0].length * SIZE;
    
    // Height of level = the # of strings times the size of each tile.
    var h = junebugRivera.length * SIZE;
    
    // Location of upper-left corner in order to center the level.
    var firstX = (width - w) / 2;
    var firstY = (height - h) / 2;
    for (var row = 0; row < junebugRivera.length; row++) {
    // For each column in the row...
    for (var col = 0; col < junebugRivera[row].length; col++) {
        // Determine the coordinates of the tile.
        var x = firstX + (col * SIZE);
        var y = firstY + (row * SIZE);
        
        // Determine the color of the tile, based on the level map.
        var clr;
        switch (junebugRivera[row][col]) {
            case 'A': clr = color(0, 189, 28);
                break;
            case 'B': clr = color(255, 255, 199);
                break;
            case 'C': clr = color(0, 187, 255);
                break;
            case 'D': clr = color(107, 107, 107);
                break;
            case 'E': clr = color(0, 82, 12);
                break;
            case 'F': clr = color(14, 0, 212);
                break;
            case 'G': clr = color(212, 219, 0);
                break;
            case 'H': clr = color(162, 0, 255);
                break;
            default:  clr = color(255, 0, 0); // Unknown value in map.
        }
        
        // Draw tile on canvas.
        fill(clr);
        rect(x, y, SIZE, SIZE);
    }
}
};
var loadJunebugPont = function(){
    background(255, 255, 255);
    // Each tile will be 10 x 10 pixels.
    var SIZE = 400/25;
    
    // Width of level = the # of tiles in the first string
    //                  times the size of each tile.
    var w = junebugPont[0].length * SIZE;
    
    // Height of level = the # of strings times the size of each tile.
    var h = junebugPont.length * SIZE;
    
    // Location of upper-left corner in order to center the level.
    var firstX = (width - w) / 2;
    var firstY = (height - h) / 2;
    for (var row = 0; row < junebugPont.length; row++) {
    // For each column in the row...
    for (var col = 0; col < junebugPont[row].length; col++) {
        // Determine the coordinates of the tile.
        var x = firstX + (col * SIZE);
        var y = firstY + (row * SIZE);
        
        // Determine the color of the tile, based on the level map.
        var clr;
        switch (junebugPont[row][col]) {
            case 'A': clr = color(0, 189, 28);
                break;
            case 'B': clr = color(255, 255, 199);
                break;
            case 'C': clr = color(0, 187, 255);
                break;
            case 'D': clr = color(107, 107, 107);
                break;
            case 'E': clr = color(0, 82, 12);
                break;
            case 'F': clr = color(14, 0, 212);
                break;
            case 'G': clr = color(212, 219, 0);
                break;
            case 'H': clr = color(162, 0, 255);
                break;
            default:  clr = color(255, 0, 0); // Unknown value in map.
        }
        
        // Draw tile on canvas.
        fill(clr);
        rect(x, y, SIZE, SIZE);
    }
}
};
var drawWorld = function(){
    if(world === "delta1140"){
        loadDelta1140();
    }
    if(world === "junebugrivera"){
        loadJunebugRivera();
    }
};
var findSquare = function(){
    if(order === 5){
        for(var k = 1; k < 26; k++){
            for(var h = 1; h < 26; h++){
                if(mouseX < 16*k && mouseX > 16*(k - 1) && mouseY < 16*h && mouseY > 16*(h-1)){
                    fill(0, 0, 0, 50);
                    stroke(0, 0, 0);
                    rect(16*(k-1), 16*(h-1), 16, 16);
                    mouseSX = k-1;
                    mouseSY = h-1;
                }
            }
        }
    }
};
var checkSize = function(e){
    if(height !== width){
        throw("This canvas size is not supported by this game. Please change the canvas size to something I can understand.");
    } else if(height !== undefined){
        scale(height/400);
    }
};
var timer = function(t){
    if(timerBegin === true){
        time++;
    }
    if(time > t){
        time = 0;
    }
};
var createTimer = function(t){
    var coolTimer = 0;
    while(coolTimer < t + 1){
        coolTimer++;
    }
};
var AddResidentialInJunebugR = function(x, y) {
    if(residentialOn === true && mode === "R"){
        simoleons = simoleons - 14;
        junebugRivera[y] = junebugRivera[y].substr(0, x) + "E" + junebugRivera[y].substr(x + 1);
    }
};
var AddCommercialInJunebugR = function(x, y) {
    if(commercialOn === true){
    junebugRivera[y] = junebugRivera[y].substr(0, x) + "F" + junebugRivera[y].substr(x + 1);
    }
};
var AddIndustrialInJunebugR = function(x, y) {
    if(industrialOn === true){
        simoleons = simoleons - 14;
    junebugRivera[y] = junebugRivera[y].substr(0, x) + "G" + junebugRivera[y].substr(x + 1);
    }
};
var AddHotelsInJunebugR = function(x, y) {
    if(hotelOn === true){
        simoleons = simoleons - 24;
    junebugRivera[y] = junebugRivera[y].substr(0, x) + "H" + junebugRivera[y].substr(x + 1);
    }
};
var AddRoadInJunebugR = function(x, y) {
    if(roadOn === true){
        simoleons = simoleons - 14;
    junebugRivera[y] = junebugRivera[y].substr(0, x) + "D" + junebugRivera[y].substr(x + 1);
    }
};
var AddResidentialInDelta1140 = function(x, y) {
    if(residentialOn === true && mode === "R"){
        simoleons = simoleons - 14;
    delta1140[y] = delta1140[y].substr(0, x) + "E" + delta1140[y].substr(x + 1);
    }
};

var mouseDefault = function(){
    var tfactor = 2;
        this.cursor("none");
        fill(255, 255, 255);
        triangle(0 + mouseX, 0 + mouseY, 0 + mouseX, 10*tfactor + mouseY, 5*tfactor + mouseX, 20*tfactor + mouseY);
        fill(122, 122, 122);
        triangle(0 + mouseX, 0 + mouseY, 0 + mouseX, 10*tfactor + mouseY, -5*tfactor + mouseX, 20*tfactor + mouseY);
        fill(255, 255, 255);
};
var click = function(){
    var tfactor = 2;
        this.cursor("none");
        fill(255, 0, 0);
        triangle(0 + mouseX, 0 + mouseY, 0 + mouseX, 10*tfactor + mouseY, 5*tfactor + mouseX, 20*tfactor + mouseY);
        fill(133, 0, 0);
        triangle(0 + mouseX, 0 + mouseY, 0 + mouseX, 10*tfactor + mouseY, -5*tfactor + mouseX, 20*tfactor + mouseY);
        fill(255, 255, 255);
};
var pointer = function(){
    if(overButton === true){
        cursor();
        click();
    } else {
        mouseDefault();
        
    }
};
var AddCommercialInDelta1140 = function(x, y) {
    if(commercialOn === true){
    delta1140[y] = delta1140[y].substr(0, x) + "F" + delta1140[y].substr(x + 1);
    }
};
var AddIndustrialInDelta1140 = function(x, y) {
    if(industrialOn === true){
    delta1140[y] = delta1140[y].substr(0, x) + "G" + delta1140[y].substr(x + 1);
    }
};
var AddHotelsInDelta1140 = function(x, y) {
    if(hotelOn === true){
    delta1140[y] = delta1140[y].substr(0, x) + "H" + delta1140[y].substr(x + 1);
    }
};
var AddRoadInDelta1140 = function(x, y) {
    if(roadOn === true){
    delta1140[y] = delta1140[y].substr(0, x) + "D" + delta1140[y].substr(x + 1);
    }
};
var AddRoadInJunebugP = function(x, y) {
    if(roadOn === true && mode === "RDS"){
        simoleons = simoleons - 14;
    junebugPont[y] = junebugPont[y].substr(0, x) + "D" + junebugPont[y].substr(x + 1);
    }
};
var AddResidentialInJunebugP = function(x, y) {
    if(residentialOn === true && mode === "R"){
        simoleons = simoleons - 14;
    junebugPont[y] = junebugPont[y].substr(0, x) + "E" + junebugPont[y].substr(x + 1);
    }
};
var AddCommercialInJunebugP = function(x, y) {
    if(commercialOn === true && mode === "C"){
        simoleons = simoleons - 14;
    junebugPont[y] = junebugPont[y].substr(0, x) + "F" + junebugPont[y].substr(x + 1);
    }
};
var AddIndustrialInJunebugP = function(x, y) {
    if(industrialOn === true && mode === "I"){
        simoleons = simoleons - 14;
    junebugPont[y] = junebugPont[y].substr(0, x) + "G" + junebugPont[y].substr(x + 1);
    }
};
var AddHotelsInJunebugP = function(x, y) {
    if(industrialOn === true && mode === "I"){
        simoleons = simoleons - 14;
    junebugPont[y] = junebugPont[y].substr(0, x) + "G" + junebugPont[y].substr(x + 1);
    }
};
var fluctPrices = function(){
    oil += random(-0.001, 0.001);
    gasoline += random(-0.01, 0.01);
    metal += random(-0.001, 0.001);
    alloy += random(-0.001, 0.001);
    computer += random(-1, 1);
    tv += random(-1, 1);
    processor += random(-0.5, 0.5);
    LEGO += random(-0.9, 1);
};

var displayJunebugMap = function(T, offSetX, offSetY){
    // Each tile will be 10 x 10 pixels.
    var SIZE = 400/T;
    
    // Width of level = the # of tiles in the first string
    //                  times the size of each tile.
    var w = junebugRivera[0].length * SIZE;
    
    // Height of level = the # of strings times the size of each tile.
    var h = junebugRivera.length * SIZE;
    
    // Location of upper-left corner in order to center the level.
    var firstX = (width - w) / 2;
    var firstY = (height - h) / 2;
    for (var row = 0; row < junebugRivera.length; row++) {
    // For each column in the row...
    for (var col = 0; col < junebugRivera[row].length; col++) {
        // Determine the coordinates of the tile.
        var x = firstX + (col * SIZE);
        var y = firstY + (row * SIZE);
        
        // Determine the color of the tile, based on the level map.
        var clr;
        switch (junebugRivera[row][col]) {
            case 'A': clr = color(0, 189, 28);
                break;
            case 'B': clr = color(255, 255, 199);
                break;
            case 'C': clr = color(0, 187, 255);
                break;
            case 'D': clr = color(107, 107, 107);
                break;
            default:  clr = color(255, 0, 0); // Unknown value in map.
        }
        
        // Draw tile on canvas.
        fill(clr);
        rect(x + offSetX, y + offSetY, SIZE, SIZE);
    }
}
};
var displayJunebugPMap = function(T, offSetX, offSetY){
    // Each tile will be 10 x 10 pixels.
    var SIZE2 = 400/T;
    
    // Width of level = the # of tiles in the first string
    //                  times the size of each tile.
    var w2 = junebugPont[0].length * SIZE2;
    
    // Height of level = the # of strings times the size of each tile.
    var h2 = junebugPont.length * SIZE2;
    
    // Location of upper-left corner in order to center the level.
    var firstX2 = (width - w2) / 2;
    var firstY2 = (height - h2) / 2;
    for (var row2 = 0; row2 < junebugPont.length; row2++) {
    // For each column in the row...
    for (var col2 = 0; col2 < junebugPont[row2].length; col2++) {
        // Determine the coordinates of the tile.
        var x2 = firstX2 + (col2 * SIZE2);
        var y2 = firstY2 + (row2 * SIZE2);
        
        // Determine the color of the tile, based on the level map.
        var clr;
        switch (junebugPont[row2][col2]) {
            case 'A': clr = color(0, 189, 28);
                break;
            case 'B': clr = color(255, 255, 199);
                break;
            case 'C': clr = color(0, 187, 255);
                break;
            case 'D': clr = color(107, 107, 107);
                break;
            default:  clr = color(255, 0, 0); // Unknown value in map.
        }
        
        // Draw tile on canvas.
        fill(clr);
        rect(x2 + offSetX, y2 + offSetY, SIZE2, SIZE2);
    }
}
};
var displayNewRegionMap = function(){
};
var displayDeltaMap = function(T){
    // Each tile will be 10 x 10 pixels.
    var SIZE1 = 400/T;
    
    // Width of level = the # of tiles in the first string
    //                  times the size of each tile.
    var w1 = delta1140[0].length * SIZE1;
    
    // Height of level = the # of strings times the size of each tile.
    var h1 = delta1140.length * SIZE1;
    
    // Location of upper-left corner in order to center the level.
    var firstX1 = (width - w1) / 2;
    var firstY1 = (height - h1) / 2;
    for (var row1 = 0; row1 < delta1140.length; row1++) {
    // For each column in the row...
    for (var col1 = 0; col1 < delta1140[row1].length; col1++) {
        // Determine the coordinates of the tile.
        var x1 = firstX1 + (col1 * SIZE1);
        var y1 = firstY1 + (row1 * SIZE1);
        
        // Determine the color of the tile, based on the level map.
        var clor;
        switch (delta1140[row1][col1]) {
            case 'A': clor = color(0, 189, 28);
                break;
            case 'B': clor = color(255, 255, 199);
                break;
            case 'C': clor = color(0, 187, 255);
                break;
            case 'D': clor = color(107, 107, 107);
                break;
            default:  clor = color(255, 0, 0); // Unknown value in map.
        }
        
        // Draw tile on canvas.
        fill(clor);
        rect(x1, y1, SIZE1, SIZE1);
    }
}
};
var displayCatalMap = function(){
};
var displaySettings = function(){
    if(menu === "settings"){
        fill(194, 194, 194, settingsAlpha);
        rect(25, 25, width - 51, height - 51, 20);
        settingsAlpha+=10;
        if(settingsAlpha >= 260){
            fill(0, 34, 255, rectAlpha);
            rectAlpha++;
            rect(43, 42, 103, 98, 10);
            fill(0, 0, 0, rectAlpha);
            if(sandboxOn === true){
                text("Sandbox is on", 94, 89);
            } else {
                text("Sandbox is off", 94, 89);
            }
            if(timer2go === "on"){
                if(timer2 > 114){
                    timer2go  = "off";
                }else{
                    timer2++;
                }
            }else{
                timer2 = timer2;
            }
            if(mouseX < 43 + 103 && mouseX > 43 && mouseY < 42 + 98 && mouseY > 42 && timer2 > 114){
                fill(0, 0, 0, 30);
                rect(43, 42, 103, 98, 10);
                if(mouseIsPressed){
                    sandboxOn = !sandboxOn;
                    timer2go = "on";
                }
            }
            fill(255, 0, 0);
            rect(351, 15, 39, 39, 14);
            fill(0, 0, 0, 100);
            text("X", 371, 34);
            if(mouseX > 351 && mouseX < 351 + 39 && mouseY > 15 && mouseY < 15 + 39){
                fill(0, 0, 0, 50);
                rect(351, 15, 39, 39, 14);
                if(mouseIsPressed){
                    menu = "start";
                }
            }
            
        }
    }
};
var lightsaber = function(c, x, y, l, θ, w){
    stroke(255, 255, 255, 100);
    strokeWeight(w+9);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 10);
    strokeWeight(w+5+1);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 30);
    strokeWeight(w+5+2);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 70);
    strokeWeight(w+5+3);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 120);
    strokeWeight(w+5+5);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 110);
    strokeWeight(w+16);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 100);
    strokeWeight(w+18);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(red(c), green(c), blue(c), 90);
    strokeWeight(w+35);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(255, 255, 255);
    strokeWeight(w);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    stroke(128, 128, 128);
    strokeWeight(w+4);
    line(l*sin(θ) + x, l*cos(θ) + y, (l + 30)*sin(θ) + x , (l + 30)*cos(θ) + y);
    stroke(46, 46, 46);
    strokeWeight(2);
    line(l*sin(θ) + x + 4, l*cos(θ) + y, (l + 7)*sin(θ) + x + 4, (l + 7)*cos(θ) + y);
};
var pendulum = function(x, y, l, θ){
    stroke(102, 102, 102, dalpha);
    fill(255, 255, 255, dalpha);
    line(x, y, l*sin(θ) + x, l*cos(θ) + y);
    ellipse(l*sin(θ) + x, l*cos(θ) + y, 20, 20);
    
};
var menus = function(){
    switch(order){
        case 0: {
            menu = "splash";
            background(0, 0, 0);
            lightsaber(color(102, 0, 255), 200, 34, 261, 43*sin(frameCount), 6);
            noStroke();
            fill(207, 207, 207, dalpha);
            rect(0, 0, width, height);
            pendulum(200, 48, 261, 43*sin(frameCount));
            noStroke();
            if(frameCount > 300){
                dalpha++;
            }
            if(frameCount === 500){
                splashText += "CT-2/002-24";
            }
            if(frameCount === 650){
                splashText += "\nProgram";
            }
            if(frameCount === 670){
                splashText += " first.";
            }
            if(frameCount === 720){
                splashText += "\nAsk";
            }
            if(frameCount === 740){
                splashText += " questions";
            }
            if(frameCount === 770){
                splashText += " later.";
            }
            if(frameCount > 500){
                textAlign(CENTER, CENTER);
                fill(102, 102, 102);
                textFont(createFont("monospace"));
                text(splashText, 205, 349);
            }
            if(frameCount > 900){
                qalpha+=4;
                fill(0, 0, 0, qalpha);
                rect(0, 0, width, height);
            }
            if(frameCount > 930){
                order = 1;
                menu = "start";
            }
    }
        break;
        case 1: {
            if(userNam === true && order === 1 && menu === "start"){
                time = 41;
                if(userNamePos > 250){
                    fill(255, 255, 255, alphaUserName);
                    alphaUserName += 7;
                }
                if(userNamePos < 150){
                    fill(255, 255, 255, alphaUserName);
                    alphaUserName -= 10;
                }
                background(0, 118, 173);
                text("Welcome back, " + userName + "!", userNamePos, 200);
                userNamePos--;
                if(userNamePos < 10){
                    userNam = false;
                    order = 2;
                }
            }
        }
        break; 
        case 2: {
            if(menu === "start"){
                overButton = false;
                textFont(createFont("fantasy", 60));
                background(0, 118, 173);
                fill(219, 219, 219);
                ellipse(146, 295, 77, 365);
                triangle(251, 95, 225, 400, 400, 400);
                fill(191, 191, 191);
                rect(9, 91, 56, 373);
                rect(183, 129, 33, 333);
                triangle(213, 160, 252, 492, 219, 86);
                rect(278, 130, 56, 301);
                fill(148, 148, 148);
                rect(108, 140, 48, 295);
                rect(200, 204, 92, 216);
                rect(12, 122, -51, 332);
                rect(318, 176, 125, 377);
                fill(97, 97, 97);
                rect(38, 98, 75, 332);
                rect(109, 200, 33, 248);
                rect(17, 298, 100, 169);
                rect(52, 34, 6, 78);
                rect(86, 14, 6, 100);
                rect(225, 182, 54, 277);
                rect(342, 30, 53, 437);
                triangle(342, 28, 342, 469, 323, 428);
                triangle(395, 30, 422, 172, 395, 466);
                fill(255, 255, 255, alphaTitle);
                text("SimCity", 200, 86);
                alphaTitle+= 8;
                fill(0, 179, 255);
                textFont(createFont("sans-serif", 15));
                text("Version " + version, titleX, 122);
                time++;
                if(titleX <= 200){
                    titleX+= 2;
                }
                noStroke();
                fill(255, 255, 255);
                if(mouseX < 148 + 104 && mouseX > 148 && mouseY < 161 + 44 && mouseY > 161){
                    fill(212, 212, 212);
                    this.externals.canvas.title = "Play Game!";
                    if(mouseIsPressed){
                        menu = "city menu";
                        order = 3;
                    }
                    overButton = true;
                }
                rect(148, 161, 104, 44, 30);
                fill(0, 0, 0);
                text("Play", 200, 183);
                fill(255, 255, 255);
                if(mouseX < 148 + 104 && mouseX > 104 && mouseY < 214 + 44 && mouseY > 214){
                    fill(212, 212, 212);
                    this.externals.canvas.title = "V";
                    if(mouseIsPressed && time > 40){
                        menu = "news screen";
                        time = 0;
                    }
                    overButton = true;
                }
                rect(148, 214, 104, 44, 30);
                fill(0, 0, 0);
                text("News", 200, 235);
                fill(255, 255, 255);
                if(mouseX < 148 + 104 && mouseX > 104 && mouseY < 267 + 44 && mouseY > 267){
                    fill(212, 212, 212);
                    if(mouseIsPressed){
                        menu = "settings";
                    }
                    overButton = true;
                }
                rect(148, 267, 104, 44, 30);
                fill(0, 0, 0);
                text("Settings", 200, 288);
                /*********************************************************************************/
                fill(255, 106, 0);
                if(mouseX < 284 + 104 && mouseX > 284 && mouseY < 338 + 44 && mouseY > 338){
                    fill(212, 106, 0);
                    if(mouseIsPressed){
                        menu = "simcityworld";
                    }
                    overButton = true;
                }
                rect(284, 338, 104, 44, 30);
                fill(0, 0, 0);
                text("SimCity World \n(STILL BETA)", 337, 361);
                /*********************************************************************************/
                fill(255, 255, 255);
                if(mouseX < 148 + 104 && mouseX > 104 && mouseY < 322 + 44 && mouseY > 322){
                    fill(212, 212, 212);
                    if(mouseIsPressed){
                        menu = "credits";
                    }
                    overButton = true;
                }
                rect(148, 322, 104, 44, 30);
                fill(0, 0, 0);
                text("Credits", 200, 344);
            }   
        }
        break;
        case 3: {
            if(menu === "city menu"){
        overButton = false;
        fill(0, 118, 173, 10);
        rect(0, 0, width, height);
        fill(194, 194, 194, cityMenuAlpha);
        rect(25, 25, width - 51, height - 51, 20);
        cityMenuAlpha++;
        fill(0, 0, 0);
        textFont(createFont("fantasy"));
        if(cityMenuAlpha >= 170){
            text("Choose Your Region!", 199, 47);
            fill(189, 246, 255);
            rect(58, 76, 107, 63, 10);
            textSize(4);
            fill(0, 0, 0);
            text("Junebug Hills", 111, 124);
            if(mouseX < 58 + 107 && mouseX > 58 && mouseY < 76 + 63 && mouseY > 76){
                fill(0, 0, 0, 50);
                rect(58, 76, 107, 63, 10);
                if(mouseIsPressed){
                    order = 4;
                    menu = "junebug";
                }
                overButton = true;
            }
            fill(189, 246, 255);
            rect(235, 76, 107, 63, 10);
            textSize(4);
            fill(0, 0, 0);
            text("Delta", 290, 124);
            if(mouseX < 235 + 107 && mouseX > 235 && mouseY < 76 + 63 && mouseY > 76){
                fill(0, 0, 0, 50);
                rect(235, 76, 107, 63, 10);
                if(mouseIsPressed){
                    order = 4;
                    menu = "delta";
                }
                overButton = true;
            }
            fill(189, 246, 255);
            rect(58, 155, 107, 63, 10);
            textSize(4);
            fill(0, 0, 0);
            text("Pippin Point", 111, 199);
            if(mouseX < 58 + 107 && mouseX > 58 && mouseY < 155 + 63 && mouseY > 155){
                fill(0, 0, 0, 50);
                rect(58, 155, 107, 63, 10);
                if(mouseIsPressed){
                    order = 4;
                    menu = "pippinpoint";
                }
                overButton = true;
            }
        }
    }
    
        }
        break;
        case 5: {
            drawWorld();
        //askOpinion(mouseSX, mouseSY);
        mouseDragged = function(){
            
            AddResidentialInJunebugR(mouseSX, mouseSY);
            AddResidentialInDelta1140(mouseSX, mouseSY);
            AddResidentialInJunebugP(mouseSX, mouseSY);
            AddCommercialInJunebugR(mouseSX, mouseSY);
            AddCommercialInDelta1140(mouseSX, mouseSY);
            AddCommercialInJunebugP(mouseSX, mouseSY);
            AddIndustrialInJunebugR(mouseSX, mouseSY);
            AddIndustrialInDelta1140(mouseSX, mouseSY);
            AddIndustrialInJunebugP(mouseSX, mouseSY);
            AddHotelsInJunebugR(mouseSX, mouseSY);
            AddHotelsInDelta1140(mouseSX, mouseSY);
            AddHotelsInJunebugP(mouseSX, mouseSY);
            AddRoadInJunebugR(mouseSX, mouseSY);
            AddRoadInDelta1140(mouseSX, mouseSY);
            AddRoadInJunebugP(mouseSX, mouseSY);
            
        };
        for(var p = 0; p < 25; p++){
            for(var u = 0; u <= 25; u++){
                for(var v = 0; v <= 25; v++){
                    if(junebugRivera[p].substr(u, u -v) === "E"){
                        createTimer(20);
                            noStroke();
                            fill(199, 176, 135);
                            rect(u*16, p*16, 16, 16);
                            fill(112, 112, 112);
                            rect(u*16 + 2, p*16 + 2, 12, 6);
                            fill(0, 153, 8);
                            ellipse(u*16 + 11, p*16 + 13, 8, 4);
                            noFill();
                            numberResidential++;
                    }
                    if(junebugRivera[p].substr(u, u -v) === "F"){
                        noStroke();
                        fill(199, 176, 135);
                        rect(u*16, p*16, 16, 16);
                        fill(66, 66, 66);
                        rect(u*16 + 2, p*16 + 2, 12, 6);
                        rect(u*16 + 8, p*16 + 8, 6, 4);
                        fill(112, 112, 112);
                        rect(u*16 + 0, p*16 + 11, 8, 4);
                        rect(u*16 + 2, p*16 + 9, 6, 2);
                        noFill();
                        numberCommercial++;
                    }
                    if(junebugRivera[p].substr(u, u -v) === "G"){
                        noStroke();
                        fill(163, 127, 20);
                        rect(u*16, p*16, 16, 16);
                        fill(186, 160, 11);
                        rect(u*16 + 1, p*16 + 1, 10, 10);
                        fill(171, 167, 144);
                        rect(u*16 + 2, p*16 + 2, 9, 5);
                        noFill();
                        numberIndustrial++;
                    }
                }
            }
        }
        stroke(0, 0, 255);
        fill(0, 0, 0, 50);
        rect(mouseX + 5, mouseY + 5, 20, 20, 2);
        noStroke();
        fill(0, 0, 0);
        text(mode, mouseX + 16, mouseY + 16);
        text("§"+simoleons, mouseX, mouseY + 35);
        
        simoleonsPerHour = numberResidential*0.1 + numberCommercial*0.07 + numberIndustrial*0.2;
        if(time3 > 1000){
            simoleons += round(simoleonsPerHour);
            playSound(getSound("rpg/coin-jingle"));
            time3 = 0;
        }
        time3+=1;
        findSquare();
        }
        break;
    }
};

/** Old menu functions begin here */
var userScroll = function(){
    if(order === 0){
        
    }
    textFont(createFont("sans-serif", 15));
    
};
var startMenu = function(){
    
    
};
var playMenu = function(){
    if(menu === "city menu" && order === 3){
        overButton = false;
        fill(0, 118, 173, 10);
        rect(0, 0, width, height);
        fill(194, 194, 194, cityMenuAlpha);
        rect(25, 25, width - 51, height - 51, 20);
        cityMenuAlpha++;
        fill(0, 0, 0);
        textFont(createFont("fantasy"));
        if(cityMenuAlpha >= 170){
            text("Choose Your Region!", 199, 47);
            fill(189, 246, 255);
            rect(58, 76, 107, 63, 10);
            textSize(4);
            fill(0, 0, 0);
            text("Junebug Hills", 111, 124);
            if(mouseX < 58 + 107 && mouseX > 58 && mouseY < 76 + 63 && mouseY > 76){
                fill(0, 0, 0, 50);
                rect(58, 76, 107, 63, 10);
                if(mouseIsPressed){
                    order = 4;
                    menu = "junebug";
                }
                overButton = true;
            }
            fill(189, 246, 255);
            rect(235, 76, 107, 63, 10);
            textSize(4);
            fill(0, 0, 0);
            text("Delta", 290, 124);
            if(mouseX < 235 + 107 && mouseX > 235 && mouseY < 76 + 63 && mouseY > 76){
                fill(0, 0, 0, 50);
                rect(235, 76, 107, 63, 10);
                if(mouseIsPressed){
                    order = 4;
                    menu = "delta";
                }
                overButton = true;
            }
            fill(189, 246, 255);
            rect(58, 155, 107, 63, 10);
            textSize(4);
            fill(0, 0, 0);
            text("Pippin Point", 111, 199);
            if(mouseX < 58 + 107 && mouseX > 58 && mouseY < 155 + 63 && mouseY > 155){
                fill(0, 0, 0, 50);
                rect(58, 155, 107, 63, 10);
                if(mouseIsPressed){
                    order = 4;
                    menu = "pippinpoint";
                }
                overButton = true;
            }
        }
    }
};
var regionMenu = function(type){
    if(order === 4){
        overButton = false;
        if(regionMenuAlpha < 255){
            regionMenuAlpha += 10;
        }
        if(regionMenuAlpha === 260){
            beginRegionAlpha = true;
        }
        fill(255, 85, 0, 10);
        rect(0, 0, width, height);
        if(beginRegionAlpha === true){
            background(255, 85, 0);
            fill(219, 219, 219);
        ellipse(146, 295, 77, 365);
        Program.assertEqual(giveCreditIfSpinoff[0], "CT-2/002-24");
        triangle(251, 95, 225, 400, 400, 400);
        fill(191, 191, 191);
        rect(9, 91, 56, 373);
        rect(183, 129, 33, 333);
        triangle(213, 160, 252, 492, 219, 86);
        rect(278, 130, 56, 301);
        fill(148, 148, 148);
        rect(108, 140, 48, 295);
        rect(200, 204, 92, 216);
        rect(12, 122, -51, 332);
        rect(318, 176, 125, 377);
        fill(97, 97, 97);
        rect(38, 98, 75, 332);
        rect(109, 200, 33, 286);
        rect(17, 298, 100, 100);
        rect(52, 34, 6, 100);
        rect(86, 14, 6, 100);
        rect(225, 182, 54, 277);
        rect(342, 30, 53, 437);
        triangle(342, 28, 342, 469, 323, 428);
        triangle(395, 30, 422, 172, 395, 466);
        fill(247, 187, 77, 105);
        rect(0, 0, width, height);
            fill(194, 194, 194, regionCenterAlpha);
            rect(25, 25, width - 51, height - 51, 20);
            regionCenterAlpha++;
            if(regionCenterAlpha === 200){
                beginRegionMenu = true;
            }
        }
        if(beginRegionMenu === true){
            fill(0, 0, 0);
            textFont(createFont("fantasy"));
            text("Choose Your City", 200, 54);
            Program.assertEqual(type, menu);
            if(type === "junebug"){
                displayJunebugMap(68, -81, 0);
                displayJunebugPMap(68, 83, 0);
                fill(0, 0, 0);
                text("Junebug Rivera", 118, 286);
                text("Junebug Pont (BETA)", 283, 286);
                if(mouseX < 35 + 168 && mouseX > 35 && mouseY > 117 && mouseY < 117 + 189){
                    fill(0, 0, 0, 50);
                    rect(35, 117, 168, 189);
                    if(mouseIsPressed){
                        world = "junebugrivera";
                        order = 5;
                    
                        loadJunebugRivera();
                    }
                    overButton = true;
                }
                if(mouseX < 198 + 168 && mouseX > 198 && mouseY > 117 && mouseY < 117 + 189){
                    fill(0, 0, 0, 50);
                    rect(198, 117, 168, 189);
                    if(mouseIsPressed){
                        world = "junebugpont";
                        order = 5;
                    
                        loadJunebugPont();
                    }
                    overButton = true;
                }
            }
            if(type === "delta"){
                displayDeltaMap(68);
                fill(0, 0, 0);
                text("Delta1140", 200, 286);
                if(mouseX < 117 + 168 && mouseX > 117 && mouseY > 117 && mouseY < 117 + 189){
                    fill(0, 0, 0, 50);
                    rect(117, 117, 168, 189);
                    if(mouseIsPressed){
                        world = "delta1140";
                    order = 5;
                    
                    loadDelta1140();
                    }
                    overButton = true;
                }
            }
            if(type === "pippinpoint"){
                text("This is very BETA! If you have an idea about how this region should look, put it in the comments!", 124, 164, 175, 100);
            }
            if(type === "catalmountains"){
                displayCatalMap();
            }
            if(type === "newregion"){
                displayNewRegionMap();
            }
        }
    }
};
/** End old menu functions */
var newsScreen = function(){
        
    if(menu === "news screen"){
        timerBegin = true;
        if(timerBegin === true){
        time++;
        }
        fill(0, 0, 0, 1);
        rect(213, 206, 109, 115, 20);
        fill(0, 0, 0, 1);
        rect(216, 209, 103, 107, 20);
        fill(255, 255, 255);
        rect(148, 214, 104, 44, 30);
        fill(255, 255, 255);
        rect(218, 214, 98, 100, 20);
        fill(0, 0, 0);
        text("News", 200, 235);
        text("No News", 266, 230);
        if(time>100){
            if(mouseX < 148 + 104 && mouseX > 104 && mouseY < 214 + 44 && mouseY > 214){
                fill(212, 212, 212);
                if(mouseIsPressed){
                    menu = "start";
                    time = 0;
                    timerBegin = true;
                }
                rect(148, 214, 104, 44, 30);
                rect(218, 214, 98, 100, 20);
                fill(0, 0, 0);
                text("News", 200, 235);
                text("No News", 266, 230);
                
            }
        }
    }
    
};
var creditsScreen = function(){
    if(menu === "credits"){
        fill(194, 194, 194, creditAlpha);
        rect(25, 25, width - 51, height - 51, 20);
        creditAlpha+=10;
        if(creditAlpha >= 260){
            fill(0, 0, 0);
            text("Thanks to:\n Brian P. Duckworth, for his amazing help with \nthe array maps and his great answers to my\n countless questions.\nMaxis, for the design for this awesome game.\nEvery creator of SimCity 2000 for their designs.\n\n\nNote: I did not use any portion of the code from the \noriginal game for two reasons:\n1) It's illegal because it's copyrighted, and \n2)It's not in JS + PJS anyway. :)", 200, 200);
        }
        fill(255, 0, 0);
            rect(351, 15, 39, 39, 14);
            fill(0, 0, 0, 100);
            text("X", 371, 34);
            if(mouseX > 351 && mouseX < 351 + 39 && mouseY > 15 && mouseY < 15 + 39){
                fill(0, 0, 0, 50);
                rect(351, 15, 39, 39, 14);
                if(mouseIsPressed){
                    menu = "start";
                }
            }
    }
};
//City Mode
//Buildings
//Quit SimCity
//SimCity World

var simCityWorld = function(){
    if(menu === "simcityworld"){
        fill(194, 194, 194, creditAlpha);
        rect(25, 25, width - 51, height - 51, 20);
        creditAlpha+=10;
        if(creditAlpha >= 260){
            fill(0, 0, 0);
            textFont(createFont("fantasy"), 60);
            text("Prices in §", 200, 67);
            textFont(createFont("sans-serif"), 20);
            text("Current Oil Price: §" + round(100*oil)/100, 200, 112);
            text("Current Gasoline Price: §" + round(100*gasoline)/100, 200, 136);
            text("Current Metal Price: §" + round(100*metal)/100, 200, 162);
            text("Current Alloy Price: §" + round(100*alloy)/100, 200, 184);
            text("Current Computer Price: §" + abs(round(100*computer)/100), 200, 205);
            text("Current TV Price: §" + abs(round(100*tv)/100), 200, 227);
            text("Current Processor Price: §" + abs(round(100*processor)/100), 200, 246);
            text("Current LEGO Price: §" + abs(round(100*LEGO)/100), 200, 268);
            text("Other Parts of SimCityWorld \nstill in progress.", 200, 316);
            
        }
        fill(255, 0, 0);
            rect(351, 15, 39, 39, 14);
            fill(0, 0, 0, 100);
            text("X", 371, 34);
            if(mouseX > 351 && mouseX < 351 + 39 && mouseY > 15 && mouseY < 15 + 39){
                fill(0, 0, 0, 50);
                rect(351, 15, 39, 39, 14);
                if(mouseIsPressed){
                    menu = "start";
                }
            }
    }
};
var draw = function() {
    noStroke();
    checkSize();
    userScroll();
    menus();
    startMenu();
    simCityWorld();
    newsScreen();
    playMenu();
    regionMenu(menu);
    displaySettings();
    fluctPrices();
    creditsScreen();
    //residentialOn = true;
    if(keyIsPressed){
        switch(key.toString()){
            case 'r': {
                mode = "R";
                residentialOn = true;
                commercialOn = false;
                industrialOn = false;
                hotelOn = false;
                roadOn = false;
                
            }
            break;
            case 'c': {
                mode = "C";
                residentialOn = false;
                commercialOn = true;
                industrialOn = false;
                hotelOn = false;
                roadOn = false;
                
            }
            break;
            case 'i': {
                mode = "I";
                residentialOn = false;
                commercialOn = false;
                industrialOn = true;
                hotelOn = false;
                roadOn = false;
                
            }
            break;
            case 'h': {
                mode = "H";
                residentialOn = false;
                commercialOn = false;
                industrialOn = false;
                hotelOn = true;
                roadOn = false;
                
            }
            break;
            case 'o': {
                mode = "RDS";
                residentialOn = false;
                commercialOn = false;
                industrialOn = false;
                hotelOn = false;
                roadOn = true;
                
            }
            break;
            case 's': {
                mode = "SEL";
                residentialOn = false;
                commercialOn = false;
                industrialOn = false;
                hotelOn = false;
                roadOn = false;
                selectOn = true;
                
            }
            break;
        }
    }
    pointer();
    if(userName === "unknown"){
        throw "Go to line 98 to input your username!";
    }
};
}
