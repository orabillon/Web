let imageLoader = new ImageLoader();
let bGameStart = false;

let lstSprite = [];

function load(){
    // écouteur d'événement
    document.addEventListener("keydown", toucheEnfoncee, false);
    document.addEventListener("keyup", toucheRelachee, false);

    imageLoader.add("../images/enemyred.png");
    imageLoader.add("../images/player.png");

    imageLoader.start(startGame)
}

function startGame()
{
    console.log("startGame")

    lstSprite = [];

    /*for( let img of Object.values(imageLoader.getLstImage())){
        let spriteEnemy = new Sprite(img, rnd(0,1280), rnd(0,720));
        lstSprite.push(spriteEnemy);
    }*/

    let spriteEnemy = new Sprite(imageLoader.getImage("../images/enemyred.png"), 50, 50);
    spriteEnemy.setTileSheet(24,24);
    lstSprite.push(spriteEnemy);


    bGameStart = true;
}

function update(dt){
    if (!bGameStart){
        return;
    }
}

function draw(pCtx){
    if (!bGameStart){
        let ratio = imageLoader.getLoadedRatio();
        pCtx.fillStyle = "rgb(255,255,255)";
        pCtx.fillRect(1, 1, 400, 100);
        pCtx.fillStyle = "rgb(0,255,0)";
        pCtx.fillRect(1, 1, 400 * ratio, 100);
        return;
    }
    lstSprite.forEach(spr => {spr.draw(ctx)});
}