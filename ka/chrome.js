//People used a ....... generator to make this! It's so ridiculously easy to make!
background(0, 0, 0);
translate(200, 200);
scale(0.5);
var rgb = fill;
noStroke();
translate(-200, -200);

pushMatrix();
fill(27, 162, 97);
arc(200, 200, 375, 375, 90, 210);
translate(200, 200);
rotate(120);
rgb(222, 82, 70);
arc(0, 0, 375, 375, 90, 210);
rotate(120);
rgb(255, 206, 67);
arc(0, 0, 375, 375, 90, 210);
popMatrix();
pushMatrix();

fill(27, 162, 97);
triangle(200, 387.5, 200, 200, 261, 249);

rgb(22, 136, 79);
triangle(200, 387.5, 237, 200, 261, 249);

translate(200, 200);
rotate(-120);
rgb(255, 206, 67);
triangle(2.6, 187.5, 0, 0, 61, 49);

rgb(222, 156, 55);
triangle(2.6, 187.5, 37, 0, 61, 49);

rotate(-120);
rgb(222, 82, 70);
triangle(2.6, 187.5, 0, 0, 61, 49);

rgb(183, 66, 52);
triangle(2.6, 187.5, 37, 0, 61, 49);


popMatrix();

fill(255, 255, 255);
ellipse(200, 200, 156, 156);
rgb(77, 140, 245);
ellipse(200, 200, 119, 119);
