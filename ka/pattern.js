var draw = function() {
    if(!this.loadPixels){return;}
    var x,y,n, r,g,b;
    loadPixels();
    var p=this.imageData.data;
    for(x=0; x<400; x+=1){
        for(y=0;y<400; y+=1){
            n = x+ 400*(y) << 2;
            r = (x+y+frameCount)%126+(x-y+frameCount)%126;
            g= 255 - dist(x, y, (x+y+frameCount)%126+(x-y+frameCount)%126, (x+y+frameCount)%126+(x-y+frameCount)%126);
            b=100 + y - dist(x, y, (x+y+frameCount)%126+(x-y+frameCount)%126, (x+y+frameCount)%126+(x-y+frameCount)%126);
            p[n]=r;
            p[n+1]=g;
            p[n+2]=b;
        }
    }
    updatePixels();
};
