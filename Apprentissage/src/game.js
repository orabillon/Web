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

    let imgEnemy = imageLoader.getImage("../images/enemyred.png");
    let spriteEnemy = new Sprite(imgEnemy, 50, 50);
    spriteEnemy.setTileSheet(24,24);
    spriteEnemy.setScale(4,4);
    spriteEnemy.addAnimation("TURN", [0, 1, 2, 3, 4, 5], 0.1);
    spriteEnemy.startAnimation("TURN");
    lstSprite.push(spriteEnemy);

    let imgPlayer = imageLoader.getImage("../images/player.png");
    let spritePlayer = new Sprite(imgPlayer, 250, 50);
    spritePlayer.setTileSheet(30,16);
    spritePlayer.setScale(4,4);
    spritePlayer.addAnimation("TURNRIGHT", [0, 1, 2, 3, 4, 5, 6, 7, 8], 0.1, false);
    spritePlayer.addAnimation("TURNUP", [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 0.1, true);
    spritePlayer.startAnimation("TURNRIGHT");
    lstSprite.push(spritePlayer);


    bGameStart = true;
}

function update(dt){
    if (!bGameStart){
        return;
    }
    lstSprite.forEach(sprite => {
        sprite.update(dt);
    });
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