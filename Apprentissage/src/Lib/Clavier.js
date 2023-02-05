let KeyRight = false;
let KeyLeft = false;
let KeyDown = false;
let KeyUp = false;

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