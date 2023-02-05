class Sprite{
    constructor(pImage, pX =0, pY=0){
        this.img = pImage;
        this.x = pX;
        this.y = pY;
    }

    draw(pCtx){
        pCtx.drawImage(this.img, this.x, this.y);
    }
}