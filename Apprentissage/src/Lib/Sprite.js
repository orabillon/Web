class Sprite{
    constructor(pImage, pX =0, pY=0){
        this.img = pImage;
        this.x = pX;
        this.y = pY;
        this.scaleX = 1;
        this.scaleY = 1;

        this.currentFrame = 12;
        this.tileSize = {
            x: 0,
            y: 0
        };
        this.bTilesheet = false;
    }

    setTileSheet(pSizeX, pSizeY){
        this.tileSize.x = pSizeX;
        this.tileSize.y = pSizeY;
        this.bTilesheet = true;
    }

    setScale(pScaleX, pScaleY){
        this.scaleX = pScaleX;
        this.scaleY = pScaleY;
    }

    draw(pCtx){
        if (!this.bTilesheet){
            pCtx.drawImage(this.img, this.x, this.y);
        }
        else{
            let nbCol = this.img.width / this.tileSize.x;
            let c = 0;
            let l = 0;

            l = Math.floor(this.currentFrame / nbCol);
            c = this.currentFrame - (l * nbCol);

            let x = c * this.tileSize.x;
            let y = l * this.tileSize.y;

            pCtx.drawImage(this.img, x, y, this.tileSize.x, this.tileSize.y, this.x, this.y, this.tileSize.x * this.scaleX, this.tileSize.y * this.scaleY);
        }

    }
}