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

    let imgEnemy = imageLoader.getImage("../images/enemyred.png");
    let spriteEnemy = new Sprite(imgEnemy, 50, 50);
    spriteEnemy.setTileSheet(24,24);
    spriteEnemy.setScale(4,4),
    spriteEnemy.currentFrame = 3;
    lstSprite.push(spriteEnemy);

    let imgPlayer = imageLoader.getImage("../images/player.png");
    let spritePlayer = new Sprite(imgPlayer, 250, 50);
    spritePlayer.setTileSheet(30,16);
    spritePlayer.setScale(4,4);
    spritePlayer.currentFrame = 12;
    lstSprite.push(spritePlayer);


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