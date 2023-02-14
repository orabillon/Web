class Sprite{
    constructor(pImage, pX =0, pY=0){
        this.img = pImage;
        this.x = pX;
        this.y = pY;
        this.scaleX = 1;
        this.scaleY = 1;

        this.currentFrame = 0;
        this.tileSize = {
            x: 0,
            y: 0
        };
        this.bTilesheet = false;

        // animation
        this.animations = [];
        this.currentFrameInAnimation = 0;
        this.currentAnimation = null;
        this.frameTimer = 0;
    }

    addAnimation(pName, pFrames, pSpeed, pLoop = true) {
        let animation = {
            name: pName,
            frames: pFrames,    // Exemple : [10,11,12,13]
            speed: pSpeed,
            loop: pLoop,
            end: false
        }
        this.animations.push(animation);
    }

    startAnimation(pName) {
        if (this.currentAnimation != null) {
            if (this.currentAnimation.name == pName) {
                return;
            }
        }
        this.animations.forEach(animation => {
            if (animation.name == pName) {
                this.currentAnimation = animation;
                this.currentFrameInAnimation = 0;
                this.currentFrame = this.currentAnimation.frames[this.currentFrameInAnimation];
                this.currentAnimation.end = false;
            }
        });
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

    update(dt) {
        if (this.currentAnimation != null) {
            this.frameTimer += dt;
            if (this.frameTimer >= this.currentAnimation.speed) {
                this.frameTimer = 0;
                this.currentFrameInAnimation++;
                if (this.currentFrameInAnimation > this.currentAnimation.frames.length - 1) {
                    if (this.currentAnimation.loop) {
                        this.currentFrameInAnimation = 0;
                    }
                    else {
                        this.currentFrameInAnimation = this.currentAnimation.frames.length - 1;
                        this.currentAnimation.end = true;
                    }
                }
                this.currentFrame = this.currentAnimation.frames[this.currentFrameInAnimation];
            }
        }
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