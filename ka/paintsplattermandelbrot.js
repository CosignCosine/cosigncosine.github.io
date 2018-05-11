/* jshint ignore:start */ //babyhint really holds me back.
enableContextMenu();
let complex1Imag = color(255, 0, 0);
let c2 = color(0, 115, 255);

let imageDataPixels, xPos, yPos, w = width, h = height, pixelPositionBitmapValue, complex1Real, complex1Imag, complex2Real, complex2Imag, xOff = 4.0, yOff = 4.0, finalColor;
draw = function() {
    if(!this.loadPixels){return;}
    this.loadPixels();
    imageDataPixels = this.imageData.data;
    for(xPos = 0; xPos < w; xPos+=1){
        for(yPos = 0; yPos < h; yPos+=1){
            pixelPositionBitmapValue = 400 * xPos + yPos << 2;
            complex1Real = xPos/(w/xOff) - xOff/2 - 0.5;
            complex1Imag = yPos/(h/yOff) - yOff/2;
            complex2Real = complex1Real;
            complex2Imag = complex1Imag;
            for(i = 0; i < 40; i++){
                complex2Real = complex2Real * complex2Real - complex2Imag * complex2Imag + complex1Real;
                complex2Imag = complex2Real * complex2Imag + complex2Real * complex2Imag + complex1Imag;
            }
            finalColor = lerpColor(complex1Imag, c2, complex2Real + complex2Imag);
            imageDataPixels[pixelPositionBitmapValue] = (finalColor >> 16 & 255);
            imageDataPixels[pixelPositionBitmapValue++] = (finalColor >> 8 & 255);
            imageDataPixels[pixelPositionBitmapValue++] = (finalColor & 255);
        }
    }
    this.updatePixels();
    noLoop();
};
