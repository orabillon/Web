let img;
let monSprite;

let KeyRight = false;
let KeyLeft = false;
let KeyDown = false;
let KeyUp = false;

let speed = 3;

function toucheEnfoncee(t){
    t.preventDefault();

    if (t.code == "ArrowLeft"){
        KeyLeft = true;
    }
    if (t.code == "ArrowRight"){
        KeyRight = true;
    }
    if (t.code == "ArrowUp"){
        KeyUp = true;
    }
    if (t.code == "ArrowDown"){
        KeyDown = true;
    }
}

function toucheRelachee(t){
    t.preventDefault();

    if (t.code == "ArrowLeft"){
        KeyLeft = false;
    }
    if (t.code == "ArrowRight"){
        KeyRight = false;
    }
    if (t.code == "ArrowUp"){
        KeyUp = false;
    }
    if (t.code == "ArrowDown"){
        KeyDown = false;
    }
}

function load(){
    // écouteur d'événement
    document.addEventListener("keydown", toucheEnfoncee, false);
    document.addEventListener("keyup", toucheRelachee, false);

    monSprite = new Sprite("../image/ship.png", 100, 45);
}

function update(dt){
    if (KeyRight){
        monSprite.x += speed;
    }
    if (KeyLeft){
        monSprite.x -= speed;
    }
    if (KeyUp){
        monSprite.y -= speed;
    }
    if (KeyDown){
        monSprite.y += speed;
    }
}

function draw(pCtx){
    monSprite.draw(pCtx);
}