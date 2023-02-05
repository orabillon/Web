class ImageLoader{
    constructor() {
        this.lstPaths = [];
        this.lstImages = [];
        this.callBack = null;
        this.imageLoadedCount = 0;
    }

    add(pPathImage){
        this.lstPaths.push(pPathImage);
    }

    getTotalImages(){
        return this.lstPaths.length;
    }

    getTotalImagesLoaded(){
        return this.imageLoadedCount;
    }

    getLstImage(){
        return this.lstImages;
    }

    getLoadedRatio()
    {
        return this.getTotalImagesLoaded() / this.getTotalImages();
    }

    getImage(pPath){
        return this.lstImages[pPath];
    }

    imageLoaded(e){
        this.imageLoadedCount++;
        console.log(" Image chargéé :  " + e.target.currentSrc);
        if (this.imageLoadedCount == this.getTotalImages()){
            this.callBack();
        }
    }

    start(pCallBack){
        this.callBack = pCallBack;
        this.lstPaths.forEach(path => {
            let image = new Image();
            image.onload = this.imageLoaded.bind(this);
            image.src = path;
            this.lstImages[path] = image;
        });
    }
}