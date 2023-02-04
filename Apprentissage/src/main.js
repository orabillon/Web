let interval;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let dernierUpdate = 0;
let fps = 0;

function showFPS(){
    ctx.fillStyle = "white";
    ctx.font = "normal 16pt Arial";

    ctx.fillText(Math.floor(fps) + "  FPS ", 10, 20);
}

function run(time){
    requestAnimationFrame(run);
   // let maintenant = Date.now();
    let dt = (time - dernierUpdate) / 1000;

    if ( dt < (1 / 71) - 0.001){
        return;
    }

    dernierUpdate = time;
    fps = 1 / dt;

    update(dt);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw(ctx);
    showFPS();
}

function init(){
    console.log("init");
    load();
   // interval = setInterval(run, 1000 / 60);
    requestAnimationFrame(run);
}

init();