var frames = [], thing, adjThing;

noStroke();
fill(255, 89, 0);
rect(0, 100, 400, 200);
fill(255, 255, 255);
textAlign(CENTER, CENTER);
textFont(createFont("Arial"), 20);
text("Flags are for making sure that inappropriate\nprograms don't get on the hot list, not for\n down-voting.\n\n#StopTheSpamFlagging", 200, 200);

for(var i = 0; i < 200; i++){
    frames.push(get(0 + i*2, 100, 2, 200));
}
background(255, 255, 255);
var a = color(74, 183, 255);
var b = color(255, 255, 255);

for(var i = 0; i < 400; i++){
    stroke(lerpColor(a, b, i/400));
    line(0, i, 400, i);
}
var bkgrd = get(0, 0, 400, 400);
noStroke();
var draw = function() {
    
    image(bkgrd, 0, 0);
    for(var i = 0; i < 200; i++){
        thing = 170 + 130*(i/402)*noise(0, ((frameCount/127)*200 + i)/87) - 0.4;
        adjThing = 95 + 130*(i/402)*noise(0, ((frameCount/127)*200 + i)/87) - 0.4;
        image(frames[i], i*2, adjThing, 2, 200);
        fill(0, 0, 0, map(thing, 170, 200, 0, 100));
        rect((i*2), adjThing, 2, 200);
    }
};
